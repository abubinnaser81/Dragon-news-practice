import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const allNews = Array.isArray(data) ? data : data?.news || [];

  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id === "0") {
      setCategoryNews(allNews);
    } else if (id === "1") {
      const filteredNews = allNews.filter(
        (news) => news.others?.is_today_pick === true
      );
      setCategoryNews(filteredNews);
    } else {
      const filteredNews = allNews.filter((news) => news.category_id === id);
      setCategoryNews(filteredNews);
    }
  }, [id, allNews]);

  return (
    <div>
      <h2 className="font-bold mb-5">
        Total <span className="text-secondary">{categoryNews.length}</span> news Found
      </h2>

      <div className="grid grid-cols-1 gap-5">
        {categoryNews.map((news) => (
          <NewsCard key={news.id || news._id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;