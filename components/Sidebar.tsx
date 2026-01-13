
import React from 'react';
import { Gauge, Palette, Shield, Zap, Music, ChevronRight } from 'lucide-react';

const Sidebar: React.FC = () => {
  const categories = [
    { name: 'Performance', icon: <Gauge size={18} /> },
    { name: 'Design', icon: <Palette size={18} /> },
    { name: 'Safety', icon: <Shield size={18} /> },
    { name: 'Luxury', icon: <Zap size={18} /> },
    { name: 'Multimedia', icon: <Music size={18} /> },
  ];

  return (
    <aside className="w-64 h-screen pt-24 pb-8 flex flex-col glass border-r border-black/5 hidden xl:flex fixed left-0">
      <div className="px-6 mb-8">
        <h3 className="text-xs font-bold text-black/40 uppercase tracking-widest mb-4">Configuration</h3>
        <div className="space-y-1">
          {categories.map((cat, idx) => (
            <button
              key={cat.name}
              className={`w-full flex items-center justify-between p-3 rounded-xl transition-all group ${
                idx === 1 ? 'bg-black text-white shadow-xl shadow-black/20' : 'hover:bg-black/5 text-black/70'
              }`}
            >
              <div className="flex items-center gap-3">
                {cat.icon}
                <span className="text-sm font-semibold">{cat.name}</span>
              </div>
              <ChevronRight size={14} className={idx === 1 ? 'text-white/50' : 'text-black/20 group-hover:text-black/40'} />
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 mt-auto">
        <div className="p-4 rounded-2xl bg-black/5 border border-black/5">
          <p className="text-xs text-black/50 mb-2 leading-relaxed">
            Need help configuring your perfect vehicle?
          </p>
          <button className="text-xs font-bold uppercase tracking-wider text-black hover:underline underline-offset-4">
            Consult Agent
          </button>
        </div>
        <div className="mt-6 flex items-center gap-3 text-[10px] uppercase font-bold tracking-tighter text-black/40">
          <span>Terms</span>
          <span>Privacy</span>
          <span>© 2024 MS</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
