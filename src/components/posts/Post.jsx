import "./Post.css"
export const Post=({post})=>{
    return (
    <div className="post" key={post.id}>
        <div className="post-row">                 
            <div>{post.title}</div>
        </div>
        <div className="post-row">                 
            <div>{post.topic.topic}</div>
        </div>
        <div className="post-row">   
            <div className="post-info"><i className="fa-regular fa-thumbs-up"></i></div>                 
            <div>{post.likes.length}</div>
        </div>              
    </div>)
}