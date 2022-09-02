import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import React from "react";
import { ArticlesList } from "../../static/ArticlesList";
import styles from "../../styles/Article.module.scss";

const Article = () => {
  const router = useRouter();
  const { slug } = router.query;
  const content: any = ArticlesList.find((x) => x.slug === slug);

  const openLink = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <>
      <Head>
        <meta name="description" content={content?.meta.description} />
        <meta property="og:description" content={content?.meta.description} />
        <meta property="og:title" content={content?.meta.title} />
        <meta property="og:type" content="article" />
        <meta name="keywords" content={content?.meta.keywords} />
        <title>{content?.meta.title}</title>
      </Head>
      <div className={styles.container}>
        <h1>{content?.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: content?.body }}></p>
        <button
          onClick={() => openLink(content?.linkToProduct)}
          className={styles.linkToBtn}
        >
          Lihat produk sekarang
        </button>
      </div>
    </>
  );
};

export default Article;
