import Header from "../components/header/Header";
import Card from "../components/component/card";

export default function Home() {
  return (
    <div className="pt-80">
      <div>
        <Header />
        <div className=" absolute right-0">
          <Card />
        </div>
      </div>
    </div>
  );
}
