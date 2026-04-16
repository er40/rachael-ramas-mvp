import { MapPin, Clock, Calendar } from 'lucide-react';
import { useState } from "react";


const events = [
  {
    id: 1,
    date: 'June 2, 2026',
    month: 'JUN',
    day: '2',
    city: 'Boca Raton',
    state: 'Florida',
    venue: 'Barnes & Noble',
    time: '5:00 PM',
    note: null,
    ticketUrl: 'https://events.ticketleap.com/tickets/barnes-651130981/rachael-ramas-book-launch',
  },
  {
    id: 2,
    date: 'June 11, 2026',
    month: 'JUN',
    day: '11',
    city: 'Ferndale',
    state: 'Michigan',
    venue: 'Love & Other Books',
    time: '6:00 PM',
    note: null,
    ticketUrl: null,
  },
  {
    id: 3,
    date: 'June 17, 2026',
    month: 'JUN',
    day: '17',
    city: 'Grand Rapids',
    state: 'Michigan',
    venue: 'Schuler Books',
    time: '6:30 PM',
    note: null,
    ticketUrl: null,
  },
  {
    id: 4,
    date: 'June 23, 2026',
    month: 'JUN',
    day: '23',
    city: 'Ann Arbor',
    state: 'Michigan',
    venue: 'Literati',
    time: '6:30 PM',
    note: 'Co-author event with JL Lienthardt',
    ticketUrl: null,
  },
  {
    id: 5,
    date: 'July 16, 2026',
    month: 'JUL',
    day: '16',
    city: 'Northville',
    state: 'Michigan',
    venue: 'Barnes & Noble',
    time: '5:00 PM',
    note: null,
    ticketUrl: null,
  },
  {
    id: 6,
    date: 'July 19, 2026',
    month: 'JUL',
    day: '19',
    city: 'Detroit',
    state: 'Michigan',
    venue: 'Detroit Book Festival',
    time: null,
    note: null,
    ticketUrl: null,
  },
];

export default function BookTour() {
  return (
    <section className="relative min-h-screen bg-[#0a0e1a] overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(180, 30, 30, 0.3) 0%, transparent 60%),
                            radial-gradient(ellipse at 80% 20%, rgba(255, 140, 0, 0.15) 0%, transparent 50%),
                            radial-gradient(ellipse at 60% 80%, rgba(20, 60, 120, 0.4) 0%, transparent 60%)`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-5xl font-black text-white leading-none mb-2 tracking-tight">
            Objects in Lakes
          </h1>
          <div className="flex items-center justify-center gap-4 my-5">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-red-500" />
            <span className="text-red-400 text-xl font-bold tracking-[0.4em] uppercase">Book Tour</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-red-500" />
          </div>
          <p className="text-slate-400 text-2xl mt-4">Come see me this summer!</p>

          
        </div>

        <div className="grid gap-3">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="group relative flex items-stretch bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.07] hover:border-red-500/30 rounded-xl overflow-hidden transition-all duration-300"
            >
              <div className="flex-shrink-0 w-20 flex flex-col items-center justify-center bg-white/[0.04] border-r border-white/[0.06] px-4 py-5">
                <span className="text-red-400 text-xs font-bold tracking-widest uppercase leading-none">
                  {event.month}
                </span>
                <span className="text-white text-3xl font-black leading-none mt-1">
                  {event.day}
                </span>
              </div>

              <div className="flex-1 flex flex-col md:flex-row md:items-center gap-2 md:gap-6 px-6 py-5">
                <div className="flex items-center gap-2 min-w-[180px]">
                  <MapPin className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <div>
                    <span className="text-white font-bold text-xl leading-tight">{event.city}</span>
                    <span class="text-slate-400 font-bold text-base ml-1.5"> |</span>
                    <span className="text-slate-400 text-base ml-1.5">{event.state}</span>
                  </div>
                </div>

                <div className="flex-1 flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                  <span className="text-slate-300 text-xl font-medium">{event.venue}</span>
                  {event.note && (
                    <span className="text-[#e8c84a]/80 text-base bg-[#e8c44a]/10 border border-[#e8c44a]/20 rounded-full px-3 py-0.5 w-fit">
                      {event.note}
                    </span>
                  )}
                </div>


                {event.ticketUrl && (
                  <a
                    href={event.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground text-lg text-white rounded-lg transition-colors duration-200 flex-shrink-0"
                  >
                    Reserve
                  </a>
                )}

                {event.time && (
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span className="text-slate-400 text-xl font-medium">{event.time}</span>
                  </div>
                )}
              </div>

          

              

              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-red-500/0 to-transparent group-hover:via-red-500/60 transition-all duration-300" />

              <div className="absolute top-3 right-3 text-slate-700/40 text-xs font-mono tabular-nums select-none">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>

            
          ))}
        </div>

        

        
      </div>

      
    </section>
  );
};

