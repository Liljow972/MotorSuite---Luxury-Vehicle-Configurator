
import React, { useState } from 'react';
import Header from './components/Header';
import CarVisualizer from './components/CarVisualizer';
import StatsBar from './components/StatsBar';
import ConfiguratorPanel from './components/ConfiguratorPanel';
import TestDriveModal from './components/TestDriveModal';
import Planning from './components/Planning';
import Catalog from './components/Catalog';
import Login from './components/Login';
import { MODELS, COLORS, CLIENTS, QUOTES } from './constants';
import { VehicleModel, VehicleColor } from './types';
import { 
  Info, Sparkles, ChevronRight, LayoutGrid, Settings, ShieldCheck, 
  Star, User, Search, ShoppingBag, X, LogOut, CreditCard, Bell, 
  Plus, Trash2, ArrowRight, Home, Car, Users, FileText, BarChart3, HelpCircle,
  TrendingUp, Package, Clock, Calendar, MessageSquare, ClipboardCheck, Sparkle,
  Download, Mail as MailIcon
} from 'lucide-react';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard');
  const [currentModel, setCurrentModel] = useState<VehicleModel>(MODELS[0]);
  const [activeColor, setActiveColor] = useState<VehicleColor>(COLORS[0]);
  
  // Overlay States
  const [isTestDriveOpen, setIsTestDriveOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  const handleSetView = (view: string) => {
    setCurrentView(view);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSaaSModule = () => {
    switch (currentView) {
      case 'dashboard':
        return (
          <div className="p-8 lg:p-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10 flex justify-between items-end">
              <div>
                <h1 className="text-4xl font-light mb-2">Welcome back, Christian</h1>
                <p className="text-black/40">You have 4 appointments scheduled for today.</p>
              </div>
              <div className="flex gap-4">
                <button className="px-6 py-3 glass border border-black/5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-black/5 transition-all">
                  <Sparkle size={16} className="text-purple-600" /> AI Insights
                </button>
                <button onClick={() => handleSetView('configure')} className="px-6 py-3 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-black/80 transition-all">
                  <Plus size={16} /> New Devis
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { label: 'Garage Revenue', value: '$214K', change: '+12.5%', icon: <TrendingUp size={20} /> },
                { label: 'Service Volume', value: '142', change: '+8.2%', icon: <Settings size={20} /> },
                { label: 'Client Satisfaction', value: '98%', change: '+0.5%', icon: <Star size={20} /> },
                { label: 'Unpaid Invoices', value: '08', change: '-2.4%', icon: <AlertCircle size={20} /> },
              ].map((stat, i) => (
                <div key={i} className="glass p-8 rounded-[2.5rem] border border-white/50">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-black text-white rounded-2xl">{stat.icon}</div>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                  <p className="text-xs text-black/40 font-bold uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 glass p-8 rounded-[2.5rem] border border-white/50">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-bold">Today's Appointments</h3>
                  <button onClick={() => handleSetView('planning')} className="text-xs font-bold text-black/40 hover:text-black uppercase tracking-widest flex items-center gap-1">Open Calendar <ChevronRight size={14} /></button>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center justify-between p-5 bg-black/5 rounded-3xl border border-transparent hover:border-black/5 transition-all cursor-pointer group">
                      <div className="flex items-center gap-6">
                        <div className="text-center w-12 border-r border-black/10 pr-6">
                          <p className="text-lg font-bold">0{i+8}:00</p>
                          <p className="text-[10px] text-black/40 uppercase font-bold">AM</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-sm">Customer #{i}04</h4>
                          <p className="text-xs text-black/40">Full Maintenance Service • Bay 02</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="px-3 py-1 bg-white rounded-full text-[10px] font-bold text-black/40 uppercase">Ongoing</span>
                        <button className="p-2 group-hover:bg-black group-hover:text-white rounded-full transition-all"><ArrowRight size={16} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass p-8 rounded-[2.5rem] border border-white/50">
                <h3 className="text-xl font-bold mb-8">Recent Activity</h3>
                <div className="space-y-6">
                  {[
                    { text: 'Invoice #QT-001 paid', time: '10m ago', icon: <ClipboardCheck size={16} /> },
                    { text: 'New lead from Web', time: '1h ago', icon: <Users size={16} /> },
                    { text: 'SMS reminder sent to Sarah', time: '2h ago', icon: <MessageSquare size={16} /> },
                  ].map((activity, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-black/5 flex items-center justify-center shrink-0">{activity.icon}</div>
                      <div>
                        <p className="text-sm font-semibold">{activity.text}</p>
                        <p className="text-[10px] text-black/30 font-bold uppercase">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-10 py-4 glass border border-black/5 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-black/5">View Full Log</button>
              </div>
            </div>
          </div>
        );

      case 'planning': return <Planning />;
      case 'catalog': return <Catalog />;
      
      case 'inventory':
      case 'models':
        return (
          <div className="px-12 py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-5xl font-light">Fleet & Stock</h2>
              <div className="flex gap-4">
                <button className="px-6 py-3 glass border border-black/5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black/5">Print Labels</button>
                <button className="px-6 py-3 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black/80">Add Vehicle</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {MODELS.map((model) => (
                <div key={model.id} className="glass rounded-[3rem] p-8 border border-white/50 hover:shadow-2xl transition-all group flex flex-col h-full">
                  <div className="mb-8 overflow-hidden rounded-2xl h-56 bg-white/50 relative">
                    <img src={model.image} alt={model.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 p-4" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-2">{model.type}</span>
                  <h3 className="text-2xl font-bold mb-4">{model.name}</h3>
                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    <button onClick={() => { setCurrentModel(model); handleSetView('configure'); }} className="py-4 bg-black text-white rounded-2xl font-bold uppercase text-[10px] tracking-widest hover:bg-black/80 transition-all">Config</button>
                    <button className="py-4 glass border border-black/5 rounded-2xl font-bold uppercase text-[10px] tracking-widest hover:bg-black/5 transition-all">Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'crm':
        return (
          <div className="px-12 py-12 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto">
             <div className="flex justify-between items-center mb-12">
               <h2 className="text-5xl font-light">Client Database</h2>
               <div className="flex gap-4">
                 <button className="px-6 py-3 glass border border-black/5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black/5 flex items-center gap-2"><MessageSquare size={14}/> Bulk SMS</button>
                 <button className="px-6 py-3 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black/80">+ Add Customer</button>
               </div>
             </div>
             <div className="glass rounded-[2.5rem] border border-white/50 overflow-hidden">
               <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-black/5">
                      <th className="p-8 text-[10px] font-bold uppercase tracking-widest text-black/40">Owner</th>
                      <th className="p-8 text-[10px] font-bold uppercase tracking-widest text-black/40">Vehicle ID</th>
                      <th className="p-8 text-[10px] font-bold uppercase tracking-widest text-black/40">Status</th>
                      <th className="p-8 text-[10px] font-bold uppercase tracking-widest text-black/40 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CLIENTS.map(client => (
                      <tr key={client.id} className="hover:bg-black/[0.02] transition-colors group">
                        <td className="p-8">
                          <div className="flex items-center gap-4">
                            <img src={client.avatar} className="w-10 h-10 rounded-full" />
                            <div>
                              <p className="font-bold text-sm">{client.name}</p>
                              <p className="text-xs text-black/40">{client.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-8 text-xs font-bold text-black/60 uppercase">AB-123-XY</td>
                        <td className="p-8">
                          <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                            client.status === 'Hot' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'
                          }`}>
                            {client.status}
                          </span>
                        </td>
                        <td className="p-8 text-right">
                          <button className="p-3 bg-black/5 rounded-2xl group-hover:bg-black group-hover:text-white transition-all"><ArrowRight size={16} /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
               </table>
             </div>
          </div>
        );

      case 'services': // View as Invoices module
      case 'invoices':
        return (
          <div className="px-12 py-12 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-12">
               <h2 className="text-5xl font-light">Billing & Invoices</h2>
               <div className="flex gap-4">
                 <button className="px-6 py-3 glass border border-black/5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black/5 flex items-center gap-2"><Sparkles size={14} className="text-purple-600"/> Generate with AI</button>
                 <button className="px-6 py-3 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black/80">Manual Entry</button>
               </div>
             </div>
             <div className="space-y-4">
                {QUOTES.map(quote => (
                  <div key={quote.id} className="p-8 glass rounded-[2.5rem] border border-white/50 flex justify-between items-center hover:shadow-xl transition-all">
                    <div className="flex items-center gap-8">
                       <div className="p-4 bg-black/5 rounded-2xl"><FileText size={24}/></div>
                       <div>
                          <div className="flex items-center gap-3 mb-1">
                            <span className="text-[10px] font-bold text-black/30 tracking-widest">{quote.id}</span>
                            <span className={`px-3 py-1 rounded-full text-[8px] font-bold uppercase ${quote.status === 'Accepted' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{quote.status}</span>
                          </div>
                          <h4 className="font-bold text-lg">{quote.clientName}</h4>
                          <p className="text-xs text-black/40">{quote.vehicleModel}</p>
                       </div>
                    </div>
                    <div className="text-right">
                       <p className="text-2xl font-bold mb-1">${quote.total.toLocaleString()}</p>
                       <div className="flex items-center gap-2 justify-end">
                         <button className="p-2 hover:bg-black/5 rounded-full text-black/40 hover:text-black transition-all"><Download size={14}/></button>
                         <button className="p-2 hover:bg-black/5 rounded-full text-black/40 hover:text-black transition-all"><MailIcon size={14}/></button>
                       </div>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        );

      case 'configure':
        return (
          <div className="max-w-[1600px] mx-auto animate-in fade-in duration-700 relative">
            <button 
              onClick={() => handleSetView('dashboard')}
              className="absolute top-4 left-8 z-50 flex items-center gap-2 px-4 py-2 glass rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-all shadow-sm"
            >
              <ChevronRight size={14} className="rotate-180" /> Back to Workspace
            </button>
            <CarVisualizer model={currentModel} activeColor={activeColor} />
            <div className="px-8 mt-4">
              <StatsBar model={currentModel} />
            </div>
          </div>
        );

      default:
        return <div className="p-20 text-center text-black/40">Module in Development</div>;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] selection:bg-black selection:text-white relative">
      <Header 
        currentView={currentView} 
        onSetView={handleSetView} 
        onOpenTestDrive={() => setIsTestDriveOpen(true)}
        onToggleSearch={() => setIsSearchOpen(!isSearchOpen)}
        onToggleCart={() => setIsCartOpen(!isCartOpen)}
        onToggleProfile={() => setIsProfileOpen(!isProfileOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />
      
      <div className="flex">
        {/* Fixed SaaS Sidebar */}
        <aside className="w-72 h-screen pt-24 pb-8 flex flex-col glass border-r border-black/5 hidden xl:flex fixed left-0 z-40">
          <div className="px-8 mb-10 overflow-y-auto custom-scrollbar">
            <h3 className="text-[10px] font-bold text-black/30 uppercase tracking-[0.2em] mb-6">Garage Operations</h3>
            <div className="space-y-2">
              {[
                { id: 'dashboard', label: 'Dashboard', icon: <Home size={18} /> },
                { id: 'planning', label: 'Planning', icon: <Calendar size={18} /> },
                { id: 'crm', label: 'Customers', icon: <Users size={18} /> },
                { id: 'inventory', label: 'Fleet & Models', icon: <Car size={18} /> },
                { id: 'catalog', label: 'Stock & Parts', icon: <Package size={18} /> },
                { id: 'services', label: 'Invoicing', icon: <FileText size={18} /> },
                { id: 'analytics', label: 'Reporting', icon: <BarChart3 size={18} /> },
              ].map((nav) => (
                <button
                  key={nav.id}
                  onClick={() => handleSetView(nav.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all group ${
                    currentView === nav.id ? 'bg-black text-white shadow-xl shadow-black/20' : 'hover:bg-black/5 text-black/60'
                  }`}
                >
                  {nav.icon}
                  <span className="text-sm font-bold">{nav.label}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="px-8 mt-auto">
             <button onClick={() => setIsAuthenticated(false)} className="w-full flex items-center gap-4 p-4 text-red-500 font-bold text-sm hover:bg-red-50 rounded-2xl transition-all">
               <LogOut size={18} /> Log out
             </button>
          </div>
        </aside>
        
        <main className={`flex-1 pt-24 min-h-screen relative transition-all duration-500 ${currentView === 'configure' ? 'xl:ml-72 xl:mr-96' : 'xl:ml-72 xl:mx-0'}`}>
          {renderSaaSModule()}
          
          {currentView === 'configure' && (
            <div className="fixed bottom-0 left-72 right-96 pointer-events-none opacity-[0.02] text-[20vw] font-black tracking-tighter uppercase whitespace-nowrap overflow-hidden z-0 translate-y-1/2 select-none">
              {currentModel.name}
            </div>
          )}
        </main>

        {currentView === 'configure' && (
          <ConfiguratorPanel 
            currentModel={currentModel}
            activeColor={activeColor}
            onModelChange={setCurrentModel}
            onColorChange={setActiveColor}
          />
        )}
      </div>

      {/* Mobile Burger Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="absolute top-20 left-0 right-0 glass border-b border-black/5 p-8 flex flex-col gap-6 animate-in slide-in-from-top-4 duration-300">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} /> },
              { id: 'planning', label: 'Planning', icon: <Calendar size={20} /> },
              { id: 'crm', label: 'Customers', icon: <Users size={20} /> },
              { id: 'services', label: 'Quotes', icon: <FileText size={20} /> },
              { id: 'configure', label: 'Configurator', icon: <Plus size={20} /> },
            ].map((item) => (
              <button 
                key={item.id} 
                onClick={() => handleSetView(item.id)}
                className={`text-2xl font-light text-left transition-all flex items-center gap-4 ${currentView === item.id ? 'text-black font-bold' : 'text-black/50'}`}
              >
                {item.icon} {item.label}
              </button>
            ))}
            <div className="h-px bg-black/5 w-full my-2"></div>
            <button 
              onClick={() => { setIsMobileMenuOpen(false); setIsTestDriveOpen(true); }}
              className="w-full py-4 bg-black text-white rounded-2xl font-bold uppercase text-xs tracking-widest"
            >
              Book Test Drive
            </button>
          </div>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center p-20 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={() => setIsSearchOpen(false)}></div>
          <div className="relative w-full max-w-3xl animate-in slide-in-from-top-12 duration-500">
            <div className="flex items-center gap-4 mb-12">
              <Search className="text-white/40" size={32} />
              <input 
                autoFocus 
                type="text" 
                placeholder="Search inventory, leads, or quotes..." 
                className="w-full bg-transparent border-b border-white/20 pb-4 text-4xl font-light text-white outline-none placeholder:text-white/10"
              />
              <button onClick={() => setIsSearchOpen(false)} className="text-white/40 hover:text-white transition-colors">
                <X size={32} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h3 className="text-white/20 text-xs font-bold uppercase tracking-widest mb-6">Quick Filters</h3>
                <div className="space-y-4">
                  {['In Stock Vehicles', 'Pending Appointments', 'New Customers'].map(f => (
                    <button key={f} className="text-white/60 hover:text-white flex items-center justify-between w-full text-lg group">
                      {f} <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                    </button>
                  ))}
                </div>
              </div>
              <div className="text-white/20 text-sm font-bold uppercase tracking-widest space-y-4">
                 <p>/dashboard</p>
                 <p>/new-invoice</p>
                 <p>/settings</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Drawer (Build Queue) */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-96 glass bg-white/95 backdrop-blur-2xl z-[110] border-l border-black/5 shadow-2xl transition-transform duration-500 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 flex flex-col h-full">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <ShoppingBag size={24} />
              <h2 className="text-xl font-bold">Build Queue</h2>
            </div>
            <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-black/5 rounded-full transition-colors">
              <X size={24} />
            </button>
          </div>
          <div className="flex-grow overflow-y-auto space-y-8 pr-4 custom-scrollbar">
            <div className="flex gap-4 group">
              <div className="w-20 h-20 bg-black/5 rounded-2xl flex items-center justify-center overflow-hidden">
                <img src={currentModel.image} className="w-full h-full object-contain p-2" />
              </div>
              <div className="flex-grow">
                <h4 className="font-bold text-sm">{currentModel.name}</h4>
                <p className="text-[10px] text-black/40 uppercase font-bold tracking-widest mb-2">{activeColor.name}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm">${(currentModel.basePrice + activeColor.price).toLocaleString()}</span>
                  <button className="text-black/30 hover:text-red-500 transition-colors"><Trash2 size={14} /></button>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-black/5 mt-auto">
            <button className="w-full py-5 bg-black text-white rounded-2xl font-bold uppercase text-xs tracking-widest hover:bg-black/80 transition-all">
              Save Projects
            </button>
          </div>
        </div>
      </div>

      {/* Profile Overlay */}
      {isProfileOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsProfileOpen(false)}></div>
          <div className="relative w-full max-w-md glass border border-white/50 rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in duration-300">
            <div className="p-8 bg-black text-white flex flex-col items-center">
              <button onClick={() => setIsProfileOpen(false)} className="absolute top-6 right-6 p-2 text-white/50 hover:text-white rounded-full">
                <X size={20} />
              </button>
              <div className="w-24 h-24 rounded-full border-4 border-white/20 p-1 mb-4 overflow-hidden">
                <img src="https://i.pravatar.cc/150?u=4" className="w-full h-full object-cover rounded-full" />
              </div>
              <h3 className="text-xl font-bold tracking-tight">Christian Delacroix</h3>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mt-1 flex items-center gap-2">
                <ShieldCheck size={12} /> Senior Sales Executive
              </p>
            </div>
            <div className="p-6 space-y-1">
              {[
                { label: 'Company Profile', icon: <Home size={18} /> },
                { label: 'System Settings', icon: <Settings size={18} /> },
                { label: 'User Permissions', icon: <Users size={18} /> },
                { label: 'Security Center', icon: <ShieldCheck size={18} /> },
              ].map(item => (
                <button key={item.label} className="w-full flex items-center justify-between p-4 hover:bg-black/5 rounded-2xl transition-all group text-black/70 hover:text-black">
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span className="text-sm font-semibold">{item.label}</span>
                  </div>
                  <ChevronRight size={14} className="opacity-30" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <TestDriveModal 
        isOpen={isTestDriveOpen} 
        onClose={() => setIsTestDriveOpen(false)} 
        carName={currentModel.name}
      />
    </div>
  );
};

const AlertCircle = ({ size, className }: { size: number, className?: string }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
);

export default App;
