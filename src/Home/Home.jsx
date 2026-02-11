import Header from "../components/header/Header";
import CardHero from "../components/component/CardHero";

export default function Home() {
  return (
    <div className="pt-80">
      <div>
        <Header />
        <div className=" absolute right-0">
          <CardHero />
        </div>
      </div>
    </div>
  );
}
