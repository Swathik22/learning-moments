export const getAllPosts=async ()=>{
    const res = await fetch("http://localhost:8088/posts?_embed=likes&_expand=topic&_expand=user")
    return await res.json()
    //return  res.json()
}

// export const getPostByPostId=(postId)=>{
//     return fetch(`http://localhost:8088/posts/${postId}?_expand=user`).then(res=>{res.json()})
// }