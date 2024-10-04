import { NEWS_LIST_LIMIT } from '@/app/_constants';
import { getNewsList } from '@/app/_libs/microcms';
import NewsList from '@/app/_components/NewsList';
import Pagination from '@/app/_components/Pagination';
import SearchField from '@/app/_components/SearchField';

export const revalidate = 0;

export default async function NewsPage() {
  const { contents: news, totalCount } = await getNewsList({ limit: NEWS_LIST_LIMIT });

  return (
    <>
      <SearchField />
      <NewsList news={news} />
      <Pagination totalCount={totalCount} />
    </>
  );
}