import React, {Component}from "react";
import axios from "axios";

class Home extends Component {
    state = {
        posts:[ ]
    }
    componentDidMount(){
axios.get('https://jsonplaceholder.typicode.com/posts')
.then((res)=>{
    console.log(res.data); 
    this.setState({
        posts:res.data.slice(0,10)
    })
    
})
    }
    render(){
        const {posts} = this.state
        const postsList = posts.length ? (
            posts.map(post=>{
                return (
                    <div className= "post card" key = {post.id}>
                        <div className="card-content"></div>
                        <span className="card-title">{post.title}</span>
                        <p>{post.body}</p>
                    </div>
                )
            })
        ): (
            <div className="center">no posts yet</div>  

        )
    return (
        <div className="container">
            <h4 className="center">Home</h4>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas suscipit quaerat quos molestiae perspiciatis magnam molestias dignissimos ut incidunt! Veniam et aut laborum totam quam dolore deleniti, in a hic.</p> */}
            {postsList}
        </div>
    )
}
}

export default Home