import React from 'react';
import Lokation from './parts/lokation';
import Mail from './parts/mail';
import Telefon from './parts/telefon';
import CVR from './parts/cvr';

const Footer = () => {
  return <div className="border-4 fixed flex inset-x-0 bottom-0 columns-3 bg-white">
      <div className="col-start-1 columns-xl">
        <img className="w-16 m-8 mb-0 mt-4" src="https://www.dreamplan.io/images/logo.png"></img>
        <Lokation/>
        <Mail/>
        <Telefon/>
        <CVR/>
      </div>
      <div className="columns-xl text-right">Følg os på sociale medier:</div>
      {/*Copyright*/}
      <div className="fixed inset-x-0 bottom-0 text-center p-4 text-gray-500">@ Copyright Dreamplan.io</div>
  </div>;
};
export default Footer;