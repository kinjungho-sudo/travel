import React, { useState, useRef } from 'react';
import { ChevronLeft, Upload, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FlightData {
    airline: string;
    passengerName: string;
    departureTime: string;
    arrivalTime: string;
    flightNumber: string;
    from: string;
    to: string;
}

const FlightInfo: React.FC = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [activeTab, setActiveTab] = useState<'departure' | 'return'>('departure');

    const [departureFlight, setDepartureFlight] = useState<FlightData>({
        airline: '',
        passengerName: '',
        departureTime: '',
        arrivalTime: '',
        flightNumber: '',
        from: '',
        to: ''
    });

    const [returnFlight, setReturnFlight] = useState<FlightData>({
        airline: '',
        passengerName: '',
        departureTime: '',
        arrivalTime: '',
        flightNumber: '',
        from: '',
        to: ''
    });

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            simulateGeminiAnalysis(file);
        }
    };

    const simulateGeminiAnalysis = (_file: File) => {
        setIsAnalyzing(true);
        // 실제 Gemini API 연동 시에는 이 부분에서 API 호출 진행
        // 현재는 2초 후 더미 데이터를 채우는 것으로 시뮬레이션
        setTimeout(() => {
            const extractedData: FlightData = {
                airline: 'Korean Air',
                passengerName: 'KIM JUNG HO',
                departureTime: activeTab === 'departure' ? '2026-04-10T10:30' : '2026-04-15T18:00',
                arrivalTime: activeTab === 'departure' ? '2026-04-10T12:45' : '2026-04-15T20:15',
                flightNumber: activeTab === 'departure' ? 'KE703' : 'KE704',
                from: activeTab === 'departure' ? 'ICN' : 'NRT',
                to: activeTab === 'departure' ? 'NRT' : 'ICN'
            };

            if (activeTab === 'departure') {
                setDepartureFlight(extractedData);
            } else {
                setReturnFlight(extractedData);
            }
            setIsAnalyzing(false);
        }, 2000);
    };

    const currentFlight = activeTab === 'departure' ? departureFlight : returnFlight;
    const setCurrentFlight = activeTab === 'departure' ? setDepartureFlight : setReturnFlight;

    const updateField = (field: keyof FlightData, value: string) => {
        setCurrentFlight(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="fade-in" style={{ paddingBottom: '100px' }}>
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
                <button onClick={() => navigate('/itinerary')}><ChevronLeft size={24} /></button>
                <h2 style={{ fontSize: '18px', fontWeight: '700' }}>항공권 정보 등록</h2>
            </header>

            {/* Tabs */}
            <div style={{ display: 'flex', padding: '16px 20px', gap: '8px' }}>
                <button
                    onClick={() => setActiveTab('departure')}
                    style={{
                        flex: 1,
                        padding: '12px',
                        borderRadius: '12px',
                        fontSize: '14px',
                        fontWeight: '600',
                        backgroundColor: activeTab === 'departure' ? '#f0f9f9' : '#f8f9fa',
                        color: activeTab === 'departure' ? 'var(--primary-color)' : 'var(--text-sub)',
                        border: activeTab === 'departure' ? '1px solid var(--primary-color)' : '1px solid transparent'
                    }}
                >
                    출발 항공편
                </button>
                <button
                    onClick={() => setActiveTab('return')}
                    style={{
                        flex: 1,
                        padding: '12px',
                        borderRadius: '12px',
                        fontSize: '14px',
                        fontWeight: '600',
                        backgroundColor: activeTab === 'return' ? '#fff2f2' : '#f8f9fa',
                        color: activeTab === 'return' ? 'var(--secondary-color)' : 'var(--text-sub)',
                        border: activeTab === 'return' ? '1px solid var(--secondary-color)' : '1px solid transparent'
                    }}
                >
                    귀국 항공편
                </button>
            </div>

            <div style={{ padding: '0 20px' }}>
                {/* Upload Section */}
                <div
                    onClick={() => !isAnalyzing && fileInputRef.current?.click()}
                    style={{
                        padding: '32px 20px',
                        border: '2px dashed var(--border-color)',
                        borderRadius: '20px',
                        backgroundColor: '#fdfdfd',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '12px',
                        cursor: 'pointer',
                        marginBottom: '24px'
                    }}
                >
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        accept=".pdf,image/*"
                        onChange={handleFileUpload}
                    />
                    {isAnalyzing ? (
                        <>
                            <Loader2 size={32} className="spin" color="var(--primary-color)" />
                            <div style={{ textAlign: 'center' }}>
                                <p style={{ fontWeight: '700', marginBottom: '4px' }}>AI가 정보를 분석하고 있어요...</p>
                                <p style={{ fontSize: '12px', color: 'var(--text-sub)' }}>잠시만 기다려주세요 (Google Gemini)</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '50%',
                                backgroundColor: '#f0f9f9',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--primary-color)'
                            }}>
                                <Upload size={24} />
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <p style={{ fontWeight: '700', marginBottom: '4px' }}>항공권 파일 등록하기</p>
                                <p style={{ fontSize: '12px', color: 'var(--text-sub)' }}>PDF, JPG, PNG 파일 지원</p>
                            </div>
                        </>
                    )}
                </div>

                {/* Flight Form */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--text-sub)', marginBottom: '8px' }}>출발지</label>
                            <input
                                type="text"
                                value={currentFlight.from}
                                onChange={(e) => updateField('from', e.target.value)}
                                placeholder="예: ICN"
                                style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid var(--border-color)', fontSize: '15px' }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--text-sub)', marginBottom: '8px' }}>도착지</label>
                            <input
                                type="text"
                                value={currentFlight.to}
                                onChange={(e) => updateField('to', e.target.value)}
                                placeholder="예: NRT"
                                style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid var(--border-color)', fontSize: '15px' }}
                            />
                        </div>
                    </div>

                    <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--text-sub)', marginBottom: '8px' }}>항공사</label>
                        <input
                            type="text"
                            value={currentFlight.airline}
                            onChange={(e) => updateField('airline', e.target.value)}
                            placeholder="예: 대한항공"
                            style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid var(--border-color)', fontSize: '15px' }}
                        />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--text-sub)', marginBottom: '8px' }}>항공편명</label>
                            <input
                                type="text"
                                value={currentFlight.flightNumber}
                                onChange={(e) => updateField('flightNumber', e.target.value)}
                                placeholder="예: KE703"
                                style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid var(--border-color)', fontSize: '15px' }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--text-sub)', marginBottom: '8px' }}>탑승자명</label>
                            <input
                                type="text"
                                value={currentFlight.passengerName}
                                onChange={(e) => updateField('passengerName', e.target.value)}
                                placeholder="영문 성함"
                                style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid var(--border-color)', fontSize: '15px' }}
                            />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--text-sub)', marginBottom: '8px' }}>출발 시간</label>
                            <input
                                type="datetime-local"
                                value={currentFlight.departureTime}
                                onChange={(e) => updateField('departureTime', e.target.value)}
                                style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid var(--border-color)', fontSize: '14px' }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--text-sub)', marginBottom: '8px' }}>도착 시간</label>
                            <input
                                type="datetime-local"
                                value={currentFlight.arrivalTime}
                                onChange={(e) => updateField('arrivalTime', e.target.value)}
                                style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid var(--border-color)', fontSize: '14px' }}
                            />
                        </div>
                    </div>

                    <button
                        style={{
                            padding: '16px',
                            backgroundColor: 'var(--primary-color)',
                            color: 'white',
                            borderRadius: '16px',
                            fontWeight: '700',
                            fontSize: '16px',
                            marginTop: '12px'
                        }}
                    >
                        정보 저장하기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FlightInfo;
