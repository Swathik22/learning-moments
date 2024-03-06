import "./Post.css"
export const POrTFilterBar=({allTopics,setSelectedTopic,setSearchTerm})=>{
    return (
        <div className="filter-bar">
            <div>
                <select onChange={(event)=>{setSelectedTopic(parseInt(event.target.value))}}>
                    <option key="0" value="0">Select Topic</option>
                    {
                        allTopics.map(topic=>{
                            return <option key={topic.id} value={topic.id}>{topic.topic}</option>
                        })
                    }               
            </select>    
            </div>
            <div className="post-search">
                <input type="text" placeholder="Search Post" onChange={(event)=>{
                    setSearchTerm(event.target.value)
                }}></input>
            </div>
                    
        </div>    
    )
}