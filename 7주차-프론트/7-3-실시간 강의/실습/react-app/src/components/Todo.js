import styled from 'styled-components'
import {useState} from 'react'
import './Todo.css'
// npm install react-bootstrap bootstrap@5.1.3
import {Button, ButtonGroup,Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Li = styled.li`
    list-style: none;
    padding: 10px 0;
    border-bottom: dotted 2px grey;
    `

const Label = styled.label`
    font-size: 20px;
    font-family:'Nanum Pen Script', cursive;
    font-weight: bold;
    padding: 10px 10px 10px 0;
    text-decoration: none
    `
// const Button = styled.button`
//     float: right;
//     background-color: #F28482;
//     margin-right: 1px;
//     font-weight: bold;
//     font-size: 16px;
//     border-radius: 3px;
//     cursor: pointer;
//     `


function Todo({ value, toggleHandler,handleChanger, removeHandler }) {  // props -> props.value
    const { id, content, isCompleted } = value;
    const [ isEditing, setIsEditing] = useState(false)
    const [updateContent,setUpdateContent] = useState(content)
    const [show,setShow] = useState(false)

    function clickHandler(event) {
        // toggle
        toggleHandler(id);
        
    }
    
    function handleRemove(e) {
        
        handleClose()
        removeHandler(id,value)
        
        
    }


    // function handleEdit(e) {
    //     console.log(value.content)
    //     setIsEditing(true)
        
    // }

    function handleUpdate(e) {
        if (!isEditing){
            setIsEditing(true)
        }
        else {
            setIsEditing(false)
            handleChanger(id,updateContent)
        }
    }

    function handleClose() {
        setShow(false)
    }

    function handleChange(e) {
        setUpdateContent(e.target.value)
    }




    return (
        <Li>
            <Label style={{textDecoration: isCompleted ? 'line-through #148CFF' : null,}}>
                <input type="checkbox" style={{marginRight: '15px',width: '17px',height: '17px',cursor:'pointer'}}
                    checked={isCompleted}
                    onChange={clickHandler}
                ></input>
                { (isEditing) ? <input style={{border:'solid', borderRadius: 2}} value={updateContent} onChange={handleChange}></input> : <>{content}</> }
            </Label>
            <ButtonGroup size='sm' style={{float:'right', paddingTop:8}}>
                <Button disabled ={isCompleted ? true : false} size='sm' variant={(isEditing) ? 'success' : "secondary"} className='correctButton' onClick={handleUpdate}>
                    {(isEditing) ? <span style={{fontSize:16,paddingTop:3}} class="material-icons-outlined">done</span> : <span style={{fontSize:16,paddingTop:3}} class="material-icons-outlined">edit</span>}</Button>
                <Button size='sm' variant="danger" className='removeButton' onClick={()=>{setShow(true)}} /*delete={true}*/>
                    <span style={{fontSize:16,paddingTop:3}} class="material-icons-outlined">delete_outline</span></Button>
            </ButtonGroup>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title style={{fontFamily: "'Roboto Serif', sans-serif"}}>Danger</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{fontFamily: "'Nanum Pen Script', cursive",
                                    fontSize:20}}>해당 내용을 삭제하시겠습니까?</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} style={{fontFamily: "'Roboto Serif', sans-serif"}}>
                    Close
                </Button>
                <Button variant="danger" onClick={handleRemove} style={{fontFamily: "'Roboto Serif', sans-serif"}}>
                    Delete
                </Button>
                </Modal.Footer>
            </Modal>
        </Li>
    );
}

export default Todo;