import { Radio, Headphones, Speaker, Activity, Wifi, Bluetooth } from 'lucide-react';

export function Home() {
  const activeDevices = [
    { type: 'bubble', name: 'AirPods Pro', battery: 87, connected: true },
    { type: 'bubble', name: 'Sony WH-1000XM5', battery: 62, connected: false },
    { type: 'amp', name: 'Living Room Speaker', signal: 95, connected: true },
    { type: 'amp', name: 'Bedroom Speaker', signal: 78, connected: true },
  ];

  const activeSessions = [
    { name: 'Late Night Vibes', listeners: 12, status: 'live', duration: '1h 23m' },
    { name: 'Morning Motivation', listeners: 0, status: 'paused', duration: '45m' },
  ];

  return (
    <div className="min-h-full p-6 space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-block">
          <h1 className="text-5xl tracking-tight bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-display)' }}>
            InSync
          </h1>
          <div className="h-0.5 w-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] mt-1"></div>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Activity size={14} className="text-primary" />
          <span>All systems operational</span>
        </div>
      </div>

      {/* Active Sessions */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="uppercase tracking-widest text-sm" style={{ fontFamily: 'var(--font-display)' }}>
            Live Sessions
          </h2>
          <div className="h-2 w-2 rounded-full bg-[var(--neon-green)] animate-pulse"></div>
        </div>

        <div className="space-y-3">
          {activeSessions.map((session, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-4 relative overflow-hidden group hover:border-primary hover:shadow-[0_0_20px_rgba(77,255,190,0.3)] transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--gradient-start)] to-[var(--gradient-end)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Radio size={16} className={session.status === 'live' ? 'text-primary' : 'text-muted-foreground'} />
                    <h3 className="font-medium">{session.name}</h3>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{session.listeners} listeners</span>
                    <span>•</span>
                    <span>{session.duration}</span>
                  </div>
                </div>
                <div className={`
                  px-3 py-1 rounded-full text-xs uppercase tracking-wider
                  ${session.status === 'live'
                    ? 'bg-primary bg-opacity-20 text-primary'
                    : 'bg-muted text-muted-foreground'
                  }
                `} style={{ fontFamily: 'var(--font-display)' }}>
                  {session.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Connected Devices */}
      <section className="space-y-4">
        <h2 className="uppercase tracking-widest text-sm" style={{ fontFamily: 'var(--font-display)' }}>
          Connected Devices
        </h2>

        <div className="grid grid-cols-2 gap-3">
          {activeDevices.map((device, index) => (
            <div
              key={index}
              className={`
                bg-card border rounded-lg p-4 space-y-3 relative overflow-hidden
                ${device.connected ? 'border-primary' : 'border-border'}
                hover:scale-[1.02] transition-transform duration-200
              `}
            >
              {device.connected && (
                <div className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary animate-pulse"></div>
              )}

              <div className="flex items-center gap-2">
                {device.type === 'bubble' ? (
                  <Headphones size={20} className={device.connected ? 'text-primary' : 'text-muted-foreground'} />
                ) : (
                  <Speaker size={20} className={device.connected ? 'text-primary' : 'text-muted-foreground'} />
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{device.name}</p>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    {device.type === 'bubble' ? (
                      <>
                        <Bluetooth size={10} />
                        Battery
                      </>
                    ) : (
                      <>
                        <Wifi size={10} />
                        Signal
                      </>
                    )}
                  </span>
                  <span>{device.type === 'bubble' ? device.battery : device.signal}%</span>
                </div>
                <div className="h-1 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${device.connected ? 'bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]' : 'bg-muted-foreground'}`}
                    style={{ width: `${device.type === 'bubble' ? device.battery : device.signal}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="space-y-4">
        <h2 className="uppercase tracking-widest text-sm" style={{ fontFamily: 'var(--font-display)' }}>
          Quick Actions
        </h2>

        <div className="grid grid-cols-2 gap-3">
          <button className="bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] text-primary-foreground p-4 rounded-lg hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(77,255,190,0.5)] transition-all active:scale-95">
            <Radio size={24} className="mb-2" />
            <span className="block text-sm uppercase tracking-wide" style={{ fontFamily: 'var(--font-display)' }}>
              Start Live
            </span>
          </button>
          <button className="bg-card border border-border text-foreground p-4 rounded-lg hover:border-primary hover:shadow-[0_0_20px_rgba(77,255,190,0.3)] hover:scale-[1.02] transition-all active:scale-95">
            <Headphones size={24} className="mb-2" />
            <span className="block text-sm uppercase tracking-wide" style={{ fontFamily: 'var(--font-display)' }}>
              Add Bubble
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}
