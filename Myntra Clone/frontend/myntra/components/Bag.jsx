import BagSummary from "./BagSummary";
function Bag() {
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          <BagSummary />
        </div>
        <div className="bag-summary">
          <div className="bag-details-container">
            <div className="price-header">PRICE DETAILS ( Items) </div>
            <div className="price-item">
              <span className="price-item-tag">Total MRP</span>
              <span className="price-item-value">₹2423</span>
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
              <span className="price-item-value">₹121324</span>
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
