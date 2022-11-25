

import React from 'react'
import BookDataService from "../services/BookServices"
import {useState, useEffect } from "react"
import {Button, Form, ButtonGroup, Alert  } from "react-bootstrap"


export default function AddBook({id, setBookId } ) {

    const [title, setTitle ] = useState("")
    const [author, setAuthor ] = useState("")
    const [status, setStatus ] = useState("Avaliable")
    const [flag, setFlag ] = useState(true)
    const [message, setMessage ] = useState({error: false, msg: " " })

    const submitHandle = async (e) =>{
        e.preventDefault()
        setMessage("")
        if(title === " " || author === " " ){
            setMessage({error: true, msg: "Please fill all fields " })
            return
        }
        const newBook = {
            title,
            author,
            status
        }

        try {
            if (id !== undefined && id !== " " ){
                await BookDataService.updateBook(id, newBook )
                setBookId("")
                setMessage({error: false, msg: "Books are successfully updated " })
            }
            else{
                await BookDataService.addBook(newBook )
                setMessage({error: false, msg: "Books are successfully added " })
            }
        } catch (error) {
            setMessage({error: true, msg: error.message })
            
        }
        setTitle("")
        setAuthor("")
    }

    const editHandle = async () =>{
        setMessage("")
        try {
            const snapDoc = await BookDataService.getBook(id )
            setTitle(snapDoc.data().title )
            setAuthor(snapDoc.data().author )
            setStatus(snapDoc.data().status )
        } catch (error) {
            setMessage({error: true, msg: error.message } )
        }
        
    }

    useEffect(() =>{
        if (id !== undefined && id !== "" ){
            editHandle()
        }
    }, [id] )

  return (
   <>
   <div className=" box p-4" >
    {message?.msg && (
        <Alert dismissible 
         onClose={() => setMessage("") } 
         variant={message?.error ? "danger" : "success" } 
        > 
            {message?.msg } 
        </Alert>
     ) }  

   <Form onSubmit={submitHandle } >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Book Title </Form.Label>
        <Form.Control type="text" placeholder="Enter Book Title"
         value={title }
         onChange={(e) => setTitle(e.target.value )  } />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Author </Form.Label>
        <Form.Control type="text" placeholder="Enter Author" />
      </Form.Group>
      <ButtonGroup aria-label="Basic example">
        <Button disabled={flag }
         onClick={(e) => {
            setStatus("Avaliable")
            setFlag(true) 
         }  } 
        variant="success">Available </Button>

        <Button disabled={!flag } 
         onClick={(e) => {
            setStatus("Not Avaliable")
            setFlag(false) 
         }  } 
        variant="danger">Not Available </Button>
      </ButtonGroup>
      
      <Button variant="primary" type="submit">
        Add/Update 
      </Button>
    </Form>

    </div>
   
   </>
  )
}




