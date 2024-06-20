import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-white text-7xl text-center mt-48 font-extrabold">Bring healthy food to your home right now!</h1>
      <Image src="/images/food-bg.jpg" alt="food-bg" width={1000} height={800} className="mt-16 rounded-lg m-auto"/>
    </div>
  );
}
