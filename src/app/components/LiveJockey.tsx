import { Radio, Play, Pause, SkipForward, Share2, Users, Clock, Waves, Circle } from 'lucide-react';
import { useState } from 'react';

export function LiveJockey() {
  const [isLive, setIsLive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentTrack = {
    title: 'Midnight City',
    artist: 'M83',
    album: 'Hurry Up, We\'re Dreaming',
    duration: '4:03',
    elapsed: '2:15',
    progress: 56,
  };

  const queue = [
    { title: 'Digital Love', artist: 'Daft Punk', duration: '4:58' },
    { title: 'Time', artist: 'Hans Zimmer', duration: '4:35' },
    { title: 'Strobe', artist: 'deadmau5', duration: '10:37' },
  ];

  const listeners = [
    { name: 'Alex M.', avatar: '🎧', joined: '2m ago' },
    { name: 'Jordan K.', avatar: '🎵', joined: '5m ago' },
    { name: 'Sam R.', avatar: '🎶', joined: '12m ago' },
  ];

  return (
    <div className="min-h-full p-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
          LIVE
          <span className="text-primary ml-2">JOCKEY</span>
        </h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Radio size={14} className={isLive ? 'text-primary animate-pulse' : 'text-muted-foreground'} />
          <span>{isLive ? 'Broadcasting Live' : 'Offline'}</span>
        </div>
      </div>

      {/* Go Live Button */}
      {!isLive ? (
        <button
          onClick={() => setIsLive(true)}
          className="w-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-primary-foreground py-6 rounded-lg hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(77,255,190,0.5)] active:scale-95 transition-all relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity"></div>
          <div className="flex items-center justify-center gap-3 uppercase tracking-wider text-lg" style={{ fontFamily: 'var(--font-display)' }}>
            <Radio size={24} />
            Start Broadcasting
          </div>
        </button>
      ) : (
        <div className="bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary rounded-lg p-5 space-y-3 shadow-[0_0_30px_rgba(77,255,190,0.3)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Circle size={12} className="text-primary fill-primary animate-pulse" />
                <div className="absolute inset-0 bg-primary rounded-full blur-md animate-pulse"></div>
              </div>
              <span className="uppercase tracking-wider text-sm text-primary" style={{ fontFamily: 'var(--font-display)' }}>
                Live Now
              </span>
            </div>
            <button
              onClick={() => setIsLive(false)}
              className="px-4 py-2 bg-destructive text-destructive-foreground rounded-lg text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition-transform"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              End Broadcast
            </button>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Users size={14} />
              <span>{listeners.length} listeners</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>23:45</span>
            </div>
          </div>
        </div>
      )}

      {/* Now Playing */}
      <section className="bg-card border border-border rounded-lg p-5 space-y-4">
        <h2 className="uppercase tracking-widest text-sm" style={{ fontFamily: 'var(--font-display)' }}>
          Now Playing
        </h2>

        <div className="space-y-4">
          {/* Album Art & Info */}
          <div className="flex gap-4">
            <div className="w-20 h-20 bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] rounded-lg flex items-center justify-center relative overflow-hidden group">
              <Waves size={32} className="text-primary-foreground relative z-10" />
              {isPlaying && (
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-20 animate-pulse"></div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium truncate">{currentTrack.title}</h3>
              <p className="text-sm text-muted-foreground truncate">{currentTrack.artist}</p>
              <p className="text-xs text-muted-foreground truncate mt-1">{currentTrack.album}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="h-2 bg-muted rounded-full overflow-hidden relative">
              <div
                className="h-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] rounded-full transition-all duration-300"
                style={{ width: `${currentTrack.progress}%` }}
              ></div>
              {isPlaying && (
                <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-white to-transparent opacity-30 animate-pulse"></div>
              )}
            </div>
            <div className="flex justify-between text-xs text-muted-foreground tabular-nums">
              <span>{currentTrack.elapsed}</span>
              <span>{currentTrack.duration}</span>
            </div>
          </div>

          {/* Playback Controls */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] text-primary-foreground p-4 rounded-full hover:scale-110 hover:shadow-[0_0_25px_rgba(77,255,190,0.6)] active:scale-95 transition-all relative overflow-hidden group"
            >
              {isPlaying ? (
                <Pause size={24} className="relative z-10" />
              ) : (
                <Play size={24} className="relative z-10 ml-0.5" />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </button>
            <button className="bg-muted text-foreground p-3 rounded-full hover:scale-110 active:scale-95 transition-transform">
              <SkipForward size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Queue */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="uppercase tracking-widest text-sm" style={{ fontFamily: 'var(--font-display)' }}>
            Up Next
          </h2>
          <span className="text-xs text-muted-foreground">{queue.length} tracks</span>
        </div>

        <div className="space-y-2">
          {queue.map((track, index) => (
            <div
              key={index}
              className="bg-card border border-border hover:border-primary rounded-lg p-3 flex items-center gap-3 group transition-all duration-200"
            >
              <div className="w-8 h-8 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{track.title}</p>
                <p className="text-xs text-muted-foreground truncate">{track.artist}</p>
              </div>
              <span className="text-xs text-muted-foreground tabular-nums">{track.duration}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Listeners */}
      {isLive && listeners.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="uppercase tracking-widest text-sm" style={{ fontFamily: 'var(--font-display)' }}>
              Active Listeners
            </h2>
            <button className="text-xs text-primary hover:underline flex items-center gap-1">
              <Share2 size={12} />
              Invite
            </button>
          </div>

          <div className="space-y-2">
            {listeners.map((listener, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-3 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] rounded-full flex items-center justify-center text-xl">
                  {listener.avatar}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{listener.name}</p>
                  <p className="text-xs text-muted-foreground">Joined {listener.joined}</p>
                </div>
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
