import { AppProps } from 'next/app';
import { useState } from 'react';
import Header from '../components/Header/Header/header';
import Index from './index';
import Overblik from './overblik';
import Footer from '../components/Header/Footer/footer';
import '../styles/global.css';


const MyApp = ({ }: AppProps) => {

  // Set default component to index
  const [activeComponent, setActiveComponent] =  useState('index');

  // Update state with the clicked component
  const handleClick = (component: string) => {
    setActiveComponent(component);
  };

  return (
    <div>
      <Header onClick={handleClick} />
      {activeComponent === 'index' && <Index />}
      {activeComponent === 'overblik' && <Overblik onClick={handleClick} />}
      <Footer onClick={handleClick} />
    </div>
  );
};

export default MyApp;
