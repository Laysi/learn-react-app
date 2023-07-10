import React, { FC,useState } from 'react';
import './HomePage.scss';
interface HomePageProps {}



const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="homepage">
      <div className="rectangle"> 
        <span className="Payments">Payments</span>
        
        <ParentText text="All-Payments">
          <ChildText text="All-transactions" />
        </ParentText>
        <ParentText text="Fraud-Risk">
          
        </ParentText>
        <ParentText text="Invoices">
          
        </ParentText>
        <ParentText text="Subscriptions">
      
        </ParentText>
        <ParentText text="Quotes">
      
        </ParentText>
        <ParentText text="Payment-Link" className="last-parent-text">

        </ParentText>
      </div> 
    </div>
  );
};

interface ParentTextProps {
  text: string;
  children: React.ReactNode;
  className?: string;
}

const ParentText: React.FC<ParentTextProps> = ({ text, children, className }) => {
  const [showChildren, setShowChildren] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setShowChildren(!showChildren);
    setClicked(!clicked);
  };

  return (
    <div className={`parent-text-container ${className ? className : ''}`}>
      <div className={`line${clicked ? ' clicked' : ''}`}></div>
      <p className={`parent-text${clicked ? ' clicked' : ''}`} onClick={handleClick}>
        {text}
      </p>
      {showChildren && <div className="child-container">{children}</div>}
    </div>
  );
};

interface ChildTextProps {
  text: string;
}

const ChildText: React.FC<ChildTextProps> = ({ text }) => {
  const [childClicked, setChildClicked] = useState(false);

  const handleChildClick = () => {
    setChildClicked(!childClicked);
  };

  return (
    <p className={`child-text${childClicked ? ' clicked' : ''}`} onClick={handleChildClick}>
      {text}
    </p>
  );
};

export default HomePage;
