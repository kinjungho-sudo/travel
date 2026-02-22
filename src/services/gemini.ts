/**
 * Google Gemini API Service
 * 
 * TODO: 실제 사용을 위해서는 Google AI Studio에서 API Key를 발급받아야 합니다.
 * https://aistudio.google.com/
 */

export const analyzeFlightTicket = async (_file: File) => {
    // 실제 구현 예시:
    // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // 현재는 시뮬레이션 데이터를 반환합니다.
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                airline: 'Korean Air',
                passengerName: 'KIM JUNG HO',
                departureTime: '2026-04-10T10:30',
                arrivalTime: '2026-04-10T12:45',
                flightNumber: 'KE703',
                from: 'ICN',
                to: 'NRT'
            });
        }, 2000);
    });
};
