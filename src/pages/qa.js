import { useState } from 'react';

const FAQ1 = {
  question: "Hvordan får jeg adgang til min Dreamplan profil?",
  answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
    "laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit.",
}

const FAQ2 = {
  question: "Hvornår begynder mit abonnement?",
  answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
    "laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit.",
}

const content1 = {
  header: "Generelt",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
    "laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit.",
}

const content2 = {
  header: "Anvendelse",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
    "laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit.",
}

function Info({content}) {

  let {header:header, description:description} = content

  return <div className='py-5 pl-2 pr-4 mx-0 md:mx-10'>
    <h2 className=' text-left text-dp-jet font-bold font-alternative text-dp-headline-5-m '>{header}</h2>
    <h4 className='text-dp-bodytext-l-m'>{description}</h4>
  </div>
}

function ExpandableBulletPoint({faq}) {

  let {question:question, answer:answer} = faq

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }
  return (<div className='flex flex-col py-3'>
    <div className="flex flex-row">
      <button onClick={toggleOpen} className='pr-5'>></button>
      <h4 className='text-dp-jet font-medium text-dp-headline-6-m mx-0'>{question}</h4>
    </div>
    {isOpen ? <h4 className="pl-8">{answer}</h4> : null}
    </div>)
}


export default function () {

  return (
    <div className="flex flex-col">
      <section className="flex flex-col mx-0 py-32  items-center bg-dp-medium-blue md:py-40">
        <h1 className="text-white text-dp-bodytext-l-m text-center">SPØRGSMÅL OG SVAR</h1>
        <h1 className="text-white text-dp-headline-2-m text-center font-alternative">Hej, hvordan kan vi hjælpe
          dig?</h1>
      </section>

      <section className="flex flex-col mx-auto px-10 py-20 md:flex-row">
        <Info content={content1} />
        <Info content={content2} />
      </section>

      <section className="flex flex-col mx-1 px-10 md:mx-10">
        <h2 className="mb-10 text-dp-jet font-bold font-alternative text-left text-2xl">Grundlæggende</h2>
        <ExpandableBulletPoint faq={FAQ1}/>
        <ExpandableBulletPoint faq={FAQ2}/>
      </section>
    </div>
  );
}

