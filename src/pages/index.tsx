import React from 'react';

import Head from 'next/head';

const Index = () => {
  return (
    <div className="p-32">
      <Head>
        <title>Intern assignment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-center text-dp-headline-3-t font-alternative font-semibold">
        Kære praktikansøger,
      </h1>
      <p className="text-xl font-sans text-gray-800 my-10 ">
        Scopet for denne opgave er at finde ud af hvor meget praktikanten ved om 
        de teknologier som Dreamplan bruger. Dette projekt er en standard
        React/Tailwind/NextJs/Typescript template som minder om Dreamplans
        nuværende frontend projekt. Du har fire timer til opgaven, og den 
        afleveres ved at create a fork med en beskrivelse af de features du har
        udviklet.
      </p>
      <h1 className="text-dp-headline-2-m font-alternative font-semibold">
        Intro 
      </h1>
      <p className="text-xl font-sans text-gray-800 mt-4 mb-10 ">
        Npm install projektet og opret en branch som inkluderer dit navn... Når du
        har fået installeret projektet, skal du gå ind på figma, her vil du
        finde det design som du skal udvikle ud fra. Til dagligt bliver alt
        designet til Dreamplans udviklere i figma.
        <br />
        <br />
        Figma link:
        https://www.figma.com/file/gKl0SZkthgwqR8434FL5fL/Intern-Assignment---Dat?node-id=0%3A1
        <br />
        <br />
        Bestræb dig på at udvikle så det ligner designet på figma så meget som
        muligt.
        <br />
        <br />
        Du skal udvikle så det er responsive i mobil, tablet og desktop view med
        tailwindCSS. Et godt råd er at udvikle mobile first og at starte med at
        kigge i tailwind.config filen, hvor vi allerede har sat pre-defineret
        styles ind som Dreamplan bruger.
      </p>
      <h1 className="text-dp-headline-4-m font-alternative font-semibold">
        1. Udvikle Q and A og Overblik
      </h1>
      <p className="text-xl font-sans text-gray-800 mt-4 mb-10 ">
        Du skal udvikle de to sider Q and A og Overblik du finder på figma
        linket i introen. Start med at oprette to pages under src/pages og prøv
        dig frem med at udvikle siderne gerne med komponenter, som skal
        genbruges for at holde din kode dry.
      </p>
      <h1 className="text-dp-headline-4-m font-alternative font-semibold">
        2. Header
      </h1>
      <p className="text-xl font-sans text-gray-800 mt-4 mb-10 ">
        Du skal udvikle en header som er gennemgående på begge sider. Det skal
        være muligt at navigere til den anden side fra headeren.
      </p>
      <h1 className="text-dp-headline-4-m font-alternative font-semibold">
        3. Footer(Ekstra)
      </h1>
      <p className="text-xl font-sans text-gray-800 mt-4 mb-10 ">
        Du skal udvikle en footer som er gennemgående på begge sider. Det skal
        være muligt at trykke på social media ikonerne og blive henvist til
        Dreamplans SoMe.
      </p>
      <h1 className="text-xl font-sans text-gray-800 mt-4 mb-10 font-semibold'">
        Vær gerne kreativ og gør dit bedste.
      </h1>
    </div>
  );
};

export default Index;
