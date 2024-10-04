import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Link from "next/link";
import styles from "./index.module.css";

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
}

export default function Pagination({
  totalCount,
  current = 1,
  basePath = "/news",
}: Props) {
  // 全件数からページ数を算出して、ページ数分の配列を生成
  const pageCount = Math.ceil(totalCount / NEWS_LIST_LIMIT);
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  return (
    <nav>
      <ul className={styles.container}>
        {pages.map((page) => (
          <li key={page} className={styles.list}>
            {current !== page ? (
              <Link href={`${basePath}/p/${page}`} className={styles.item}>
                {page}
              </Link>
            ) : (
              <span className={`${styles.item} ${styles.current}`}>{page}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}