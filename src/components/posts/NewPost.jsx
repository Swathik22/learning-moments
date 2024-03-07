import { useEffect, useState } from "react"
import { getAllTopics } from "../../services/topicServices"
import { saveNewPost } from "../../services/PostServices"
import { useNavigate } from "react-router-dom"

export const NewPost=({currentUser})=>{
    const[allTopics,setAllTopics]=useState([])
    const[newPost,setNewPost]=useState({
                                        title:"",
                                        body:"",
                                        createdDate:new Date,
                                        userId:currentUser.id,
                                        topicId:0})

    const navigate=useNavigate()
    
    useEffect(()=>{
        getAllTopics().then((topicsArray)=>{
            setAllTopics(topicsArray)
        })
    },[])

    const handlePostEvent=(event)=>{
        const postCopy={...newPost}  
        if(event.target.name==="topicId")          
        {
            postCopy[event.target.name]=parseInt(event.target.value)
        }else{
            postCopy[event.target.name]=event.target.value
        }            
            setNewPost(postCopy)        
    }

    const handleSaveEvent=(event)=>{
        event.preventDefault()        
        saveNewPost(newPost).then(()=>{
            navigate(`/myPost`)//
        })
    }
    return (<>
    <form key={currentUser.id}>
        <fieldset>
            <label>Topic</label>
            <select name="topicId" onChange={handlePostEvent}>
            <option value="0">Select Topic</option>
                {
                    allTopics.map((topic)=>{
                        return (
                            <option value={topic.id}>{topic.topic}</option>
                        )
                    })
                }
            </select>
        </fieldset>
        <fieldset>
            <label>Title</label>
            <input type="text" required name="title" onChange={handlePostEvent}></input>
        </fieldset>
        <fieldset>
            <label>Body</label>
            {/* <input type="textarea" required name="body" onChange={handlePostEvent}></input> */}
            <textarea required name="body" onChange={handlePostEvent}/>
        </fieldset>
        <fieldset>
            <button id="btnPost" onClick={handleSaveEvent}>Save Post</button>
        </fieldset>
    </form>
    </>)
}