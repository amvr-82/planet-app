import Header from "../components/header/Header";
import Herosection from "../components/component/herosection/Herosection";
import Call from "../components/component/others/Call";

export default function Home() {
  return (
    <div>
      <Header />
      <Herosection />
      <Call />
      {/* دیو کرات بزرگ زیر هدینگ */}
      <div className="flex card1 rounded-[90px] w-[90%] h-80 ml-auto mr-auto mt-50">
        {/* دیو عکس */}
        <div className="z-50 -mt-45">
          <img src="./public\assets\image\plant2.png" alt="" width={500} />
        </div>
        <div className="bg-yellow-500">ddd</div>
      </div>
    </div>
  );
}
