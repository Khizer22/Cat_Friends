import React from 'react';
import './Card.css';

//style={{width:'200px',height:'200px'}}
const Card = ({name,email,id}) =>{
    return (
        <div className='myBG br3 pa3 ma2 grow bw10 shadow-5'> 
            <img src={`https://robohash.org/${name}?set=set4`} alt='cats'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;