import React from 'react'
import Card from '../components/Card';
const App = () => {
  const jobOpenings=[
  {
    "id": 1,
    "company": "Google",
    "logo": "https://th.bing.com/th/id/OIP.3_F4XZrWZD8xmOXEFRupxwHaHa?w=166&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    "posted": "2 days ago",
    "role": "Frontend Engineer",
    "salary": "$95/hr",
    "city": "Hyderabad, India",
    "tags": ["Full-Time", "Mid Level"]
  },
  {
    "id": 2,
    "company": "Microsoft",
    "logo": "https://www.viima.com/hubfs/Logos/Integration%20logos/Microsoft-integration-logo.webp#keepProtocol",
    "posted": "1 day ago",
    "role": "Software Engineer",
    "salary": "$110/hr",
    "city": "Bengaluru, India",
    "tags": ["Full-Time", "Entry Level"]
  },
  {
    "id": 3,
    "company": "Amazon",
    "logo": "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
    "posted": "5 days ago",
    "role": "UI/UX Designer",
    "salary": "$85/hr",
    "city": "Mumbai, India",
    "tags": ["Part-Time", "Senior Level"]
  },
  {
    "id": 4,
    "company": "Apple",
    "logo": "https://th.bing.com/th/id/OIP.lN20hH9Pb2k2c29suUBuKQHaGa?w=208&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    "posted": "3 days ago",
    "role": "iOS Developer",
    "salary": "$125/hr",
    "city": "Bengaluru, India",
    "tags": ["Full-Time", "Senior Level"]
  },
  {
    "id": 5,
    "company": "Meta",
    "logo": "data:image/webp;base64,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",
    "posted": "Today",
    "role": "React Developer",
    "salary": "$115/hr",
    "city": "Hyderabad, India",
    "tags": ["Remote", "Mid Level"]
  },
  {
    "id": 6,
    "company": "Netflix",
    "logo": "https://thietkelogo.mondial.vn/wp-content/uploads/2024/02/Netflix_Symbol_RGB.png",
    "posted": "4 days ago",
    "role": "Backend Engineer",
    "salary": "$140/hr",
    "city": "Remote",
    "tags": ["Remote", "Senior Level"]
  },
  {
    "id": 7,
    "company": "Adobe",
    "logo": "data:image/webp;base64,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",
    "posted": "6 days ago",
    "role": "Product Designer",
    "salary": "$100/hr",
    "city": "Noida, India",
    "tags": ["Full-Time", "Mid Level"]
  },
  {
    "id": 8,
    "company": "IBM",
    "logo": "https://www.adaminsights.com/wp-content/uploads/2024/09/IBM-logo-1967-1024x683.jpg",
    "posted": "2 days ago",
    "role": "Cloud Engineer",
    "salary": "$90/hr",
    "city": "Pune, India",
    "tags": ["Hybrid", "Entry Level"]
  },
  {
    "id": 9,
    "company": "Oracle",
    "logo": "https://th.bing.com/th/id/OIP.eSmb8qP9PX6TdzBvhpf97gHaHa?w=164&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    "posted": "Yesterday",
    "role": "Database Developer",
    "salary": "$105/hr",
    "city": "Hyderabad, India",
    "tags": ["Full-Time", "Mid Level"]
  },
  {
    "id": 10,
    "company": "NVIDIA",
    "logo": "data:image/webp;base64,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",
    "posted": "3 days ago",
    "role": "AI Engineer",
    "salary": "$150/hr",
    "city": "Bengaluru, India",
    "tags": ["Full-Time", "Senior Level"]
  }
]
  return (
    <div className="parent">
      {
      jobOpenings.map((elem)=>{
        return <Card data={elem} />
      })
    }
    </div>
  )
}

export default App
