import logo from './logo.svg';
import './App.css';
import {useState,useReducer} from 'react';

function App() {
  // const [count,setCount] = useState(0);
  // function increase(){
  //   setCount(count+1)
  // }
  // function reset(){
  //   setCount(0)
  // }
  // function decrease(){
  //   setCount(count-1)
  // }
  function reducerCount(oldCount,action) {
    console.log(oldCount,action)
    let newCount;
    if (action === '올려주세요') {
      newCount = oldCount + 1
    }
    else if(action === '내려주세요') {
      newCount = oldCount -1
    }
    else {
      newCount = 0
    }
    console.log('log=>', 'oldCount:',oldCount,'newCount:',newCount,'action:',action)
    return newCount}



  const initialCount = 0
  // useReducer은 useState처럼 state를 만든다.
  const [count,dispatchCount] = useReducer(reducerCount,initialCount)

  function increase() {
    const action = "올려주세요"
    dispatchCount(action)
  }
  function decrease() {
    const action = '내려주세요'
    dispatchCount(action)
  }

  function reset() {
    const action = 'reset'
    dispatchCount(action)
  }
  
  return (
    <div style={{paddingLeft:10}}>
      <h1>Counter</h1>
      <input type="button" value="+" onClick={increase}></input>
      <input type="button" value="reset" onClick={reset}></input>
      <input type="button" value="-" onClick={decrease}></input>
      <div>{count}</div>
    </div>
  );
}

export default App;
