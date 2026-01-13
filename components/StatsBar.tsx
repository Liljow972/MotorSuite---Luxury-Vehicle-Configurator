
import React from 'react';
import { Users, Wind, Zap, Settings2, Timer } from 'lucide-react';
import { VehicleModel } from '../types';

interface Props {
  model: VehicleModel;
}

const StatsBar: React.FC<Props> = ({ model }) => {
  const items = [
    { label: 'Passengers', value: model.stats.passengers, icon: <Users size={18} /> },
    { label: 'Engine', value: model.stats.engine, icon: <Wind size={18} /> },
    { label: 'Power', value: model.stats.power, icon: <Zap size={18} /> },
    { label: 'Transmission', value: model.stats.transmission, icon: <Settings2 size={18} /> },
    { label: '0–100 km/h', value: model.stats.acceleration, icon: <Timer size={18} /> },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-12 glass rounded-[2.5rem] border border-white/40 flex items-center justify-between gap-8 shadow-2xl mb-12">
      {items.map((item, idx) => (
        <div key={item.label} className={`flex flex-col items-center gap-2 flex-1 ${idx !== items.length - 1 ? 'border-r border-black/5' : ''}`}>
          <div className="text-black/30">{item.icon}</div>
          <span className="text-sm font-bold whitespace-nowrap">{item.value}</span>
          <span className="text-[10px] font-bold text-black/30 uppercase tracking-widest">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default StatsBar;
