
import { LineChart as LChart, Line, XAxis,YAxis } from 'recharts';
const LineChart =()=>{
    const mathMarksData = [
        { id: 1, name: "Emma", mathBangla: 85, mathEnglish: 30 },
    { id: 2, name: "Noah", mathBangla: 78, mathEnglish: 43 },
    { id: 3, name: "Olivia", mathBangla: 92, mathEnglish: 95 },
    { id: 4, name: "Liam", mathBangla: 70, mathEnglish: 73 },
    { id: 5, name: "Ava", mathBangla: 88, mathEnglish: 82 },
    { id: 6, name: "William", mathBangla: 65, mathEnglish: 55 },
    { id: 7, name: "Sophia", mathBangla: 95, mathEnglish: 85 },
    { id: 8, name: "James", mathBangla: 81, mathEnglish: 36 },
    { id: 9, name: "Isabella", mathBangla: 73, mathEnglish: 93 },
    { id: 10, name: "Mason", mathBangla: 87, mathEnglish: 75 }
    ];
    
    
    return (
        <div className='p-10'>
            <LChart width={800} height={400} data={mathMarksData}>
                <XAxis dataKey='name'></XAxis>
                <YAxis ></YAxis>
            <Line dataKey='mathBangla' stroke='red'></Line>
            <Line dataKey='mathEnglish' stroke='green'></Line>
            </LChart>

        </div>
    )
}
export default LineChart;