import React from "react";
import Link from "next/link";

import SEO from "components/SEO";
import styles from "styles/Blog.module.css";
import Button from "components/button/Button";
import BlogsImg from "atoms/BlogsImg";
import { Zoom, Fade } from "react-awesome-reveal";
import { blogs } from "../../portfolio";
import BlogCard from "../../components/blogCard/BlogCard";

const BlogsComponent = ({ theme }) => {
  return (
    <>
      <SEO
        title="Blogs"
        descrip="Wanna know more about what I write? Here's everything you would be needing to know more about me"
        url="blogs"
      />
      <div className={styles["blogs-main"]}>
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
                  <BlogsImg theme={theme} />
                </div>
              </div>
            </Zoom>
            {/* Blogs card */}
            <Fade bottom duration={1000} distance="40px">
              <div className={styles["blogs-card-div"]}>
                {blogs.section.map((blog) => {
                  return <BlogCard blog={blog} theme={theme} />;
                })}
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsComponent;