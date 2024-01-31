function Bag() {
  return (
    <>
      <header>
        <div className="logo_container">
          <a href="#">
            <img
              className="myntra_home"
              src="../images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </a>
        </div>
        <nav className="nav_bar">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">
            Studio <sup>New</sup>
          </a>
        </nav>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">search</span>
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <div className="action_container">
            <span className="material-symbols-outlined action_icon">
              person
            </span>
            <span className="action_name">Profile</span>
          </div>

          <div className="action_container">
            <span className="material-symbols-outlined action_icon">
              favorite
            </span>
            <span className="action_name">Wishlist</span>
          </div>

          <div className="action_container">
            <span className="material-symbols-outlined action_icon">
              shopping_bag
            </span>
            <span className="action_name">Bag</span>
            <span className="bag-item-count">0</span>
          </div>
        </div>
      </header>
      <main>
        <div className="bag-page">
          <div className="bag-items-container"></div>
          <div className="bag-summary"></div>
        </div>
      </main>
      <footer>
        <div className="footer_container">
          <div className="footer_column">
            <h3>ONLINE SHOPPING</h3>

            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Gift Card</a>
            <a href="#">Myntra Insider</a>
          </div>

          <div className="footer_column">
            <h3>ONLINE SHOPPING</h3>

            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Gift Card</a>
            <a href="#">Myntra Insider</a>
          </div>

          <div className="footer_column">
            <h3>ONLINE SHOPPING</h3>

            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Gift Card</a>
            <a href="#">Myntra Insider</a>
          </div>
        </div>
        <hr />

        <div className="copyright">
          © 2023 www.myntra.com. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Bag;
