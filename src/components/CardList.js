import React from 'react';
import Card from './Card'

const CardList = ({cats}) => { //means robots = props.robots
    const cardsArray = cats.map((user,index)=>{
        return <Card key={user.id} id={user.id} name={user.name} email={user.email}/>
    });

    return(
        <div  className='flex flex-wrap justify-center'>
            {cardsArray}
        </div>
    );

}

export default CardList;