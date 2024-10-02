import styles from "./page.module.css";
import Image from "next/image";
import ButtonLink from "@/app//_components/ButtonLink";
import { News } from "@/app/_libs/microcms";
import Hero from "@/app/_components/Hero";
import NewList from "@/app/_components/NewsList";

const data: { contents: News[] } = {
  contents: [
    {
      id: '1',
      title: '渋谷にオフィスを移転しました',
      category: {
        name: '更新情報',
      },
      publishedAt: '2023/05/19',
      createdAt: '2023/05/19',
    },
    {
      id: '2',
      title: '当社CEOが業界リーダーTOP30に選出されました',
      category: {
        name: '更新情報',
      },
      publishedAt: '2023/05/19',
      createdAt: '2023/05/19',
    },
    {
      id: '3',
      title: 'テストの記事です',
      category: {
        name: '更新情報',
      },
      publishedAt: '2023/04/19',
      createdAt: '2023/04/19',
    },
  ],
};

export default function Home() {
  const sliceData = data.contents.slice(0, 2);
  return (
    <>
      <Hero title="テクノロジーの力で世界を変える" sub="私たちは市場をリードしているグローバルテックカンパニーです。" />
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewList news={sliceData} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっと見る</ButtonLink>
        </div>
      </section>
    </>
  );
}