import React from "react";

const Contact = (props) => {
    //console.log(props);
    setTimeout(() => { 
        props.history.push('/about')
    }, 2000);
    
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas suscipit quaerat quos molestiae perspiciatis magnam molestias dignissimos ut incidunt! Veniam et aut laborum totam quam dolore deleniti, in a hic.</p>
        </div>
    )

}

export default Contact