// import logo from './logo.svg';
import {useState, useEffect,} from 'react';
import {Button, ButtonGroup, Container,Row,Col,Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, Routes, Route, useParams, useNavigate } from 'react-router-dom'
// import './App.css';

function Article(props){
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>  
}
function Header(props){
  return <header>
    <h1><Link style={{textDecoration:'none'}} to="/">{props.title}</Link></h1>
  </header>
}
// prop은 읽기 전용
// state는 쓰기 가능
// 둘다 바뀌면 렌더링 다시 된다.
function Nav(props){
  let lis = [];
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><Link to={'/read/'+t.id}>{t.title}</Link></li>);
  }


  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function Read(props) {
  const params = useParams()
  const id = Number(params.id)
  const [title, setTitle] = useState('Loading...')
  const [body, setBody] = useState('Loading...')
  useEffect(function() {
      fetch('http://localhost:4000/topics/'+id)
        .then(function(req){
          return req.json()
        })
        .then(function(res) {
          setTitle(res.title)
          setBody(res.body)
        })
    }
  ,[id])
  return <Article title={title} body={body}></Article>
}

function Create(props) {
  function submitHandler(e) {
    e.preventDefault();
    let t = e.target.title.value
    let b = e.target.body.value
    props.onCreate(t,b)
  }
  return <article>
    <h1>Create</h1>
    <form onSubmit={submitHandler}>
      <p><input type='text' name='title' placeholder='Title...'></input></p>
      <p><textarea name='body' placeholder='Body...'></textarea></p>
      <p><input type='submit' value='Create'></input></p>
    </form>
  </article>
}

function Update(props) {
  const params = useParams()
  const id = Number(params.id)
  const [title, setTitle] = useState('Loading...')
  const [body, setBody] = useState('Loading...')
  useEffect(function() {
      fetch('http://localhost:4000/topics/'+id)
        .then(function(req){
          return req.json()
        })
        .then(function(res) {
          setTitle(res.title)
          setBody(res.body)
        })
    }
  ,[id])


  function submitHandler(e) {
    e.preventDefault();
    let t = e.target.title.value
    let b = e.target.body.value
    props.onUpdate(id, t,b)
  }


  return <article>
    <h1>Update</h1>
    <form onSubmit={submitHandler}>
      <p><input type='text' name='title' placeholder='Title...' value={title} onChange={e=> {setTitle(e.target.value)}}></input></p>
      <p><textarea name='body' placeholder='Body...' value={body} onChange={e=> {setBody(e.target.value)}}></textarea></p>
      <p><input type='submit' value='Update'></input></p>
    </form>
  </article>
}

function App() {
  console.log('App render');
  const navigate = useNavigate()
  let [topics, setTopics] = useState([]);

  function refreshTopics() {
    // 서버로부터 데이터 가져오기
    fetch('http://localhost:4000/topics')
      .then(function(req){
        return req.json()})
      .then(function(res){
        console.log('response',res)
        setTopics(res)})}
  // 컴포넌트에서 최초 한번만 실행해야하는 로직이 있다면 useEffect를 쓴다
  
  // 방법 1
  useEffect(refreshTopics,[])

  // 방법 2
//   useEffect(function(){
//     async function refreshTopics(){
//     
//     서버로부터 데이터 가져오기
//     fetch('http://localhost:4000/topics')
//       .then(function(req){
//         return req.json()})
//       .then(function(res){
//         console.log('response',res)
//         setTopics(res)
//     })
//     
//     const req = await fetch('http://localhost:4000/topics')
//     const res = await req.json()
//     setTopics(res)
//   }
//   refreshTopics()
// },[])

  let [nextId, setNextId] = useState(4)

  // 변경하려는 데이터가 원시 데이터 타입이 아닌 객체일때, 복제해서 변경해라
  async function createHandler(title, body) {
    const request = await fetch('http://localhost:4000/topics',{
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({title:title,body:body})
    })
    const response = await request.json()
    navigate('/read/'+response.id)
    refreshTopics()
  }

  async function updateHandler(id,title, body) {
    const request = await fetch('http://localhost:4000/topics/'+id,{
      method:'PUT',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({id:id,title:title,body:body})
    })
    const response = await request.json()
    navigate('/read/'+response.id)
    refreshTopics()
  }
  async function deleteHandler(id) {
    console.log('id',id)
    const request = await fetch('http://localhost:4000/topics/'+id,{
      method:'DELETE',})
    const response = await request.json()
    navigate('/')
    refreshTopics()
  }
  
  return <Container>
      <Header title="React"></Header>
      <Row>
        <Col xs={4}>
          <Nav topics={topics}></Nav>
        </Col>
        <Col>
          <Routes>
            <Route path='/' element={<Article title='Welcome' body='Hello, WEB'></Article>}></Route>
            <Route path='/read/:id' element={<Read topics={topics}></Read>}></Route>
            <Route path='/create' element={<Create onCreate={createHandler}/>}></Route>
            <Route path='/update/:id' element={<Update topics={topics} onUpdate={updateHandler}/>}></Route>
          </Routes>
          <Routes>
            <Route path='/' element={<Control></Control>}></Route>
            <Route path='/read/:id' element={<Control onDelete={deleteHandler}></Control>}></Route>
          </Routes>
        </Col>
      </Row>
    </Container>
}

function Control(props) {
  const params = useParams()
  const navigate = useNavigate()
  function handleClose(){
    setShow(false)
  }
  const [show, setShow] = useState(false)
  return <>
  <ButtonGroup>
    <Button onClick={()=>{navigate('/create')}}>Create</Button>
    <Button onClick={()=>{navigate('/update/'+params.id)}}>Update</Button>
    <Button onClick={()=>{
      setShow(true)}}>Delete</Button>
</ButtonGroup>
<Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Danger</Modal.Title>
    </Modal.Header>
    <Modal.Body>위 내용을 삭제하시겠습니까?</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={()=>{props.onDelete(params.id)
       handleClose()}}>
        Delete
      </Button>
    </Modal.Footer>
  </Modal></>
}
export default App;
