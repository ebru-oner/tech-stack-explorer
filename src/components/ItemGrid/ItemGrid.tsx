import ItemCard from "../ItemCard/ItemCard";
import useFetch from "../../hooks/useFetch";
import { Item } from "../../models/Item";
import config from "../../config";

const ItemGrid = () => {
  const serverApi = config.api.server;
  const { data, error, loading } = useFetch<Item[]>(`${serverApi}/tech-items`);

  if (error || !data) return <h3 className="text-red-500">!!{error}!!</h3>;
  if (loading) return <p>Loading...</p>;
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 grid-flow-row place-items-center">
      {data.map((item) => (
        <ItemCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default ItemGrid;
