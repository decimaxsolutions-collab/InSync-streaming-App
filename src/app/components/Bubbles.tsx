import { Headphones, Bluetooth, Battery, Plus, Power, Settings } from 'lucide-react';
import { useState } from 'react';

export function Bubbles() {
  const [scanning, setScanning] = useState(false);

  const connectedBubbles = [
    { id: 1, name: 'AirPods Pro', battery: 87, charging: false, active: true, codec: 'AAC' },
    { id: 2, name: 'Sony WH-1000XM5', battery: 62, charging: true, active: false, codec: 'LDAC' },
  ];

  const availableBubbles = [
    { id: 3, name: 'Bose QC45', rssi: -45 },
    { id: 4, name: 'Sennheiser HD 660S', rssi: -68 },
  ];

  return (
    <div className="min-h-full p-6 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
          BUBBLES
        </h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Bluetooth size={14} className={scanning ? 'text-accent animate-pulse' : 'text-primary'} />
          <span>{scanning ? 'Scanning for devices...' : `${connectedBubbles.length} connected`}</span>
        </div>
      </div>

      {/* Connected Bubbles */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="uppercase tracking-widest text-sm" style={{ fontFamily: 'var(--font-display)' }}>
            Connected
          </h2>
          <button
            onClick={() => setScanning(!scanning)}
            className={`
              px-4 py-2 rounded-lg text-xs uppercase tracking-wider transition-all
              ${scanning
                ? 'bg-accent bg-opacity-20 text-accent border border-accent'
                : 'bg-card border border-border text-foreground hover:border-primary'
              }
            `}
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <div className="flex items-center gap-2">
              <Bluetooth size={14} />
              {scanning ? 'Scanning...' : 'Scan'}
            </div>
          </button>
        </div>

        <div className="space-y-3">
          {connectedBubbles.map((bubble) => (
            <div
              key={bubble.id}
              className={`
                bg-card border rounded-lg p-5 relative overflow-hidden group
                ${bubble.active ? 'border-primary' : 'border-border'}
                hover:scale-[1.01] transition-all duration-300
              `}
            >
              {/* Active indicator */}
              {bubble.active && (
                <>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]"></div>
                  <div className="absolute top-3 right-3 flex items-center gap-1 text-[10px] text-primary uppercase tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
                    Active
                  </div>
                </>
              )}

              {/* Device info */}
              <div className="flex items-start gap-4">
                <div className="bg-muted rounded-lg p-3 relative">
                  <Headphones size={28} className={bubble.active ? 'text-primary' : 'text-foreground'} />
                  {bubble.charging && (
                    <div className="absolute -top-1 -right-1 bg-accent rounded-full p-1">
                      <Battery size={10} className="text-accent-foreground" />
                    </div>
                  )}
                </div>

                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="font-medium mb-1">{bubble.name}</h3>
                    <p className="text-xs text-muted-foreground">Codec: {bubble.codec}</p>
                  </div>

                  {/* Battery meter */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground flex items-center gap-1">
                        <Battery size={12} />
                        Battery
                      </span>
                      <span className="text-foreground font-medium">{bubble.battery}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden relative">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] transition-all duration-500"
                        style={{ width: `${bubble.battery}%` }}
                      ></div>
                      {bubble.charging && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
                      )}
                    </div>
                  </div>

                  {/* Control buttons */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-muted text-foreground px-3 py-2 rounded text-xs uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Power size={12} className="inline mr-1" />
                      {bubble.active ? 'Disconnect' : 'Connect'}
                    </button>
                    <button className="bg-muted text-foreground px-3 py-2 rounded hover:bg-secondary transition-colors">
                      <Settings size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Available Devices */}
      {scanning && (
        <section className="space-y-4 animate-in fade-in duration-300">
          <h2 className="uppercase tracking-widest text-sm text-accent" style={{ fontFamily: 'var(--font-display)' }}>
            Available Devices
          </h2>

          <div className="space-y-2">
            {availableBubbles.map((bubble) => (
              <button
                key={bubble.id}
                className="w-full bg-card border border-border hover:border-accent rounded-lg p-4 flex items-center justify-between group transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <Headphones size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                  <div className="text-left">
                    <p className="text-sm font-medium">{bubble.name}</p>
                    <p className="text-xs text-muted-foreground">Signal: {Math.abs(bubble.rssi)} dBm</p>
                  </div>
                </div>
                <Plus size={18} className="text-muted-foreground group-hover:text-accent transition-colors" />
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Add New Button */}
      {!scanning && (
        <button
          onClick={() => setScanning(true)}
          className="w-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-primary-foreground py-4 rounded-lg hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(77,255,190,0.5)] active:scale-95 transition-all"
        >
          <div className="flex items-center justify-center gap-2 uppercase tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>
            <Plus size={20} />
            Add New Bubble
          </div>
        </button>
      )}
    </div>
  );
}
