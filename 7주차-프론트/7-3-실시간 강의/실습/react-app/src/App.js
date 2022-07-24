import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import {useEffect, useState, useMemo} from 'react'
import styled from 'styled-components'
import useAxios from './tools/useAxios'
import axios from 'axios'
import './App.css'
const Header = styled.header`
  margin: 10px 0;
  padding-top: 20px;
  font-family: 'Roboto Serif', sans-serif
  `
const Div = styled.div`
  font-weight: bold;
  font-size: 30px;
  `


const Container = styled.div`
  width: 350px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  `


const initialList = [
  {id:1, content:'오전 8시 기상', isCompleted:true},
  {id:2, content:'엘리스 이론 및 실습 수업', isCompleted:false},
  {id:3, content:'점심식사 및 TV 시청', isCompleted:false},
  {id:4, content:'코딩테스트 스터디 참여', isCompleted:false},
  {id:5, content:'밤 산책 및 음악감상', isCompleted:false}
]


function App() {
  const [loading, setLoading] = useState(true);
  const [todoList, setTodoList] = useState(initialList)
  const isLimitReached = useMemo(()=> {
    return todoList.length>=7;
  },[todoList])

  useEffect(()=> {
    useAxios.setup();
    async function fetch() {
      const response = await axios.get('/')
      return response.data.records
    }

    fetch().then((v) => {
      console.log(v)
      // 새로고침했을 때 순서 고정시키기
      v.sort((a,b) => {
        return Date.parse(a.createdTime) - Date.parse(b.createdTime);
      })
      const fetchedList = v.map((v) => {
        return {
          id: v.id,
          content: v.fields.Name,
          isCompleted: v.fields.isCompleted || false,
        }
      })

      setTodoList(fetchedList)
      setLoading(false)
    })

  }, [])
  // 체크박스가 바뀐 todolist
  async function handleToggle(id) {
    let found = undefined;
    const mapped = todoList.map((v) => {
      if(v.id === id) {
        return found = {...v,isCompleted: !v.isCompleted}
      }
      else {return {...v}}
    })

    setTodoList(mapped)

    await axios.patch(`/${id}`, {fields: {
      Name: found.content,
      isCompleted: found.isCompleted,
    }})
  }

  async function handleSubmit(content) {
    const response = await axios.post('/',{records: [
      {
        fields: {
          Name: content,
          isCompleted: false,
        }
      }
    ]})

    console.log(response);


    let copied = [...todoList,...response.data.records.map((v)=> {
      return {
        id: v.id,
        content: v.fields.Name,
        isCompleted: v.fields.isCompleted || false
      }
    })]

    console.log(copied)

    setTodoList(copied)
  }

  async function handleChanger(id,content) {
    let found = undefined;
    const mapped = todoList.map((v) => {
      if(v.id === id) {
        return found = {...v,content}
      }
      else {return {...v}}
    })

    setTodoList(mapped)

    await axios.patch(`/${id}`, {fields: {
      Name: found.content,
      isCompleted: found.isCompleted,
    }})
  }

  async function removeHandler(id,value) {
    let copied = [...todoList]
    copied.splice(copied.indexOf(value),1)
    setTodoList(copied)

    await axios.delete(`/${id}`, {fields: {value}})

}
  if (loading) return <Div className="loading">
    <span>L</span>
    <span>O</span>
    <span>A</span>
    <span>D</span>
    <span>I</span>
    <span>N</span>
    <span>G</span></Div>
  return(
    <>
      <Header>
        <h1><span class="material-icons-outlined">date_range</span> TO-DO-LIST <span class="material-icons-outlined">
date_range</span></h1>
      </Header>
        <Container>
          <TodoInput submitHandler={handleSubmit} disabled={isLimitReached}/>
          {isLimitReached && <div style={{
            width: 335,
            padding: "7px 3.5px",
            border: "1px solid #FA466A",
            borderRadius: 2,
            backgroundColor: "#feecf0",
            color: "#FA466A",
            marginBottom: 16,
            fontFamily:"'Nanum Pen Script', cursive",
            fontWeight: 'bold',
            fontSize: 16
          }}>※ 할일 목록이 너무 많습니다.</div>}
          <TodoList todoList={todoList} toggleHandler={handleToggle} handleChanger={handleChanger} removeHandler={removeHandler}/>
        </Container>
    </>
  )
}

export default App;