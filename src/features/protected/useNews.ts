import { useState, useEffect } from "react";
import { newsService, NewsItem } from "@/services/news";

export function useNews() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  async function fetchNews(currentPage = 1) {
    currentPage === 1 ? setLoading(true) : setLoadingMore(true);
    try {
      const data = await newsService.getAll(currentPage);
      setNews((prev) => (currentPage === 1 ? data : [...prev, ...data]));
      setHasMore(data.length === 10);
    } catch (error) {
      console.error("Erro ao buscar notícias:", error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }

  useEffect(() => {
    fetchNews(1);
  }, []);

  function loadMore() {
    if (!loadingMore && hasMore) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchNews(nextPage);
    }
  }

  return { news, loading, loadingMore, hasMore, loadMore };
}
