import React from 'react'
import './BlogCard.css'
const BlogCard = ({ tag, title, desc, date, time }) => {
  return (
    <>
     <article className="card">
    <div className="card-top">
    <span className="tag">{tag}</span>
    <div className="meta">
      <span>📅 {date}</span>
      <span>🕒 {time} min read</span>
    </div>
  </div>

  <h2>{title}</h2>
  <p>{desc}</p>
  <a href="#" className="read-more">Read more →</a>
  </article></>
  )
}

export default BlogCard
