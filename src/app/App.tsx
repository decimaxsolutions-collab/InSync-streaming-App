import { useState } from 'react';
import { Home } from './components/Home';
import { Bubbles } from './components/Bubbles';
import { Amp } from './components/Amp';
import { LiveJockey } from './components/LiveJockey';
import { MusicBrowser } from './components/MusicBrowser';
import { Sessions } from './components/Sessions';
import { Radio, Headphones, Speaker, Music, Users, Home as HomeIcon } from 'lucide-react';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<'home' | 'bubbles' | 'amp' | 'live-jockey' | 'music' | 'sessions'>('home');

  const navItems = [
    { id: 'home' as const, icon: HomeIcon, label: 'Home' },
    { id: 'bubbles' as const, icon: Headphones, label: 'Bubbles' },
    { id: 'amp' as const, icon: Speaker, label: 'Amp' },
    { id: 'live-jockey' as const, icon: Radio, label: 'Live' },
    { id: 'music' as const, icon: Music, label: 'Music' },
    { id: 'sessions' as const, icon: Users, label: 'Sessions' },
  ];

  return (
    <div className="size-full flex flex-col bg-background relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--gradient-start)] rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--gradient-end)] rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main content */}
      <div className="flex-1 relative z-10 overflow-y-auto pb-20">
        {activeScreen === 'home' && <Home />}
        {activeScreen === 'bubbles' && <Bubbles />}
        {activeScreen === 'amp' && <Amp />}
        {activeScreen === 'live-jockey' && <LiveJockey />}
        {activeScreen === 'music' && <MusicBrowser />}
        {activeScreen === 'sessions' && <Sessions />}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-20 backdrop-blur-xl bg-opacity-90">
        <div className="flex items-center justify-around px-2 py-3 max-w-md mx-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveScreen(item.id)}
                className={`
                  flex flex-col items-center gap-1 px-3 py-1 rounded-lg transition-all duration-300
                  ${isActive
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                  }
                `}
              >
                <div className={`relative ${isActive ? 'scale-110' : ''} transition-transform`}>
                  <Icon size={20} />
                  {isActive && (
                    <div className="absolute inset-0 blur-md bg-primary opacity-50 animate-pulse"></div>
                  )}
                </div>
                <span className="text-[10px] uppercase tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
