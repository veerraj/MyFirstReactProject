import React from 'react';


const Avatarlist = (props) => {

    return (
        <div className="avatarStyle ma4 bg-light-purple pa4 dib tc grow shadow-4">
        <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar"/>    
        <h1 >{props.name}</h1>
        <p>{props.work}</p>
        </div>
    )
} 
export default Avatarlist;