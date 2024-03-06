import { Outlet, Route, Routes } from "react-router-dom"
import { AllPosts } from "../components/posts/AllPosts"
import { NavBar } from "../components/navBar/NavBar"
import { useEffect, useState } from "react"
import { PostDetails } from "../components/posts/PostDetails"

export const ApplicationView=()=>{
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
      const localLearningUser = localStorage.getItem("learning_user")
      const learningUserObject = JSON.parse(localLearningUser)
      setCurrentUser(learningUserObject)
    }, [])

    return (
        <>
        <Routes>
            <Route path="/" element={
                <>
                    <NavBar/>
                    <Outlet/>
                </>
                }> 
                <Route path="/">
                    <Route index element={<AllPosts/>}/>
                </Route>   
                <Route path="posts">
                    <Route index element={<AllPosts/>}/>
                    <Route path=":postId" element={<PostDetails currentUser={currentUser}/>}>   
                </Route>       
                </Route>
            </Route>            
        </Routes>
        </>
    )
}