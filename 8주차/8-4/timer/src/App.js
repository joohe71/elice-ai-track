import {useEffect, useState} from 'react'

function Timer({state}) {
  const [time, setTime] = useState(state);
  useEffect(() => {
    // 컴포넌트가 마운트 됐을 때
    const timer = setInterval(() => {
      setTime((time) => {
        // 여기서 time은 클로저에 영향을 받지 않는 항상 최신 상태 유지
        if(time <= 0) {
          clearInterval(timer);
        }
        return time - 1;
      });

    }, 1000); // 타이머는 1초에 한번 실행
    
    return () => {
      clearInterval(timer);
    }
  }, []);


  function End() {
    return (
      <p style={{fontSize:20,fontWeight:'bold'}}>END</p>)
  }
  return (
    <div>
      {time > 0 ? <><p style={{display:'flex',justifyContent:'center',fontSize:20,fontWeight:'bold'}}>{time}초</p><p>남았습니다.</p></> : <End/>}
    </div>
  );
}

function App() {
  const [state, setState] = useState('')
  const [start, setStart] = useState(false)
  const changeHandler = (e) => {
    setState(e.target.value)
    console.log(state)
  }

  
  const clickHandler = (e) => {
    setStart(true)
  }

  const clickHandler2 = (e) => {
    setStart(false)
  }
  return (
    <div style={{border:'2px solid black',width:200,height: 200, display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <input placeholder='초 단위로 입력해주세요.' value={state} onChange={changeHandler}></input>
      <div style={{padding: 10,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <button  onClick={clickHandler}>시작</button>
        <button  onClick={clickHandler2}>초기화</button>
      </div>
      {start === true ? <Timer state={state}/> : null}
    </div>
  );
}

export default App;
