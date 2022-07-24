// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

const articleList = [
  // html
  { title: 'HTML', body: 'HTML is Hyper-Text Markup Language'},

  // css
  { title: 'CSS', body: 'CSS defines the style of page' },

  // js
  { title: 'JS', body: 'Javascript defines the action of page' }
];

function HeaderTag() {
  return (
    <header>
      <h1>React Sample Page</h1>
    </header>
  )
}

function Nav(props) {
  const clickHandler = (postId) => (e) => {
      e.preventDefault()
      props.setPostId(postId)}
  return (
  <nav>
    <ol>
      {
        articleList.map((value, index) => <li>
          <a href="#" onClick={clickHandler(index)}>{value.title}</a>
        </li>)
      }
    </ol>
  </nav>


    // <nav>
    //   <ol>
    //     <li><a onClick={clickHandler(0)} href='#'>html</a></li>
    //     <li><a onClick={clickHandler(1)} href='#'>css</a></li>
    //     <li><a onClick={clickHandler(2)} href='#'>js</a></li>
    //   </ol>
    // </nav>
  )
}

function Article(props) {
  return (
  <article>
    <h2>{articleList[props.postId].title}</h2>
    {articleList[props.postId].body}
  </article>)
}


function App() {
  const [id, setId] = useState(0)
  return (
    <>
    <HeaderTag />
    <Nav setPostId={setId} postId={id}/>
    <Article postId={id}/>
    </>
    );
}

export default App;
