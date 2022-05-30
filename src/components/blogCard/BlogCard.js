import styles from "./BlogCard.module.css";

export default function BlogCard({ blog, theme }) {
  const onMouseEnter = (color, bgColor) => {
    var blogDiv = document.getElementsByClassName("blog-card-div");
    // console.log(blogDiv);
    // blogDiv.foreach((div) => {
    //   div.addEventListener("hover", (event) => {
    //     blogDiv.style.color = color;
    //     blogDiv.style.backgroundColor = bgColor;
    //   });
    // });
  };

  return (
    <div className={styles["blog-card-div"]}>
      <div className={styles["blog-card-date"]}>{blog.date}</div>
      <div className={styles["blog-card-title"]}>{blog.title}</div>
      <p className={styles["blog-card-text"]}>{blog.text}</p>

      <div>
        <a
          href={blog.url}
          target="_"
          className={styles["blog-div-url"]}
          onMouseEnter={() => onMouseEnter(theme.text, theme.secondaryText)}
        >
          Read More
        </a>
      </div>
    </div>
  );
}
