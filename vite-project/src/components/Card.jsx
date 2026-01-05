import React from 'react'

const Card = (props) => {
            console.log(props.user,props.age);
  return (
      <div className='Parent'>
            <img src={props.img} alt="my photo" />
        <h1>{props.user},{props.age}</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, necessitatibus.</p>
        <button>View Profile</button>
      </div>
  )
}

export default Card
            