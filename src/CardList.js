import React from 'react';
import Card from './Card';
// import { robots } from './robots'


const CardList = ({robots}) => {
  const cardcomponent = robots.map((user, i )=> {
    return <Card id= {robots[i].id} name ={robots[i].name} email= {robots[i].email} key = {robots[i].id}/>
  })

  return (
    <div>
      {cardcomponent}
    </div>
  )
}

export default CardList
