import Header from "../components/header/Header";
import Herosection from "../components/component/herosection/Herosection";
import Call from "../components/component/others/Call";

export default function Home() {
  return (
    <div>
      <Header />
      <Herosection />
      <Call />
      <div className="card1 rounded-[60px] w-2xl h-50"></div>
    </div>
  );
}
