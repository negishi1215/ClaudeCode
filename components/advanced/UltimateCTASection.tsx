'use client'

import { motion, useInView, useAnimation } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import confetti from 'canvas-confetti'

export default function UltimateCTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const triggerConfetti = () => {
    setShowConfetti(true)
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#8b5cf6', '#06b6d4', '#22c55e', '#f59e0b', '#ef4444']
    })
    
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#8b5cf6', '#06b6d4', '#22c55e']
      })
    }, 250)
    
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#f59e0b', '#ef4444', '#ec4899']
      })
    }, 500)
  }

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-t from-quantum-void via-purple-950/20 to-black overflow-hidden">
      {/* 🌌 Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-neural-grid opacity-10" />
        {Array.from({ length: 50 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* 🔮 Floating Quantum Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-xl"
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + Math.sin(i) * 30}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* ⚡ Power Indicator */}
          <motion.div 
            className="inline-flex items-center gap-3 mb-8 px-8 py-4 bg-black/40 backdrop-blur-xl rounded-full border border-cyan-400/30"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(56, 189, 248, 0.4)" }}
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(56, 189, 248, 0.3)",
                "0 0 40px rgba(139, 69, 195, 0.5)",
                "0 0 20px rgba(56, 189, 248, 0.3)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.div 
              className="w-4 h-4 rounded-full bg-green-400"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-cyan-300 text-lg font-mono font-bold">
              QUANTUM SYSTEM FULLY OPERATIONAL
            </span>
            <div className="flex gap-1">
              {Array.from({ length: 4 }, (_, i) => (
                <motion.div
                  key={i}
                  className="w-1 h-4 bg-cyan-400 rounded-full"
                  animate={{ height: [4, 16, 4] }}
                  transition={{ 
                    duration: 1, 
                    repeat: Infinity, 
                    delay: i * 0.2 
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* 🎯 Main CTA Title */}
          <motion.h2 
            className="text-6xl md:text-8xl font-black mb-8 leading-tight"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <motion.span 
              className="block text-quantum"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              未来を
            </motion.span>
            <motion.span 
              className="block text-neural"
              animate={{ 
                backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            >
              プログラム
            </motion.span>
            <motion.span 
              className="block text-cyber"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
              しよう
            </motion.span>
          </motion.h2>

          {/* 💫 Subtitle */}
          <motion.p 
            className="text-2xl md:text-3xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <span className="text-cyan-400 font-bold">Claude Code Quantum</span> で
            あなたのプログラミングスキルを
            <span className="text-purple-400 font-bold"> 次元上昇</span> させましょう。
            <br />
            <span className="text-green-400 font-bold">今すぐ量子革命</span> に参加しませんか？
          </motion.p>

          {/* 🚀 CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            <motion.button
              onClick={triggerConfetti}
              className="group relative px-12 py-6 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-2xl text-white font-bold text-xl shadow-cosmic hover:shadow-quantum transition-all duration-500 overflow-hidden"
              whileHover={{ 
                scale: 1.05, 
                y: -8,
                boxShadow: "0 30px 60px -15px rgba(139, 69, 195, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ 
                backgroundPosition: { duration: 3, repeat: Infinity },
                default: { duration: 0.3 }
              }}
            >
              {/* Button Background Animation */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 opacity-0 group-hover:opacity-100"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
              <span className="relative z-10 flex items-center gap-3">
                🚀 今すぐ量子体験開始
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
            
            <motion.button
              className="px-10 py-6 bg-black/50 backdrop-blur-xl border-2 border-cyan-400/50 rounded-2xl text-cyan-300 font-bold text-xl hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 group"
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                borderColor: "#00f2fe",
                boxShadow: "0 20px 40px -10px rgba(56, 189, 248, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3">
                🧠 AIデモを体験
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="group-hover:scale-110 transition-transform"
                >
                  ⚛️
                </motion.div>
              </span>
            </motion.button>
          </motion.div>

          {/* 📊 Trust Indicators */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            {[
              { value: "∞", label: "量子可能性", icon: "⚛️" },
              { value: "99.9%", label: "AI精度", icon: "🧠" },
              { value: "10x", label: "開発速度", icon: "⚡" },
              { value: "24/7", label: "量子サポート", icon: "🌟" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-500"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-neural mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* 🎁 Special Offer */}
          <motion.div 
            className="mt-16 p-8 bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-cyan-900/30 backdrop-blur-xl rounded-3xl border border-purple-400/30"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ delay: 1.6, duration: 1 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="text-2xl font-bold text-purple-300 mb-4"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(168, 85, 247, 0.5)",
                  "0 0 40px rgba(168, 85, 247, 0.8)",
                  "0 0 20px rgba(168, 85, 247, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎉 限定オファー：初回30日間無料 + 量子開発キット付き
            </motion.div>
            <p className="text-gray-300">
              今なら<span className="text-cyan-400 font-bold">追加費用なし</span>で、
              専用量子開発環境とAIメンターアクセス権をプレゼント！
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}