// import logo from './logo.svg';
import {useState} from 'react';
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
    <h1><Link to="/">{props.title}</Link></h1>
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
  return <Article title={props.topics[id-1].title} body={props.topics[id-1].body}></Article>
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
  let _title=props.topics[id-1].title
  let _body=props.topics[id-1].body
  const [title, setTitle] = useState(_title)
  const [body, setBody] = useState(_body)
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
  let [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'js', body:'js is ...'}
  ]);
  let [nextId, setNextId] = useState(4)

  // 변경하려는 데이터가 원시 데이터 타입이 아닌 객체일때, 복제해서 변경해라
  function createHandler(title, body) {
    let newTopics = [...topics]
    const newTopic = {id:nextId,title:title,body:body}
    newTopics.push(newTopic)  
    setTopics(newTopics)
    navigate('/read/'+nextId)
    setNextId(nextId+1)
  }

  function updateHandler(id,title, body) {
    let newTopics = [...topics]
    for (let i=0; i<newTopics.length; i++) {
      if(newTopics[i].id === id) {
        newTopics[i].title = title
        newTopics[i].body = body
      }
    }
    setTopics(newTopics)
    navigate('/read/'+id)
  }

  
  return <>
      <Header title="React"></Header>
      <Nav topics={topics}></Nav>
      <Routes>
        <Route path='/' element={<Article title='Welcome' body='Hello, WEB'></Article>}></Route>
        <Route path='/read/:id' element={<Read topics={topics}></Read>}></Route>
        <Route path='/create' element={<Create onCreate={createHandler}/>}></Route>
        <Route path='/update/:id' element={<Update topics={topics} onUpdate={updateHandler}/>}></Route>
      </Routes>
      <Routes>
        <Route path='/' element={<Control></Control>}></Route>
        <Route path='/read/:id' element={<Control></Control>}></Route>
      </Routes>
    </>
}

function Control() {
  const params = useParams()
  return <ul>
  <li><Link to='/create'>Create</Link></li>
  <li><Link to={'/update/'+params.id}>Update</Link></li>
  <li><input type='button' value='Delete' /></li>
</ul>
}
export default App;
