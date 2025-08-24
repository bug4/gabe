import React from 'react';
import { Volume2, VolumeX, Twitter } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import ContentOverlay from './components/ContentOverlay';

function App() {
  const [isMuted, setIsMuted] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  React.useEffect(() => {
    // Auto-play music when component mounts
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.log('Auto-play was prevented:', error);
      });
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      }
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Image Background - Full Screen */}
      <div 
        className="fixed inset-0 w-full h-full z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Untitled design (51) copy.png')"
        }}
      />

      {/* Spline 3D Scene - Above Background Image */}
      <div className="fixed inset-0 w-full h-full z-5">
        <Spline scene="https://prod.spline.design/kANUvVsWEW1DPjbb/scene.splinecode" />
      </div>

      {/* Top Navigation */}
      <div className="fixed top-6 right-6 z-30 flex gap-4">
        <a 
          href="https://heaven.xyz" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 pointer-events-auto"
        >
          Buy on Heaven
        </a>
        <a 
          href="https://x.com/gabeinheaven" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-500/20 backdrop-blur-md border border-blue-400/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2 pointer-events-auto"
        >
          <Twitter size={18} />
          Twitter
        </a>
      </div>

      {/* Content Overlay - Ready for future content */}
      <ContentOverlay className="relative z-10">
        {/* Main Title - Top Center */}
        <div className="flex justify-center pt-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white text-center leading-tight tracking-wide font-futuristic">
            <span className="inline-block animate-pulse bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl" 
                  style={{
                    textShadow: '0 0 30px rgba(255,255,255,1), 0 0 60px rgba(255,255,255,0.8), 0 0 90px rgba(135,206,250,0.6)',
                    filter: 'drop-shadow(0 0 20px rgba(255,255,255,1))',
                    fontWeight: '900'
                  }}>
              Gabe In Heaven
            </span>
          </h1>
        </div>
        
        {/* Quote under title */}
        <div className="flex justify-center pt-6">
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 text-center font-light tracking-wide font-elegant italic">
            <span className="inline-block" 
                  style={{
                    textShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.5)',
                    filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.7))'
                  }}>
              Heaven's newest resident
            </span>
          </p>
        </div>
      </ContentOverlay>

      {/* Statistics Box - Left Side */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-30 pointer-events-auto">
        <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/30 backdrop-blur-md border border-blue-400/20 rounded-2xl p-6 w-80 shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold text-lg">Flywheel statistics</h3>
            <button className="text-white/70 hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
                <path d="M21 3v5h-5"/>
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
                <path d="M3 21v-5h5"/>
              </svg>
            </button>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-white/80 text-sm">Invested</span>
            </div>
          </div>

          {/* Statistics */}
          <div className="space-y-4 mb-6">
            <div>
              <div className="text-white/60 text-sm mb-1">Invested</div>
              <div className="text-white text-2xl font-bold">$0.00</div>
            </div>
            <div>
              <div className="text-white/60 text-sm mb-1">Tokens burned</div>
              <div className="flex items-center gap-2">
                <span className="text-white text-2xl font-bold">0.000%</span>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/60 text-xs">$GABE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Chart Area */}
          <div className="relative h-20 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-lg overflow-hidden">
            {/* Placeholder for chart - starts flat since project just launched */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/40 text-xs">Chart will populate with activity</span>
            </div>
          </div>
        </div>
      </div>

      {/* Audio Controls */}
      <button
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-30 bg-white/10 backdrop-blur-md border border-white/20 text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/25"
        title={isMuted ? 'Unmute Music' : 'Mute Music'}
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>

      {/* Background Music */}
      <audio
        ref={audioRef}
        loop
        className="hidden"
      >
        <source src="/1.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default App;