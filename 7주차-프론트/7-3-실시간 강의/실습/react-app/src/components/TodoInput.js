import {useState} from 'react'
import styled from 'styled-components'


const FormInput = styled.input`
    width: 335px;
    outline: none;
    font-size: 16px;
    font-family:'Nanum Pen Script', cursive;
    padding: 7px 0 7px 10px;
    border: none;
    border-radius: 3px;
    backgroundColor:'transparent';

    `

function TodoInput({submitHandler, disabled}) {
    const [userInput, setUserInput] = useState('')

    function handleChange(e) {
        e.preventDefault()
        setUserInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        // App에다가 새로운 TODO 생성
        submitHandler(userInput)
        setUserInput('')

    }
    return (
        <form onSubmit={handleSubmit}>
            {/* 입력 개수 제한 */}
            <FormInput disabled={disabled} type="text" value={userInput} onChange={handleChange} placeholder="내용을 입력해주세요"></FormInput>
        </form>
    )
}

export default TodoInput;