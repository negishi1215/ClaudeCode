/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        // 🌈 QUANTUM COLOR PALETTE - 量子カラーパレット
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        secondary: {
          50: '#fef3c7',
          100: '#fde68a',
          200: '#fcd34d',
          300: '#fbbf24',
          400: '#f59e0b',
          500: '#d97706',
          600: '#b45309',
          700: '#92400e',
          800: '#78350f',
          900: '#451a03',
        },
        accent: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        // Neural Network Inspired Colors
        neural: {
          50: '#f0f9ff',
          100: '#e0f2fe', 
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49'
        },
        quantum: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe', 
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
          950: '#4a044e'
        },
        cyber: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac', 
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16'
        },
        matrix: {
          50: '#f7fee7',
          100: '#ecfccb',
          200: '#d9f99d',
          300: '#bef264',
          400: '#a3e635',
          500: '#84cc16',
          600: '#65a30d',
          700: '#4d7c0f',
          800: '#365314',
          900: '#1a2e05',
          950: '#0f1b05'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'Yu Gothic', 'Meiryo', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1.1' }],
        '9xl': ['8rem', { lineHeight: '1.1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.15)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.2)',
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-aurora': 'linear-gradient(45deg, #a855f7, #3b82f6, #06b6d4, #10b981)',
        'gradient-cosmic': 'radial-gradient(ellipse at center, #1e1b4b 0%, #312e81 50%, #1e3a8a 100%)',
        'gradient-neural': 'conic-gradient(from 0deg at 50% 50%, #8b5cf6, #06b6d4, #10b981, #f59e0b, #ef4444, #8b5cf6)',
        'noise': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxmaWx0ZXIgaWQ9Im5vaXNlIiB4PSIwJSIgeT0iMCUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogICAgICA8ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgc2VlZD0iMiIvPgogICAgPC9maWx0ZXI+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuNCIvPgo8L3N2Zz4K')",
        // 🎨 QUANTUM GRADIENTS - 量子グラデーション
        'gradient-quantum': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'gradient-cyber': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'gradient-matrix': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'gradient-void': 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)',
        'neural-grid': `
          linear-gradient(rgba(138, 43, 226, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(138, 43, 226, 0.1) 1px, transparent 1px)
        `,
        'quantum-particles': `
          radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)
        `
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.8s ease-out',
        'slide-left': 'slideLeft 0.8s ease-out',
        'slide-right': 'slideRight 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient-x': 'gradient-x 3s ease infinite',
        'gradient-y': 'gradient-y 3s ease infinite',
        'gradient-xy': 'gradient-xy 3s ease infinite',
        'aurora': 'aurora 8s ease-in-out infinite',
        'neural-pulse': 'neuralPulse 3s ease-in-out infinite',
        'cosmic-drift': 'cosmicDrift 20s linear infinite',
        'matrix-rain': 'matrixRain 2s linear infinite',
        'hologram': 'hologram 4s ease-in-out infinite',
        'glitch': 'glitch 0.3s ease-in-out infinite',
        'morph': 'morph 6s ease-in-out infinite',
        'particle-float': 'particleFloat 8s ease-in-out infinite',
        // 🎭 QUANTUM ANIMATIONS - 量子アニメーション
        'quantum-spin': 'quantumSpin 3s linear infinite',
        'quantum-pulse': 'quantumPulse 2s ease-in-out infinite',
        'quantum-pulse-reverse': 'quantumPulseReverse 2s ease-in-out infinite',
        'quantum-drift': 'quantumDrift 20s ease-in-out infinite',
        'quantum-loading': 'quantumLoading 1.5s ease-in-out infinite',
        'neural-loading': 'neuralLoading 1.5s ease-in-out infinite',
        'neural-sync': 'neuralSync 4s linear infinite',
        'neural-wave': 'neuralWave 2s ease-in-out infinite',
        'hologram-loading': 'hologramLoading 2s ease-in-out infinite',
        'hologram-flicker': 'hologramFlicker 0.1s linear infinite',
        'cyber-scan': 'cyberScan 3s linear infinite',
        'cyber-pulse': 'cyberPulse 2s ease-in-out infinite',
        'cyber-glitch': 'cyberGlitch 0.3s linear infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'orbit': 'orbit 10s linear infinite',
        'orbit-reverse': 'orbitReverse 15s linear infinite',
        'typewriter': 'typewriter 4s steps(40) 1s both',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'text-shimmer': 'textShimmer 3s linear infinite',
        'cosmic-breath': 'cosmicBreath 4s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'gradient-y': {
          '0%, 100%': { backgroundPosition: '50% 0%' },
          '50%': { backgroundPosition: '50% 100%' },
        },
        'gradient-xy': {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '25%': { backgroundPosition: '100% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
          '75%': { backgroundPosition: '0% 100%' },
        },
        aurora: {
          '0%, 100%': { 
            transform: 'translateX(0%) rotate(0deg)',
            filter: 'hue-rotate(0deg)'
          },
          '33%': { 
            transform: 'translateX(100%) rotate(120deg)',
            filter: 'hue-rotate(120deg)'
          },
          '66%': { 
            transform: 'translateX(-100%) rotate(240deg)',
            filter: 'hue-rotate(240deg)'
          },
        },
        neuralPulse: {
          '0%, 100%': { 
            opacity: '0.3',
            transform: 'scale(1)',
            filter: 'blur(0px)'
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1.1)',
            filter: 'blur(2px)'
          },
        },
        cosmicDrift: {
          '0%': { transform: 'translateX(-100%) rotateZ(0deg)' },
          '100%': { transform: 'translateX(100vw) rotateZ(360deg)' },
        },
        matrixRain: {
          '0%': { transform: 'translateY(-100vh)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        hologram: {
          '0%, 100%': { 
            opacity: '0.8',
            filter: 'contrast(100%) brightness(100%)'
          },
          '50%': { 
            opacity: '1',
            filter: 'contrast(120%) brightness(120%)'
          },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        particleFloat: {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px) rotate(0deg)',
            opacity: '0.7'
          },
          '33%': { 
            transform: 'translateY(-20px) translateX(10px) rotate(120deg)',
            opacity: '1'
          },
          '66%': { 
            transform: 'translateY(10px) translateX(-10px) rotate(240deg)',
            opacity: '0.5'
          },
        },
        // 🎯 QUANTUM KEYFRAMES - 量子キーフレーム
        quantumSpin: {
          '0%': { transform: 'rotate(0deg) scale(1)', opacity: '0.8' },
          '50%': { transform: 'rotate(180deg) scale(1.1)', opacity: '1' },
          '100%': { transform: 'rotate(360deg) scale(1)', opacity: '0.8' }
        },
        quantumPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.7' },
          '50%': { transform: 'scale(1.2)', opacity: '1' }
        },
        quantumPulseReverse: {
          '0%, 100%': { transform: 'scale(1.2)', opacity: '1' },
          '50%': { transform: 'scale(1)', opacity: '0.7' }
        },
        quantumDrift: {
          '0%': { transform: 'translateX(0px) translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateX(100px) translateY(-50px) rotate(90deg)' },
          '50%': { transform: 'translateX(0px) translateY(-100px) rotate(180deg)' },
          '75%': { transform: 'translateX(-100px) translateY(-50px) rotate(270deg)' },
          '100%': { transform: 'translateX(0px) translateY(0px) rotate(360deg)' }
        },
        quantumLoading: {
          '0%': { 
            transform: 'scale(1) rotate(0deg)',
            borderColor: 'rgba(56, 189, 248, 0.5) rgba(139, 69, 195, 0.5) rgba(236, 72, 153, 0.5) rgba(34, 197, 94, 0.5)'
          },
          '50%': { 
            transform: 'scale(1.1) rotate(180deg)',
            borderColor: 'rgba(236, 72, 153, 0.8) rgba(34, 197, 94, 0.8) rgba(56, 189, 248, 0.8) rgba(139, 69, 195, 0.8)'
          },
          '100%': { 
            transform: 'scale(1) rotate(360deg)',
            borderColor: 'rgba(56, 189, 248, 0.5) rgba(139, 69, 195, 0.5) rgba(236, 72, 153, 0.5) rgba(34, 197, 94, 0.5)'
          }
        },
        neuralLoading: {
          '0%': { transform: 'scaleX(0)', opacity: '0' },
          '50%': { transform: 'scaleX(0.5)', opacity: '0.7' },
          '100%': { transform: 'scaleX(1)', opacity: '1' }
        },
        neuralSync: {
          '0%': { boxShadow: '0 0 20px rgba(56, 189, 248, 0.5)' },
          '25%': { boxShadow: '0 0 40px rgba(139, 69, 195, 0.5)' },
          '50%': { boxShadow: '0 0 60px rgba(236, 72, 153, 0.5)' },
          '75%': { boxShadow: '0 0 40px rgba(34, 197, 94, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(56, 189, 248, 0.5)' }
        },
        neuralWave: {
          '0%': { 
            backgroundPosition: '0% 50%',
            backgroundSize: '200% 200%'
          },
          '50%': { 
            backgroundPosition: '100% 50%',
            backgroundSize: '200% 200%'
          },
          '100%': { 
            backgroundPosition: '0% 50%',
            backgroundSize: '200% 200%'
          }
        },
        hologramLoading: {
          '0%': { opacity: '0.3', transform: 'skewX(0deg)' },
          '50%': { opacity: '0.8', transform: 'skewX(5deg)' },
          '100%': { opacity: '0.3', transform: 'skewX(0deg)' }
        },
        hologramFlicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' }
        },
        cyberScan: {
          '0%': { transform: 'translateX(-100%)', boxShadow: '0 0 0 rgba(0, 255, 255, 0.5)' },
          '50%': { boxShadow: '20px 0 40px rgba(0, 255, 255, 0.8)' },
          '100%': { transform: 'translateX(100%)', boxShadow: '0 0 0 rgba(0, 255, 255, 0.5)' }
        },
        cyberPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.5), inset 0 0 20px rgba(0, 255, 255, 0.1)',
            border: '2px solid rgba(0, 255, 255, 0.5)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(0, 255, 255, 0.8), inset 0 0 40px rgba(0, 255, 255, 0.2)',
            border: '2px solid rgba(0, 255, 255, 0.8)'
          }
        },
        cyberGlitch: {
          '0%': { transform: 'translateX(0px)' },
          '20%': { transform: 'translateX(-2px)' },
          '40%': { transform: 'translateX(2px)' },
          '60%': { transform: 'translateX(-1px)' },
          '80%': { transform: 'translateX(1px)' },
          '100%': { transform: 'translateX(0px)' }
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(180deg)' }
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' }
        },
        orbitReverse: {
          '0%': { transform: 'rotate(360deg) translateX(50px) rotate(-360deg)' },
          '100%': { transform: 'rotate(0deg) translateX(50px) rotate(0deg)' }
        },
        typewriter: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        },
        glowPulse: {
          '0%, 100%': { textShadow: '0 0 10px currentColor' },
          '50%': { textShadow: '0 0 20px currentColor, 0 0 30px currentColor' }
        },
        textShimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' }
        },
        cosmicBreath: {
          '0%, 100%': { 
            transform: 'scale(1)',
            filter: 'brightness(1) hue-rotate(0deg)'
          },
          '50%': { 
            transform: 'scale(1.05)',
            filter: 'brightness(1.2) hue-rotate(180deg)'
          }
        }
      },
      // 🌟 QUANTUM SHADOWS - 量子シャドウ
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.15)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.2)',
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        'quantum': '0 25px 50px -12px rgba(139, 69, 195, 0.5), 0 0 30px rgba(56, 189, 248, 0.3)',
        'neural': '0 20px 40px -12px rgba(56, 189, 248, 0.4), 0 0 25px rgba(139, 69, 195, 0.2)',
        'cyber': '0 15px 35px -10px rgba(34, 197, 94, 0.4), 0 0 20px rgba(0, 255, 255, 0.2)',
        'matrix': '0 10px 30px -8px rgba(132, 204, 22, 0.4), 0 0 15px rgba(163, 230, 53, 0.2)',
        'hologram': '0 30px 60px -15px rgba(236, 72, 153, 0.4), inset 0 0 40px rgba(139, 69, 195, 0.1)',
        'cosmic': '0 35px 70px -20px rgba(255, 119, 198, 0.5), 0 0 50px rgba(120, 219, 255, 0.3)'
      },
    },
  },
  plugins: [
    // Quantum Text Gradient Plugin
    function({ addUtilities }) {
      addUtilities({
        '.bg-gradient-neural': {
          'background': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          'background-size': '200% 200%',
          'animation': 'neuralWave 3s ease-in-out infinite'
        },
        '.bg-quantum-void': {
          'background': '#0c0c0c',
          'background-image': `
            radial-gradient(circle at 25% 25%, #1a1a2e 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, #16213e 0%, transparent 50%),
            linear-gradient(135deg, transparent 40%, rgba(139, 69, 195, 0.03) 50%, transparent 60%)
          `
        },
        '.text-quantum': {
          'background': 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-size': '200% 200%',
          'animation': 'neuralWave 4s ease-in-out infinite'
        },
        '.text-neural': {
          'background': 'linear-gradient(135deg, #38bdf8 0%, #8b45c3 50%, #ec4899 100%)',
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-size': '200% 200%',
          'animation': 'neuralWave 3s ease-in-out infinite'
        },
        '.text-cyber': {
          'background': 'linear-gradient(135deg, #22c55e 0%, #00f2fe 50%, #4facfe 100%)',
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-size': '200% 200%',
          'animation': 'neuralWave 2.5s ease-in-out infinite'
        }
      })
    }
  ],
}