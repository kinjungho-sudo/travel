import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Common/Layout';
import TripList from './pages/TripList';
import ItineraryDetail from './pages/ItineraryDetail';
import BudgetTracker from './pages/BudgetTracker';
import PreparationChecklist from './pages/PreparationChecklist';
import FlightInfo from './pages/FlightInfo';
import HotelComparison from './pages/HotelComparison';

// 임시 페이지 컴포넌트
const MapView = () => <div style={{ padding: '20px' }}>지도 페이지</div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TripList />} />
          <Route path="itinerary" element={<ItineraryDetail />} />
          <Route path="map" element={<MapView />} />
          <Route path="budget" element={<BudgetTracker />} />
          <Route path="prepare" element={<PreparationChecklist />} />
          <Route path="flight" element={<FlightInfo />} />
          <Route path="hotel" element={<HotelComparison />} />
          <Route path="*" element={<TripList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



export default App;
