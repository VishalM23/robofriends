import React from 'react';
import Card from './Card';

const CardList = ({Robots}) =>{
    const cardComponent= Robots.map((user,i) => {
        return <Card key={i} id={Robots[i].id} name={Robots[i].username} email={Robots[i].Email}/> 
    })
     return (
        <div>
            {cardComponent}
        </div>
    );  
}

export default CardList;