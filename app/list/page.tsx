"use client";
import Image from "next/image";
import { useState } from "react";
import useCartStore from '../store';

interface Production {
  title: string;
  price: number;
  img: string;
  des: string;
}

const List: React.FC = () => {
  const [selectedProduction, setSelectedProduction] = useState<Production | null>(null);

  const productionList: Production[] = [
    {
      title: 'tomato',
      price: 1800,
      img: `/images/tomato.png`,
      des: 'Tomatoes are a versatile and nutritious fruit, widely used in culinary dishes around the world. They are rich in vitamins A, C, and K, and contain antioxidants such as lycopene, which is known for its numerous health benefits. Tomatoes can be enjoyed fresh in salads, cooked in sauces, or even as a base for soups and stews. Their sweet and tangy flavor enhances the taste of any dish, making them a staple ingredient in many cuisines.'
    },
    {
      title: 'coconut',
      price: 6500,
      img: `/images/coco.png`,
      des: "Coconut is a tropical fruit known for its refreshing water, creamy milk, and flavorful flesh. It's highly nutritious, offering a good source of fiber, vitamins, and minerals such as iron, magnesium, and potassium. Coconut can be used in a multitude of ways in cooking and baking. The flesh can be eaten raw or dried, the milk can be used in curries and smoothies, and the oil is popular for its health benefits and versatility in the kitchen. Its unique, slightly sweet flavor adds a tropical touch to both savory and sweet dishes."
    },{
      title: 'pasta',
      price: 8000,
      img: `/images/pasta.png`,
      des: "Pasta is a beloved staple food originating from Italy, made from durum wheat and water. It comes in various shapes and sizes, each suitable for different types of sauces and preparations. Whether it's spaghetti, penne, fusilli, or farfalle, pasta is a versatile ingredient that can be enjoyed in countless dishes. It pairs well with a variety of sauces, including marinara, Alfredo, pesto, and more. Pasta is not only delicious but also a good source of carbohydrates, providing energy and satisfaction in every bite."
    },
  ]

  return (
    <>
      <div className="flex gap-12 justify-center mt-10 flex-wrap items-stretch">
        {productionList.map((data) => (
          <div key={data.title} className="text-center p-10 bg-white rounded-lg hover:opacity-50 cursor-pointer w-80" onClick={()=>setSelectedProduction(data)}>
            <h4 className="font-bold text-3xl mb-3 text-red-600">{data.title}</h4>
            <Image src={data.img} alt="food image" width={300} height={300} className="m-auto" />
            <p className="text-sky-500">price: {data.price}</p>
          </div>
        ))
        }
      </div>
      <Detail selectedProduction={selectedProduction}/>
    </>
  )
};

interface DetailProps {
  selectedProduction: Production | null;
}

const Detail: React.FC<DetailProps> = ({ selectedProduction }) => {

  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (product:Production) => {
    addToCart(product);
  };

  return (
    <>
      {selectedProduction && (
        <div className="desBox">
            <h2 className="text-3xl mb-5">
              {selectedProduction.title} {selectedProduction.price}Won
              <button className="bg-red-600 text-white p-1 rounded-md ml-3"
              onClick={()=>handleAddToCart(selectedProduction)}
              >Add to Cart</button>
            </h2>
            <h4>
              {selectedProduction.des}
            </h4>
        </div>
      )}
    </>
  );
};

export default List