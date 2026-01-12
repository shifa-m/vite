import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
 

  return (
   
    <div className="parent">
      <div className='card'>
        <div className="top">
          <img src={props.brandlogo} alt="my photo" />
          <button >Save <Bookmark size={12} /></button>
          </div>
          <div className="center">
            <h3>{props.company}<span>{props.posted}</span></h3>
            <h2>{props.role}</h2>
            <div className='tag'>
              <h4>{props.hours}</h4>
              <h4>{props.Type}</h4>
            </div>
          </div>
          <div className="bottom">
              <h3>{props.pay}</h3>
                <p>{props.location}
                  <button>Apply now</button>
                </p>
                
                 
                  
                </div>
          </div>
           </div>
           
           
            

           
        
    
  )
}

export default Card