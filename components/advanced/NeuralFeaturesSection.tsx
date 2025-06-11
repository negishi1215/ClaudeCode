'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, Sphere, Box, Cylinder } from '@react-three/drei'
import { Suspense } from 'react'
import * as THREE from 'three'

// 🧠 NEURAL NETWORK NODE - ニューラルネットワークノード
function NeuralNode({ position, color, size = 0.3 }: { position: [number, number, number], color: string, size?: number }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime()
      meshRef.current.scale.setScalar(size + Math.sin(time * 3 + position[0]) * 0.1)
    }
  })

  return (
    <Sphere ref={meshRef} args={[size, 16, 16]} position={position}>
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
    </Sphere>
  )
}

// 🔗 NEURAL CONNECTION - ニューラル接続
function NeuralConnection({ start, end, color = "#38bdf8" }: { 
  start: [number, number, number], 
  end: [number, number, number], 
  color?: string 
}) {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  const distance = Math.sqrt(
    Math.pow(end[0] - start[0], 2) + 
    Math.pow(end[1] - start[1], 2) + 
    Math.pow(end[2] - start[2], 2)
  )
  
  const midpoint: [number, number, number] = [
    (start[0] + end[0]) / 2,
    (start[1] + end[1]) / 2,
    (start[2] + end[2]) / 2
  ]

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime()
      meshRef.current.material.opacity = 0.3 + Math.sin(time * 2) * 0.2
    }
  })

  return (
    <Cylinder 
      ref={meshRef}
      args={[0.02, 0.02, distance, 8]} 
      position={midpoint}
      rotation={[Math.PI / 2, 0, Math.atan2(end[1] - start[1], end[0] - start[0])]}
    >
      <meshStandardMaterial color={color} transparent opacity={0.5} />
    </Cylinder>
  )
}

// 🌐 3D NEURAL NETWORK - 3Dニューラルネットワーク
function NeuralNetwork3D() {
  const groupRef = useRef<THREE.Group>(null!)
  
  // Network topology
  const inputNodes = [
    [-3, 2, 0], [-3, 0, 0], [-3, -2, 0]
  ] as [number, number, number][]
  
  const hiddenNodes = [
    [-1, 3, 0], [-1, 1, 0], [-1, -1, 0], [-1, -3, 0]
  ] as [number, number, number][]
  
  const outputNodes = [
    [1, 1, 0], [1, -1, 0]
  ] as [number, number, number][]

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {/* Input Layer */}
      {inputNodes.map((pos, i) => (
        <NeuralNode key={`input-${i}`} position={pos} color="#22c55e" size={0.25} />
      ))}
      
      {/* Hidden Layer */}
      {hiddenNodes.map((pos, i) => (
        <NeuralNode key={`hidden-${i}`} position={pos} color="#8b5cf6" size={0.3} />
      ))}
      
      {/* Output Layer */}
      {outputNodes.map((pos, i) => (
        <NeuralNode key={`output-${i}`} position={pos} color="#f59e0b" size={0.35} />
      ))}
      
      {/* Connections */}
      {inputNodes.map((inputPos, i) => 
        hiddenNodes.map((hiddenPos, j) => (
          <NeuralConnection 
            key={`input-hidden-${i}-${j}`}
            start={inputPos} 
            end={hiddenPos} 
            color="#38bdf8"
          />
        ))
      )}
      
      {hiddenNodes.map((hiddenPos, i) => 
        outputNodes.map((outputPos, j) => (
          <NeuralConnection 
            key={`hidden-output-${i}-${j}`}
            start={hiddenPos} 
            end={outputPos} 
            color="#ec4899"
          />
        ))
      )}
    </group>
  )
}

// 📊 ANIMATED STATS COUNTER - アニメーションカウンター
function AnimatedCounter({ target, label, icon, delay = 0 }: { 
  target: number, 
  label: string, 
  icon: string, 
  delay?: number 
}) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        const duration = 2000
        const step = target / (duration / 16)
        let current = 0
        
        const timer = setInterval(() => {
          current += step
          if (current >= target) {
            setCount(target)
            clearInterval(timer)
          } else {
            setCount(Math.floor(current))
          }
        }, 16)
        
        return () => clearInterval(timer)
      }, delay)
      
      return () => clearTimeout(timeout)
    }
  }, [isInView, target, delay])

  return (
    <motion.div 
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: delay / 1000, duration: 0.6 }}
    >
      <div className="text-4xl mb-2">{icon}</div>
      <div className="text-3xl font-bold text-neural mb-1">
        {count.toLocaleString()}+
      </div>
      <div className="text-gray-400">{label}</div>
    </motion.div>
  )
}

