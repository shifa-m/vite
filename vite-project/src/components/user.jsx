import React from 'react'

const User = () => {
  const arr=[
    {
    username:"shifa",
    age:21,
    qualification:"Bachelor's in Computer Science and Engg"
  },
  {
    username:"Suhail",
    age:23,
    qualification:"Bachelors in Commerce",
  },
  {
    username:"Mubarak",
    age:25,
    qualification:"Bachelor's in Computer Science and Engg",
  }
]
  arr.map(function(elem){
    console.log(elem.username,elem.age)
  })
  return (
    <div>
    </div>
  )
}

export default User
