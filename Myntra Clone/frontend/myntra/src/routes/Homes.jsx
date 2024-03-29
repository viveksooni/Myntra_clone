import { useSelector } from "react-redux";
import Items from "../components/Items";
import Fetch from "../components/Fetch";

const Homes = () => {
  const items = useSelector((store) => store.items);
  return (
    <>
      
      <div className="items-container">
        {items.map((item) => (
          <Items key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Homes;
