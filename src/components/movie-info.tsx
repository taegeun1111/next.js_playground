import { API_URL } from "@/app/(home)/page";

const getMovie = async (id: string) => {
  await new Promise((result) => setTimeout(result, 5000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

export default async function MovieInfos({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
