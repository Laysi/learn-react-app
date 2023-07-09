import React, { FC } from 'react';
import './HomePage.scss';
import MyComponent from '../../components/MyComponent';
interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => (
  <div className="HomePage" data-testid="HomePage">
    {/* <MyComponent/> */}
  </div>
);

export default HomePage;
