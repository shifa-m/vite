import React from 'react'
import Card from "./components/Card"
import User from "./components/user"


const App = () => {
  const arr=[
    {
    Username:" Syed Ayub",
    age:50,
    Qualification:"2nd PUC",
    Height:5.8,

  },
  {
    Username:"Shabeena Khanum",
    age:45,
    Qualification:"SSLC",
    Height:5.5,

  },
    {
    Username:" Syed Mubarak",
    age:25,
    Qualification:"Diploma in CS",
    Height:6.1,

  },
  {
    Username:"Syed Suhail",
    age:23,
    Qualification:"Diploma in CS",
    Height:6.3,

  },
  {
    Username:"Shifa Mehreen",
    age:21,
    Qualification:"Bachelors in CSE",
    Height:5.7,

  }]
  
 return (
   < div className='parent'>
    {arr.map(function(elem){
      return <User name={elem}/>

    })}
    
    <Card/>

    
        

    </div>  
  )
}

export default App
