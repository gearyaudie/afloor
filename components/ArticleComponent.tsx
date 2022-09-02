import Link from "next/link";
import React from "react";
import styles from "../styles/Article.module.scss";
import { ArticlesList } from "../static/ArticlesList";

const ArticleComponent = () => {
  const truncateString = (str: string, num: number) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  const openLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <div className={styles.bg}>
        {/* <Link href="/artikel/lem-vinyl-parket-pvc">Go to article</Link> */}
        <div className={styles.section}>
          <h1>Artikel</h1>
        </div>
        <p>
          Beragam artikel seputar flooring, lantai vinyl, aksesoris lantai vinyl
          seperti skirting / plin, stepnosing dan lebih lagi.
        </p>

        <div className={styles.cardContainer}>
          {ArticlesList &&
            ArticlesList.map((x) => {
              return (
                <div className={styles.card}>
                  <h1>{x.title}</h1>
                  <p>{truncateString(x.meta.description, 150)}</p>
                  <button onClick={() => openLink(x.linkToArticle)}>
                    Lihat artikel
                  </button>
                </div>
              );
            })}
        </div>

        {/* <div className={styles.section}>
          <h1>Kategori</h1>
        </div> */}
      </div>
    </>
  );
};

export default ArticleComponent;
