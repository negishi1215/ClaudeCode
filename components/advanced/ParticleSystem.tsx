'use client'

import React from 'react'
import { motion } from 'framer-motion'

const ParticleSystem: React.FC = () => {
  // CSS-based particle system to avoid Three.js dependency issues
  const particles = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-60">
      {/* Animated particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-cyan-400/40 rounded-full blur-sm"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
            opacity: [0.2, 0.8, 0.2, 0.2],
            scale: [0.5, 1.2, 0.5, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        />
      ))}
      
      {/* Neural network effect */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-30">
          <defs>
            <pattern id="neural-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="#8b5cf6" opacity="0.6">
                <animate attributeName="opacity" values="0.2;0.8;0.2" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="20" cy="20" r="0.5" fill="#06b6d4" opacity="0.4">
                <animate attributeName="opacity" values="0.1;0.6;0.1" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="80" cy="30" r="0.8" fill="#10b981" opacity="0.5">
                <animate attributeName="opacity" values="0.3;0.9;0.3" dur="5s" repeatCount="indefinite" />
              </circle>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-grid)" />
        </svg>
      </div>
      
      {/* Floating orbs */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-16 h-16 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-xl"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
            }}
            animate={{
              scale: [0.8, 1.4, 0.8],
              opacity: [0.3, 0.7, 0.3],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default ParticleSystem