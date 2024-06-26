import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout.jsx";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPlus, faMinus, faCartShopping, faShoppingCart, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import p1 from '../images/polo3.jpg'
import '../styles/productDetails.css';

const ProductDetails = () => {
    const [showMore, setShowMore] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const offers = [
        { id: 1, title: "Offer 1", description: "Get 10% off" },
        { id: 2, title: "Offer 2", description: "Buy 1 Get 1 Free" },
        { id: 3, title: "Offer 3", description: "Free Shipping" },
        { id: 4, title: "Offer 4", description: "20% off on next purchase" }
    ];

    const productDescription = `
        This Blue Indigo Polo T-shirt is crafted from high-quality fabric that ensures maximum comfort and durability. The polo features a classic fit with a ribbed collar and sleeve cuffs, providing a timeless look. The breathable material keeps you cool and dry throughout the day, making it perfect for any casual or semi-formal occasion. Whether you're heading to a meeting, a casual outing, or a social event, this polo T-shirt will elevate your style effortlessly. The versatile color and design make it easy to pair with jeans, chinos, or shorts for a complete look.
    `;

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
        <Layout>
            <div className="product_container">
                <div className="details_container">
                    <div className="left_details">
                        <div className="back_nav">
                            <h4>
                                <Link className="back_link" to={'/'}>
                                    <FontAwesomeIcon className="back_arrow" icon={faArrowLeft} />Back to results
                                </Link>
                            </h4>
                        </div>
                        <div className="photo_container">
                            <div className="photo_sidebar">
                                <div className="pro_photo">
                                    <img src={p1} alt="" />
                                </div>
                                <div className="pro_photo">
                                    <img src={p1} alt="" />
                                </div>
                                <div className="pro_photo">
                                    <img src={p1} alt="" />
                                </div>
                                <div className="pro_photo">
                                    <img src={p1} alt="" />
                                </div>
                                <div className="pro_photo">
                                    <img src={p1} alt="" />
                                </div>
                                <div className="pro_photo">
                                    <img src={p1} alt="" />
                                </div>
                                <div className="pro_photo">
                                    <img src={p1} alt="" />
                                </div>
                                <div className="pro_photo">
                                    <img src={p1} alt="" />
                                </div>
                            </div>
                            <div className="product_photo">
                                <div className="main_photo">
                                    <img src={p1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right_details">
                        <div className="main_details">
                            <div className="product_name">
                                <h3>Blue Indigo Polo T-shirt</h3>
                            </div>
                            <div className="product_rate">
                                <FontAwesomeIcon className="star" icon={faStar} />
                                <FontAwesomeIcon className="star" icon={faStar} />
                                <FontAwesomeIcon className="star" icon={faStar} />
                                <FontAwesomeIcon className="star" icon={faStar} />
                                <FontAwesomeIcon className="star" icon={faStar} />
                            </div>
                            <div className="product_price">
                                <h4>₹799.00</h4>
                                <h5>(Inclusive of all taxes)</h5>
                            </div>
                            <div className="product_color">
                                <div className="color_title">
                                    <h3>Color - Black</h3>
                                </div>
                                <div className="all_colors">
                                    <div className="color_container active">
                                        <div className="color active"></div>
                                    </div>
                                    <div className="color_container">
                                        <div className="color"></div>
                                    </div>
                                    <div className="color_container">
                                        <div className="color"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="product_size">
                                <div className="size_title">
                                    <h3>Size</h3>
                                </div>
                                <div className="all_size">
                                    <div className="size_container active">
                                        <h4 className="size active">S</h4>
                                    </div>
                                    <div className="size_container">
                                        <h4 className="size">M</h4>
                                    </div>
                                    <div className="size_container">
                                        <h4 className="size">L</h4>
                                    </div>
                                    <div className="size_container">
                                        <h4 className="size">XL</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="product_avail">
                                <h5>In stock</h5>
                            </div>
                        </div>
                        <div className="offer_container">
                            <div className="offer_text">Offers</div>
                            <div className="offer_cards">
                                {offers.map(offer => (
                                    <div className="offer_card" key={offer.id}>
                                        <h4>{offer.title}</h4>
                                        <p>{offer.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="product_about">
                            <div className="about_title">
                                <h3>About the product</h3>
                            </div>
                            <div className="about_content">
                                {showMore ? productDescription : `${productDescription.substring(0, 162)}...`}
                                <span
                                    className="see_more"
                                    onClick={() => setShowMore(!showMore)}
                                >
                                    {showMore ? " See Less" : " See More"}
                                </span>
                            </div>
                        </div>
                        <div className="product_category">
                            <h4>Category: <span className="category-highlight">Polo T-shirt</span></h4>
                        </div>

                        <div className="product_quantity">
                            <h3>Quantity:</h3>
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
                            </div>
                        </div>
                        <button className="cart_btn">Add to Cart</button>
                        <button className="buy_btn">Buy Now</button>
                    </div>
                </div>
                <div className="related_products"></div>
            </div>
        </Layout>
    );
};

export default ProductDetails;