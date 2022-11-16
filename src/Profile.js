import React,{useState} from 'react'

function Profile({title,setTitle,quote,url}) {
const [myTitle, setMyTitle] = useState(title)





const changeTitle = () => {
    setTitle("My Quotes")
}



    return (
        <div className="profile-container">
            <h1>{myTitle}</h1>
            <img src={url}/>
            <p>{quote}</p>
            <button onClick={changeTitle}>Change Parent's Title</button>
            <button onClick={()=>setMyTitle("My Quotes")}>Change My Title</button>
        </div>
    )
}

export default Profile