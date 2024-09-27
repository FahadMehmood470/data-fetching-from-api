import React, { useEffect, useState } from "react";
import axios from "axios";

function InfiniteScroll() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      setData((prev) => [...prev, ...result.data]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 2
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "20px", color: "#00df9a" }}>
        Infinite Scroll Demo
      </h1>
      <div>
        {data.map((item) => (
          <div
            key={item.id}
            style={{
              padding: "10px",
              border: "1px solid black",
              margin: "10px 0",
            }}
          >
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
      {loading && (
        <p style={{ textAlign: "center", padding: "20px" }}>
          Loading more data...
        </p>
      )}
    </div>
  );
}

export default InfiniteScroll;
