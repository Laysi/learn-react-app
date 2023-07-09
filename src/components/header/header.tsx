import React from 'react';
import MyComponent from '../../components/MyComponent';
interface HeaderProps {}
const header: React.FC<HeaderProps> = () => (
    <header>
        <MyComponent/>
    </header>
      
    
  );
  
  export default header;