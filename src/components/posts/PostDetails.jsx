import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getAllPosts } from "../../services/PostServices"

export const PostDetails=({currentUser})=>{
    const[post,setPost]=useState({})
    const{postId}=useParams()

    const postDetailsObj=async(pstId)=>{
        const allPosts=await getAllPosts()
        const postObj=allPosts.find(post=>post.id==pstId)
        console.log(postObj)
        return postObj
    }

    useEffect(()=>{    
        const fetchPostDetails = async () => {
            const postDetails = await postDetailsObj(postId)
            setPost(postDetails)
          }    
          fetchPostDetails()
          
    },[postId])

    return (
        <section className="postDetail">
        <header className="postDetail-header">{post?.title}</header>
        <div>
            <span className="postDetail-info">Author: </span>
            {post.user?.fullName}
        </div>
        <div>
            <span className="postDetail-info">Topic: </span>
            {post.topic?.topic}
        </div>
        <div>
            <span className="postDetail-info">Date: </span>
            {post.createdDate}
        </div>
        <div>
            <span className="postDetail-info">Body: </span>
            {post.body}
        </div>
        <div>
            <span className="postDetail-info">Likes:</span>   
            {post.likes?.length}         
        </div>
        <div>
            {/* <span>{currentUser.userId===post.user}</span> */}
           {(currentUser.id===post.userId)?<button>Edit</button>:<button>Like</button>}       
        </div>
    
    </section>
    )
}