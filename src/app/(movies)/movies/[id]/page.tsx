import MovieInfos, { getMovie } from "@/components/movie-info";
import MovieVideos from "@/components/movie-videos";
import { Suspense } from "react";

interface IParams {
  params: { id: string };
}

export const generateMetadata = async ({ params: { id } }: IParams) => {
  const movie = await getMovie(id);

  return {
    title: movie.title,
  };
};

export default async function MovieDetail({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieInfos id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
