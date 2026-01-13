
import React, { useState } from 'react';
import { VehicleModel, VehicleColor } from '../types';
import { Info, Plus, ChevronRight } from 'lucide-react';

interface Props {
  model: VehicleModel;
  activeColor: VehicleColor;
}

const CarVisualizer: React.FC<Props> = ({ model, activeColor }) => {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center p-8 overflow-visible z-10">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
        <div 
          className="w-full max-w-5xl h-64 blur-[140px] rounded-full transition-colors duration-1000"
          style={{ backgroundColor: activeColor.hex === '#F2F2F2' ? '#FFFFFF' : activeColor.hex }}
        ></div>
      </div>

      <div className="relative w-full h-full max-w-6xl flex items-center justify-center">
        {/* Car Image Container with specific sizing for hotspot stability */}
        <div className="relative w-full h-full flex items-center justify-center select-none group">
          <img 
            src={model.image} 
            alt={model.name}
            className="max-w-full max-h-full object-contain drop-shadow-[0_45px_45px_rgba(0,0,0,0.15)] transition-all duration-1000"
          />
          {/* Color Tint Overlay - Simulated via filter or mix-blend */}
          <div 
            className="absolute inset-0 pointer-events-none mix-blend-color opacity-30 transition-colors duration-1000"
            style={{ backgroundColor: activeColor.hex }}
          />
          
          {/* Hotspots Container - Centered and scaled with the image */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            {model.hotspots.map((spot) => (
              <div 
                key={spot.id}
                className="absolute z-20 pointer-events-auto transition-transform hover:scale-110"
                style={{ left: spot.x, top: spot.y }}
              >
                <button 
                  onMouseEnter={() => setActiveHotspot(spot.id)}
                  onMouseLeave={() => setActiveHotspot(null)}
                  onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center shadow-2xl border-2 border-white/40 transition-all duration-300 ${
                    activeHotspot === spot.id ? 'bg-black text-white' : 'bg-white/90 text-black pulse-dot'
                  }`}
                >
                  <Plus size={16} className={activeHotspot === spot.id ? 'rotate-45 transition-transform' : ''} />
                </button>

                <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-6 w-64 p-5 rounded-3xl glass border border-white/50 shadow-2xl transition-all duration-500 origin-bottom z-50 ${
                  activeHotspot === spot.id ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4 pointer-events-none'
                }`}>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-2 border-b border-black/5 pb-2">{spot.label}</h4>
                  <p className="text-[11px] text-black/60 leading-relaxed">
                    {spot.description}
                  </p>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 glass rotate-45 border-r border-b border-white/40 -translate-y-[6px]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Info Card - Side Panel */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 glass p-8 rounded-[2.5rem] border border-white/40 shadow-xl hidden 2xl:block animate-in slide-in-from-right-8 duration-700">
        <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center mb-6">
          <Info size={20} />
        </div>
        <h3 className="text-md font-bold uppercase tracking-widest mb-3">Masterpiece Edition</h3>
        <p className="text-xs text-black/50 leading-relaxed mb-6">
          Experience the {model.name}. A culmination of engineering and artistic expression, tailored specifically to your refined taste.
        </p>
        <button className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group hover:gap-3 transition-all">
          View Specifications <ChevronRight size={14} className="text-black/30 group-hover:text-black" />
        </button>
      </div>
    </div>
  );
};

export default CarVisualizer;
