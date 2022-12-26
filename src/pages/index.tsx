/* eslint-disable prettier/prettier */
import React from 'react';

import Footer from '../components/Header/Footer/footer';
import Header from '../components/Header/Header/header';

const Index = () => {
  return (
    <div>
      <Header/>
      <div className='bg-backgroundColor p-7 text-center'>
        <h2 className='text-lg text-whiteText'>Spørgsmål og svar</h2>
        <h1 className='text-2xl md:text-4xl w-80 ml-auto mr-auto font-bold text-whiteText'>Hej, hvordan kan vi hjælpe dig?</h1>
      </div>
      <div className='sm:columns-1 md:columns-2 lg:columns-2 xl:columns-2 m-8'>
        <div className='p-7 lg:px-20'>
          <h2 className='text-lg xl:text-2xl font-bold'>Generelt</h2>
          <p className='text-sm lg:text-base'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ipsum, modi veritatis provident necessitatibus voluptas sint. Mollitia enim quasi explicabo dignissimos distinctio debitis quia vero ad, suscipit, modi nisi assumenda? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolores iste? Earum quas </p>
        </div>
        <div className='p-7 lg:px-20'>
          <h2 className='text-lg xl:text-2xl font-bold'>Anvendelse</h2>
          <p className='text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellat temporibus at perspiciatis sit earum cupiditate ratione id recusandae, praesentium blanditiis. Laudantium minus culpa quos? Dignissimos earum non quo mollitia! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, </p>
        </div>
      </div>
      <div className='p-7 m-8 lg:px-20'>
        <h1 className='text-xl xl:text-2xl font-bold pb-2 md:pb-7 lg:pb-7'>Grundlæggende</h1>
        <details>
          <summary className='py-2 text-xl xs:text-base'>Hvordan får jeg adgang til min Dreamplan profil?</summary>
          <p className='text-sm lg:text-base lg:w-4/6 pb-5 pl-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sunt blanditiis hic, qui iusto, quia sint quisquam odit possimus assumenda, nemo explicabo nam ex consectetur. Ut temporibus enim vel iure.</p>
        </details>
        <details>
          <summary className='py-2 text-xl xs:text-base'>Hvornår begynder mit abonnement</summary>
          <p className='text-sm lg:text-base lg:w-4/6 pb-5 pl-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt impedit vero nam ullam aperiam libero non, nemo placeat modi ad ex obcaecati accusantium illo voluptates ab quos odit a sequi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia nemo fuga temporibus obcaecati ipsa perferendis repellat veritatis fugiat quod sit similique dicta illum earum deleniti, asperiores rem doloribus? Accusamus, corporis.</p>
        </details>
      </div>
      <Footer/>
    </div>
  );
};

export default Index;
