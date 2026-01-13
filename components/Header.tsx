
import React from 'react';
import { ShoppingBag, User, Menu, Search, X } from 'lucide-react';

interface Props {
  currentView: string;
  onSetView: (view: string) => void;
  onOpenTestDrive: () => void;
  onToggleSearch: () => void;
  onToggleCart: () => void;
  onToggleProfile: () => void;
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
}

const Header: React.FC<Props> = ({ 
  currentView, 
  onSetView, 
  onOpenTestDrive, 
  onToggleSearch, 
  onToggleCart, 
  onToggleProfile,
  isMobileMenuOpen,
  onToggleMobileMenu
}) => {
  const navItems = ['Models', 'Services', 'Experience', 'Shop', 'Configure'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20 h-20 flex items-center justify-between px-8 transition-all duration-300">
      <div className="flex items-center gap-12">
        <button 
          onClick={() => onSetView('configure')}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center transition-transform group-hover:rotate-12">
            <span className="text-white font-bold text-xl italic">M</span>
          </div>
          <span className="text-xl font-bold tracking-tight uppercase">MotorSuite</span>
        </button>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
          {navItems.map((item) => {
            const viewId = item.toLowerCase();
            const isActive = currentView === viewId;
            return (
              <button 
                key={item} 
                onClick={() => onSetView(viewId)}
                className={`transition-all relative group ${isActive ? 'text-black font-bold' : 'text-black/50 hover:text-black'}`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-black transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 border-r border-black/10 pr-6">
          <button onClick={onToggleSearch} className="hover:text-black transition-colors text-black/60"><Search size={20} /></button>
          <button onClick={onToggleCart} className="hover:text-black transition-colors text-black/60"><ShoppingBag size={20} /></button>
          <button onClick={onToggleProfile} className="hover:text-black transition-colors text-black/60"><User size={20} /></button>
        </div>
        <button onClick={onToggleMobileMenu} className="lg:hidden text-black/60 p-2 hover:bg-black/5 rounded-full transition-colors">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <button 
          onClick={onOpenTestDrive}
          className="hidden sm:block px-6 py-2.5 bg-black text-white text-xs font-bold uppercase rounded-full hover:bg-black/80 transition-all active:scale-95 shadow-lg shadow-black/10"
        >
          Book Test Drive
        </button>
      </div>
    </header>
  );
};

export default Header;
