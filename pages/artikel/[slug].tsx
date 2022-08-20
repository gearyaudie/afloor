import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import React from "react";
import { ArticlesList } from "../../static/ArticlesList";
import styles from "../../styles/Article.module.scss";

const Article = () => {
  const router = useRouter();
  const { slug } = router.query;
  const content: any = ArticlesList.find((x) => x.slug === slug);
  return (
    <>
      <Head>
        <meta name="description" content={content?.meta.description} />
        <meta name="keywords" content={content?.meta.keywords} />
        <title>{content?.meta.title}</title>
      </Head>
      <div className={styles.container}>
        <h1>{content?.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: content?.body }}></p>
      </div>
    </>
  );
};

export default Article;
