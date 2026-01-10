import React from 'react'

const User = () => {
  const jobOpenings = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "TechNova Solutions",
    location: "Bangalore",
    pay: "6 - 8 LPA",
    hours: "9 AM - 6 PM",
    experience: "1-3 years",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    jobType: "Full-time",
    posted: "5 days ago",
    remote: true
  },
  {
    id: 2,
    role: "Backend Developer",
    company: "CodeWave Pvt Ltd",
    location: "Hyderabad",
    pay: "8 - 12 LPA",
    hours: "10 AM - 7 PM",
    experience: "2-4 years",
    skills: ["Node.js", "Express", "MongoDB"],
    jobType: "Full-time",
    posted: "1 month ago",
    remote: false
  },
  {
    id: 3,
    role: "Full Stack Developer",
    company: "InnovateX",
    location: "Remote",
    pay: "10 - 15 LPA",
    hours: "Flexible",
    experience: "2-5 years",
    skills: ["React", "Node.js", "SQL"],
    jobType: "Full-time",
    posted: "10 days ago",
    remote: true
  },
  {
    id: 4,
    role: "Data Analyst",
    company: "DataSphere",
    location: "Pune",
    pay: "5 - 7 LPA",
    hours: "9 AM - 6 PM",
    experience: "0-2 years",
    skills: ["Python", "Excel", "Power BI"],
    jobType: "Full-time",
    posted: "3 days ago",
    remote: false
  },
  {
    id: 5,
    role: "Machine Learning Engineer",
    company: "AI Labs",
    location: "Bangalore",
    pay: "12 - 18 LPA",
    hours: "Flexible",
    experience: "2-4 years",
    skills: ["Python", "TensorFlow", "CNN"],
    jobType: "Full-time",
    posted: "1 month ago",
    remote: true
  },
  {
    id: 6,
    role: "UI/UX Designer",
    company: "Creative Minds",
    location: "Mumbai",
    pay: "4 - 6 LPA",
    hours: "9:30 AM - 6:30 PM",
    experience: "1-3 years",
    skills: ["Figma", "Adobe XD", "Wireframing"],
    jobType: "Full-time",
    posted: "7 days ago",
    remote: false
  },
  {
    id: 7,
    role: "DevOps Engineer",
    company: "CloudNet",
    location: "Chennai",
    pay: "9 - 14 LPA",
    hours: "Flexible",
    experience: "2-5 years",
    skills: ["AWS", "Docker", "CI/CD"],
    jobType: "Full-time",
    posted: "15 days ago",
    remote: true
  },
  {
    id: 8,
    role: "Software Testing Engineer",
    company: "BugFree Tech",
    location: "Noida",
    pay: "3 - 5 LPA",
    hours: "9 AM - 6 PM",
    experience: "0-2 years",
    skills: ["Manual Testing", "Selenium"],
    jobType: "Full-time",
    posted: "5 days ago",
    remote: false
  },
  {
    id: 9,
    role: "Cyber Security Analyst",
    company: "SecureIT",
    location: "Remote",
    pay: "7 - 11 LPA",
    hours: "Flexible",
    experience: "1-4 years",
    skills: ["Network Security", "Ethical Hacking"],
    jobType: "Full-time",
    posted: "20 days ago",
    remote: true
  },
  {
    id: 10,
    role: "Intern - Web Developer",
    company: "StartUp Hub",
    location: "Bangalore",
    pay: "15,000 / month",
    hours: "6 hours/day",
    experience: "Fresher",
    skills: ["HTML", "CSS", "JavaScript"],
    jobType: "Internship",
    posted: "2 days ago",
    remote: false
  }
];

console.log(jobOpenings);


  jobOpenings.map(function(){
    console.log(jobOpenings)
  })
  return (
    <div>
      <h1>{jobOpenings}</h1>
    </div>
  )
}

export default User
