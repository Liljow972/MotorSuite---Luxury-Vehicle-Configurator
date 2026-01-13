
import React from 'react';
import { Lock, Mail, ChevronRight, Shield } from 'lucide-react';

interface Props {
  onLogin: () => void;
}

const Login: React.FC<Props> = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center p-6">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 glass rounded-[3rem] border border-white/50 overflow-hidden shadow-2xl">
        <div className="hidden lg:flex flex-col justify-between p-16 bg-black text-white relative">
          <div className="z-10">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-12">
              <span className="text-black font-bold text-3xl italic">M</span>
            </div>
            <h1 className="text-6xl font-light mb-6">Redefining Garage Management.</h1>
            <p className="text-white/40 max-w-sm leading-relaxed">
              Experience the next generation of automotive SaaS. Seamless configuration, intelligent planning, and AI-powered billing.
            </p>
          </div>
          
          <div className="z-10 flex items-center gap-4">
             <div className="flex -space-x-4">
                {[1,2,3].map(i => <img key={i} src={`https://i.pravatar.cc/150?u=${i}`} className="w-10 h-10 rounded-full border-2 border-black" />)}
             </div>
             <p className="text-xs text-white/40 font-bold uppercase tracking-widest">+ 500 Garages trust MotorSuite</p>
          </div>

          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <img src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="p-12 lg:p-20 flex flex-col justify-center bg-white/50">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-2 tracking-tight">Login to Dashboard</h2>
            <p className="text-black/40 text-sm">Access your secure enterprise workspace.</p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); onLogin(); }} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-black/20" size={18} />
              <input required type="email" placeholder="Work Email" className="w-full pl-14 pr-6 py-5 bg-black/5 rounded-2xl outline-none focus:ring-2 ring-black/5 border border-transparent transition-all" />
            </div>
            <div className="relative">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-black/20" size={18} />
              <input required type="password" placeholder="Password" className="w-full pl-14 pr-6 py-5 bg-black/5 rounded-2xl outline-none focus:ring-2 ring-black/5 border border-transparent transition-all" />
            </div>

            <div className="flex items-center justify-between px-2 text-xs">
              <label className="flex items-center gap-2 cursor-pointer text-black/40 hover:text-black transition-colors">
                <input type="checkbox" className="w-4 h-4 rounded border-black/10 text-black focus:ring-black" />
                Remember this device
              </label>
              <button type="button" className="font-bold text-black/40 hover:text-black transition-colors">Forgot password?</button>
            </div>

            <button type="submit" className="w-full py-5 bg-black text-white rounded-2xl font-bold uppercase text-xs tracking-[0.2em] shadow-xl shadow-black/10 flex items-center justify-center gap-3 group mt-8">
              Authenticate <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-black/5 flex items-center justify-center gap-3 opacity-30">
            <Shield size={16} />
            <span className="text-[10px] font-bold uppercase tracking-widest">SSL Encrypted / ISO 27001 Certified</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
