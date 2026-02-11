import Header from "../components/header/Header";
import Herosection from "../components/component/herosection/Herosection";

export default function Home() {
  return (
    <div className="pt-100">
      <div>
        <Header />
        <div className=" absolute right-0">
          <Herosection />
        </div>
      </div>
    </div>
  );
}
