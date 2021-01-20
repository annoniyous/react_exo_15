import React from 'react'


function Article(props) {
    return ( props.planet.map((title) =>
        <div>
           <h1>{title.titre}</h1> 
        </div>
    )
    )
    
}

export default Article
