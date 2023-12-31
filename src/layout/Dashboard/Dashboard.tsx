import { FC } from 'react';
import './Dashboard.scss';
import Header from '../../Components/Header/Header';
import HorizontalMenu from '../../Components/HorizontalMenu/HorizontalMenu';

interface DashboardProps {}
const Dashboard: FC<DashboardProps> = () => (
  <div className="Dashboard" data-testid="Dashboard">
    <div className="header">
    <Header />
    </div>
    <HorizontalMenu />
  </div>
);

export default Dashboard;
