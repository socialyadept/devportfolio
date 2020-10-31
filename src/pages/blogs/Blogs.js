import React from "react";
import "./Blog.css";
import BlogCard from "../../components/blogCard/BlogCard";
import Button from "../../components/button/Button";
import BlogsImg from "./BlogsImg";
import { Fade } from "react-reveal";
import { greeting, blogs, contactPageData } from "../../portfolio";

export default function Blogs(props) {
  const theme = props.theme;
  const blogSection = contactPageData.blogSection;

  return (
    <div className="main" id="blogs">
      {/* <div className="blog-header">
        <h1 className="blog-header-text">{blogs.title}</h1>
        <p className="subTitle blog-subtitle">{blogs.subtitle}</p>
      </div> */}
      <div className="blog-main-div">
        <div className="blog-text-div">
          <Fade bottom duration={1000} distance="40px">
            <div className="blog-heading-div">
              <div className="blog-heading-text-div">
                <h1 className="blog-heading-text" style={{ color: theme.text }}>
                  {blogSection["title"]}
                </h1>
                <p
                  className="blog-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {blogSection["subtitle"]}
                </p>
                <div className="blogsite-btn-div">
                  <Button
                    text="Visit My Blogsite"
                    newTab={true}
                    href={blogSection.link}
                    theme={theme}
                  />
                </div>
              </div>
              <div className="blog-heading-img-div">
                {/* <img
											src={require(`../../assests/images/${blogSection["avatar_image_path"]}`)}
											alt=""
										/> */}
                <BlogsImg theme={theme} />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
