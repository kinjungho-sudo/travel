import React, { useState } from 'react';
import { Clock, MoreHorizontal, Plus, ChevronLeft, Cloud, RefreshCw, Plane, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ItineraryDetail: React.FC = () => {
    const navigate = useNavigate();
    const [activeDay, setActiveDay] = useState(1);

    const days = [1, 2, 3, 4, 5];

    const schedules = [
        {
            id: '1',
            time: '10:00 AM',
            place: '제주 국제공항',
            category: '교통',
            memo: '렌터카 픽업 잊지 말기!',
            price: '₩0'
        },
        {
            id: '2',
            time: '12:30 PM',
            place: '우진해장국',
            category: '음식점',
            memo: '고사리 육개장 맛집',
            price: '₩10,000'
        },
        {
            id: '3',
            time: '02:30 PM',
            place: '함덕 해수욕장',
            category: '관광지',
            memo: '바다 보며 힐링하기',
            price: '₩0'
        }
    ];

    return (
        <div className="fade-in">
            {/* Header */}
            <header style={{
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                borderBottom: '1px solid var(--border-color)',
                position: 'sticky',
                top: 0,
                backgroundColor: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(10px)',
                zIndex: 100
            }}>
                <button onClick={() => navigate('/')}><ChevronLeft size={24} /></button>
                <h2 style={{ fontSize: '18px' }}>제주도 힐링 여행</h2>
            </header>

            {/* Contextual Info Bar (Weather, Exchange) */}
            <div style={{
                padding: '12px 20px',
                backgroundColor: '#fff',
                borderBottom: '1px solid var(--border-color)',
                display: 'flex',
                gap: '16px'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
                    <Cloud size={16} color="var(--primary-color)" />
                    <span>맑음 12°C</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
                    <RefreshCw size={14} color="var(--text-sub)" />
                    <span>1,340원 (USD)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', marginLeft: 'auto' }}>
                    <Clock size={14} color="var(--text-sub)" />
                    <span>오후 11:32</span>
                </div>
            </div>

            {/* Action Buttons (Flight, Hotel) */}
            <div style={{ padding: '16px 20px 4px', display: 'flex', gap: '12px' }}>
                <button
                    onClick={() => navigate('/flight')}
                    style={{
                        flex: 1,
                        padding: '12px',
                        backgroundColor: '#f0f9f9',
                        borderRadius: '12px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                        alignItems: 'center'
                    }}
                >
                    <Plane size={20} color="var(--primary-color)" />
                    <span style={{ fontSize: '12px', fontWeight: '600' }}>항공권</span>
                </button>
                <button
                    onClick={() => navigate('/hotel')}
                    style={{
                        flex: 1,
                        padding: '12px',
                        backgroundColor: '#fff2f2',
                        borderRadius: '12px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                        alignItems: 'center'
                    }}
                >
                    <Building2 size={20} color="var(--secondary-color)" />
                    <span style={{ fontSize: '12px', fontWeight: '600' }}>숙소 비교</span>
                </button>
            </div>

            {/* Day Selector */}
            <div style={{
                display: 'flex',
                overflowX: 'auto',
                padding: '12px 20px',
                gap: '12px',
                scrollbarWidth: 'none'
            }}>
                {days.map(day => (
                    <button
                        key={day}
                        onClick={() => setActiveDay(day)}
                        style={{
                            padding: '8px 16px',
                            borderRadius: '20px',
                            fontSize: '14px',
                            fontWeight: '600',
                            whiteSpace: 'nowrap',
                            backgroundColor: activeDay === day ? 'var(--primary-color)' : '#f0f0f0',
                            color: activeDay === day ? 'var(--white)' : 'var(--text-sub)',
                            transition: 'all 0.2s'
                        }}
                    >
                        DAY {day}
                    </button>
                ))}
            </div>

            {/* Itinerary Timeline */}
            <div style={{ padding: '20px' }}>
                <div style={{ position: 'relative' }}>
                    {/* Vertical Line */}
                    <div style={{
                        position: 'absolute',
                        left: '11px',
                        top: '0',
                        bottom: '0',
                        width: '2px',
                        backgroundColor: '#eee'
                    }} />

                    {schedules.map((item, index) => (
                        <div key={item.id} style={{
                            display: 'flex',
                            gap: '20px',
                            marginBottom: '32px',
                            position: 'relative'
                        }}>
                            {/* Point */}
                            <div style={{
                                width: '24px',
                                height: '24px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--white)',
                                border: `3px solid var(--primary-color)`,
                                zIndex: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '10px',
                                fontWeight: 'bold',
                                color: 'var(--primary-color)'
                            }}>
                                {index + 1}
                            </div>

                            {/* Content Card */}
                            <div style={{
                                flex: 1,
                                backgroundColor: 'var(--white)',
                                borderRadius: '12px',
                                padding: '16px',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                                border: '1px solid var(--border-color)'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                    <span style={{ fontSize: '12px', color: 'var(--primary-color)', fontWeight: '600' }}>{item.category}</span>
                                    <span style={{ fontSize: '12px', color: 'var(--text-sub)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <Clock size={12} /> {item.time}
                                    </span>
                                </div>
                                <h4 style={{ fontSize: '16px', marginBottom: '6px' }}>{item.place}</h4>
                                {item.memo && <p style={{ fontSize: '13px', color: 'var(--text-sub)', marginBottom: '8px' }}>{item.memo}</p>}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
                                    <span style={{ fontWeight: '600', color: 'var(--text-main)' }}>{item.price}</span>
                                    <button style={{ color: 'var(--text-sub)' }}><MoreHorizontal size={18} /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button style={{
                    width: '100%',
                    padding: '14px',
                    borderRadius: '12px',
                    backgroundColor: '#f8f9fa',
                    border: '1px dashed var(--border-color)',
                    color: 'var(--primary-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    fontWeight: '600',
                    marginTop: '10px'
                }}>
                    <Plus size={20} /> 장소 추가하기
                </button>
            </div>
        </div>
    );
};

export default ItineraryDetail;
