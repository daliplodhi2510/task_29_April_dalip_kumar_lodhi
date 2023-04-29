import React, {useState, useEffect} from 'react';
import './App.css';
import { Navbar, Products, SideModel } from './component/';

function App() {
  const [addItem, setAddItem] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [showModel, setShowModel] = useState(false);


  const modelHandleClose = () => setShowModel(false);
  const modelHandleShow = () => setShowModel(true);

  const productCategory = [
    {
      id: 1,
      title: "Deal of",
      type: "The Day",
      url: "products"
    },
    {
      id: 2,
      title: "Big saving",
      type: "men's clothing",
      url: "products/category/men's clothing"
    },
    {
      id: 3,
      title: "Big saving",
      type: "electronics",
      url: "products/category/electronics"
    },
    {
      id: 4,
      title: "Big saving",
      type: "women's clothing",
      url: "products/category/women's clothing"
    },
    {
      id: 5,
      title: "Big saving",
      type: "jewelery",
      url: "products/category/jewelery"
    }
  ];

  const addProduct = (product) => {
    const productExist = addItem.find((item)=> item.id === product.id);
    if(productExist){
      const updateItem = addItem.map((item) => item.id === product.id ? {...item, qty: item.qty+1} : item);
      setAddItem(updateItem);
    } else {
      setAddItem([...addItem,{...product,qty:1}]);
    }
  }

  // const removeProduct = (product) => {
  //   console.log('delete',product);
  //   const productExist = addItem.find((item)=> item.id === product.id);
  //   if(productExist && productExist.qty > 1){
  //     const updateItem = addItem.map((item) => item.id === product.id ? {...item,qty:item.qty - 1} : item);
  //     setAddItem(updateItem);
  //   }
  // }

  const counterHelper = () => {
    let cartItem = 0;
    const totalPrice = addItem.reduce((total, item) => {
      cartItem = cartItem + item.qty;
      return total + (item.price * item.qty);
    }, 0);
    setTotalAmount(totalPrice);
    setTotalCount(cartItem);
  }

  useEffect(()=>{
    counterHelper();
  },[addItem]);

  return (
    <>
      <Navbar totalCount={totalCount} modelHandleShow={modelHandleShow} />
      {
        productCategory.map((item)=>{
            return <Products key={item.id} productType={item} addProduct={addProduct} />
          }
        )
      }
      <SideModel showModel={showModel} modelHandleClose={modelHandleClose} />
    </>
  );
}

export default App;
