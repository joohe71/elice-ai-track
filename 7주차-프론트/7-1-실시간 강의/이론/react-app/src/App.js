// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

// 원래는 오류가 나야 정상인데, 
// 아래는 JSX(자바스크립트의 확장 기능)라는 문법 언어을 사용하기 때문에
// 가능하다.
// 컴포넌트 : 사용자 정의 태그(함수 이름의 첫 문자는 대문자로!)
// ---------------------------------------
function Header(props) {
  const clickHandler = (event) => {
    event.preventDefault()
    props.onChangeMode()
  }
  return <header>
  <h1><a href="/" onClick={clickHandler}>{props.title}</a></h1>
</header>
}

function Nav(props) {
  const clickHandler= (event) => {
    event.preventDefault()
    props.onChangeMode(Number(event.target.id))
  }
  let lis = []
  for (let i=0;i<props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}><a id={t.id} onClick={clickHandler} href={'/read/'+t.id}>{t.title}</a></li>)}
  return <nav>
  <ol>
    {lis}
  </ol>
</nav>
}

function Article(props) {
  return <article>
  <h2>{props.title}</h2>
  {props.body}
</article>

}
// ---------------------------------------------

function App() {
  let topics = [{
    id:1, title: 'html', body: 'html is...'
  },
  {
    id:2, title: 'css', body: 'css is...'
  },
  {
    id:3, title: 'js', body: 'js is...'
  }
]
const [mode,setMode] = useState('WELCOME')
const [id, setId] = useState(null)
function onChangeModeHeader() {
  setMode('WELCOME')
  setId(null)
  alert('Header')
}

function onChangeModeNav(selectedId) {
  setMode('READ')
  setId(selectedId)
  alert('Nav')
}
  let articleTag = ''
  if (mode === 'WELCOME') {
    articleTag = <Article title='WELCOME TO REACT WORLD' body='Nice to meet you!'/>
  }
  else {
    articleTag = <Article title={topics[id-1].title} body={topics[id-1].body}/>

  }
  return (
    <>
      {/* <Header></Header> */}
      <Header title="REACT" onChangeMode={onChangeModeHeader} />
      <Nav topics={topics} onChangeMode={onChangeModeNav}/>
      {articleTag}
    </>
  );
}

export default App;
