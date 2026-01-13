
import React from 'react';
import { VehicleModel, VehicleColor } from '../types';
import { COLORS, MODELS } from '../constants';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  currentModel: VehicleModel;
  activeColor: VehicleColor;
  onModelChange: (model: VehicleModel) => void;
  onColorChange: (color: VehicleColor) => void;
}

const ConfiguratorPanel: React.FC<Props> = ({ currentModel, activeColor, onModelChange, onColorChange }) => {
  return (
    <div className="w-96 flex flex-col pt-24 pb-12 px-8 fixed right-0 h-screen overflow-y-auto custom-scrollbar glass border-l border-black/5 hidden xl:flex">
      <div className="mb-10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">Model Selector</span>
          <div className="flex gap-2">
            <button className="w-6 h-6 rounded-full glass flex items-center justify-center hover:bg-black/5 transition-colors">
              <ChevronLeft size={14} />
            </button>
            <button className="w-6 h-6 rounded-full glass flex items-center justify-center hover:bg-black/5 transition-colors">
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
        <h2 className="text-3xl font-light mb-1">{currentModel.name}</h2>
        <p className="text-black/40 font-medium text-sm mb-6">{currentModel.brand} • {currentModel.type}</p>
        
        <div className="grid grid-cols-2 gap-3">
          {MODELS.map((m) => (
            <button
              key={m.id}
              onClick={() => onModelChange(m)}
              className={`p-3 rounded-2xl text-left transition-all border ${
                currentModel.id === m.id ? 'bg-black text-white shadow-xl shadow-black/20 border-black' : 'bg-white border-black/5 hover:border-black/20'
              }`}
            >
              <span className="text-[10px] font-bold block uppercase mb-1 opacity-60">Base Edition</span>
              <span className="text-xs font-bold leading-none">{m.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-4">Exterior Color</h3>
        <p className="text-sm font-semibold mb-4">{activeColor.name} <span className="text-black/30 font-normal ml-2">+{activeColor.price === 0 ? 'Included' : `$${activeColor.price.toLocaleString()}`}</span></p>
        <div className="flex flex-wrap gap-3">
          {COLORS.map((c) => (
            <button
              key={c.id}
              onClick={() => onColorChange(c)}
              className={`w-10 h-10 rounded-full relative transition-all duration-300 ring-offset-2 ${
                activeColor.id === c.id ? 'ring-2 ring-black' : 'hover:scale-110'
              }`}
              style={{ backgroundColor: c.hex, border: c.id === 'white' ? '1px solid #e5e7eb' : 'none' }}
              title={c.name}
            >
              {activeColor.id === c.id && (
                <Check size={14} className={c.id === 'white' ? 'text-black absolute inset-0 m-auto' : 'text-white absolute inset-0 m-auto'} />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-4">Upholstery & Finish</h3>
        <div className="space-y-3">
          {['Manufaktur Nappa Leather', 'Carbon Fiber Inlays', 'Alcantara Headliner'].map((item, i) => (
            <div key={item} className="flex items-center justify-between p-3 rounded-2xl glass border border-black/5">
              <span className="text-xs font-semibold">{item}</span>
              <div className={`w-4 h-4 rounded-full border-2 ${i === 0 ? 'bg-black border-black' : 'border-black/10'}`}></div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-8 border-t border-black/5">
        <div className="flex items-end justify-between mb-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 block mb-1">MSRP Total</span>
            <span className="text-2xl font-bold tracking-tight">${(currentModel.basePrice + activeColor.price).toLocaleString()}</span>
          </div>
          <span className="text-xs text-black/40 font-medium">Est. Lease $1,420/mo</span>
        </div>
        <div className="space-y-3">
          <button className="w-full py-4 bg-black text-white rounded-full font-bold uppercase text-xs tracking-widest hover:bg-black/80 transition-all active:scale-[0.98] shadow-xl shadow-black/20">
            Proceed to Checkout
          </button>
          <button className="w-full py-4 bg-white text-black border border-black/10 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-black/5 transition-all">
            Save Configuration
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfiguratorPanel;
