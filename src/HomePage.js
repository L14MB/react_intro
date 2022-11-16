import React,{useState,useEffect} from 'react'
import Profile from "./Profile"

function HomePage() {

const [title, setTitle] = useState("Quotes")
const [quoteOne,setQuoteOne] = useState("")
const [quoteTwo,setQuoteTwo] = useState("")
const [urlOne,setUrlOne] = useState("https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fD8MHxwaG90by1wYWdlfHx8&auto=format&fit=crop&w=1170&q=80")
const [urlTwo,setUrlTwo] = useState("https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8&auto=format&fit=crop&w=870&q=80")
 
useEffect(()=>{
    fetch('https://quote-garden.herokuapp.com/api/v3/quotes')
    .then(res=>res.json())
    .then(response=>{
        setQuoteOne(response.data[0].quoteText)
        setQuoteTwo(response.data[4].quoteText)
    })
    .catch(err=>console.log(err))


},[])

    return (
        <div className="homepage-container">
            <h1>{title}</h1>
            <Profile title={title} setTitle={setTitle} quote={quoteOne} url={urlOne}/>
            <Profile title={title} setTitle={setTitle} quote={quoteTwo} url={urlTwo}/>
        </div>
    )
}

export default HomePage