import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Item } from "../../models/Item";
import config from "../../config";

const ItemDetails = () => {
  const serverApi = config.api.server;
  const { id } = useParams<{ id: string }>();
  const { data, error, loading } = useFetch<Item>(`${serverApi}/tech-items/${id}`);
  if (error) return <h3 className="color-red-500">{error}</h3>;
  if (loading) return <p>Loading...</p>;
  if (!data) return null;
  return (
    <>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </>
  );
};

export default ItemDetails;
