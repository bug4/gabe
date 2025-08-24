import React from 'react';
import { Twitter, Copy, Check, Mic } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import ContentOverlay from './components/ContentOverlay';

function App() {
  const [copied, setCopied] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  const contractAddress = "777"; // Replace with actual contract address

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };
  React.useEffect(() => {
    // Show loading screen for 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Loading Screen Component
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          {/* Loading Icon */}
          <div className="mb-8">
            <div className="relative">
              <Mic size={64} className="text-amber-200 mx-auto animate-pulse" />
              <div className="absolute inset-0 animate-ping">
                <Mic size={64} className="text-amber-400/50 mx-auto" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-amber-100 mb-6 font-elegant">
            The Confessor
          </h1>

          {/* Warning Message */}
          <div className="bg-amber-800/30 border border-amber-600/40 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-amber-200 mb-3">
              Microphone Access Required
            </h2>
            <p className="text-amber-300/90 text-sm leading-relaxed">
              To confess your secrets to The Confessor, please allow microphone access when prompted. 
              Your confessions will be heard and processed securely.
            </p>
          </div>

          {/* Loading Bar */}
          <div className="w-full bg-amber-800/40 rounded-full h-2 mb-4">
            <div className="bg-gradient-to-r from-amber-400 to-amber-200 h-2 rounded-full animate-pulse" 
                 style={{
                   animation: 'loading 3s ease-in-out forwards',
                 }}>
            </div>
          </div>

          <p className="text-amber-400/80 text-sm">
            Preparing confession chamber...
          </p>
        </div>

        <style jsx>{`
          @keyframes loading {
            0% { width: 0%; }
            100% { width: 100%; }
          }
        `}</style>
      </div>
    );
  }
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
        <Spline scene="https://prod.spline.design/uRw8yCOqdxSz5Zdz/scene.splinecode" />
      </div>

      {/* Top Navigation */}
      <div className="fixed top-6 right-6 z-30 flex gap-4">
        <a 
          href="https://x.com/i/communities/1959716682068595052" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-amber-800/20 backdrop-blur-md border border-amber-600/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-800/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-600/25 pointer-events-auto"
        >
          The Confessor's Community
        </a>
        <a 
          href="https://heaven.xyz" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-amber-700/20 backdrop-blur-md border border-amber-500/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25 pointer-events-auto"
        >
          Buy on Heaven
        </a>
        <a 
          href="https://x.com/HeavenConfessor" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-amber-600/20 backdrop-blur-md border border-amber-400/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-600/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-400/25 flex items-center gap-2 pointer-events-auto"
        >
          <Twitter size={18} />
          Twitter
        </a>
      </div>

      {/* Content Overlay - Ready for future content */}
      <ContentOverlay className="relative z-10">
        {/* Main Title - Top Center */}
        <div className="flex justify-center pt-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white text-center leading-tight tracking-wide font-elegant">
            <span className="inline-block animate-pulse bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl" 
                  style={{
                    textShadow: '0 0 30px rgba(255,255,255,1), 0 0 60px rgba(255,255,255,0.8), 0 0 90px rgba(135,206,250,0.6)',
                    filter: 'drop-shadow(0 0 20px rgba(255,255,255,1))',
                    fontWeight: '900'
                  }}>
              The Confessor
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
              Keeper of secrets and wisdom
            </span>
          </p>
        </div>
      </ContentOverlay>

      {/* Statistics Box - Left Side */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-30 pointer-events-auto">
        <div className="bg-gradient-to-br from-amber-900/40 to-amber-800/30 backdrop-blur-md border border-amber-600/20 rounded-2xl p-6 w-80 shadow-2xl">
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
              <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
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
                  <span className="text-white/60 text-xs">$CONFESSOR</span>
                </div>
              </div>
            </div>
          </div>

          {/* Chart Area */}
          <div className="relative h-20 bg-gradient-to-r from-amber-600/20 to-amber-400/20 rounded-lg overflow-hidden">
            {/* Placeholder for chart - starts flat since project just launched */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/40 text-xs">Chart will populate with activity</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contract Address Box - Bottom Center */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-30 pointer-events-auto">
        <div className="bg-amber-900/40 backdrop-blur-md border border-amber-600/20 rounded-2xl p-4 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-white/60 text-xs mb-1">Contract Address</span>
              <span className="text-white font-mono text-sm">
                {contractAddress.slice(0, 6)}...{contractAddress.slice(-4)}
              </span>
            </div>
            <button
              onClick={copyToClipboard}
              className="bg-amber-600/20 hover:bg-amber-600/30 border border-amber-500/30 text-white p-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25 flex items-center gap-2"
              title="Copy contract address"
            >
              {copied ? (
                <>
                  <Check size={16} />
                  <span className="text-xs">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span className="text-xs">Copy</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;