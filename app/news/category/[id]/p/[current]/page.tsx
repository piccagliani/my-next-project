
import { notFound } from 'next/navigation';
import { NEWS_LIST_LIMIT } from '@/app/_constants';
import { getCategoryDetail, getNewsList } from '@/app/_libs/microcms';
import NewsList from '@/app/_components/NewsList';
import Category from '@/app/_components/Category';
import Pagination from '@/app/_components/Pagination';

type Props = {
  params: {
    id: string;
    current: string;
  }
}

export default async function NewsPage({ params }: Props) {
  const categoryData = await getCategoryDetail(params.id).catch(notFound);
  const current = parseInt(params.current, 10);
  if (isNaN(current) || current < 1) {
    notFound();
  }

  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    filters: `category[equals]${categoryData.id}`
  });

  if (news.length === 0) {
    notFound();
  }
  return (
    <>
      <p>
        <Category category={categoryData} /> の一覧
      </p>
      <NewsList news={news} />
      <Pagination totalCount={totalCount} current={current} basePath={`/news/category/${categoryData.id}`} />
    </>
  );
}