import React from 'react';
import { Plus, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

const BudgetTracker: React.FC = () => {
    const expenses = [
        { id: '1', title: '항공권 결제', category: '항공', price: 1250000, date: '2026.02.20' },
        { id: '2', title: '그랜드 조선 호텔', category: '숙박', price: 850000, date: '2026.02.21' },
        { id: '3', title: '우진해장국 점심', category: '식비', price: 10000, date: '2026.03.10' },
        { id: '4', title: '렌터카 비용', category: '교통', price: 150000, date: '2026.02.22' },
    ];

    const totalBudget = 3000000;
    const spent = expenses.reduce((acc, curr) => acc + curr.price, 0);
    const remaining = totalBudget - spent;

    return (
        <div className="fade-in" style={{ paddingBottom: '20px' }}>
            <header style={{ padding: '24px 20px', backgroundColor: 'var(--white)' }}>
                <h1 style={{ fontSize: '22px', marginBottom: '4px' }}>가계부</h1>
                <p style={{ fontSize: '14px', color: 'var(--text-sub)' }}>파트너와 함께 지출을 관리하세요.</p>
            </header>

            {/* Summary Card */}
            <div style={{
                margin: '0 20px 24px',
                padding: '24px',
                background: 'linear-gradient(135deg, var(--primary-color), #1db4ae)',
                borderRadius: '20px',
                color: 'var(--white)',
                boxShadow: '0 8px 16px rgba(38, 210, 202, 0.2)'
            }}>
                <div style={{ marginBottom: '20px', opacity: 0.9, fontSize: '14px', fontWeight: '500' }}>남은 예산</div>
                <div style={{ fontSize: '32px', fontWeight: '800', marginBottom: '24px' }}>₩{remaining.toLocaleString()}</div>

                <div style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '12px', opacity: 0.8, marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <ArrowDownLeft size={12} /> 총 예산
                        </div>
                        <div style={{ fontSize: '16px', fontWeight: '600' }}>₩{totalBudget.toLocaleString()}</div>
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '12px', opacity: 0.8, marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <ArrowUpRight size={12} /> 지출 합계
                        </div>
                        <div style={{ fontSize: '16px', fontWeight: '600' }}>₩{spent.toLocaleString()}</div>
                    </div>
                </div>
            </div>

            {/* Expense List */}
            <div style={{ padding: '0 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <h3 style={{ fontSize: '16px' }}>지출 내역</h3>
                        <span style={{ fontSize: '12px', color: 'var(--text-sub)' }}>총 {expenses.length}건</span>
                    </div>
                    <button style={{ color: 'var(--primary-color)', fontSize: '14px', fontWeight: '600' }}>
                        통계 보기
                    </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {expenses.map(expense => (
                        <div
                            key={expense.id}
                            style={{
                                padding: '16px',
                                borderRadius: '12px',
                                backgroundColor: 'var(--white)',
                                border: '1px solid var(--border-color)',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <div>
                                <div style={{ fontSize: '15px', fontWeight: '600', marginBottom: '2px' }}>{expense.title}</div>
                                <div style={{ fontSize: '12px', color: 'var(--text-sub)' }}>{expense.date} • {expense.category}</div>
                            </div>
                            <div style={{ fontSize: '16px', fontWeight: '700', color: 'var(--secondary-color)' }}>
                                - ₩{expense.price.toLocaleString()}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating Action Button */}
            <button style={{
                position: 'fixed',
                bottom: '100px',
                right: '20px',
                width: '56px',
                height: '56px',
                borderRadius: '28px',
                backgroundColor: 'var(--primary-color)',
                color: 'var(--white)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                zIndex: 900
            }}>
                <Plus size={28} />
            </button>
        </div>
    );
};

export default BudgetTracker;
