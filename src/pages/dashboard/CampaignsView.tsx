import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Rocket, 
  Plus, 
  MoreVertical, 
  Play, 
  Pause, 
  Settings2,
  BarChart2,
  Clock,
  CheckCircle2,
  X,
  Linkedin
} from 'lucide-react';
import { XIcon, RedditIcon } from '../../components/Icons';

const campaigns = [
  { 
    id: 1, 
    name: 'Q4 Product Launch', 
    status: 'active', 
    platforms: ['linkedin', 'twitter'], 
    progress: 45, 
    totalPosts: 12, 
    completedPosts: 5,
    nextPost: 'Today, 2:00 PM'
  },
  { 
    id: 2, 
    name: 'Weekly Founder Thoughts', 
    status: 'active', 
    platforms: ['linkedin'], 
    progress: 80, 
    totalPosts: 5, 
    completedPosts: 4,
    nextPost: 'Tomorrow, 9:00 AM'
  },
  { 
    id: 3, 
    name: 'Black Friday Promo', 
    status: 'paused', 
    platforms: ['twitter', 'reddit'], 
    progress: 0, 
    totalPosts: 20, 
    completedPosts: 0,
    nextPost: 'Paused'
  },
];

export default function CampaignsView() {
  const [selectedCampaign, setSelectedCampaign] = useState<number | null>(null);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-semibold tracking-tight text-white mb-2">Campaigns</h1>
          <p className="text-text-muted">Manage your automated content flows.</p>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 neon-glow">
          <Plus className="w-4 h-4" />
          New Campaign
        </button>
      </div>

      {/* Campaigns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((campaign, i) => (
          <motion.div
            key={campaign.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setSelectedCampaign(campaign.id)}
            className="glass-panel p-6 cursor-pointer group hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${campaign.status === 'active' ? 'bg-primary/10 text-primary' : 'bg-white/5 text-text-muted'}`}>
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">{campaign.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`w-2 h-2 rounded-full ${campaign.status === 'active' ? 'bg-emerald-400 neon-glow' : 'bg-text-muted'}`}></span>
                    <span className="text-xs text-text-muted capitalize">{campaign.status}</span>
                  </div>
                </div>
              </div>
              <button className="p-2 text-text-muted hover:text-white transition-colors rounded-lg hover:bg-white/5" onClick={(e) => e.stopPropagation()}>
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-text-muted">Progress</span>
                  <span className="text-white font-medium">{campaign.completedPosts} / {campaign.totalPosts} posts</span>
                </div>
                <div className="w-full h-1.5 bg-surface rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${campaign.status === 'active' ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-text-muted'}`}
                    style={{ width: `${campaign.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-text-muted" />
                  <span className="text-xs text-text-muted">{campaign.nextPost}</span>
                </div>
                <div className="flex -space-x-2">
                  {campaign.platforms.map((platform, idx) => (
                    <div key={platform} className={`w-6 h-6 rounded-full border-2 border-background flex items-center justify-center z-${10-idx} ${platform === 'linkedin' ? 'bg-[#0077b5]' : platform === 'twitter' ? 'bg-black' : 'bg-[#FF4500]'}`}>
                      {platform === 'linkedin' ? (
                        <Linkedin className="w-3 h-3 text-white" />
                      ) : platform === 'twitter' ? (
                        <XIcon className="w-3 h-3 text-white" />
                      ) : (
                        <RedditIcon className="w-3 h-3 text-white" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Campaign Detail Modal/Panel */}
      <AnimatePresence>
        {selectedCampaign && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCampaign(null)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl max-h-[85vh] bg-surface border border-border rounded-2xl z-50 shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-border flex items-start justify-between bg-white/[0.02]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center neon-glow">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-semibold text-white">Q4 Product Launch</h2>
                    <div className="flex items-center gap-3 mt-1 text-sm text-text-muted">
                      <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Active</span>
                      <span>•</span>
                      <span>12 Posts Total</span>
                      <span>•</span>
                      <span>Ends Nov 30</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-white transition-colors">
                    <Pause className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-white transition-colors">
                    <Settings2 className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setSelectedCampaign(null)}
                    className="p-2 hover:bg-white/5 rounded-lg text-text-muted hover:text-white transition-colors ml-2"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="glass-panel p-4 flex flex-col items-center justify-center text-center">
                    <BarChart2 className="w-5 h-5 text-primary mb-2" />
                    <span className="text-2xl font-semibold text-white">45%</span>
                    <span className="text-xs text-text-muted">Completion</span>
                  </div>
                  <div className="glass-panel p-4 flex flex-col items-center justify-center text-center">
                    <Rocket className="w-5 h-5 text-secondary mb-2" />
                    <span className="text-2xl font-semibold text-white">5</span>
                    <span className="text-xs text-text-muted">Published</span>
                  </div>
                  <div className="glass-panel p-4 flex flex-col items-center justify-center text-center">
                    <Clock className="w-5 h-5 text-accent mb-2" />
                    <span className="text-2xl font-semibold text-white">7</span>
                    <span className="text-xs text-text-muted">Queued</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-white mb-4">Timeline</h3>
                <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                  
                  {/* Timeline Item 1 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-surface bg-emerald-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 neon-glow z-10">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-medium text-emerald-400">Published</span>
                        <span className="text-xs text-text-muted">Oct 1, 10:00 AM</span>
                      </div>
                      <h4 className="text-sm font-medium text-white mb-2">Teaser Announcement</h4>
                      <p className="text-xs text-text-muted line-clamp-2">Something big is coming. We've been working on this for 6 months and it changes everything about how you manage...</p>
                    </div>
                  </div>

                  {/* Timeline Item 2 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-surface bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 neon-glow z-10">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-4 border-primary/30">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-medium text-primary">Up Next</span>
                        <span className="text-xs text-text-muted">Today, 2:00 PM</span>
                      </div>
                      <h4 className="text-sm font-medium text-white mb-2">Feature Deep Dive: AI</h4>
                      <p className="text-xs text-text-muted line-clamp-2">Let's talk about the AI engine powering our new release. It's not just a wrapper, it's a fundamental rethink of...</p>
                      <button className="mt-3 text-xs font-medium text-primary hover:text-secondary transition-colors">Edit Content →</button>
                    </div>
                  </div>

                  {/* Timeline Item 3 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-surface bg-surface text-text-muted shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      <div className="w-2 h-2 rounded-full bg-text-muted"></div>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-4 opacity-70">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-medium text-text-muted">Draft</span>
                        <span className="text-xs text-text-muted">Oct 10, 9:00 AM</span>
                      </div>
                      <h4 className="text-sm font-medium text-white mb-2">Customer Story</h4>
                      <p className="text-xs text-text-muted italic">AI will generate this content based on the case study uploaded...</p>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
