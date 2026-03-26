import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  Plus, 
  MoreHorizontal
} from 'lucide-react';
import { cn } from '../lib/utils';

const ContentCalendar = () => {
  const [activeDate, setActiveDate] = useState('24');
  const [viewMode, setViewMode] = useState<'week' | 'month'>('week');

  const platforms = [
    { name: 'X', borderColor: 'border-zinc-400/50' },
    { name: 'LinkedIn', borderColor: 'border-blue-600/50' },
    { name: 'Instagram', borderColor: 'border-pink-500/50' },
    { name: 'YouTube', borderColor: 'border-red-500/50' },
    { name: 'Facebook', borderColor: 'border-blue-700/50' },
  ];

  const getPlatformBorder = (platform: string) => {
    switch (platform) {
      case 'LinkedIn': return 'border-blue-600/50';
      case 'YouTube': return 'border-red-500/50';
      case 'X': return 'border-zinc-400/50';
      case 'Instagram': return 'border-pink-500/50';
      case 'Facebook': return 'border-blue-700/50';
      default: return 'border-primary/30';
    }
  };

  const truncateTitle = (title: string, wordCount = 3) => {
    const words = title.split(' ');
    if (words.length <= wordCount) return title;
    return words.slice(0, wordCount).join(' ') + '...';
  };

  const schedule = [
    {
      day: 'Mon',
      date: '24',
      posts: [
        { title: 'AI Marketing Trends 2026 Strategy', platform: 'LinkedIn', time: '09:00', status: 'Published' },
        { title: 'Northstar Studio Feature Reveal Today', platform: 'X', time: '14:00', status: 'Published' },
      ]
    },
    {
      day: 'Tue',
      date: '25',
      posts: [
        { title: 'The Power of GEO Optimization', platform: 'Instagram', time: '10:30', status: 'Published' },
        { title: 'Market Intelligence 101 Guide', platform: 'YouTube', time: '16:00', status: 'Scheduled' },
      ]
    },
    {
      day: 'Wed',
      date: '26',
      posts: [
        { title: 'Autonomous Growth Case Study Analysis', platform: 'LinkedIn', time: '11:00', status: 'Scheduled' },
        { title: 'Facebook Ads Mastery Course', platform: 'Facebook', time: '15:30', status: 'Scheduled' },
      ]
    },
    {
      day: 'Thu',
      date: '27',
      posts: [
        { title: 'Why AEO is the new SEO', platform: 'X', time: '09:30', status: 'Scheduled' },
        { title: 'Weekly AI Wrap-up Content', platform: 'Instagram', time: '15:00', status: 'Scheduled' },
      ]
    },
    {
      day: 'Fri',
      date: '28',
      posts: [
        { title: 'Northstar Studio v2.0 Launch Event', platform: 'LinkedIn', time: '10:00', status: 'Scheduled' },
      ]
    }
  ];

  const monthDays = Array.from({ length: 30 }, (_, i) => i + 1);

  const getPostsForDate = (date: string) => {
    return schedule.find(s => s.date === date)?.posts || [];
  };

  return (
    <section id="calendar" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[48px] leading-tight font-light mb-6"
          >
            Autonomous <span className="text-gradient">Content Calendar</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            Northstar Studio automatically generates, schedules, and publishes your content across all platforms.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-[3rem] overflow-hidden border-white/10 shadow-2xl flex flex-col lg:flex-row min-h-[700px]"
        >
          {/* Sidebar */}
          <div className="w-full lg:w-80 border-r border-white/10 bg-white/5 p-8 flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-bold">Calendar</span>
              </div>
              <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                <Plus className="w-5 h-5 text-white/50" />
              </button>
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input 
                type="text" 
                placeholder="Search posts..." 
                className="w-full bg-black/30 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">Platforms</h4>
                <div className="space-y-2">
                  {platforms.map((p) => (
                    <div key={p.name} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">{p.name}</span>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">Status</h4>
                <div className="space-y-3 px-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-sm text-white/60">Published</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm text-white/60">Scheduled</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Calendar Area */}
          <div className="flex-1 flex flex-col">
            {/* Calendar Header */}
            <div className="p-8 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <h3 className="text-2xl font-light">June 2024</h3>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-white/5 rounded-lg border border-white/10 transition-colors">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setActiveDate('24')}
                    className="px-4 py-2 hover:bg-white/5 rounded-lg border border-white/10 text-sm font-medium transition-colors"
                  >
                    Today
                  </button>
                  <button className="p-2 hover:bg-white/5 rounded-lg border border-white/10 transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-white/5 p-1 rounded-xl border border-white/10 flex">
                  <button 
                    onClick={() => setViewMode('week')}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-bold transition-all",
                      viewMode === 'week' ? "bg-primary/20 text-primary" : "hover:bg-white/5 text-white/50"
                    )}
                  >
                    Week
                  </button>
                  <button 
                    onClick={() => setViewMode('month')}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-bold transition-all",
                      viewMode === 'month' ? "bg-primary/20 text-primary" : "hover:bg-white/5 text-white/50"
                    )}
                  >
                    Month
                  </button>
                </div>
                <button className="px-6 py-2 bg-gradient-to-r from-primary to-secondary rounded-xl text-sm font-bold shadow-lg shadow-primary/20">
                  New Post
                </button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="flex-1 p-8 overflow-x-auto">
              {viewMode === 'week' ? (
                <div className="min-w-[800px] grid grid-cols-5 gap-6 h-full">
                  {schedule.map((day, idx) => (
                    <div key={day.day} className="flex flex-col gap-6">
                      <div className="text-center">
                        <span className="block text-xs font-bold uppercase tracking-widest text-white/30 mb-2">{day.day}</span>
                        <button 
                          onClick={() => setActiveDate(day.date)}
                          className={cn(
                            "inline-flex items-center justify-center w-10 h-10 rounded-full text-lg font-bold transition-all",
                            activeDate === day.date ? "bg-primary text-white scale-110 shadow-lg shadow-primary/30" : "text-white/70 hover:bg-white/10"
                          )}
                        >
                          {day.date}
                        </button>
                      </div>

                      <div className="flex-1 space-y-2">
                        {day.posts.map((post, pIdx) => (
                          <motion.div
                            key={pIdx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: (idx * 0.1) + (pIdx * 0.1) }}
                            className={cn(
                              "p-2 border bg-white/5 backdrop-blur-sm relative group cursor-pointer hover:bg-white/10 transition-all",
                              getPlatformBorder(post.platform)
                            )}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[8px] font-bold uppercase tracking-tighter opacity-40">{post.time}</span>
                              <MoreHorizontal className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <h5 className="text-[10px] font-light mb-1.5 leading-tight">{truncateTitle(post.title, 3)}</h5>
                            <div className="flex items-center justify-between">
                              <span className="text-[8px] font-medium px-1.5 py-0.5 bg-white/5 rounded-full text-white/70">{post.platform}</span>
                              <span className={cn(
                                "text-[6px] font-bold uppercase tracking-widest px-1 py-0.5 rounded-full",
                                post.status === 'Published' ? "bg-green-500/20 text-green-500" : "bg-primary/20 text-primary"
                              )}>
                                {post.status}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                        
                        <div className="h-12 border border-dashed border-white/5 flex items-center justify-center group hover:border-white/20 transition-colors cursor-pointer">
                          <Plus className="w-3 h-3 text-white/10 group-hover:text-white/30 transition-colors" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-7 gap-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                    <div key={d} className="text-center text-[10px] font-bold uppercase tracking-widest text-white/20 py-2">{d}</div>
                  ))}
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={`empty-${i}`} className="h-28 bg-white/2 border border-white/5" />
                  ))}
                  {monthDays.map(d => {
                    const posts = getPostsForDate(d.toString());
                    return (
                      <div 
                        key={d} 
                        className={cn(
                          "h-28 border p-1.5 transition-all cursor-pointer group flex flex-col gap-1",
                          d.toString() === activeDate ? "bg-primary/10 border-primary/50" : "bg-white/5 border-white/5 hover:border-white/20"
                        )}
                        onClick={() => setActiveDate(d.toString())}
                      >
                        <span className={cn(
                          "text-[10px] font-bold mb-1",
                          d.toString() === activeDate ? "text-primary" : "text-white/40"
                        )}>{d}</span>
                        <div className="flex-1 space-y-1 overflow-hidden">
                          {posts.map((post, pIdx) => (
                            <div 
                              key={pIdx}
                              className={cn(
                                "p-1 border text-[7px] font-light leading-none truncate",
                                getPlatformBorder(post.platform)
                              )}
                            >
                              {truncateTitle(post.title, 2)}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};



export default ContentCalendar;
