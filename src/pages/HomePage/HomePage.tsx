import React, { FC } from 'react';
import './HomePage.scss';
import ButtonBar from '../../components/ButtonBar/ButtonBar'
interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => (
  <div className="HomePage" data-testid="HomePage">
    <ButtonBar/>
  </div>
);

export default HomePage;
