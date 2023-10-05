import { useState } from 'react';
import { v4 } from 'uuid'
import './Cart.css';

const Cart = () => {
  const items = [
    { id: "1", product: "經典優質組", price: 2000 },
    { id: "2", product: "星光豪華組", price: 3000 },
    { id: "3", product: "黃金尊榮組", price: 4000 },
    { id: "4", product: "鉑金特權組", price: 5000 },
    { id: "5", product: "鑽石極致組", price: 6000 },
    { id: "6", product: "皇家無上組", price: 7000 }
  ];

  const [ cart, setCart ] = useState([]);
  const [ item, setItem ] = useState("");
  const [ amount, setAmount ] = useState("1");

  const itemHandler = (e) => {
    e.preventDefault();
    const itemId = e.target.value;
    const selectedItem = items.find(item => item.id === itemId);
    setItem(selectedItem);
};
  const amountHandler = (e) => {
    e.preventDefault();
    const amountValue = e.target.value;
    if(amountValue>=0){
      setAmount(amountValue)
    }
  }
  
  const addToCart = (e) => {
    e.preventDefault();
    if(!item){
      alert("請選擇商品及數量");
    }else{
      setCart(prev => [
          ...prev,
          {
            id: v4(),
            productAndPrice:`${item.product} NT$${Number(amount * item.price)}`,
          }
      ]);
    }
  };

  const deleteFromCart = (e, itemId) => {
    e.preventDefault();
    setCart(prev => prev.filter((cartItem) => cartItem.id !== itemId ));
  }
    
  return (
    <div className="bg">
      <div className="cart">
        <form className="form">
          <label>
            <div>商品選擇</div>
            <select name="items" onChange={itemHandler}>
            <option disabled selected>請選擇</option>
              {items.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.product}
                </option>
              ))}
            </select>
          </label>
          <label>
            <div>購入數量</div>
            <input name="number" type="number" placeholder="請輸入數量" value={amount} onChange={amountHandler} />  
          </label>
          <div>單價: NT$ {item ? Number(item.price).toLocaleString() : 0}</div>
          <div>總價: NT$ {item ? Number(amount * item.price).toLocaleString() : 0}</div>
          <button type="button" onClick={addToCart}>加入購物車</button>      
          <div>
            <div>
              購物車內容:
              {cart.map((cartItem, index)=>{
                return (
                  <div className="cartItem" key={index}>
                    <div>{cartItem.productAndPrice}</div>
                    <button className="deleteButton" type="button" onClick={(e)=>deleteFromCart(e, cartItem.id)}>刪除</button>  
                  </div>
                )
              })}
            </div>
          </div>
          <div style={{color:"red", cursor:"pointer"}}>前往結帳</div>
        </form>
      </div>
    </div>
  )
}

export default Cart;
