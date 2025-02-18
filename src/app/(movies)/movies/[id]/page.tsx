import { API_URL } from "@/app/(home)/page";
import async from "../../../about-us/company/jobs/sales/layout";

const getMovie = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

const getVideos = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
};

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const [movie, vidoes] = await Promise.all([getMovie(id), getVideos(id)]);

  return <h1>{movie.title}</h1>;
}
