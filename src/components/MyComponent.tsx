import React from 'react';
import './MyComponent.scss';
interface MyComponentProps {}
let str: string[] = ['Home', 'Payments', 'Customers','Products','Reports','Connect'];
const MyComponent: React.FC<MyComponentProps> = () => {
  return (
    <div className="rectangle">
      <img src="home.jpg"  className="home_rectangle" alt="Image Description" />
      <span className="text_home">{str[0]}</span>

      <span className="text_Payments">{str[1]}</span>

      <span className="text_Customers">{str[2]}</span>

      <span className="text_Products">{str[3]}</span>

      <span className="text_Reports">{str[4]}</span>

      <span className="text_Connect">{str[5]}</span>

      <span className="text_More">{'More'}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6"  viewBox="0 0 10 6" fill="none" className="vector">
        <path id="Vector 3" d="M1 1L5 5L9 1" stroke="#0C1E5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <span className="text_Developers">{'Developers'}</span>


      <span className="text_Mode">{'Test Mode'}</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 24" fill="none" className="switch_test">
      <rect width="44" height="24" rx="12" fill="#DCE0ED"/>
      <rect x="2" y="2" width="20" height="20" rx="10" fill="white"/>
      </svg>

      

      </div>
  );
};

export default MyComponent;
