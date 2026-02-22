import React from 'react';
import { ChevronLeft, Star, Heart, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HotelComparison: React.FC = () => {
    const navigate = useNavigate();

    const hotels = [
        {
            id: '1',
            name: '그랜드 조선 제주',
            price: '₩350,000~',
            rating: 4.8,
            reviews: 1250,
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&auto=format&fit=crop',
            features: ['인피니티 풀', '키즈 프렌들리', '오션뷰'],
            desc: '모던한 감성의 럭셔리 휴양을 제공하는 인기 호텔'
        },
        {
            id: '2',
            name: '파르나스 호텔 제주',
            price: '₩420,000~',
            rating: 4.9,
            reviews: 840,
            image: 'https://images.unsplash.com/photo-1582719478250-c89cae4df85b?w=400&auto=format&fit=crop',
            features: ['국내 최장 야외 풀', '서귀포 바다 전망', '미식'],
            desc: '압도적인 전망과 화려한 부대시설을 자랑하는 신축 호텔'
        }
    ];

    return (
        <div className="fade-in">
            <header style={{
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                borderBottom: '1px solid var(--border-color)',
                backgroundColor: 'var(--white)'
            }}>
                <button onClick={() => navigate(-1)}><ChevronLeft size={24} /></button>
                <h2 style={{ fontSize: '18px' }}>숙소 비교하기</h2>
            </header>

            <div style={{ padding: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
                    {hotels.map(hotel => (
                        <div key={hotel.id} style={{
                            borderRadius: '16px',
                            overflow: 'hidden',
                            backgroundColor: 'var(--white)',
                            border: '1px solid var(--border-color)',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.05)'
                        }}>
                            <div style={{ position: 'relative', height: '120px' }}>
                                <img src={hotel.image} alt={hotel.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <button style={{ position: 'absolute', top: '8px', right: '8px', color: 'var(--white)' }}>
                                    <Heart size={20} />
                                </button>
                            </div>
                            <div style={{ padding: '12px' }}>
                                <h3 style={{ fontSize: '14px', marginBottom: '4px', height: '40px', overflow: 'hidden' }}>{hotel.name}</h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
                                    <Star size={12} fill="#FFD700" color="#FFD700" />
                                    <span style={{ fontSize: '12px', fontWeight: 'bold' }}>{hotel.rating}</span>
                                    <span style={{ fontSize: '10px', color: 'var(--text-sub)' }}>({hotel.reviews})</span>
                                </div>
                                <div style={{ fontSize: '15px', fontWeight: '800', color: 'var(--secondary-color)' }}>{hotel.price}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Feature Comparison Table */}
                <div style={{ backgroundColor: 'var(--white)', borderRadius: '16px', border: '1px solid var(--border-color)', padding: '20px' }}>
                    <h3 style={{ fontSize: '16px', marginBottom: '16px' }}>상세 항목 비교</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f0f0f0', paddingBottom: '12px' }}>
                            <span style={{ fontSize: '13px', color: 'var(--text-sub)', width: '60px' }}>특징</span>
                            <div style={{ flex: 1, fontSize: '13px', textAlign: 'center' }}>{hotels[0].features.join(', ')}</div>
                            <div style={{ flex: 1, fontSize: '13px', textAlign: 'center', borderLeft: '1px solid #f0f0f0' }}>{hotels[1].features.join(', ')}</div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f0f0f0', paddingBottom: '12px' }}>
                            <span style={{ fontSize: '13px', color: 'var(--text-sub)', width: '60px' }}>요약</span>
                            <div style={{ flex: 1, fontSize: '12px', padding: '0 8px', color: 'var(--text-main)', lineHeight: '1.4' }}>{hotels[0].desc}</div>
                            <div style={{ flex: 1, fontSize: '12px', padding: '0 8px', color: 'var(--text-main)', lineHeight: '1.4', borderLeft: '1px solid #f0f0f0' }}>{hotels[1].desc}</div>
                        </div>
                    </div>
                    <button style={{
                        width: '100%',
                        marginTop: '20px',
                        padding: '12px',
                        backgroundColor: '#f0f9f9',
                        color: 'var(--primary-color)',
                        borderRadius: '12px',
                        fontSize: '14px',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                    }}>
                        웹사이트에서 더 보기 <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HotelComparison;
