import React from "react";
// import { Helmet } from 'react-helmet';
import Link from "next/link";
import styles from "../../styles/Blog.module.css";
import Button from "../../components/button/Button";
import BlogsImg from "../../atoms/BlogsImg";
import { Zoom } from "react-awesome-reveal";
import { blogs } from "../../portfolio";
// import BlogCard from "../../components/blogCard/BlogCard";

const BlogsComponent = ({ theme }) => {
  return (
    <div className={styles["blogs-main"]}>
      {/* <Helmet>
          ‍<title>Blogs | TheRealMVP</title>‍
          <meta
            name="description"
            content="Wanna know more about what I write? Here's everything you would be needing to know more about me"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@iamkumaail" />{' '}
          <meta name="twitter:creator" content="@iamkumaail" />{' '}
          <meta name="twitter:title" content="Blogs - TheRealMVP" />
          <meta
            property="twitter:url"
            content="https://muhammadkumail.com/blogs"
          />
          <meta
            name="twitter:description"
            content="Wanna know more about what I write? Here's everything you would be needing to know more about me"
          />{' '}
          <meta name="twitter:image" content="url_to_image" />{' '}
          <meta property="og:title" content="Blogs - TheRealMVP" />{' '}
          <meta
            property="og:description"
            content="Wanna know more about what I write? Here's everything you would be needing to know more about me"
          />
          <meta property="og:image" content="url_to_image" />
          <meta property="og:url" content="https://muhammadkumail.com/blogs" />
          <meta property="og:site_name" content="Blogs - TheRealMVP" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
        </Helmet> */}

      {/* <div className="blog-header">
          <h1 className="blog-header-text">{blogs.title}</h1>
          <p className="subTitle blog-subtitle">{blogs.subtitle}</p>
        </div> */}
      <div className={styles["blog-main-div"]}>
        <div className={styles["blog-text-div"]}>
          <Zoom duration={1000}>
            <div className={styles["blog-heading-div"]}>
              <div className={styles["blog-heading-text-div"]}>
                <h1
                  className={styles["blog-heading-text"]}
                  style={{ color: theme.text }}
                >
                  {blogs["title"]}
                </h1>
                <p
                  className={styles["blog-header-detail-text"]}
                  style={{ color: theme.secondaryText }}
                >
                  {blogs["subtitle"]}
                </p>
                <div className={styles["blogsite-btn-div"]}>
                  <Link href="/">
                    <a style={{ textDecoration: "none" }}>
                      <Button text="Visit back home" theme={theme} />
                    </a>
                  </Link>
                </div>
              </div>
              <div className={styles["blog-heading-img-div"]}>
                {/* <img
											src={require(`../../assests/images/${blogs["avatar_image_path"]}`)}
											alt=""
										/> */}
                <BlogsImg theme={theme} />
              </div>
            </div>
          </Zoom>
          {/* Blogs card */}
          {/* <Fade bottom duration={1000} distance="40px">
                                <div className="blogs-card-div">
                                    {blogs.section.map((blog) => {
                                        return <BlogCard blog={blog} theme={theme} />
                                    })}
                                </div>
                            </Fade> */}
        </div>
      </div>
    </div>
  );
};

export default BlogsComponent;
