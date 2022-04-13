import React, { useState, useEffect } from 'react'
import CardBody from '../components/CardBody'

export default function PostCard(props){
   const [posts, setPosts] = useState([])


    useEffect(()=>{
        console.log("Use Effect")
        fetch(`https://kekambas-bs.herokuapp.com/posts`)
            .then(res => res.json())
            .then(data => {
                let posts = data
                setPosts(posts)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h1 className='border bg-light text-center border-4 mt-5'>Student Posts</h1>
            <div className="Cards"> 
                {/* <div className='card-title'></div> */}
                {/* <div className='card-body'>
                    <div className='card-text'></div>
                </div> */}
                <div className='Card'> 
                    {posts.map((post, idx) => <CardBody post={post} key={idx}/>)}
                </div>



            </div>


        </div>
    )



}