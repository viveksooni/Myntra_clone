import { bagActions } from "../store/bagSlice";
import { useDispatch, useSelector } from "react-redux";

const Items = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddBag = (id) => {
    dispatch(bagActions.addToBag(id));
  };

  const handleRemove = (id) => {
    dispatch(bagActions.removeItem(id));
  };
  const alreadyInBag = useSelector((store) => store.bag);

  const inBag = alreadyInBag.indexOf(item.id);

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name"> {item.company}</div>
      <div className="item-name"> {item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs.{item.current_price}</span>
        <span className="original-price">Rs.{item.original_price}</span>
        <span className="discount">( {item.discount_percentage}% OFF)</span>
      </div>
      {inBag == -1 ? (
        <button className="btn-add-bag" onClick={() => handleAddBag(item.id)}>
          Add to Bag
        </button>
      ) : (
        <button
          className="btn-remove-bag"
          onClick={() => handleRemove(item.id)}
        >
          Remove
        </button>
      )}
    </div>
  );
};

export default Items;
