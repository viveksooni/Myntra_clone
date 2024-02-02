const BagSummary = () => {
  const item = {
    id: "001",
    image: "images/1.jpg",
    company: "Carlton London",
    item_name: "Rhodium-Plated CZ Floral Studs",
    original_price: 1045,
    current_price: 606,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 4.5,
      count: 1400,
    },
  };

  return (
    <>
      <div className="bag-item-container">
        <div className="item-left-part">
          <img className="bag-item-img" src={item.image} />
        </div>
        <div className="item-right-part">
          <div className="company">{item.company}</div>
          <div className="item-name">{item.item_name}</div>
          <div className="price-container">
            <span className="current-price">Rs ${item.current_price}</span>
            <span className="original-price">Rs ${item.original_price}</span>
            <span className="discount-percentage">
              (${item.discount_percentage}% OFF)
            </span>
          </div>
          <div className="return-period">
            <span className="return-period-days">
              ${item.return_period} days
            </span>{" "}
            return available
          </div>
          <div className="delivery-details">
            Delivery by
            <span className="delivery-details-days">${item.delivery_date}</span>
          </div>
        </div>

        <div className="remove-from-cart" onClick={()=>{console.log("remove cart button was clicked")}}>
          X
        </div>
      </div>
    </>
  );
};
export default BagSummary;
