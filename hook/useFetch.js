import { useState, useEffect } from "react";

const useFetchNews = (category = "general") => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apikey = "84f0fd6a8faaf6850048a210745568f9";
    const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=10&apikey=${apikey}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        if (response.ok) {
          setData(result.articles);
        } else {
          setError(result.message || "Something went wrong");
        }
      } catch (err) {
        setError(err.message || "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  return { data, loading, error };
};

export default useFetchNews;
