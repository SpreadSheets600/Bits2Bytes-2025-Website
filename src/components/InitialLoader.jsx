
import React, { useState, useEffect } from 'react';

export default function InitialLoader() {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('INITIALIZING');
  const [dots, setDots] = useState('');

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 3;
      });
    }, 40);

    const textInterval = setInterval(() => {
      const texts = ['INITIALIZING', 'LOADING SYSTEMS', 'CONNECTING NODES', 'SYNCING DATA', 'ALMOST READY'];
      setLoadingText(texts[Math.floor(Math.random() * texts.length)]);
    }, 1500);

    const dotsInterval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
      clearInterval(dotsInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-black flex items-center justify-center overflow-hidden">
      {/* Animated Background Circuit Pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px bg-gradient-to-b from-cyan-400 to-transparent animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              height: `${Math.random() * 100 + 50}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-gradient-to-r from-cyan-400 to-transparent animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        {/* Logo/Title */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
            BITS2BYTES
          </h1>
          <div className="text-2xl text-gray-300 mt-2 tracking-widest font-bold">
            2025
          </div>
        </div>

        {/* Central Loading Animation */}
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto relative">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 border-2 border-cyan-400 rounded-full border-t-transparent animate-spin"></div>

            {/* Inner rotating ring */}
            <div className="absolute inset-4 border-2 border-purple-500 rounded-full border-b-transparent animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>

            {/* Center core */}
            <div className="absolute inset-8 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full animate-pulse flex items-center justify-center">
              <div className="text-white font-mono text-sm font-bold">
                {Math.floor(progress)}%
              </div>
            </div>

            {/* Orbiting dots */}
            {[...Array(8)].map((_, i) => (
              <div
                key={`orbit-${i}`}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-spin"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `rotate(${i * 45}deg) translateY(-70px)`,
                  transformOrigin: '0 70px',
                  animationDuration: '3s'
                }}
              />
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 to-purple-600 transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
            </div>
          </div>
          <div className="text-xs text-gray-400 mt-2 text-right">
            {Math.floor(progress)}% Complete
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-cyan-400 font-mono text-sm tracking-wider animate-pulse">
          {loadingText}{dots}
        </div>

        {/* Tech Keywords */}
        <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs text-gray-500">
          {['AI', 'BLOCKCHAIN', 'IoT', 'ROBOTICS', 'VR/AR', 'ML', 'Coding', 'Games'].map((tech, i) => (
            <span
              key={tech}
              className="px-2 py-1 border border-gray-700 rounded animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-8 text-gray-400 text-xs">
          PREPARING INNOVATION EXPERIENCE...
        </div>
      </div>

      {/* Corner Elements */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400 animate-pulse"></div>
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyan-400 animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyan-400 animate-pulse"></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-400 animate-pulse"></div>
    </div>
  );
};
