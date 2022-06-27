import Header from "../components/Header/Header/header";
import Text from "../components/TextBlock";
import ToggleDisplay from "../components/ToggleDisplay";

const Index = () => {
  return (
    <main>
      <div className="mb-48">
        <Header
          title="Hej, hvordan kan vi hjælpe dig?"
          sub="SPØRGSMÅL OG SVAR"
          className="bg-teal px-2"
        />
      </div>
      <div className="container md:px-10 lg: px-20 xl:px-40">
        <div className="md:inline-flex justify-between gap-x-48 xl:gap-x-96 md:mb-20">
          <Text
            title="Generelt"
            text={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            ]}
          />
          <Text
            title="Anvendelse"
            text={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            ]}
          />
        </div>
        <div>
          <h1 className="text-dp-headline-3-m font-bold mb-12 mt-20">
            Grundlæggende
          </h1>
          <ToggleDisplay
            title="Hvordan får jeg adgang til min Dreamplan profil?"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit."
          />
          <ToggleDisplay
            title="Hvornår begynder mit abonnement"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit."
          />
        </div>
      </div>
    </main>
  );
};

export default Index;
