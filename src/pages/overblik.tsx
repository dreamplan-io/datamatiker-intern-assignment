/* eslint-disable prettier/prettier */
import React from 'react';

import Link from 'next/link';

import Footer from '../components/Header/Footer/footer';
import Header from '../components/Header/Header/header';

const Overblik = () => {
  return <div>
    <Header/>
    <div className='bg-backgroundColorOverblik p-7 text-center'>
        <h2 className='text-lg text-whiteText'>Overblik</h2>
        <h1 className='text-2xl md:text-4xl w-80 ml-auto mr-auto font-bold text-whiteText'>Hej, her kan du få et overblik</h1>
    </div>
    <div className='m-8 p-7 lg:px-20'>
      <h2 className='text-lg xl:text-2xl font-bold'>Generelt</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis illo quas minus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum laudantium, molestias, quibusdam culpa quo adipisci, expedita deleniti consequuntur non alias eius ipsam error nemo iure cumque facilis rem corporis minus? Facere distinctio iste consectetur dignissimos non eligendi, nemo ab repudiandae numquam suscipit. Nam quas aut ab assumenda.</p>
      <br></br>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae rem unde cupiditate eveniet repudiandae, exercitationem sunt illum dolor! Ipsum harum quaerat neque ipsam adipisci dolore doloremque fugit esse. Porro, alias?</p>
    </div>

    <div className='flex justify-start xs:mx-14 lg:justify-center md:justify-center mb-32'>
      <Link href="/">
        <a href="" className='bg-buttonBlue py-3 px-6 rounded-full text-whiteText'>Læs mere på Q&A siden</a>
      </Link>
    </div>
    <Footer/>
  </div>;
};

export default Overblik;
