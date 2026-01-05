import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
      <div className='Parent'>
      <Card user="falak" age={22} img="https://media.istockphoto.com/id/1412414705/photo/peaceful-calm-lake-reflection-of-trees-on-island-at-loch-lomond.jpg?s=612x612&w=0&k=20&c=uV6Nhb9J8U_qS4RFOpXN1Pn0nNX2gqwcjY4UfrvPhvM="/>
      <Card user="muzammil" age={25} img="https://media.istockphoto.com/id/1144065937/photo/digital-painting-of-sad-man-thinking-something-in-bed-room-illustration-of-depression-of.jpg?s=612x612&w=0&k=20&c=n0yhGWRGqwMiFLLWaFmpGSZg4p133X9V265QWGy7WFs="/>
      <Card user="shifa" age={21} img="https://media.istockphoto.com/id/1143901506/photo/digital-painting-of-traveler-illustration-of-traveling-man.jpg?s=612x612&w=0&k=20&c=gDDxppcfDePC3_Z0gylO3E-nRbUbxS5LD6DwkSf5AP4= "/>
      <Card user="Mehreen" age={21} img="https://media.istockphoto.com/id/1769786313/photo/above-the-fray.jpg?s=612x612&w=0&k=20&c=rP4NkF6MkOCspljzL2glAJoizjmKOwghXA__ox7hLLY="/>
    </div>
  )
}

export default App
