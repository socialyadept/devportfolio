import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton"
import "./Blog.css"
import Button from "../../components/button/Button";
import BlogsImg from "./BlogsImg";
import { Fade } from "react-reveal";
import { greeting, blogs, contactPageData } from "../../portfolio";
import BlogCard from "../../components/blogCard/BlogCard";

class BlogsComponent extends Component {
    render() {
        const blogSection = contactPageData.blogSection;
        const theme = this.props.theme;

        console.log(this.props.theme);
        return (
            <div className="blogs-main">
                <Header theme={this.props.theme} />

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
                            <Fade bottom duration={1000} distance="40px">
                                <div className="blogs-card-div">
                                    {blogs.section.map((blog) => {
                                        return <BlogCard blog={blog} theme={theme} />
                                    })}
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
                <Footer theme={this.props.theme} />
                <TopButton theme={this.props.theme} />
            </div>
        );
    }
}

export default BlogsComponent;
