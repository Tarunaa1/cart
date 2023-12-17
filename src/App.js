import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductsList";
import Footer from "./components/Footer";
import React, { useState } from "react";
import Additem from "./components/additem";

function App() {
  const products = [
    {
      price: 99999,
      name: "IPhone 10S Max",
      quantity: 0,
    },
    {
      price: 119999,
      name: "IPhone 12 Pro Max",
      quantity: 0,
    },
  ];
  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);
  let incrementQ = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity++;
    let newtot = totalAmount;
    newtot += newProductList[index].price;
    setTotalAmount(newtot);
    setProductList(newProductList);
  };
  let decrementQ = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity--;
    let newtot = totalAmount;
    newtot -= newProductList[index].price;
    setTotalAmount(newtot);
    setProductList(newProductList);
  };
  let resetB = () => {
    let newProductList = [...productList];
    newProductList.map((products) => {
      products.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };
  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const add = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({ price: price, name: name, quantity: 0 });
    setProductList(newProductList);
  };

  return (
    <>
      <Navbar />
      <Additem add={add} />
      <h4 className="row m-5">Items in your cart: </h4>
      <main className="container">
        <ProductList
          productList={productList}
          incrementQ={incrementQ}
          decrementQ={decrementQ}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetB={resetB} />
    </>
  );
}

export default App;
