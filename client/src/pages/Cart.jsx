import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout.jsx";
import { useSearch } from "../context/search.js";
import ReactSlider from "react-slider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown, faStar, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import p1 from '../images/polo3.jpg'
import '../styles/cart.css'
import { Link } from "react-router-dom";

const Cart = () => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        const value = Math.max(1, parseInt(e.target.value) || 1);
        setQuantity(value);
    };

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity - 1));
    };

    return (
        <Layout title={"Search results"}>
            <div className="cart_container">
                <div className="cart_left">
                    <div className="cart_header">
                        <h3>Shopping Cart</h3>
                        <h4 className="price_tag">Price</h4>
                    </div>
                    <div className="all_carts">
                        <div className="cart">
                            <div className="cart_img">
                                <img src={p1} alt="" />
                            </div>
                            <div className="cart_details">
                                <div className="cart_name">
                                    <h3>Blue Indigo Polo T-shirt</h3>
                                </div>
                                <div className="cart_avail">
                                    <h5>In stock</h5>
                                </div>
                                <div className="cart_rate">
                                    <FontAwesomeIcon className="star" icon={faStar} />
                                    <FontAwesomeIcon className="star" icon={faStar} />
                                    <FontAwesomeIcon className="star" icon={faStar} />
                                    <FontAwesomeIcon className="star" icon={faStar} />
                                    <FontAwesomeIcon className="star" icon={faStar} />
                                </div>
                                <div className="product_size">
                                    <h4>Size: <span className="size-highlight">XL</span></h4>
                                </div>
                                <div className="product_category">
                                    <h4>Category: <span className="category-highlight">Polo T-shirt</span></h4>
                                </div>
                                <div className="cart_quantity">
                                    <div className="quantity_control">
                                        <button className="quantity_btn" onClick={decrementQuantity}>
                                            <FontAwesomeIcon icon={faMinus} />
                                        </button>
                                        <input
                                            type="number"
                                            className="quantity_input"
                                            value={quantity}
                                            onChange={handleQuantityChange}
                                            min="1"
                                        />
                                        <button className="quantity_btn" onClick={incrementQuantity}>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </button>
                                        <div className="vertical-divider"></div>
                                        <Link className="remove_text">
                                            Remove
                                        </Link>
                                        <div className="vertical-divider"></div>
                                        <Link className="see_more">
                                            See more like this
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="cart_price">
                                <h4>₹799.00</h4>
                            </div>
                        </div>
                        <div className="cart">
                            <div className="cart_img">
                                <img src={p1} alt="" />
                            </div>
                            <div className="cart_details">
                                <div className="cart_name">
                                    <h3>Blue Indigo Polo T-shirt</h3>
                                </div>
                                <div className="cart_avail">
                                    <h5>In stock</h5>
                                </div>
                                <div className="cart_rate">
                                    <FontAwesomeIcon className="star" icon={faStar} />
                                    <FontAwesomeIcon className="star" icon={faStar} />
                                    <FontAwesomeIcon className="star" icon={faStar} />
                                    <FontAwesomeIcon className="star" icon={faStar} />
                                    <FontAwesomeIcon className="star" icon={faStar} />
                                </div>
                                <div className="product_size">
                                    <h4>Size: <span className="size-highlight">XL</span></h4>
                                </div>
                                <div className="product_category">
                                    <h4>Category: <span className="category-highlight">Polo T-shirt</span></h4>
                                </div>
                                <div className="cart_quantity">
                                    <div className="quantity_control">
                                        <button className="quantity_btn" onClick={decrementQuantity}>
                                            <FontAwesomeIcon icon={faMinus} />
                                        </button>
                                        <input
                                            type="number"
                                            className="quantity_input"
                                            value={quantity}
                                            onChange={handleQuantityChange}
                                            min="1"
                                        />
                                        <button className="quantity_btn" onClick={incrementQuantity}>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </button>
                                        <div className="vertical-divider"></div>
                                        <Link className="remove_text">
                                            Remove
                                        </Link>
                                        <div className="vertical-divider"></div>
                                        <Link className="see_more">
                                            See more like this
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="cart_price">
                                <h4>₹799.00</h4>
                            </div>
                        </div>
                        <div className="cart">
                            <div className="cart_img">
                                <img src={p1} alt="" />
                            </div>
                            <div className="cart_details">
                                <div className="cart_name">
                                    <h3>Blue Indigo Polo T-shirt</h3>
                                </div>
                                <div className="cart_avail">
                                    <h5>In stock</h5>
                                </div>
                                <div className="cart_rate">
                                    <FontAwesomeIcon className="star" icon={faStar} />
                                    <FontAwesomeIcon className="star" icon={faStar} />
                                    <FontAwesomeIcon className="star" icon={faStar} />
                                    <FontAwesomeIcon className="star" icon={faStar} />
                                    <FontAwesomeIcon className="star" icon={faStar} />
                                </div>
                                <div className="product_size">
                                    <h4>Size: <span className="size-highlight">XL</span></h4>
                                </div>
                                <div className="product_category">
                                    <h4>Category: <span className="category-highlight">Polo T-shirt</span></h4>
                                </div>
                                <div className="cart_quantity">
                                    <div className="quantity_control">
                                        <button className="quantity_btn" onClick={decrementQuantity}>
                                            <FontAwesomeIcon icon={faMinus} />
                                        </button>
                                        <input
                                            type="number"
                                            className="quantity_input"
                                            value={quantity}
                                            onChange={handleQuantityChange}
                                            min="1"
                                        />
                                        <button className="quantity_btn" onClick={incrementQuantity}>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </button>
                                        <div className="vertical-divider"></div>
                                        <Link className="remove_text">
                                            Remove
                                        </Link>
                                        <div className="vertical-divider"></div>
                                        <Link className="see_more">
                                            See more like this
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="cart_price">
                                <h4>₹799.00</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart_right">
                    <div className="price_header">
                        <h3>Price Details</h3>
                    </div>
                    <div className="price_details">
                        <div className="price_detail">
                            <h4>Price (3 items): </h4>
                            <h4 className="price_highlight">₹1999.00</h4>
                        </div>
                        <div className="price_detail">
                            <h4>Discount: </h4>
                            <h4 className="price_highlight">-₹200</h4>
                        </div>
                        <div className="price_detail">
                            <h4>Delivery Charges: </h4>
                            <h4 className="price_highlight">₹66</h4>
                        </div>
                        <div className="price_total">
                            <h4>Total Amount: </h4>
                            <h4 className="total_highlight">₹1866.00</h4>
                        </div>
                        <div className="price_buy_div">
                            <button className="price_buy">Buy Now</button>
                        </div>
                    </div>
                    <div className="might_like">
                        <div className="like_header">
                            <h3>You might also like</h3>
                        </div>
                        <div className="all_like">
                            <div className="like_card">
                                <div className="like_img">
                                    <img src={p1} alt="" />
                                </div>
                                <div className="like_details">
                                    <div className="like_name">
                                        <h3>Blue Indigo Polo T-shirt</h3>
                                    </div>
                                    <div className="like_rate">
                                        <FontAwesomeIcon className="star" icon={faStar} />
                                        <FontAwesomeIcon className="star" icon={faStar} />
                                        <FontAwesomeIcon className="star" icon={faStar} />
                                        <FontAwesomeIcon className="star" icon={faStar} />
                                        <FontAwesomeIcon className="star" icon={faStar} />
                                    </div>
                                    <div className="like_price">
                                        <h4>₹799.00</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="like_card">
                                <div className="like_img">
                                    <img src={p1} alt="" />
                                </div>
                                <div className="like_details">
                                    <div className="like_name">
                                        <h3>Blue Indigo Polo T-shirt</h3>
                                    </div>
                                    <div className="like_rate">
                                        <FontAwesomeIcon className="star" icon={faStar} />
                                        <FontAwesomeIcon className="star" icon={faStar} />
                                        <FontAwesomeIcon className="star" icon={faStar} />
                                        <FontAwesomeIcon className="star" icon={faStar} />
                                        <FontAwesomeIcon className="star" icon={faStar} />
                                    </div>
                                    <div className="like_price">
                                        <h4>₹799.00</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="like_card">
                                <div className="like_img">
                                    <img src={p1} alt="" />
                                </div>
                                <div className="like_details">
                                    <div className="like_name">
                                        <h3>Blue Indigo Polo T-shirt</h3>
                                    </div>
                                    <div className="like_rate">
                                        <FontAwesomeIcon className="star" icon={faStar} />
                                        <FontAwesomeIcon className="star" icon={faStar} />
                                        <FontAwesomeIcon className="star" icon={faStar} />
                                        <FontAwesomeIcon className="star" icon={faStar} />
                                        <FontAwesomeIcon className="star" icon={faStar} />
                                    </div>
                                    <div className="like_price">
                                        <h4>₹799.00</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Cart;