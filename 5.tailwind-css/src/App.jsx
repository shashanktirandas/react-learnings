import React from 'react'
import Section2 from '../components/section2/Section2'
import Section1 from '../components/section1/Section1'
const App = () => {
  const users = [
  {
    img: "https://i.pinimg.com/736x/42/54/0e/42540e6878e714a67411afcd9595d91e.jpg",
    dis: "Financially stable customers who actively use digital banking services and regularly engage with savings, payments, and investments.",
    tag: "Satisfied",
    color: "#2563EB" // Blue
  },
  {
    img: "https://i.pinimg.com/736x/7a/ea/08/7aea08c5323513c0a4c28ff5cb4d5d14.jpg",
    dis: "Customers with limited access to essential financial products who need affordable credit, insurance, and digital banking solutions.",
    tag: "Underserved",
    color: "#F97316" // Orange
  },
  {
    img: "https://i.pinimg.com/736x/3c/19/45/3c1945a73a0aba08f8b0ad55f9feb074.jpg",
    dis: "Individuals who have basic banking accounts but rely on cash transactions due to limited access to advanced financial services.",
    tag: "Underbanked",
    color: "#16A34A" // Green
  },
  {
    img: "https://i.pinimg.com/736x/84/11/d7/8411d7454d3b59dc2414afc1f96ba078.jpg",
    dis: "Loyal customers who frequently use mobile banking, online payments, and personalized financial products with high satisfaction.",
    tag: "Satisfied",
    color: "#3B82F6" // Light Blue
  },
  {
    img: "https://i.pinimg.com/736x/20/d8/01/20d801707372462a7058a2efaad5fab1.jpg",
    dis: "Growing customer segment seeking greater financial inclusion through accessible loans, savings plans, and digital services.",
    tag: "Underserved",
    color: "#EA580C" // Deep Orange
  }
];
return (
    <div className="flex flex-col  ">
      <Section2 /> 
    <Section1 users={users} />
    
    </div>
    
  )
}

export default App
