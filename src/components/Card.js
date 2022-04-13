import React from 'react';
import './Card.css';

//style={{width:'200px',height:'200px'}}
const Card = ({name,email,id}) =>{
    return (
        <div className='myBG br3 pa3 ma2 grow bw10 shadow-5'> 
            <img src={`https://robohash.org/${name}?set=set3`} alt='robot heads'/>
            <div>
                <h2>{name}</h2>
                <p>{`ID: ${id}`}</p>
            </div>
        </div>
    );
}

export default Card;