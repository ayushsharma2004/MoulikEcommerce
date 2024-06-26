import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout.jsx";
import toast from "react-hot-toast";
import axios from "axios";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices.js";
import banner1 from '../images/banner4hd.jpeg'
import p1 from '../images/polo3.jpg'
import '../styles/home.css'

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //get all categories
  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/get-category`
      );
      console.log(data?.category);
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong while getting category');
    }
  };

  useEffect(() => {
    getAllCategories();
    getTotal();
  }, []);

  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-count`
      );
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  useEffect(() => {
    if (!checked.length && !radio.length) {
      getAllProducts();
    }
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) {
      filterProduct();
    }
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/product/product-filters`, {
        checked,
        radio,
      });
      console.log(data);
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"ALl Products - Best offers "}>
      <div className="home">
        <img className="banner" src={banner1} alt="" />
        <div className="best_seller">
          <h2>BEST SELLERS</h2>
          <div className="cards">
            <div className="card">
              <div className="crdimg">
                <img src={p1} alt="" />
              </div>
              <div className="crd_content">
                <h3 className="crd_name">Blue Indigo Polo T-shirt</h3>
                <div className="crd_rating">
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                </div>
                <p className="crd_price">₹799.00</p>
              </div>
            </div>
            <div className="card">
              <div className="crdimg">
                <img src={p1} alt="" />
              </div>
              <div className="crd_content">
                <h3 className="crd_name">Blue Indigo Polo T-shirt</h3>
                <div className="crd_rating">
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                </div>
                <p className="crd_price">₹799.00</p>
              </div>
            </div>
            <div className="card">
              <div className="crdimg">
                <img src={p1} alt="" />
              </div>
              <div className="crd_content">
                <h3 className="crd_name">Blue Indigo Polo T-shirt</h3>
                <div className="crd_rating">
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                </div>
                <p className="crd_price">₹799.00</p>
              </div>
            </div>
            <div className="card">
              <div className="crdimg">
                <img src={p1} alt="" />
              </div>
              <div className="crd_content">
                <h3 className="crd_name">Blue Indigo Polo T-shirt</h3>
                <div className="crd_rating">
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                </div>
                <p className="crd_price">₹799.00</p>
              </div>
            </div>
            <div className="card">
              <div className="crdimg">
                <img src={p1} alt="" />
              </div>
              <div className="crd_content">
                <h3 className="crd_name">Blue Indigo Polo T-shirt</h3>
                <div className="crd_rating">
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                </div>
                <p className="crd_price">₹799.00</p>
              </div>
            </div>
            <div className="card">
              <div className="crdimg">
                <img src={p1} alt="" />
              </div>
              <div className="crd_content">
                <h3 className="crd_name">Blue Indigo Polo T-shirt</h3>
                <div className="crd_rating">
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                </div>
                <p className="crd_price">₹799.00</p>
              </div>
            </div>
            <div className="card">
              <div className="crdimg">
                <img src={p1} alt="" />
              </div>
              <div className="crd_content">
                <h3 className="crd_name">Blue Indigo Polo T-shirt</h3>
                <div className="crd_rating">
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                </div>
                <p className="crd_price">₹799.00</p>
              </div>
            </div>
            <div className="card">
              <div className="crdimg">
                <img src={p1} alt="" />
              </div>
              <div className="crd_content">
                <h3 className="crd_name">Blue Indigo Polo T-shirt</h3>
                <div className="crd_rating">
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                </div>
                <p className="crd_price">₹799.00</p>
              </div>
            </div>
            <div className="card">
              <div className="crdimg">
                <img src={p1} alt="" />
              </div>
              <div className="crd_content">
                <h3 className="crd_name">Blue Indigo Polo T-shirt</h3>
                <div className="crd_rating">
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                </div>
                <p className="crd_price">₹799.00</p>
              </div>
            </div>
            <div className="card">
              <div className="crdimg">
                <img src={p1} alt="" />
              </div>
              <div className="crd_content">
                <h3 className="crd_name">Blue Indigo Polo T-shirt</h3>
                <div className="crd_rating">
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                </div>
                <p className="crd_price">₹799.00</p>
              </div>
            </div>
            <div className="card">
              <div className="crdimg">
                <img src={p1} alt="" />
              </div>
              <div className="crd_content">
                <h3 className="crd_name">Blue Indigo Polo T-shirt</h3>
                <div className="crd_rating">
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                </div>
                <p className="crd_price">₹799.00</p>
              </div>
            </div>
            <div className="card">
              <div className="crdimg">
                <img src={p1} alt="" />
              </div>
              <div className="crd_content">
                <h3 className="crd_name">Blue Indigo Polo T-shirt</h3>
                <div className="crd_rating">
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                  <span class="material-symbols-outlined">
                    star
                  </span>
                </div>
                <p className="crd_price">₹799.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;