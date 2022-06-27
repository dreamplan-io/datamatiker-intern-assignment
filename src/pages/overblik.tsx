import Link from "next/link";
import Header from "../components/Header/Header/header";
import Text from "../components/TextBlock";

const Overblik = () => {
  return (
    <div>
      <div className="mb-36 xl:mb-48">
        <Header
          sub="OVERBLIK"
          title="Hej, her kan du få et overblik"
          className="bg-greenish px-2"
        />
      </div>
      <div className="container px-2 md:px-8 xl:px-64 mb-12">
        <Text
          title="Generelt"
          text={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit.",
          ]}
        />
        <div className="md:grid md:place-items-center">
          <Link href="/">
            <button className="bg-dp-blue-500 text-white rounded-full px-8 py-4">
              Læs mere på Q&A siden
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Overblik;
