import React from 'react'
import './BlogList.css'
import BlogCard from '../BlogCard/BlogCard'
const BlogList = () => {
  return (
    <>
    <p className="results">Showing 2 results in Tech</p>

    <BlogCard
      tag="Tech"
      title="The Future of Artificial Intelligence in Web Development"
      desc="Exploring how AI is revolutionizing the way we build and design websites, from automated coding to intelligent user experiences."
      date="January 14, 2024"
      time="8"
    />

    <BlogCard
      tag="Tech"
      title="How Quantum Computing is Changing the Tech Landscape"
      desc="Understand the basics of quantum computing and how it's expected to change industries from cybersecurity to pharmaceuticals."
      date="January 4, 2024"
      time="10"
    />
  
    </>
  )
}

export default BlogList
