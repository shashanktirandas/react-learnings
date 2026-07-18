import React from 'react'
import Card from './components/Card'
const App = () => {
  var arr=[
    {
      name:"shashank",
      dis:"hello every on this is my profile block",
      img:"https://i.pinimg.com/736x/eb/78/d8/eb78d8f25d33b36c78092ebe7ac5690a.jpg"
    },
    {
      name:"sowmya",
      dis:"hello every on this is my profile block",
      img:"https://i.pinimg.com/736x/1e/67/fd/1e67fde694f24a774e1095803fcbcb4c.jpg"
    },
    {
      name:"moksha",
      dis:"hello every on this is my profile block",
      img:"https://i.pinimg.com/1200x/23/7f/0c/237f0c57ed5a30e29a783e2b1e30c2eb.jpg"
    },
    {
      name:"sharanya",
      dis:"hello every on this is my profile block",
      img:"https://i.pinimg.com/736x/d8/9f/8c/d89f8c737c4cd4e5e5ef11afd9cb157d.jpg"
    },
    {
      name:"charanya",
      dis:"hello every on this is my profile block",
      img:"https://i.pinimg.com/736x/61/88/e1/6188e17cee8d2c3f6065275e98056bd9.jpg"
    },
    {
      name:"shashank",
      dis:"hello every on this is my profile block",
      img:"https://i.pinimg.com/736x/eb/78/d8/eb78d8f25d33b36c78092ebe7ac5690a.jpg"
    },
    {
      name:"sowmya",
      dis:"hello every on this is my profile block",
      img:"https://i.pinimg.com/736x/1e/67/fd/1e67fde694f24a774e1095803fcbcb4c.jpg"
    },
    {
      name:"moksha",
      dis:"hello every on this is my profile block",
      img:"https://i.pinimg.com/1200x/23/7f/0c/237f0c57ed5a30e29a783e2b1e30c2eb.jpg"
    },
    {
      name:"sharanya",
      dis:"hello every on this is my profile block",
      img:"https://i.pinimg.com/736x/d8/9f/8c/d89f8c737c4cd4e5e5ef11afd9cb157d.jpg"
    },
    {
      name:"charanya",
      dis:"hello every on this is my profile block",
      img:"https://i.pinimg.com/736x/61/88/e1/6188e17cee8d2c3f6065275e98056bd9.jpg"
    },
  ]
  return (
    <div className='parent'>
      {
        arr.map((elem)=>{
          return <Card name={elem.name} dis={elem.dis} img={elem.img}/>
        })
      }
    </div>
  )
}

export default App
