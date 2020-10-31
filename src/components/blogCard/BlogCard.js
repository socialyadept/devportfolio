
import React from "react";
import "./BlogCard.css";

export default function BlogCard({ blog, theme }) {

  const onMouseEnter = (color, bgColor) => {
    var blogDiv = document.getElementsByClassName('blog-card-div');
    // console.log(blogDiv);
    // blogDiv.foreach((div) => {
    //   div.addEventListener('hover', (event) => {
    //     blogDiv.style.color = color;
    //     blogDiv.style.backgroundColor = bgColor;
    //   })
    // })

  }

  return (
    <div className="blog-card-div container">
      <div className="blog-card-date">{blog.date}</div>
      <div className="blog-card-title">{blog.title}</div>
      <p className="blog-card-text">{blog.text}</p>

      <div>
        <a href={blog.url} target="_"
          className="blog-div-url"
          onMouseEnter={() => onMouseEnter(theme.text, theme.secondaryText)}
        >
          Read More
        </a>
      </div>

    </div >
  );
}
