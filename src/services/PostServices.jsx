export const getAllPosts=async ()=>{
    const res = await fetch("http://localhost:8088/posts?_embed=likes&_expand=topic&_expand=user")
    return await res.json()
    //return  res.json()
}

// export const getPostByPostId=(postId)=>{
//     return fetch(`http://localhost:8088/posts/${postId}?_expand=user`).then(res=>{res.json()})
// }

export const saveNewPost=(newPost)=>{
    const postOptions={
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newPost)
    }
    return fetch("http://localhost:8088/posts",postOptions)
}