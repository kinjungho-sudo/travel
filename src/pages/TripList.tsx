import React, { useState, useEffect } from 'react';
import { Plus, Calendar as CalendarIcon, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Trip {
    id: string;
    country: string;
    region: string;
    startDate: string;
    endDate: string;
    image: string;
}

const TripList: React.FC = () => {
    const navigate = useNavigate();
    const [trips, setTrips] = useState<Trip[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newTrip, setNewTrip] = useState({
        country: '',
        region: '',
        startDate: '',
        endDate: ''
    });

    // Load trips from localStorage on mount
    useEffect(() => {
        const savedTrips = localStorage.getItem('travel_trips');
        if (savedTrips) {
            setTrips(JSON.parse(savedTrips));
        }
    }, []);

    // Save trips to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('travel_trips', JSON.stringify(trips));
    }, [trips]);

    const handleAddTrip = () => {
        if (!newTrip.country || !newTrip.region || !newTrip.startDate || !newTrip.endDate) {
            alert('모든 필드를 입력해주세요.');
            return;
        }

        const trip: Trip = {
            id: Date.now().toString(),
            ...newTrip,
            image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop' // 랜덤 여행지 이미지
        };

        setTrips([...trips, trip]);
        setIsModalOpen(false);
        setNewTrip({ country: '', region: '', startDate: '', endDate: '' });
    };

    return (
        <div className="fade-in" style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
            {/* Welcome Banner */}
            <div style={{
                padding: '40px 20px',
                background: 'linear-gradient(135deg, #26D2CA 0%, #1db4ae 100%)',
                color: 'white',
                borderRadius: '0 0 32px 32px',
                marginBottom: '24px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <h1 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '8px' }}>어디로 떠나시나요? ✈️</h1>
                    <p style={{ opacity: 0.9, fontSize: '15px' }}>새로운 여행 계획을 세우고 파트너와 공유해보세요.</p>
                </div>
                <div style={{
                    position: 'absolute',
                    right: '-20px',
                    bottom: '-10px',
                    opacity: 0.2,
                    transform: 'rotate(-15deg)'
                }}>
                    <CalendarIcon size={120} />
                </div>
            </div>

            <header style={{ padding: '0 20px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '18px', fontWeight: '700' }}>나의 여행 일정</h2>
                <button
                    onClick={() => setIsModalOpen(true)}
                    style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--primary-color)',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Plus size={20} />
                </button>
            </header>

            <div style={{ padding: '0 20px 100px' }}>
                {trips.length === 0 ? (
                    <div
                        onClick={() => setIsModalOpen(true)}
                        style={{
                            padding: '60px 20px',
                            border: '2px dashed var(--border-color)',
                            borderRadius: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '16px',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                        }}
                    >
                        <div style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '50%',
                            backgroundColor: '#f0f9f9',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--primary-color)'
                        }}>
                            <Plus size={32} />
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ fontWeight: '600', color: 'var(--text-main)', marginBottom: '4px' }}>새로운 여행을 계획해보세요</p>
                            <p style={{ fontSize: '13px', color: 'var(--text-sub)' }}>여기에 여행 일정이 표시됩니다.</p>
                        </div>
                    </div>
                ) : (
                    trips.map(trip => (
                        <div
                            key={trip.id}
                            onClick={() => navigate('/itinerary')}
                            style={{
                                position: 'relative',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                marginBottom: '20px',
                                height: '180px',
                                cursor: 'pointer',
                                boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                            }}
                        >
                            <img
                                src={trip.image}
                                alt={trip.region}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: '20px',
                                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                                color: 'var(--white)'
                            }}>
                                <div style={{ fontSize: '12px', fontWeight: '600', color: 'var(--primary-color)', marginBottom: '4px' }}>{trip.country}</div>
                                <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '8px' }}>{trip.region}</h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', opacity: 0.9 }}>
                                    <CalendarIcon size={14} />
                                    <span>{trip.startDate} - {trip.endDate}</span>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Add Trip Modal */}
            {isModalOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'end',
                    justifyContent: 'center',
                    zIndex: 2000
                }}>
                    <div className="fade-in" style={{
                        width: '100%',
                        maxWidth: '480px',
                        backgroundColor: 'white',
                        borderRadius: '24px 24px 0 0',
                        padding: '24px 20px calc(24px + var(--safe-area-bottom))',
                        maxHeight: '90vh',
                        overflowY: 'auto'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                            <h3 style={{ fontSize: '20px', fontWeight: '800' }}>새 여행 등록</h3>
                            <button onClick={() => setIsModalOpen(false)}><X size={24} /></button>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>국가</label>
                                <input
                                    type="text"
                                    placeholder="예: 일본, 미국"
                                    value={newTrip.country}
                                    onChange={(e) => setNewTrip({ ...newTrip, country: e.target.value })}
                                    style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid var(--border-color)', backgroundColor: '#f8f9fa' }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>지역</label>
                                <input
                                    type="text"
                                    placeholder="예: 시즈오카, 뉴욕"
                                    value={newTrip.region}
                                    onChange={(e) => setNewTrip({ ...newTrip, region: e.target.value })}
                                    style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid var(--border-color)', backgroundColor: '#f8f9fa' }}
                                />
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>시작일</label>
                                    <input
                                        type="date"
                                        value={newTrip.startDate}
                                        onChange={(e) => setNewTrip({ ...newTrip, startDate: e.target.value })}
                                        style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid var(--border-color)', backgroundColor: '#f8f9fa' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>종료일</label>
                                    <input
                                        type="date"
                                        value={newTrip.endDate}
                                        onChange={(e) => setNewTrip({ ...newTrip, endDate: e.target.value })}
                                        style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid var(--border-color)', backgroundColor: '#f8f9fa' }}
                                    />
                                </div>
                            </div>

                            <button
                                onClick={handleAddTrip}
                                style={{
                                    width: '100%',
                                    padding: '16px',
                                    borderRadius: '16px',
                                    backgroundColor: 'var(--primary-color)',
                                    color: 'white',
                                    fontWeight: '700',
                                    fontSize: '16px',
                                    marginTop: '12px',
                                    boxShadow: '0 4px 12px rgba(38, 210, 202, 0.3)'
                                }}
                            >
                                일정 만들기
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TripList;
