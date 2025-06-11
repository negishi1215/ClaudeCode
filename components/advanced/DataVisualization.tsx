'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TrendingUp, Users, Code, Award, Brain, Zap } from 'lucide-react'
import CountUp from 'react-countup'

interface DataPoint {
  label: string
  value: number
  change: number
  color: string
}

const DataVisualization: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState(0)
  const [animationKey, setAnimationKey] = useState(0)

  const metrics = [
    {
      icon: Users,
      title: '受講生の成長',
      subtitle: '学習進捗データ',
      data: [
        { label: '1ヶ月目', value: 25, change: 25, color: '#3b82f6' },
        { label: '3ヶ月目', value: 65, change: 40, color: '#06b6d4' },
        { label: '6ヶ月目', value: 85, change: 20, color: '#10b981' },
        { label: '12ヶ月目', value: 98, change: 13, color: '#f59e0b' }
      ]
    },
    {
      icon: Code,
      title: 'プロジェクト完成率',
      subtitle: 'カリキュラム別統計',
      data: [
        { label: '基礎編', value: 95, change: 5, color: '#8b5cf6' },
        { label: '実践編', value: 88, change: 8, color: '#ec4899' },
        { label: '応用編', value: 92, change: 12, color: '#f97316' },
        { label: 'マスター編', value: 89, change: 9, color: '#84cc16' }
      ]
    },
    {
      icon: Award,
      title: '就職成功実績',
      subtitle: '業界別内定率',
      data: [
        { label: 'Web開発', value: 96, change: 6, color: '#06b6d4' },
        { label: 'AI/ML', value: 94, change: 14, color: '#8b5cf6' },
        { label: 'モバイル', value: 91, change: 11, color: '#10b981' },
        { label: 'DevOps', value: 88, change: 18, color: '#f59e0b' }
      ]
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedMetric(prev => (prev + 1) % metrics.length)
      setAnimationKey(prev => prev + 1)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const currentMetric = metrics[selectedMetric]

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          データで見る
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            成功の軌跡
          </span>
        </h2>
        <p className="text-white/70 text-lg">
          実績に基づく確かな教育効果を数字で実証
        </p>
      </motion.div>

      {/* Metric Selector */}
      <div className="flex justify-center mb-8">
        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-2 flex space-x-2">
          {metrics.map((metric, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setSelectedMetric(index)
                setAnimationKey(prev => prev + 1)
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 ${
                selectedMetric === index
                  ? 'bg-white/20 text-white shadow-lg'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <metric.icon className="w-5 h-5" />
              <span className="hidden sm:inline font-medium">{metric.title}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Visualization */}
      <AnimatePresence mode="wait">
        <motion.div
          key={animationKey}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8"
        >
          {/* Chart Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {currentMetric.title}
              </h3>
              <p className="text-white/60">{currentMetric.subtitle}</p>
            </div>
            <div className="flex items-center space-x-2 text-green-400">
              <TrendingUp className="w-5 h-5" />
              <span className="font-semibold">上昇傾向</span>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="space-y-6">
            {currentMetric.data.map((item, index) => (
              <motion.div
                key={`${animationKey}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">{item.label}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-white text-lg font-bold">
                      <CountUp 
                        end={item.value} 
                        duration={1}
                        delay={index * 0.1}
                        suffix="%"
                      />
                    </span>
                    <motion.span 
                      className="text-green-400 text-sm"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    >
                      +{item.change}%
                    </motion.span>
                  </div>
                </div>
                
                <div className="relative h-4 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.value}%` }}
                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                    className="h-full rounded-full relative"
                    style={{
                      background: `linear-gradient(90deg, ${item.color}66, ${item.color})`
                    }}
                  >
                    <div 
                      className="absolute inset-0 rounded-full animate-pulse"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${item.color}44, transparent)`
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Stats */}
          <motion.div 
            className="mt-8 pt-6 border-t border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3 animate-neural-pulse">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">
                  <CountUp end={24} duration={2} suffix="h" />
                </div>
                <div className="text-white/60 text-sm">平均学習時間/週</div>
              </div>
              
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3 animate-neural-pulse">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">
                  <CountUp end={3.2} duration={2} decimals={1} suffix="x" />
                </div>
                <div className="text-white/60 text-sm">学習効率向上</div>
              </div>
              
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3 animate-neural-pulse">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">
                  <CountUp end={150} duration={2} suffix="%" />
                </div>
                <div className="text-white/60 text-sm">年収アップ率</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
    </div>
  )
}

export default DataVisualization