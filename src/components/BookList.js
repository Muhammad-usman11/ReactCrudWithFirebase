
import React from 'react'
import {useState, useEffect } from "react"
import BookDataService from "../services/BookServices"
import {Table, Button } from "react-bootstrap"

export default function BookList({getBookId } ) {

    const [books, setBooks ] = useState([] )

    useEffect(() =>{
        getBooks()
    }, [] )
    
    const getBooks = async ( ) => {
        const data = await BookDataService.getAllBooks()
        setBooks(data.docs.map((doc) => ({...doc.data(), id: doc.id } ) ) )
    }

    const deleteHandle = async (id) => {
        await BookDataService.deleteBook(id)
        getBooks()
    }


  return (
   <>

   <div className="refresh">
    <Button variant="dark " onClick={getBooks } > 
        Refresh List    
    </Button>
   </div>
   <Table>
    <thead>
        <tr>
            <th>Sr no </th>
            <th>Book Title </th>
            <th>Book Author </th>
            <th>Status </th>
            <th>Action </th>
        </tr>
    </thead>
    <tbody>
        {books.map((doc, index) =>{
            return(
                <>
                <tr key={doc.id } >
                    <td>{index + 1 } </td>
                    <td>{doc.title } </td>
                    <td>{doc.author } </td>
                    <td>{doc.status } </td>
                    <td>
                        <Button variant="secondary"
                         onClick={(e) => getBookId(doc.id ) } 
                        >
                            Edit  
                        </Button>
                        <Button variant="danger"
                         onClick={(e) => deleteHandle(doc.id) } 
                        >
                            Delete   
                        </Button>
                    </td>
                </tr>
                </>
            )
        } ) }
    </tbody>
   </Table>


   
   
   </>
  )
}


