import { useState, useEffect } from "react";

const useFetchNews = (category) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://gnews.io/api/v4/top-headlines?lang=en&country=us&category=${category}&apikey=84f0fd6a8faaf6850048a210745568f9`
        );
        const result = await response.json();

        

        setData(result.articles);
        setLoading(false)
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (category) {
      fetchNews();
    }
  }, [category]);

  return { data, loading, error };
};

export default useFetchNews;
