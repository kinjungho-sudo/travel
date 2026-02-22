import React, { useState } from 'react';
import { Plane, ChevronLeft, Upload, CheckCircle2, Circle, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FlightInfo: React.FC = () => {
    const navigate = useNavigate();
    const [complete, setComplete] = useState(false);

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
                <h2 style={{ fontSize: '18px' }}>항공권 정보</h2>
            </header>

            <div style={{ padding: '20px' }}>
                {/* Auto Registration Mockup */}
                <div style={{
                    padding: '32px 20px',
                    border: '2px dashed var(--border-color)',
                    borderRadius: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '24px',
                    textAlign: 'center'
                }}>
                    <Upload size={32} color="var(--primary-color)" />
                    <h3 style={{ fontSize: '16px' }}>항공권 등록하기</h3>
                    <p style={{ fontSize: '13px', color: 'var(--text-sub)' }}>
                        E-티켓 이미지나 PDF를 업로드하면<br />AI가 자동으로 정보를 입력해드려요.
                    </p>
                    <button style={{
                        marginTop: '8px',
                        padding: '10px 20px',
                        backgroundColor: 'var(--primary-color)',
                        color: 'var(--white)',
                        borderRadius: '8px',
                        fontWeight: '600',
                        fontSize: '14px'
                    }}>
                        파일 선택하기
                    </button>
                </div>

                {/* Flight Details Card */}
                <div style={{
                    backgroundColor: 'var(--white)',
                    borderRadius: '16px',
                    border: '1px solid var(--border-color)',
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                }}>
                    <div style={{ padding: '16px', backgroundColor: '#f8f9fa', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--primary-color)' }}>대한항공 KE1234</span>
                        <span style={{ fontSize: '12px', color: 'var(--text-sub)' }}>2026.03.10 (화)</span>
                    </div>
                    <div style={{ padding: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '24px', fontWeight: '800' }}>GMP</div>
                                <div style={{ fontSize: '12px', color: 'var(--text-sub)' }}>김포</div>
                                <div style={{ fontSize: '14px', fontWeight: '600', marginTop: '4px' }}>10:30</div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', flex: 1 }}>
                                <div style={{ fontSize: '10px', color: 'var(--text-sub)' }}>1시간 10분</div>
                                <div style={{ width: '100%', height: '1px', backgroundColor: '#ddd', position: 'relative' }}>
                                    <Plane size={14} style={{ position: 'absolute', top: '-7px', left: '45%', color: '#bbb' }} />
                                </div>
                                <div style={{ fontSize: '10px', color: 'var(--text-sub)' }}>직항</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '24px', fontWeight: '800' }}>CJU</div>
                                <div style={{ fontSize: '12px', color: 'var(--text-sub)' }}>제주</div>
                                <div style={{ fontSize: '14px', fontWeight: '600', marginTop: '4px' }}>11:40</div>
                            </div>
                        </div>

                        <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <DollarSign size={16} color="var(--text-sub)" />
                                <span style={{ fontSize: '14px', fontWeight: '600' }}>₩125,000</span>
                            </div>
                            <button
                                onClick={() => setComplete(!complete)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    fontSize: '13px',
                                    color: complete ? 'var(--primary-color)' : 'var(--text-sub)',
                                    fontWeight: '600'
                                }}
                            >
                                {complete ? <CheckCircle2 size={18} /> : <Circle size={18} />}
                                [김정호] 예약 완료
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlightInfo;
