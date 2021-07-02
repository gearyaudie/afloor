import React from "react";
import Link from "next/link";

type SinglePost = {
  post: {
    slug: string;
    frontmatter: {
      title: string;
      date: string;
      excerpt: string;
      cover_image: string;
    };
  };
};

const Post: React.FC<SinglePost> = ({ post }) => {
  return (
    <div className="card">
      <img src={post.frontmatter.cover_image} alt="" />
      <div className="card-content">
        {/* <div className="post-date">Posted pm {post.frontmatter.date}</div> */}
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.excerpt}</p>
        <Link href={`/blog/${post.slug}`}>
          <a className="btn">Read more</a>
        </Link>
      </div>
    </div>
  );
};

export default Post;
