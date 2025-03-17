import { Item } from "../../models/Item";
import { Link } from "react-router-dom";

interface ItemCardProps {
  item: Item | null;
}
const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  if (item === null) return null;
  return (
    <div
      data-testid="test-card"
      className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-2 rounded-md border shadow-sm bg-primary dark:bg-darkPrimary  text-navy-500 dark:hover:text-primary hover:text-darkSecondary text-secondary dark:text-darkSecondary"
    >
      <a href="#">
        <h2 className="mb-2 text-xl md:text-xl font-bold tracking-tight">{item.title}</h2>
      </a>
      <p className="mb-4 font-normal  w-full text-sm md:text-base">{item.description}</p>
      <Link to={`/details/${item._id}`}>
        <button className="px-2 py- inline-flex items-center rounded-md  bg-darkPrimary dark:bg-primary text-darkSecondary dark:text-secondary duration-300 ease-in">
          Details
        </button>
      </Link>
    </div>
  );
};

export default ItemCard;
