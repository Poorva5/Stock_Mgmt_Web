import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import StatusCard from './StatusCard';
import {StatusCardContainer} from './StyledHome';
import {fetchDashboardList} from '../../store/dashboard';

const StockStatus = () => {
  const {isLoading, dashboard} = useSelector (state => state.dashboard);
  const cards = [
    {title: 'Total Stock for Today', count: dashboard.total_stock, color: "#5585b5"},
    {title: 'Total Sales for Today (in Rs)', count: dashboard.total_sales, color: "#53a8b6"},
    {title: 'Total Profit & Loss (in Rs)', count: dashboard.total_profit_loss, color: "#79c2d0"},
    {title: 'New Orders', count: dashboard?.new_orders?.length, color: "#bbe4e9"},
  ];
  const dispatch = useDispatch ();
  useEffect (
    () => {
      dispatch (fetchDashboardList ());
      console.log(dashboard, 'dashboard')
    },
    []
  );
  return (
    <StatusCardContainer>
      {cards.map (card => (
        <StatusCard key={card.title} card={card} isLoading={isLoading} color={card.color} />
      ))}
    </StatusCardContainer>
  );
};

export default StockStatus;
