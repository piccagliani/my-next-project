export type Category = {
  name: string;
};

export type News = {
  id: string;
  title: string;
  category: Category;
  publishedAt: string;
  createdAt: string;
};