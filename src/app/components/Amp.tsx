import { Speaker, Wifi, Volume2, Plus, Power, ChevronUp, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function Amp() {
  const [speakers, setSpeakers] = useState([
    { id: 1, name: 'Living Room', volume: 65, signal: 95, active: true, zone: 'Main Floor' },
    { id: 2, name: 'Bedroom', volume: 40, signal: 78, active: true, zone: 'Upper Floor' },
    { id: 3, name: 'Kitchen', volume: 0, signal: 88, active: false, zone: 'Main Floor' },
    { id: 4, name: 'Patio', volume: 55, signal: 62, active: true, zone: 'Outdoor' },
  ]);

  const zones = ['All Zones', 'Main Floor', 'Upper Floor', 'Outdoor'];
  const [activeZone, setActiveZone] = useState('All Zones');

  const adjustVolume = (id: number, delta: number) => {
    setSpeakers(speakers.map(speaker =>
      speaker.id === id
        ? { ...speaker, volume: Math.max(0, Math.min(100, speaker.volume + delta)) }
        : speaker
    ));
  };

  const toggleSpeaker = (id: number) => {
    setSpeakers(speakers.map(speaker =>
      speaker.id === id
        ? { ...speaker, active: !speaker.active }
        : speaker
    ));
  };

  const filteredSpeakers = activeZone === 'All Zones'
    ? speakers
    : speakers.filter(s => s.zone === activeZone);

  return (
    <div className="min-h-full p-6 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
          AMP
        </h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Wifi size={14} className="text-primary" />
          <span>{speakers.filter(s => s.active).length} speakers active</span>
        </div>
      </div>

      {/* Zone Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {zones.map((zone) => (
          <button
            key={zone}
            onClick={() => setActiveZone(zone)}
            className={`
              px-4 py-2 rounded-lg text-xs uppercase tracking-wider whitespace-nowrap transition-all
              ${activeZone === zone
                ? 'bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-primary-foreground shadow-[0_0_20px_rgba(77,255,190,0.4)]'
                : 'bg-card border border-border text-foreground hover:border-primary'
              }
            `}
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {zone}
          </button>
        ))}
      </div>

      {/* Speakers Grid */}
      <section className="space-y-4">
        <h2 className="uppercase tracking-widest text-sm" style={{ fontFamily: 'var(--font-display)' }}>
          Speakers
        </h2>

        <div className="space-y-4">
          {filteredSpeakers.map((speaker) => (
            <div
              key={speaker.id}
              className={`
                bg-card border rounded-lg p-5 relative overflow-hidden
                ${speaker.active ? 'border-primary' : 'border-border'}
                transition-all duration-300
              `}
            >
              {/* Active indicator */}
              {speaker.active && (
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]"></div>
              )}

              {/* Speaker header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-muted rounded-lg p-2.5 relative">
                    <Speaker size={24} className={speaker.active ? 'text-primary' : 'text-muted-foreground'} />
                    {speaker.active && (
                      <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-primary animate-pulse"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium">{speaker.name}</h3>
                    <p className="text-xs text-muted-foreground">{speaker.zone}</p>
                  </div>
                </div>

                <button
                  onClick={() => toggleSpeaker(speaker.id)}
                  className={`
                    p-2 rounded-lg transition-all
                    ${speaker.active
                      ? 'bg-primary bg-opacity-20 text-primary hover:bg-opacity-30'
                      : 'bg-muted text-muted-foreground hover:bg-secondary'
                    }
                  `}
                >
                  <Power size={16} />
                </button>
              </div>

              {/* Signal strength */}
              <div className="mb-4 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Wifi size={12} />
                    Signal Strength
                  </span>
                  <span className="text-foreground font-medium">{speaker.signal}%</span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      speaker.signal > 80
                        ? 'bg-primary'
                        : speaker.signal > 60
                        ? 'bg-accent'
                        : 'bg-destructive'
                    }`}
                    style={{ width: `${speaker.signal}%` }}
                  ></div>
                </div>
              </div>

              {/* Volume Control */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Volume2 size={12} />
                    Volume
                  </span>
                  <span className="text-foreground font-medium tabular-nums">{speaker.volume}%</span>
                </div>

                {/* Volume slider visualization */}
                <div className="relative h-12 bg-muted rounded-lg overflow-hidden">
                  <div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--gradient-start)] to-[var(--gradient-end)] transition-all duration-200"
                    style={{ height: `${speaker.volume}%` }}
                  ></div>
                  {speaker.active && speaker.volume > 0 && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse"></div>
                  )}
                </div>

                {/* Volume buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => adjustVolume(speaker.id, -10)}
                    disabled={!speaker.active}
                    className="flex-1 bg-muted text-foreground px-3 py-2 rounded text-xs uppercase tracking-wider hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <ChevronDown size={14} className="inline mr-1" />
                    Down
                  </button>
                  <button
                    onClick={() => adjustVolume(speaker.id, 10)}
                    disabled={!speaker.active}
                    className="flex-1 bg-muted text-foreground px-3 py-2 rounded text-xs uppercase tracking-wider hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <ChevronUp size={14} className="inline mr-1" />
                    Up
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Add New Speaker */}
      <button className="w-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-primary-foreground py-4 rounded-lg hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(77,255,190,0.5)] active:scale-95 transition-all">
        <div className="flex items-center justify-center gap-2 uppercase tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>
          <Plus size={20} />
          Add New Amp
        </div>
      </button>
    </div>
  );
}
