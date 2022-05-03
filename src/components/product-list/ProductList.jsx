import React, { useEffect, useState } from "react";
import { Grid, Typography, Container, Skeleton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import "./_product.scss";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../api/BaseConfig";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Action/CartAction";

const ProductList = () => {
  const [mainProducts, setMainProducts] = useState(null);
  const getProducts=()=>{
    fetch(`${BASE_URL}/Home/HomeScroll`)
    .then((pro) => pro.json())
    .then((pr) => setMainProducts(pr));
  }
  useEffect(()=>{
    getProducts()
  },[])

  const dispatch=useDispatch()

  return (
    <section className="product-list">
      <div className="product-top">
        <Typography textAlign="center" my={5} variant="h3" component="div">
          Sale Products
        </Typography>
      </div>
      {mainProducts === null ? (
        <>
          <Skeleton width={"50%"} count={3}></Skeleton>
          <Skeleton width={"50%"} count={3}></Skeleton>
          <Skeleton width={"50%"} count={3}></Skeleton>
        </>
      ) : (
        <Container>
          <Grid container spacing={2}>
            {mainProducts.category.products.map((product) => (
              <Grid key={product.id} item md={3} xs={12} sm={6}>
                <div className="product-item p-4">
                  <div className="product-image">
                    <img width={"100%"} src={product.photo} alt="" />
                    <div className="img-action">
                      <button onClick={()=>dispatch(addToCart(product.Id,1))} className="add-to-cart">
                        <AddShoppingCartIcon />
                      </button>
                      <button className="add-to-favory">
                        <FavoriteBorderIcon />
                      </button>
                      <button className="compare">
                        <CompareArrowsIcon />
                      </button>
                    </div>
                  </div>
                  {product.discount>0?(
    <p className="new-price">
       <del> {product.currentPrice} AZN</del>
     <span> {product.currentPrice} AZN</span>
     </p>
                  ):(
                    <p className="new-price">{product.priceNoDiscount} AZN</p>
                  )}
              
                  <Typography variant="h5" componen="div">
                    <Link className="productTitle" to={`/mehsullar/${product.id}`}>{product.title}</Link>
                  </Typography>

          
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </section>
  );
};

export default ProductList;
