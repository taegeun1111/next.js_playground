"use client";
import { Metadata } from "next";
import { useEffect, useState } from "react";

// export const metadata: Metadata = {
//   title: "Home",
// };

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    const response = await fetch(
      "https://nomad-movies.nomadcoders.workers.dev/movies"
    );

    const json = await response.json();
    setMovies(json);
    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>{isLoading ? <div>loading...</div> : JSON.stringify(movies)}</div>
  );
}
