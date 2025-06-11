'use client'

import React, { useState, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { Brain, Code, Zap, Shield, Rocket, Users, Star, ArrowRight } from 'lucide-react'
import DataVisualization from './DataVisualization'

const AdvancedFeaturesSection: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  const features = [
    {
      icon: Brain,
      title: 'AI駆動パーソナライゼーション',
      description: '個人の学習パターンを分析し、最適化されたカリキュラムを自動生成',
      details: ['適応学習アルゴリズム', '個別進度調整', 'リアルタイム難易度最適化'],
      color: 'from-purple-600 to-purple-800',
      glowColor: 'rgba(147, 51, 234, 0.3)'
    },
    {
      icon: Code,
      title: 'インテリジェントコード解析',
      description: 'リアルタイムでコード品質を分析し、改善提案を瞬時に提供',
      details: ['自動バグ検出', '最適化提案', 'セキュリティ監査'],
      color: 'from-blue-600 to-blue-800',
      glowColor: 'rgba(37, 99, 235, 0.3)'
    },
    {
      icon: Zap,
      title: '瞬時フィードバックシステム',
      description: 'AIが24/7でコードレビューを実行し、即座に学習サポートを提供',
      details: ['瞬時エラー検出', 'リアルタイム提案', '自動修正オプション'],
      color: 'from-yellow-500 to-orange-600',
      glowColor: 'rgba(245, 158, 11, 0.3)'
    },
    {
      icon: Shield,
      title: 'セキュリティ特化学習',
      description: '最新のサイバーセキュリティ手法を統合した実践的セキュリティ教育',
      details: ['脆弱性シミュレーション', 'セキュアコーディング', 'ペネトレーションテスト'],
      color: 'from-green-600 to-emerald-700',
      glowColor: 'rgba(16, 185, 129, 0.3)'
    },
    {
      icon: Rocket,
      title: '実戦プロジェクト体験',
      description: '実際の企業プロジェクトを模倣した高度な開発体験プログラム',
      details: ['企業連携プロジェクト', 'チーム開発体験', 'プロダクション環境'],
      color: 'from-red-500 to-pink-600',
      glowColor: 'rgba(239, 68, 68, 0.3)'
    },
    {
      icon: Users,
      title: 'グローバルコミュニティ',
      description: '世界中の開発者とのネットワーキングと知識共有プラットフォーム',
      details: ['国際的コミュニティ', 'メンターマッチング', 'プロジェクトコラボレーション'],
      color: 'from-indigo-600 to-purple-700',
      glowColor: 'rgba(99, 102, 241, 0.3)'
    }
  ]

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20" />
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-xl border border-white/10 mb-6"
          >
            <Star className="w-5 h-5 text-yellow-400 mr-2 animate-pulse" />
            <span className="text-white font-semibold">革新的機能</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              次世代の学習体験
            </span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            最先端のAI技術と革新的な教育手法を融合させた、
            <span className="text-cyan-300 font-semibold">これまでにない</span>
            プログラミング学習環境
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
              isInView={isInView}
              isHovered={hoveredFeature === index}
              onHover={setHoveredFeature}
            />
          ))}
        </div>

        {/* Data Visualization Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <DataVisualization />
        </motion.div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  feature: any
  index: number
  isInView: boolean
  isHovered: boolean
  onHover: (index: number | null) => void
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  feature, 
  index, 
  isInView, 
  isHovered, 
  onHover 
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(0, { stiffness: 300, damping: 30 })
  const rotateY = useSpring(0, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const x = (e.clientX - centerX) / (rect.width / 2)
    const y = (e.clientY - centerY) / (rect.height / 2)
    
    mouseX.set(x)
    mouseY.set(y)
    rotateX.set(y * 10)
    rotateY.set(x * 10)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    rotateX.set(0)
    rotateY.set(0)
    onHover(null)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={handleMouseLeave}
      className="group relative cursor-pointer"
    >
      <div className="relative h-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 overflow-hidden transition-all duration-500 group-hover:bg-white/10">
        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, ${feature.glowColor}, transparent 50%)`
          }}
        />

        {/* Icon */}
        <motion.div
          className={`relative z-10 w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <feature.icon className="w-8 h-8 text-white" />
          
          {/* Icon Glow */}
          <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
            {feature.title}
          </h3>
          
          <p className="text-white/70 leading-relaxed mb-6 group-hover:text-white/90 transition-colors duration-300">
            {feature.description}
          </p>

          {/* Feature Details */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={isHovered ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <ul className="space-y-2 mb-6">
              {feature.details.map((detail: string, detailIndex: number) => (
                <motion.li
                  key={detailIndex}
                  initial={{ x: -20, opacity: 0 }}
                  animate={isHovered ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                  transition={{ duration: 0.3, delay: detailIndex * 0.1 }}
                  className="flex items-center text-white/60 text-sm"
                >
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                  {detail}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Learn More Button */}
          <motion.button
            whileHover={{ x: 5 }}
            className="flex items-center text-cyan-300 font-medium group-hover:text-cyan-200 transition-colors duration-300"
          >
            詳細を見る
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default AdvancedFeaturesSection