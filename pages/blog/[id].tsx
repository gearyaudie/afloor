import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";
import type { AppProps } from "next/app";

type SlugProps = {
  frontmatter: {
    title: string;
    date: string;
    cover_image: string;
  };
  slug: string;
  content: string;
};

type Params = {
  params: {
    slug: any;
  };
};

const PostPage: React.FC<SlugProps> = ({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) => {
  return (
    <div className="posts-container">
      <Link href="/">
        <a className="btn btn-back">Go Back</a>
      </Link>
      <div className="card card-page">
        <h1 className="post-title">{title}</h1>
        <div className="post-date">Posted on {date}</div>
        <img src={cover_image} alt="" />
        <div className="post-body">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((fileName) => ({
    params: {
      id: fileName.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { id } }: any) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", id + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      id,
      content,
    },
  };
};

export default PostPage;
