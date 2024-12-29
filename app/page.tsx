import styles from "./page.module.css";
import Image from "next/image";

import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";
import { News } from "@/app/_libs/microcms";

const data: { contents: News[]; } = {
  contents: [
    {
      id: "1",
      title: "記事01です！",
      category: {
        name: "カテゴリー01",
      },
      publishedAt: "2024/12/01",
      createdAt: "2024/12/01",
    },
    {
      id: "2",
      title: "記事02です！",
      category: {
        name: "カテゴリー02",
      },
      publishedAt: "2024/12/02",
      createdAt: "2024/12/02",
    },
    {
      id: "3",
      title: "記事03です！",
      category: {
        name: "カテゴリー03",
      },
      publishedAt: "2024/12/03",
      createdAt: "2024/12/03",
    },
    {
      id: "4",
      title: "記事04です！",
      category: {
        name: "カテゴリー04",
      },
      publishedAt: "2024/12/04",
      createdAt: "2024/12/04",
    },
  ],
};

export default function Home() {
  const sliceData = data.contents.slice(0, 2);
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
          <p className={styles.description}>
            私たちは市場をリードしているグローバルテックカンパニーです。
          </p>
        </div>
        <Image className={styles.bgimg} src="/img-mv.jpg" alt="" width={4000} height={1200} />
      </section>

      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={sliceData}></NewsList>
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
