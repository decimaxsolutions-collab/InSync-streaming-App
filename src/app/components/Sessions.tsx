import { Users, Link2, Share2, UserPlus, Copy, Check, Radio, Clock } from 'lucide-react';
import { useState } from 'react';

export function Sessions() {
  const [copiedLink, setCopiedLink] = useState(false);

  const activeSessions = [
    {
      id: 1,
      name: 'Late Night Vibes',
      host: 'You',
      listeners: 12,
      status: 'live' as const,
      duration: '1h 23m',
      inviteLink: 'https://app.link/lnv-a8f2',
    },
    {
      id: 2,
      name: 'Morning Motivation',
      host: 'You',
      listeners: 0,
      status: 'paused' as const,
      duration: '45m',
      inviteLink: 'https://app.link/mm-k9d1',
    },
  ];

  const friendSessions = [
    {
      id: 3,
      name: 'Workout Mix',
      host: 'Alex M.',
      listeners: 8,
      status: 'live' as const,
      genre: 'EDM',
    },
    {
      id: 4,
      name: 'Study Session',
      host: 'Jordan K.',
      listeners: 15,
      status: 'live' as const,
      genre: 'Lo-Fi',
    },
  ];

  const friends = [
    { name: 'Alex M.', status: 'online', listening: 'Workout Mix' },
    { name: 'Jordan K.', status: 'online', listening: 'Study Session' },
    { name: 'Sam R.', status: 'offline', listening: null },
    { name: 'Casey P.', status: 'online', listening: null },
  ];

  const copyInviteLink = (link: string) => {
    navigator.clipboard.writeText(link);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="min-h-full p-6 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
          SESSIONS
        </h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users size={14} className="text-primary" />
          <span>{friends.filter(f => f.status === 'online').length} friends online</span>
        </div>
      </div>

      {/* Your Sessions */}
      <section className="space-y-4">
        <h2 className="uppercase tracking-widest text-sm" style={{ fontFamily: 'var(--font-display)' }}>
          Your Sessions
        </h2>

        <div className="space-y-3">
          {activeSessions.map((session) => (
            <div
              key={session.id}
              className={`
                bg-card border rounded-lg p-5 relative overflow-hidden group
                ${session.status === 'live' ? 'border-primary' : 'border-border'}
                transition-all duration-300
              `}
            >
              {/* Status indicator */}
              {session.status === 'live' && (
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]"></div>
              )}

              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Radio size={16} className={session.status === 'live' ? 'text-primary' : 'text-muted-foreground'} />
                      <h3 className="font-medium">{session.name}</h3>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{session.listeners} listeners</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock size={10} />
                        {session.duration}
                      </span>
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

                {/* Invite Link */}
                <div className="bg-muted rounded-lg p-3 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Link2 size={12} />
                    <span className="uppercase tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>
                      Invite Link
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="flex-1 text-xs bg-background px-3 py-2 rounded border border-border truncate">
                      {session.inviteLink}
                    </code>
                    <button
                      onClick={() => copyInviteLink(session.inviteLink)}
                      className="p-2 bg-primary text-primary-foreground rounded hover:scale-110 active:scale-95 transition-transform"
                    >
                      {copiedLink ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-primary-foreground px-4 py-2 rounded-lg text-xs uppercase tracking-wider hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(77,255,190,0.4)] active:scale-95 transition-all">
                    <Share2 size={14} className="inline mr-1" />
                    Share
                  </button>
                  <button className="flex-1 bg-muted text-foreground px-4 py-2 rounded-lg text-xs uppercase tracking-wider hover:bg-secondary transition-colors">
                    Manage
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full bg-card border-2 border-dashed border-border hover:border-primary text-foreground py-4 rounded-lg hover:scale-[1.01] active:scale-95 transition-all">
          <div className="flex items-center justify-center gap-2 uppercase tracking-wider text-sm" style={{ fontFamily: 'var(--font-display)' }}>
            <Radio size={18} />
            Create New Session
          </div>
        </button>
      </section>

      {/* Friends' Sessions */}
      <section className="space-y-4">
        <h2 className="uppercase tracking-widest text-sm" style={{ fontFamily: 'var(--font-display)' }}>
          Friends' Sessions
        </h2>

        {friendSessions.length > 0 ? (
          <div className="space-y-3">
            {friendSessions.map((session) => (
              <button
                key={session.id}
                className="w-full bg-card border border-border hover:border-primary rounded-lg p-4 text-left group transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Radio size={14} className="text-primary animate-pulse" />
                      <h3 className="font-medium">{session.name}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground">by {session.host}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Users size={12} />
                    <span>{session.listeners}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-primary">{session.genre}</span>
                  <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                    Join →
                  </span>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="bg-card border border-dashed border-border rounded-lg p-8 text-center">
            <Radio size={32} className="mx-auto mb-3 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">No active sessions from friends</p>
          </div>
        )}
      </section>

      {/* Friends List */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="uppercase tracking-widest text-sm" style={{ fontFamily: 'var(--font-display)' }}>
            Friends
          </h2>
          <button className="text-xs text-primary hover:underline flex items-center gap-1">
            <UserPlus size={12} />
            Add Friend
          </button>
        </div>

        <div className="space-y-2">
          {friends.map((friend, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-3 flex items-center gap-3 hover:border-primary transition-all duration-200"
            >
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center relative
                ${friend.status === 'online'
                  ? 'bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)]'
                  : 'bg-muted'
                }
              `}>
                <span className="text-lg">{friend.name.charAt(0)}</span>
                <div className={`
                  absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-card
                  ${friend.status === 'online' ? 'bg-primary' : 'bg-muted-foreground'}
                `}></div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">{friend.name}</p>
                {friend.listening ? (
                  <p className="text-xs text-muted-foreground truncate flex items-center gap-1">
                    <Radio size={10} className="text-primary" />
                    Listening to {friend.listening}
                  </p>
                ) : (
                  <p className="text-xs text-muted-foreground capitalize">{friend.status}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
