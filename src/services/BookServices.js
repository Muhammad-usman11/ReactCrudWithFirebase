
import {db } from "../FirebaseConfig";
import {
    collection,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc
 } from "firebase/firestore";

const bookCollectionRef = collection(db, "books" )
class BookDataService{
    addBook = (newBook ) =>{
        return addDoc(bookCollectionRef, newBook )
    }

    updateBook = (id, updatedBook ) =>{
        const bookDoc = doc(id, db, "books" )
        return updateDoc(bookDoc, updatedBook )
    }

    deleteBook = (id ) =>{
        const bookDoc = doc(id, "books", db )
        return deleteDoc(bookDoc )
    }

    getAllBooks = () =>{
        return getDocs(bookCollectionRef )
    }

    getBook = (id ) =>{
        const bookDoc = doc(id, "books", db )
        return getDoc(bookDoc )
    }

}

export default new BookDataService();

