import React from 'react'
import {Bookmark} from 'lucide-react'
import Card from "./components/Card"
import User from "./components/user"


const App = (props) => {
  const arr=[
    {
      user:"Shifa",
      age:21
    },
    {
      user:"Suhail",
      age:23
    },
    {
      user:"Mubarak",
      age:25,
    }]
 arr.map(function(shi){

   console.log(shi);
  console.log(shi.user,shi.age)
 })
 return (
   < div>
   <Card/>
    </div>  
  )
}

export default App
