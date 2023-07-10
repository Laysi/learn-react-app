import React, { FC } from 'react';
import './ButtonBar.scss';

interface ButtonBarProps {}
let items: string[] = ['Home', 'Payments', 'Customers','Products','Reports'];
const ButtonBar: FC<ButtonBarProps> = () =>  {
  
  return (
    <div className="ChangeList">
      <div className="TextButton"></div>
      <span className="TextHome" style={{ left:64  }}>{items[0]}</span>

      <span className="TextHome" style={{ left:178 }}>{items[1]}</span>

      <span className="TextHome" style={{ left:318 }}>{items[2]}</span>

      <span className="TextHome" style={{ left:464 }}>{items[3]}</span>

      <span className="TextHome" style={{ left:598 }}>{items[4]}</span>

      <span className="text_Connect">{'Connect'}</span>

      <span className="text_More">{'More'}</span>
      
      
      <div className="Vector"></div>
      
      <span className="TextHome" style={{ left:1018 }}>{'Developers'}</span>


      <span className="TextHome" style={{left:1123}}>{'Test Mode'}</span>
      <label className="Switch" >
      <div className="Slider"></div>
      </label>
      

      

      </div>
  );
};

export default ButtonBar;
