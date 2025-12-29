import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: 'Start', vibe: 10 },
  { time: 'Fraud News', vibe: 50 },
  { time: 'Viral Video', vibe: 80 },
  { time: 'Investigation', vibe: 100 },
  { time: 'Now', vibe: 1000 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border-2 border-black p-3 font-comic shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <p className="font-bold text-black mb-1">{label}</p>
        <p className="text-chill-shoes font-bold">CHILL LEVEL: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

const VibeChart: React.FC = () => {
  return (
    <div className="w-full bg-white border-4 border-black p-4 md:p-8 relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-sm">
      <h3 className="text-2xl font-meme mb-6">INVESTIGATION PRESSURE</h3>
      
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis dataKey="time" stroke="#000" fontFamily='"Comic Sans MS"' fontSize={12} tickMargin={10} />
            <YAxis stroke="#000" fontFamily='"Comic Sans MS"' fontSize={12} />
            <Tooltip content={<CustomTooltip />} />
            <Line 
                type="monotone" 
                dataKey="vibe" 
                stroke="#7F1D1D" 
                strokeWidth={4} 
                dot={{ r: 6, fill: 'white', stroke: 'black', strokeWidth: 2 }}
                activeDot={{ r: 8, fill: '#7F1D1D' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default VibeChart;