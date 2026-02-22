import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Map, Calendar, Wallet, CheckSquare } from 'lucide-react';

const BottomNav: React.FC = () => {
  const navItems = [
    { icon: <Home size={24} />, label: '홈', path: '/' },
    { icon: <Calendar size={24} />, label: '일정', path: '/itinerary' },
    { icon: <Map size={24} />, label: '지도', path: '/map' },
    { icon: <Wallet size={24} />, label: '예산', path: '/budget' },
    { icon: <CheckSquare size={24} />, label: '준비', path: '/prepare' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      maxWidth: '480px',
      margin: '0 auto',
      backgroundColor: 'var(--white)',
      borderTop: '1px solid var(--border-color)',
      paddingBottom: 'calc(10px + var(--safe-area-bottom))',
      paddingTop: '10px',
      display: 'flex',
      justifyContent: 'space-around',
      zIndex: 1000
    }}>
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          style={({ isActive }) => ({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: isActive ? 'var(--primary-color)' : 'var(--text-sub)',
            gap: '4px',
            fontSize: '12px',
            fontWeight: isActive ? '600' : '400',
            transition: 'all 0.2s ease'
          })}
        >
          {item.icon}
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNav;
