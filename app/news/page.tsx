import { NEWS_LIST_LIMIT } from '@/app/_constants';
import { getNewsList } from '@/app/_libs/microcms';
import NewsList from '@/app/_components/NewsList';

export default async function NewsPage() {
  const data = await getNewsList({ limit: NEWS_LIST_LIMIT });

  return (
    <NewsList news={data.contents} />
  );
}