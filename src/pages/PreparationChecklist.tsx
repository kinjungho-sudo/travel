import React, { useState } from 'react';
import { CheckCircle2, Circle, AlertCircle, Plus, Info } from 'lucide-react';

interface Todo {
    id: string;
    task: string;
    isCompleted: boolean;
    category: '필수' | '의류' | '전자기기' | '기타';
    isAiSuggested?: boolean;
}

const PreparationChecklist: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([
        { id: '1', task: '여권 (유효기간 확인)', isCompleted: true, category: '필수', isAiSuggested: true },
        { id: '2', task: '비자/입국심사 서류', isCompleted: false, category: '필수', isAiSuggested: true },
        { id: '3', task: '해외여행자 보험 가입', isCompleted: false, category: '필수', isAiSuggested: true },
        { id: '4', task: '멀티 어댑터', isCompleted: true, category: '전자기기', isAiSuggested: true },
        { id: '5', task: '속옷 및 양말', isCompleted: false, category: '의류' },
    ]);

    const toggleTodo = (id: string) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        ));
    };

    return (
        <div className="fade-in" style={{ paddingBottom: '20px' }}>
            <header style={{ padding: '24px 20px', backgroundColor: 'var(--white)' }}>
                <h1 style={{ fontSize: '22px', marginBottom: '8px' }}>여행 준비</h1>
                <p style={{ fontSize: '14px', color: 'var(--text-sub)' }}>AI가 추천한 필수 아이템을 확인하세요.</p>
            </header>

            {/* AI Recommendation Alert */}
            <div style={{
                margin: '0 20px 24px',
                padding: '16px',
                backgroundColor: '#e6f7f6',
                borderRadius: '12px',
                display: 'flex',
                gap: '12px',
                alignItems: 'start'
            }}>
                <AlertCircle size={20} color="var(--primary-color)" style={{ marginTop: '2px' }} />
                <div>
                    <h4 style={{ fontSize: '14px', color: '#0a8a83', marginBottom: '4px' }}>AI 추천 팁</h4>
                    <p style={{ fontSize: '13px', color: '#1a6b66', lineHeight: '1.4' }}>
                        입국 전 **K-ETA** 신청과 **Q-Code** 작성을 완료했는지 확인해주세요.
                        <a href="#" style={{ textDecoration: 'underline', marginLeft: '6px', fontWeight: 'bold' }}>링크이동</a>
                    </p>
                </div>
            </div>

            {/* Checklist Sections */}
            <div style={{ padding: '0 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h3 style={{ fontSize: '16px' }}>체크리스트</h3>
                    <button style={{ color: 'var(--primary-color)', fontSize: '14px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Plus size={16} /> 추가
                    </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {todos.map(todo => (
                        <div
                            key={todo.id}
                            onClick={() => toggleTodo(todo.id)}
                            style={{
                                padding: '16px',
                                borderRadius: '12px',
                                backgroundColor: 'var(--white)',
                                border: '1px solid var(--border-color)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                transition: 'all 0.2s',
                                cursor: 'pointer'
                            }}
                        >
                            <div style={{ color: todo.isCompleted ? 'var(--primary-color)' : 'var(--border-color)' }}>
                                {todo.isCompleted ? <CheckCircle2 size={24} /> : <Circle size={24} />}
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span style={{
                                        fontSize: '15px',
                                        fontWeight: '500',
                                        textDecoration: todo.isCompleted ? 'line-through' : 'none',
                                        color: todo.isCompleted ? 'var(--text-sub)' : 'var(--text-main)'
                                    }}>
                                        {todo.task}
                                    </span>
                                    {todo.isAiSuggested && (
                                        <span style={{
                                            fontSize: '10px',
                                            backgroundColor: '#f0f0f0',
                                            padding: '2px 6px',
                                            borderRadius: '4px',
                                            color: 'var(--text-sub)'
                                        }}>AI 추천</span>
                                    )}
                                </div>
                                <span style={{ fontSize: '12px', color: 'var(--text-sub)' }}>{todo.category}</span>
                            </div>
                            <button style={{ color: '#ccc' }}><Info size={18} /></button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PreparationChecklist;
