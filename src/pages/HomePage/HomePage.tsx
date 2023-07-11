import React, { FC,useState } from 'react';
import './HomePage.scss';
import Components from './Components/Components';


interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  
  return (
    <div className="HomePage"> 
    <div> <Components /></div>
    </div>
  );
};

export default HomePage;
