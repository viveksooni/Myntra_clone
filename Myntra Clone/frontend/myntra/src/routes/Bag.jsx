import BagSummary from "../components/BagSummary";
import { useSelector } from "react-redux";

function Bag() {
  const itemId = useSelector((store) => store.bag);
  const allItems = useSelector((store) => store.items);
  const items = allItems.filter((items) => {
    let itemIndex = itemId.indexOf(items.id);
    return itemIndex >= 0;
  });
  let totalMrp = 0;

  items.forEach((item) => (totalMrp += item.current_price));

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {items.map((item) => {
            return <BagSummary key={item.id} item={item} />;
          })}
        </div>
        <div className="bag-summary">
          <div className="bag-details-container">
            <div className="price-header">PRICE DETAILS ( Items) </div>
            <div className="price-item">
              <span className="price-item-tag">Total MRP</span>
              <span className="price-item-value">₹{totalMrp}</span>
            </div>
            <div className="price-item">
              <span className="price-item-tag">Discount on MRP</span>
              <span className="price-item-value priceDetail-base-discount">
                -₹99
              </span>
            </div>
            <div className="price-item">
              <span className="price-item-tag">Convenience Fee</span>
              <span className="price-item-value">₹99</span>
            </div>
            <hr />
            <div className="price-footer">
              <span className="price-item-tag">Total Amount</span>
              <span className="price-item-value">₹{totalMrp}</span>
            </div>
          </div>
          <button className="btn-place-order">
            <div className="css-xjhrni">PLACE ORDER</div>
          </button>
        </div>
      </div>
    </main>
  );
}
export default Bag;
