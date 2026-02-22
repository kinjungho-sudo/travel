import React from 'react';
import { Plus, Calendar as CalendarIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Trip {
    id: string;
    title: string;
    date: string;
    location: string;
    image: string;
}

const TripList: React.FC = () => {
    const navigate = useNavigate();
    const trips: Trip[] = [
        {
            id: '1',
            title: '제주도 힐링 여행',
            date: '2026.03.10 - 2026.03.15',
            location: '대한민국 제주도',
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop'
        }
    ];

    return (
        <div className="fade-in">
            <header style={{ padding: '24px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 style={{ fontSize: '22px' }}>나의 여행</h1>
                <button style={{ color: 'var(--primary-color)' }}>
                    <Plus size={24} />
                </button>
            </header>

            <div style={{ padding: '0 20px' }}>
                {trips.map(trip => (
                    <div
                        key={trip.id}
                        onClick={() => navigate('/itinerary')}
                        style={{
                            position: 'relative',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            marginBottom: '20px',
                            height: '180px',
                            cursor: 'pointer',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        }}
                    >
                        <img
                            src={trip.image}
                            alt={trip.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            padding: '20px',
                            background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                            color: 'var(--white)'
                        }}>
                            <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>{trip.title}</h3>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', opacity: 0.9 }}>
                                <CalendarIcon size={14} />
                                <span>{trip.date}</span>
                            </div>
                        </div>
                    </div>
                ))}

                <div style={{
                    padding: '24px',
                    border: '2px dashed var(--border-color)',
                    borderRadius: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px',
                    color: 'var(--text-sub)'
                }}>
                    <Plus size={32} />
                    <span style={{ fontSize: '14px', fontWeight: '500' }}>새로운 여행을 계획해보세요</span>
                </div>
            </div>
        </div>
    );
};

export default TripList;
