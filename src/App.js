import hunter from "./images/pexels-brett-sayles-2771786.jpg";
import logo from "./images/logo.jpg";
import bushshirt from "./images/bush_shirt.jpg";
import compound from "./images/compound_bow.jpg";
import socks from "./images/socks.jpg";
import doghunting from "./images/huntingdog.jpg";
import gettingout from "./images/gettingout.jpg";
import "./App.css";

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <div className="App">
      <div>
        <div className="header">
          <div className="brand">
            <img className="logo" src={logo} alt="Head of a stag"></img>
            <p className="company_title">Buck Wild</p>
          </div>
          <div className="header_menu">
            <div className="home_link">Home</div>
            <div className="shop_link">Shop</div>
            <div className="contact_link">Contact</div>
            <button className="login_btn">Login</button>
          </div>
        </div>
      </div>
      <div>
        <div className="hero_text">
          <h2>LIVE ON</h2>
          <h1>THE WILD SIDE</h1>
        </div>
        <div className="text_input">
          <input
            className="input_field"
            type="text"
            placeholder="Search..."
          ></input>
          <button className="search_btn">Search</button>
        </div>
        <div className="hero_bar">
          <img
            className="hunter_img"
            src={hunter}
            alt="Stuffed bear behind man"
          ></img>
        </div>
      </div>
      <div className="product_section">
        <div>
          <img className="product_img" src={bushshirt} alt="Bush Shirt"></img>
          <div className="product_name">
            <div>
              <p>Bush Shirt</p>
              <p>$89.00</p>
            </div>
            <div className="shop_now">
              <button className="shop_btn">Shop Now</button>
            </div>
          </div>
        </div>
        <div>
          <img className="product_img" src={compound} alt="compound bow"></img>
          <div className="product_name">
            <div>
              <p>Compound Bow</p>
              <p>$389.00</p>
            </div>
            <div className="shop_now">
              <button className="shop_btn">Shop Now</button>
            </div>
          </div>
        </div>
        <div>
          <img className="product_img" src={socks} alt="socks"></img>
          <div className="product_name">
            <div>
              <p>Bush Socks</p>
              <p>$39.00</p>
            </div>
            <div className="shop_now">
              <button className="shop_btn">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="second_banner">
        <img
          className="second_banner_img"
          src={doghunting}
          alt="Man hunting with a dog"
        ></img>
      </div>
      <div className="events_section">
        <div className="about_text">
          <h3 className="about_title">About Bush Wild</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
        <div>
          <img className="get_out_img" src={gettingout} alt="#"></img>

          <p className="get_out_text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>

      <div className="footer">
        <p>&copy; Buck Wild 2022. Get Buck Wild!</p>
        <button className="scroll" onClick={scrollToTop}>
          Back To Top
        </button>
      </div>
    </div>
  );
}

export default App;