// 🎯 FEATURE CARD - 機能カード
function FeatureCard({ 
  icon, 
  title, 
  description, 
  color, 
  index 
}: { 
  icon: string, 
  title: string, 
  description: string, 
  color: string, 
  index: number 
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      className={`relative group bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-${color}/50 transition-all duration-500 overflow-hidden`}
      initial={{ opacity: 0, y: 50, rotateX: 45 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      whileHover={{ 
        scale: 1.02, 
        y: -10,
        boxShadow: `0 20px 40px -10px rgba(139, 69, 195, 0.3)`
      }}
    >
      {/* Background Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br from-${color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-${color}/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12`} />
      </div>
      
      <div className="relative z-10">
        <motion.div 
          className="text-6xl mb-6"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
        
        <h3 className={`text-2xl font-bold text-${color} mb-4`}>
          {title}
        </h3>
        
        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>
        
        {/* Interactive particles */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {Array.from({ length: 3 }, (_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 bg-${color} rounded-full`}
              animate={{
                y: [0, -20, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// 🚀 MAIN NEURAL FEATURES SECTION
export default function NeuralFeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-200px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const features = [
    {
      icon: "🧠",
      title: "AI Neural Engine",
      description: "最先端のディープラーニングアルゴリズムであなたのコーディングパターンを学習し、リアルタイムで最適化提案を行います。",
      color: "cyan-400"
    },
    {
      icon: "⚡",
      title: "Quantum Acceleration",
      description: "量子コンピューティングの原理を応用した超高速コンパイル＆実行システム。従来の100倍のスピードを実現。",
      color: "purple-400"
    },
    {
      icon: "🌐",
      title: "Neural Network Visualization",
      description: "あなたのコードを3Dニューラルネットワークとして可視化。複雑な依存関係も直感的に理解できます。",
      color: "green-400"
    },
    {
      icon: "🔮",
      title: "Predictive Code Generation",
      description: "AIがあなたの意図を先読みし、次に書くべきコードを予測生成。思考のスピードでプログラミング。",
      color: "pink-400"
    },
    {
      icon: "🛡️",
      title: "Quantum Security",
      description: "量子暗号技術による究極のセキュリティ。コードの完全性と機密性を量子レベルで保護。",
      color: "orange-400"
    },
    {
      icon: "🚀",
      title: "Holographic Debugging",
      description: "バグを3Dホログラムとして可視化。空間的デバッギングで複雑な問題も瞬時に解決。",
      color: "blue-400"
    }
  ]

  const stats = [
    { target: 99, label: "AI精度", icon: "🎯", delay: 0 },
    { target: 1000, label: "量子ゲート", icon: "⚛️", delay: 300 },
    { target: 50, label: "ニューラル層", icon: "🧠", delay: 600 },
    { target: 10, label: "処理速度倍率", icon: "⚡", delay: 900 }
  ]

  return (
    <section ref={ref} className="relative py-32 bg-quantum-void overflow-hidden">
      {/* 🌌 Background 3D Scene */}
      <div className="absolute inset-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#22c55e" />
          
          <Suspense fallback={null}>
            <NeuralNetwork3D />
          </Suspense>
        </Canvas>
      </div>

      {/* 🔮 Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* 🎯 Section Header */}
        <motion.div 
          className="text-center mb-20"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-black/30 backdrop-blur-xl rounded-full border border-purple-500/30"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-3 h-3 rounded-full bg-purple-400 animate-quantum-pulse" />
            <span className="text-purple-300 text-sm font-mono">NEURAL FEATURES ACTIVE</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-neural block">AI POWERED</span>
            <span className="text-quantum">DEVELOPMENT</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            ニューラルネットワークと量子コンピューティングが融合した、
            <span className="text-cyan-400 font-semibold">史上最強の開発環境</span>
            。AIがあなたのコーディング体験を革命的に進化させます。
          </p>
        </motion.div>

        {/* 📊 Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-white/10">
              <AnimatedCounter {...stat} />
            </div>
          ))}
        </motion.div>

        {/* 🎯 Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>

        {/* 🚀 CTA Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.button
            className="px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl text-white font-bold text-xl shadow-cosmic hover:shadow-quantum transition-all duration-500"
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              boxShadow: "0 30px 60px -15px rgba(139, 69, 195, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            🧠 ニューラルシステム体験開始
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}