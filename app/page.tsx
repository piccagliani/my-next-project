import styles from "./page.module.css";
import Image from "next/image";
import ButtonLink from "@/app//_components/ButtonLink";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import { getNewsList } from "@/app/_libs/microcms";
import Hero from "@/app/_components/Hero";
import NewList from "@/app/_components/NewsList";

export default async function Home() {
  const data = await getNewsList({ limit: TOP_NEWS_LIMIT });

  return (
    <>
      <Hero title="テクノロジーの力で世界を変える" sub="私たちは市場をリードしているグローバルテックカンパニーです。" />
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewList news={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっと見る</ButtonLink>
        </div>
      </section>
    </>
  );
}