
import React from 'react';
import { Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight, Plus, MapPin } from 'lucide-react';

const Planning: React.FC = () => {
  const hours = ['08:00', '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  
  const appointments = [
    { day: 'Monday', hour: '09:00', duration: 2, client: 'J. Doe', vehicle: 'Vision EQS', type: 'Maintenance' },
    { day: 'Wednesday', hour: '14:00', duration: 1, client: 'S. Miller', vehicle: 'GT Performance', type: 'Detailing' },
    { day: 'Friday', hour: '10:00', duration: 3, client: 'M. Chen', vehicle: 'G-Alpha Lux', type: 'Bodywork' },
  ];

  return (
    <div className="p-8 lg:p-12 animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-4xl font-light mb-2">Workshop Planning</h2>
          <p className="text-black/40 text-sm">Manage mechanics and bodywork schedules.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center glass px-4 py-2 rounded-full border border-black/5">
            <button className="p-1 hover:bg-black/5 rounded-full"><ChevronLeft size={18} /></button>
            <span className="px-4 font-bold text-xs uppercase tracking-widest">March 2024</span>
            <button className="p-1 hover:bg-black/5 rounded-full"><ChevronRight size={18} /></button>
          </div>
          <button className="bg-black text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            <Plus size={16} /> New Appointment
          </button>
        </div>
      </div>

      <div className="glass rounded-[3rem] border border-white/50 overflow-hidden shadow-2xl">
        <div className="grid grid-cols-6 border-b border-black/5 bg-black/5">
          <div className="p-6 border-r border-black/5"></div>
          {days.map(day => (
            <div key={day} className="p-6 text-center font-bold text-[10px] uppercase tracking-[0.2em] text-black/40 border-r border-black/5 last:border-0">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-6 h-[600px] overflow-y-auto custom-scrollbar">
          <div className="flex flex-col border-r border-black/5">
            {hours.map(hour => (
              <div key={hour} className="h-20 p-4 text-[10px] font-bold text-black/20 border-b border-black/5 flex items-center justify-center">
                {hour}
              </div>
            ))}
          </div>
          
          {days.map(day => (
            <div key={day} className="relative border-r border-black/5 last:border-0">
              {hours.map(hour => (
                <div key={`${day}-${hour}`} className="h-20 border-b border-black/5 group hover:bg-black/[0.02] cursor-pointer transition-colors"></div>
              ))}
              
              {appointments.filter(a => a.day === day).map(apt => {
                const startIdx = hours.indexOf(apt.hour);
                return (
                  <div 
                    key={`${apt.client}-${apt.hour}`}
                    className="absolute left-2 right-2 p-4 rounded-2xl bg-black text-white shadow-xl z-10 cursor-move transition-transform active:scale-95"
                    style={{ top: `${startIdx * 80 + 8}px`, height: `${apt.duration * 80 - 16}px` }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">{apt.type}</span>
                      <Clock size={12} className="opacity-50" />
                    </div>
                    <h4 className="font-bold text-xs mb-1">{apt.client}</h4>
                    <p className="text-[10px] opacity-70">{apt.vehicle}</p>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Planning;
