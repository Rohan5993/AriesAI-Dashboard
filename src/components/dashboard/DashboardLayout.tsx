import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

const navItems = [
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/dashboard/calendar', label: 'Calendar' },
  { path: '/dashboard/campaigns', label: 'Campaigns' },
  { path: '/dashboard/results', label: 'Results' },
];

export default function DashboardLayout() {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-text-main font-sans selection:bg-primary/30">
      <div className="noise-overlay"></div>
      
      {/* Top Navbar */}
      <header className="h-20 flex items-center justify-between px-8 sticky top-0 z-[60] bg-[#050505]/80 backdrop-blur-xl border-b border-white/[0.05]">
        {/* Logo */}
        <div className="flex items-center gap-3 w-64">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center neon-glow">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <span className="font-display font-semibold text-lg tracking-tight">Northstar Studio</span>
        </div>

        {/* Center Navigation (Pills) */}
        <nav className="flex items-center gap-2 p-1 bg-primary/5 border border-primary/10 rounded-xl">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`
                  relative px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${isActive ? 'text-white' : 'text-white/70 hover:text-white'}
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-primary/20 rounded-lg border border-primary/30 shadow-[0_0_15px_rgba(123,97,255,0.15)]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center justify-end w-64 relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`flex items-center gap-3 pl-1.5 pr-5 py-1.5 rounded-full border transition-colors ${isDropdownOpen ? 'bg-primary/10 border-primary/30' : 'bg-primary/5 border-primary/10 hover:bg-primary/10 hover:border-primary/20'}`}
          >
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
              R
            </div>
            <span className="text-sm font-medium text-white/90 tracking-wide">Rohan Choudhary</span>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute top-full mt-4 right-0 w-72 rounded-2xl bg-[#0a0a0f] border border-primary/20 shadow-[0_10px_40px_-10px_rgba(123,97,255,0.15)] z-[70] overflow-hidden"
            >
              <div className="px-6 py-5 border-b border-primary/10 bg-primary/5">
                <div className="text-lg font-semibold text-white mb-1">Rohan Choudhary</div>
                <div className="text-sm text-white/60">rohan@sugarandleather.com</div>
              </div>
              <div className="flex flex-col py-2">
                <button className="w-full text-left px-6 py-3 text-base text-white hover:bg-primary/10 transition-colors">Settings</button>
                <button className="w-full text-left px-6 py-3 text-base text-white hover:bg-primary/10 transition-colors">Review queue</button>
                <button className="w-full text-left px-6 py-3 text-base text-white hover:bg-primary/10 transition-colors">Terms</button>
                <button className="w-full text-left px-6 py-3 text-base text-white hover:bg-primary/10 transition-colors">Privacy</button>
              </div>
            </motion.div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        {/* Page Content */}
        <div className="flex-1 overflow-auto p-8 flex flex-col">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full flex-1 flex flex-col"
          >
            <Outlet />
          </motion.div>
        </div>
      </main>
    </div>
  );
}
