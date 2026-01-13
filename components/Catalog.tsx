
import React from 'react';
import { Search, Package, Plus, Filter, Tag, ArrowUpRight } from 'lucide-react';

const Catalog: React.FC = () => {
  const categories = ['All Parts', 'Engine', 'Interior', 'Bodywork', 'Services', 'Tires'];
  const parts = [
    { id: 'SKU-001', name: 'High Performance Brake Pads', category: 'Bodywork', stock: 12, price: 245, status: 'In Stock' },
    { id: 'SKU-002', name: 'Nappa Leather Seat Cover', category: 'Interior', stock: 4, price: 1200, status: 'Low Stock' },
    { id: 'SKU-003', name: 'Winter Tire Set 21"', category: 'Tires', stock: 20, price: 850, status: 'In Stock' },
    { id: 'SKU-004', name: 'Annual Service Pack', category: 'Services', stock: Infinity, price: 450, status: 'Unlimited' },
  ];

  return (
    <div className="p-8 lg:p-12 animate-in fade-in duration-500">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-light mb-2">Inventory & Catalog</h2>
          <p className="text-black/40 text-sm">Manage spare parts and workshop services.</p>
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-black/20" size={18} />
            <input type="text" placeholder="Search SKU or Part name..." className="pl-12 pr-6 py-3 bg-black/5 rounded-full text-xs font-bold outline-none border border-transparent focus:border-black/10 w-64" />
          </div>
          <button className="bg-black text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            <Plus size={16} /> Add Item
          </button>
        </div>
      </div>

      <div className="flex gap-4 mb-10 overflow-x-auto pb-4 custom-scrollbar">
        {categories.map((cat, i) => (
          <button key={cat} className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all whitespace-nowrap ${i === 0 ? 'bg-black text-white shadow-lg' : 'glass border border-black/5 text-black/40 hover:text-black'}`}>
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {parts.map(part => (
          <div key={part.id} className="glass p-8 rounded-[2.5rem] border border-white/50 hover:shadow-xl transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div className="p-4 bg-black/5 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors">
                <Package size={24} />
              </div>
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${part.status === 'Low Stock' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                {part.status}
              </span>
            </div>
            <p className="text-[10px] font-bold text-black/30 uppercase tracking-widest mb-1">{part.id}</p>
            <h3 className="text-lg font-bold mb-4 h-12 leading-tight">{part.name}</h3>
            <div className="flex items-center justify-between pt-6 border-t border-black/5">
              <span className="text-xl font-bold">${part.price}</span>
              <button className="p-2 hover:bg-black hover:text-white rounded-full transition-all">
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
