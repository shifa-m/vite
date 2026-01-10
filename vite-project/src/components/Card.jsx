import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = () => {
  return (
   
    <div className="parent">
      <div className='card'>
        <div className="top">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFkkQhwA-14yQus_rij6VonTP5UT7IrorBkg&s" alt="my photo" />
          <button >Save <Bookmark size={12} /></button>
          </div>
          <div className="center">
            <h3>Amazon<span>5 Days ago</span></h3>
            <h2>Senior UI/UX Designer</h2>
            <div className='tag'>
              <h4>Part Time</h4>
              <h4>Senior Level</h4>
            </div>
          </div>
          <div className="bottom">
              <h3>$120/hr</h3>
                <p>Bangalore,india</p>
                 <button>Apply now</button>
                  
                </div>
          </div>
           </div>
           
            

           
        
    
  )
}

export default Card