import { useEffect } from "react"
import { useState } from "react"
import { getAllPosts } from "../../services/PostServices"
import "./Post.css"
import { Post } from "./Post"
import { getAllTopics } from "../../services/topicServices"
import { POrTFilterBar } from "./POrTFilterBar"
import { Link } from "react-router-dom"

export const AllPosts=()=>{
    const[allPosts,setAllPosts]=useState([])
    const[allTopics,setAllTopics]=useState([])
    const[selectedTopic,setSelectedTopic]=useState(0)
    const[filterPost,setFilterPost]=useState([])
    const[searchTerm,setSearchTerm]=useState("")

    useEffect(()=>{
        getAllPosts().then(allPostsArr=>
            setAllPosts(allPostsArr)            
        )
        getAllTopics().then(allTopicsArr=>
            setAllTopics(allTopicsArr))
        //console.log(allPosts.length)
    },[])

    useEffect(()=>{
        //console.log(allPosts.length)
        if(selectedTopic===0){
            setFilterPost(allPosts)    
            console.log(filterPost.length)        
        }
        else{
            const filterPostsList=allPosts.filter(post=>post.topicId==selectedTopic)
            console.log(filterPostsList)
            setFilterPost(filterPostsList)
        }
    },[selectedTopic,allPosts])

    useEffect(()=>{
        const foundTopics=allPosts.filter((post)=>
                post.title.toLowerCase().includes(searchTerm.toLowerCase())            
        )
        setFilterPost(foundTopics)
    },[searchTerm,allPosts])
    
    return <>  
    <div className="posts-container">  
        <div>
            <POrTFilterBar allTopics={allTopics} setSelectedTopic={setSelectedTopic} setSearchTerm={setSearchTerm}/>
        </div>
        <div className="posts">
            {filterPost.map(post=>{
                return(
                    <Link to={`/posts/${post.id}`}> 
                      <Post post={post}></Post>
                    </Link>                   
                )
            })}
        </div>
    </div>
        
    </>
}