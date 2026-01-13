
import React, { useState } from 'react';
import { X, Calendar, MapPin, User, Mail, CheckCircle2 } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  carName: string;
}

const TestDriveModal: React.FC<Props> = ({ isOpen, onClose, carName }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative w-full max-w-xl glass border border-white/50 rounded-[2.5rem] shadow-2xl overflow-hidden p-10 animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-black/5 rounded-full transition-colors">
          <X size={24} />
        </button>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="text-2xl font-bold mb-2">Request Received</h2>
            <p className="text-black/60">An agent will contact you shortly to confirm your {carName} experience.</p>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 block mb-2">Experience MotorSuite</span>
              <h2 className="text-3xl font-light">Book your Test Drive</h2>
              <p className="text-sm text-black/40 mt-1">Vehicle of choice: <span className="font-bold text-black">{carName}</span></p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30" size={18} />
                  <input required type="text" placeholder="Full Name" className="w-full pl-12 pr-4 py-4 bg-black/5 border border-transparent focus:border-black/10 rounded-2xl outline-none transition-all text-sm" />
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30" size={18} />
                  <input required type="email" placeholder="Email Address" className="w-full pl-12 pr-4 py-4 bg-black/5 border border-transparent focus:border-black/10 rounded-2xl outline-none transition-all text-sm" />
                </div>
              </div>

              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30" size={18} />
                <select className="w-full pl-12 pr-4 py-4 bg-black/5 border border-transparent focus:border-black/10 rounded-2xl outline-none transition-all text-sm appearance-none cursor-pointer">
                  <option>Select Nearest Experience Center</option>
                  <option>Paris - Champs-Élysées</option>
                  <option>Monaco - Port Hercule</option>
                  <option>Geneva - Rue du Rhône</option>
                </select>
              </div>

              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30" size={18} />
                <input required type="date" className="w-full pl-12 pr-4 py-4 bg-black/5 border border-transparent focus:border-black/10 rounded-2xl outline-none transition-all text-sm" />
              </div>

              <button className="w-full py-5 bg-black text-white rounded-2xl font-bold uppercase text-xs tracking-[0.2em] hover:bg-black/80 transition-all shadow-xl shadow-black/10 mt-4">
                Confirm Reservation
              </button>
            </form>

            <p className="text-[10px] text-center text-black/30 mt-6 px-12 leading-relaxed">
              By confirming, you agree to our privacy policy and consent to be contacted regarding your driving experience.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default TestDriveModal;
