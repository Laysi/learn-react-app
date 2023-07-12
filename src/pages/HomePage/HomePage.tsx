import { type FC } from 'react';
import './HomePage.scss';
import Components from '../../Components/Components';
interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => (
  <div className="HomePage" data-testid="HomePage">
  <div> <Components /></div>
  </div>
);

export default HomePage;