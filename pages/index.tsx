import React, { useState } from "react";
import Head from "next/head";
import { sortByDate } from "../utils";
import Post from "../components/Post";

// Pure node extension
import fs from "fs";
import path from "path";

// Frontmatter extension
import matter from "gray-matter";
import HomeComponent from "../components/HomeComponent";

type Props = {
  posts: {
    slug: string;
    frontmatter: {
      title: string;
      date: string;
      excerpt: string;
      cover_image: string;
    };
  }[];
};

const Home: React.FC<Props> = ({ posts }) => {
  const [showPost, setShowPost] = useState(false);

  return (
    <>
      <Head>
        <title>Dev Blog</title>
      </Head>
      <HomeComponent showPost={showPost} setShowPost={setShowPost} />
      {showPost && (
        <div className="container">
          <div className="posts">
            {posts.map((post, index) => (
              <Post post={post} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export const getStaticProps = async () => {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
};

export default Home;
