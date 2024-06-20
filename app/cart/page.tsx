"use client"
import Image from "next/image";
import useCartStore from '../store';
import { useState, useEffect } from "react";

export default function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);
  const cartItems = useCartStore((state) => state.cartItems);

  useEffect(() => {
    // 장바구니 아이템이 변경될 때마다 총 가격을 다시 계산
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    setTotalPrice(totalPrice);
  }, [cartItems]);

   return (
    <div>
      <h1 className="text-6xl mb-8">Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="mb-4 border-2 border-white flex items-center pl-8 gap-12">
            <h3 className="text-3xl">{item.title}</h3>
            <Image src={item.img} alt="food image" width={100} height={100}/>
              <p>Quantity: {item.quantity}</p>
              <p>Price: {item.price * item.quantity}</p>
          </li>
        ))}
      </ul>
      <p className="text-3xl">Total Price: <span className="text-orange-500">{totalPrice}</span>Won</p>
    </div>
  );
}
