'use client'

import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ChevronDown, Sparkles, Zap, Code, Brain, Rocket } from 'lucide-react'
import ParticleSystem from './ParticleSystem'
import InteractiveCodeEditor from './InteractiveCodeEditor'
import AIAssistantChat from './AIAssistantChat'
import CountUp from 'react-countup'
import confetti from 'canvas-confetti'

const AdvancedHeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentView, setCurrentView] = useState<'code' | 'chat'>('code')
  const { scrollY } = useScroll()
  
  const y = useTransform(scrollY, [0, 300], [0, -50])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8])

  useEffect(() => {
    setIsVisible(true)
    
    // 5秒ごとにビューを切り替え
    const interval = setInterval(() => {
      setCurrentView(prev => prev === 'code' ? 'chat' : 'code')
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const triggerCelebration = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981']
    })
  }

  const stats = [
    { label: '受講生数', value: 1500, suffix: '+', icon: Brain },
    { label: '完了プロジェクト', value: 5000, suffix: '+', icon: Code },
    { label: '満足度', value: 98, suffix: '%', icon: Sparkles },
    { label: '就職成功率', value: 95, suffix: '%', icon: Rocket }
  ]

  const features = [
    { 
      title: 'AI駆動学習', 
      description: '個別最適化されたカリキュラム',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      title: '実時間コーディング', 
      description: 'ライブフィードバック機能',
      icon: Code,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      title: '瞬時解決', 
      description: '24/7 AIアシスタント',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-cosmic" />
        <div className="absolute inset-0 bg-gradient-neural opacity-30 animate-aurora" />
        <div className="absolute inset-0 bg-noise opacity-20" />
        <ParticleSystem />
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 mb-8"
            >
              <Sparkles className="w-5 h-5 text-yellow-400 mr-2 animate-pulse" />
              <span className="text-white font-medium">次世代AIプログラミング教育</span>
              <div className="ml-3 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-5xl md:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent animate-hologram">
                Claude Code
              </span>
              <br />
              <span className="text-white/90">で創る</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-glitch">
                未来のコード
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              人工知能と人間の創造性が融合した、
              <span className="text-cyan-300 font-semibold">革命的な</span>
              プログラミング学習体験。
              <br />
              あなたの限界を超える準備はできていますか？
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={triggerCelebration}
                className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <Rocket className="w-6 h-6 mr-2 group-hover:animate-bounce" />
                  今すぐ体験開始
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-2xl border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300"
              >
                詳細を見る
              </motion.button>
            </motion.div>

            {/* Features */}
            <motion.div 
              className="grid grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-3 animate-neural-pulse`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1">{feature.title}</h3>
                  <p className="text-white/70 text-xs">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* View Toggle */}
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-2 flex">
                <button
                  onClick={() => setCurrentView('code')}
                  className={`px-6 py-2 rounded-xl transition-all duration-300 ${
                    currentView === 'code' 
                      ? 'bg-primary-600 text-white shadow-lg' 
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  <Code className="w-4 h-4 inline mr-2" />
                  コードエディタ
                </button>
                <button
                  onClick={() => setCurrentView('chat')}
                  className={`px-6 py-2 rounded-xl transition-all duration-300 ${
                    currentView === 'chat' 
                      ? 'bg-purple-600 text-white shadow-lg' 
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  <Brain className="w-4 h-4 inline mr-2" />
                  AIチャット
                </button>
              </div>
            </div>

            {/* Interactive Content */}
            <AnimatePresence mode="wait">
              {currentView === 'code' ? (
                <motion.div
                  key="code"
                  initial={{ opacity: 0, rotateY: -90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: 90 }}
                  transition={{ duration: 0.6 }}
                >
                  <InteractiveCodeEditor />
                </motion.div>
              ) : (
                <motion.div
                  key="chat"
                  initial={{ opacity: 0, rotateY: -90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: 90 }}
                  transition={{ duration: 0.6 }}
                >
                  <AIAssistantChat />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mx-auto mb-4 animate-morph">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                <CountUp 
                  end={stat.value} 
                  duration={2} 
                  delay={1 + index * 0.2}
                  suffix={stat.suffix}
                />
              </div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <ChevronDown className="w-4 h-4 text-white/50 animate-bounce" />
        </div>
      </motion.div>

      {/* Ambient Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-cosmic-drift" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-aurora" />
      </div>
    </section>
  )
}

export default AdvancedHeroSection