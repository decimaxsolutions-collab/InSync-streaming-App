import { Music, Search, Play, Plus, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export function MusicBrowser() {
  const [selectedService, setSelectedService] = useState<'spotify' | 'apple' | 'youtube'>('spotify');

  const services = [
    {
      id: 'spotify' as const,
      name: 'Spotify',
      connected: true,
      color: '#1DB954',
      playlists: 127,
    },
    {
      id: 'apple' as const,
      name: 'Apple Music',
      connected: true,
      color: '#FA243C',
      playlists: 89,
    },
    {
      id: 'youtube' as const,
      name: 'YouTube Music',
      connected: false,
      color: '#FF0000',
      playlists: 0,
    },
  ];

  const playlists = [
    { name: 'Late Night Vibes', tracks: 143, duration: '8h 34m', updated: '2d ago' },
    { name: 'Focus Flow', tracks: 89, duration: '5h 12m', updated: '5d ago' },
    { name: 'Workout Energy', tracks: 67, duration: '4h 22m', updated: '1w ago' },
    { name: 'Chill Sundays', tracks: 201, duration: '12h 45m', updated: '3d ago' },
  ];

  const recentTracks = [
    { title: 'Resonance', artist: 'HOME', album: 'Odyssey' },
    { title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours' },
    { title: 'Levitating', artist: 'Dua Lipa', album: 'Future Nostalgia' },
  ];

  const activeService = services.find(s => s.id === selectedService);

  return (
    <div className="min-h-full p-6 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
          MUSIC
        </h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Music size={14} className="text-primary" />
          <span>{services.filter(s => s.connected).length} services connected</span>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search songs, artists, playlists..."
          className="w-full bg-card border border-border rounded-lg pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      {/* Service Selector */}
      <section className="space-y-4">
        <h2 className="uppercase tracking-widest text-sm" style={{ fontFamily: 'var(--font-display)' }}>
          Streaming Services
        </h2>

        <div className="grid grid-cols-3 gap-3">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => service.connected && setSelectedService(service.id)}
              disabled={!service.connected}
              className={`
                relative p-4 rounded-lg border-2 transition-all duration-200
                ${selectedService === service.id && service.connected
                  ? 'border-primary scale-105'
                  : service.connected
                  ? 'border-border hover:border-primary/50'
                  : 'border-border opacity-50 cursor-not-allowed'
                }
              `}
            >
              <div className="space-y-2">
                <div
                  className="w-10 h-10 rounded-full mx-auto flex items-center justify-center"
                  style={{ backgroundColor: service.connected ? service.color : 'var(--muted)' }}
                >
                  <Music size={20} className="text-white" />
                </div>
                <p className="text-xs font-medium truncate">{service.name}</p>
                {service.connected ? (
                  <div className="h-1.5 w-1.5 rounded-full bg-[var(--neon-green)] mx-auto"></div>
                ) : (
                  <p className="text-[10px] text-muted-foreground">Not Connected</p>
                )}
              </div>
              {selectedService === service.id && service.connected && (
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {activeService && !activeService.connected && (
          <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:scale-[1.02] active:scale-95 transition-transform">
            <div className="flex items-center justify-center gap-2 text-sm uppercase tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>
              <ExternalLink size={16} />
              Connect {activeService.name}
            </div>
          </button>
        )}
      </section>

      {/* Recent Tracks */}
      <section className="space-y-4">
        <h2 className="uppercase tracking-widest text-sm" style={{ fontFamily: 'var(--font-display)' }}>
          Recently Played
        </h2>

        <div className="space-y-2">
          {recentTracks.map((track, index) => (
            <div
              key={index}
              className="bg-card border border-border hover:border-primary rounded-lg p-3 flex items-center gap-3 group transition-all duration-200"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] rounded flex items-center justify-center relative overflow-hidden">
                <Music size={20} className="text-primary-foreground relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{track.title}</p>
                <p className="text-xs text-muted-foreground truncate">{track.artist}</p>
              </div>
              <button className="opacity-0 group-hover:opacity-100 p-2 bg-primary text-primary-foreground rounded-full hover:scale-110 active:scale-95 transition-all">
                <Plus size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Playlists */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="uppercase tracking-widest text-sm" style={{ fontFamily: 'var(--font-display)' }}>
            Your Playlists
          </h2>
          {activeService && (
            <span className="text-xs text-muted-foreground">{activeService.playlists} total</span>
          )}
        </div>

        <div className="space-y-3">
          {playlists.map((playlist, index) => (
            <div
              key={index}
              className="bg-card border border-border hover:border-primary rounded-lg p-4 group transition-all duration-200 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--gradient-start)]/30 to-[var(--gradient-end)]/30 rounded-lg flex items-center justify-center flex-shrink-0 relative group-hover:scale-105 transition-transform">
                  <Music size={24} className="text-primary" />
                  <button className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play size={20} className="text-white ml-0.5" />
                  </button>
                </div>

                <div className="flex-1 min-w-0 space-y-1">
                  <h3 className="font-medium truncate">{playlist.name}</h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{playlist.tracks} tracks</span>
                    <span>•</span>
                    <span>{playlist.duration}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Updated {playlist.updated}</p>
                </div>

                <button className="p-2 bg-muted text-foreground rounded-lg opacity-0 group-hover:opacity-100 hover:bg-primary hover:text-primary-foreground transition-all">
                  <Plus size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Import Playlist Button */}
      <button className="w-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-primary-foreground py-4 rounded-lg hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(77,255,190,0.5)] active:scale-95 transition-all">
        <div className="flex items-center justify-center gap-2 uppercase tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>
          <Plus size={20} />
          Import Playlist
        </div>
      </button>
    </div>
  );
}
