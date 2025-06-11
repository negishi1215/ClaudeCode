'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial, Sphere } from '@react-three/drei'
import { Suspense } from 'react'
import * as THREE from 'three'

// 🌌 QUANTUM PARTICLE SYSTEM - 量子パーティクルシステム
function QuantumParticles({ count = 2000 }) {
  const mesh = useRef<THREE.Points>(null!)
  const [sphere] = useState(() => new Float32Array(count * 3))

  // ランダムな球状の粒子分布を生成
  useEffect(() => {
    const particles = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      const radius = Math.random() * 4 + 1
      
      particles[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      particles[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      particles[i * 3 + 2] = radius * Math.cos(phi)
    }
    sphere.set(particles)
  }, [count, sphere])

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.1
      mesh.current.rotation.y += delta * 0.05
      
      // Dynamic color and size animation
      const time = state.clock.getElapsedTime()
      mesh.current.material.size = Math.sin(time * 2) * 0.5 + 1.5
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={mesh} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#8b5cf6"
          size={1.5}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  )
}

// 🔮 NEURAL NETWORK VISUAL - ニューラルネットワーク可視化
function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
      groupRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {/* Central core */}
      <Sphere args={[0.2, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={0.3} />
      </Sphere>
      
      {/* Orbital nodes */}
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (i / 8) * Math.PI * 2
        const radius = 2
        return (
          <group key={i} position={[Math.cos(angle) * radius, Math.sin(angle) * radius, 0]}>
            <Sphere args={[0.1, 16, 16]}>
              <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.2} />
            </Sphere>
          </group>
        )
      })}
    </group>
  )
}

// 🌊 QUANTUM WAVE ANIMATION - 量子波アニメーション
function QuantumWave() {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime()
      meshRef.current.rotation.z = time * 0.3
      meshRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.1)
    }
  })

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[3, 0.1, 16, 100]} />
      <meshStandardMaterial color="#22c55e" transparent opacity={0.6} />
    </mesh>
  )
}

// 🎨 INTERACTIVE TYPEWRITER EFFECT - インタラクティブタイプライター
function QuantumTypewriter({ text, className = "" }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(currentIndex + 1)
      }, 100)
      return () => clearTimeout(timeout)
    } else {
      // Reset animation after completion
      const resetTimeout = setTimeout(() => {
        setDisplayText('')
        setCurrentIndex(0)
      }, 3000)
      return () => clearTimeout(resetTimeout)
    }
  }, [currentIndex, text])

  return (
    <span className={className}>
      {displayText}
      <span className="animate-quantum-pulse">|</span>
    </span>
  )
}

// 🚀 MAIN QUANTUM HERO SECTION - メイン量子ヒーローセクション
export default function QuantumHeroSection() {
  const controls = useAnimation()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10])
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10])
  
  const [mounted, setMounted] = useState(false)
  const [neuralMode, setNeuralMode] = useState(false)

  useEffect(() => {
    setMounted(true)
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" }
    })
  }, [controls])

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event
    const { innerWidth, innerHeight } = window
    mouseX.set(clientX - innerWidth / 2)
    mouseY.set(clientY - innerHeight / 2)
  }

  if (!mounted) return null

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-quantum-void"
      onMouseMove={handleMouseMove}
    >
      {/* 🌌 3D Background Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
          
          <Suspense fallback={null}>
            <QuantumParticles count={neuralMode ? 3000 : 2000} />
            <NeuralNetwork />
            <QuantumWave />
          </Suspense>
        </Canvas>
      </div>

      {/* 🔮 Floating Quantum Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 40 - 20, 0],
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* 🚀 Main Hero Content */}
      <motion.div 
        className="relative z-10 text-center max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        style={{ rotateX, rotateY }}
      >
        {/* 🌟 Neural Status Indicator */}
        <motion.div 
          className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-black/30 backdrop-blur-xl rounded-full border border-cyan-500/30"
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(56, 189, 248, 0.4)" }}
        >
          <div className="w-3 h-3 rounded-full bg-green-400 animate-quantum-pulse" />
          <span className="text-cyan-300 text-sm font-mono">
            <QuantumTypewriter text="NEURAL NETWORK ONLINE" />
          </span>
        </motion.div>

        {/* 🎯 Main Title */}
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <span className="text-quantum block">CLAUDE CODE</span>
          <span className="text-neural block">QUANTUM</span>
          <span className="text-cyber">EVOLUTION</span>
        </motion.h1>

        {/* 🧠 Subtitle */}
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          AIとニューラルネットワークが融合した
          <span className="text-neural font-semibold"> 次世代プログラミング体験</span>
          。量子コンピューティングの概念を取り入れた
          <span className="text-cyber font-semibold"> 革命的学習プラットフォーム</span>
          で、あなたのコーディングスキルを新次元へ。
        </motion.p>

        {/* 🎮 Interactive Controls */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl text-white font-bold text-lg shadow-quantum hover:shadow-cosmic transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setNeuralMode(!neuralMode)}
          >
            🚀 ニューラル体験開始
          </motion.button>
          
          <motion.button
            className="px-8 py-4 bg-black/40 backdrop-blur-xl border-2 border-cyan-400/50 rounded-2xl text-cyan-300 font-bold text-lg hover:bg-cyan-400/10 transition-all duration-300"
            whileHover={{ scale: 1.05, borderColor: "#00f2fe" }}
            whileTap={{ scale: 0.95 }}
          >
            🧠 AI研究室見学
          </motion.button>
        </motion.div>

        {/* 🔬 Quantum Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          {[
            { label: "Neural Nodes", value: "∞", color: "text-cyan-400", icon: "🧠" },
            { label: "Quantum States", value: "2^n", color: "text-purple-400", icon: "⚛️" },
            { label: "AI Accuracy", value: "99.9%", color: "text-green-400", icon: "🎯" },
            { label: "Learning Speed", value: "10x", color: "text-pink-400", icon: "⚡" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* 🌊 Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* 🎭 Neural Mode Overlay */}
      {neuralMode && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-cyan-900/20 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </section>
  )
}