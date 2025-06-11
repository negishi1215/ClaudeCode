'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, Box, Sphere, Cylinder } from '@react-three/drei'
import { Suspense } from 'react'
import * as THREE from 'three'

// 🎯 PROJECT DATA - プロジェクトデータ
const projects = [
  {
    id: 'neural-network',
    title: 'Neural Network Visualizer',
    category: 'AI/ML',
    description: 'リアルタイムでニューラルネットワークの学習過程を3D可視化するシステム。量子コンピューティングの原理を応用した高速処理。',
    tech: ['React', 'Three.js', 'TensorFlow', 'WebGL'],
    color: '#8b5cf6',
    complexity: 95,
    performance: 98,
    innovation: 100
  },
  {
    id: 'quantum-compiler',
    title: 'Quantum Code Compiler',
    category: 'Quantum Computing',
    description: '従来のコードを量子アルゴリズムに自動変換するAIコンパイラ。指数関数的な処理速度向上を実現。',
    tech: ['Rust', 'WASM', 'Quantum SDK', 'AI'],
    color: '#06b6d4',
    complexity: 100,
    performance: 100,
    innovation: 95
  },
  {
    id: 'holographic-ui',
    title: 'Holographic UI Framework',
    description: '空間UIを実現するホログラフィック・インターフェースフレームワーク。VR/ARを超えた次世代UX。',
    category: 'UI/UX',
    tech: ['TypeScript', 'WebXR', 'Spatial Computing'],
    color: '#22c55e',
    complexity: 90,
    performance: 85,
    innovation: 100
  },
  {
    id: 'ai-code-gen',
    title: 'AI Code Generator',
    category: 'AI/ML',
    description: '自然言語からコードを生成するGPT-4ベースのシステム。コーディング効率を1000%向上。',
    tech: ['Python', 'GPT-4', 'Neural Networks'],
    color: '#f59e0b',
    complexity: 88,
    performance: 92,
    innovation: 90
  }
]

// 🎲 3D PROJECT HOLOGRAM - 3Dプロジェクトホログラム
function ProjectHologram({ project, isActive }: { project: any, isActive: boolean }) {
  const groupRef = useRef<THREE.Group>(null!)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime()
      groupRef.current.rotation.y = time * 0.5
      groupRef.current.position.y = Math.sin(time * 2) * 0.1
      
      if (isActive) {
        groupRef.current.scale.setScalar(1.2 + Math.sin(time * 3) * 0.1)
      } else {
        groupRef.current.scale.setScalar(hovered ? 1.1 : 1)
      }
    }
  })

  return (
    <group 
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Central Core */}
      <Sphere args={[0.5, 32, 32]}>
        <meshStandardMaterial 
          color={project.color} 
          emissive={project.color} 
          emissiveIntensity={isActive ? 0.5 : 0.2}
          transparent
          opacity={0.8}
        />
      </Sphere>
      
      {/* Orbital Rings */}
      {Array.from({ length: 3 }, (_, i) => (
        <group key={i} rotation={[0, 0, (i * Math.PI) / 3]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[1 + i * 0.3, 0.02, 8, 32]} />
            <meshStandardMaterial 
              color={project.color} 
              transparent 
              opacity={0.3}
              emissive={project.color}
              emissiveIntensity={0.1}
            />
          </mesh>
        </group>
      ))}
      
      {/* Data Nodes */}
      {project.tech.map((tech: string, index: number) => {
        const angle = (index / project.tech.length) * Math.PI * 2
        const radius = 1.5
        return (
          <group 
            key={tech}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle + Math.PI / 2) * 0.5,
              Math.sin(angle) * radius
            ]}
          >
            <Box args={[0.1, 0.1, 0.1]}>
              <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.3} />
            </Box>
          </group>
        )
      })}
      
      {/* Project Title */}
      {isActive && (
        <Text
          position={[0, -2, 0]}
          fontSize={0.3}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          {project.title}
        </Text>
      )}
    </group>
  )
}

// 📊 PERFORMANCE RADAR CHART - パフォーマンスレーダーチャート
function PerformanceRadar({ project }: { project: any }) {
  const metrics = [
    { label: 'Complexity', value: project.complexity, color: '#8b5cf6' },
    { label: 'Performance', value: project.performance, color: '#06b6d4' },
    { label: 'Innovation', value: project.innovation, color: '#22c55e' }
  ]

  return (
    <div className="relative w-48 h-48 mx-auto">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
        {/* Grid circles */}
        {[20, 40, 60, 80].map((radius) => (
          <circle
            key={radius}
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
        ))}
        
        {/* Metric lines */}
        {metrics.map((metric, index) => {
          const angle = (index * 120) * (Math.PI / 180)
          const x = 100 + Math.cos(angle) * 80
          const y = 100 + Math.sin(angle) * 80
          return (
            <line
              key={metric.label}
              x1="100"
              y1="100"
              x2={x}
              y2={y}
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1"
            />
          )
        })}
        
        {/* Data polygon */}
        <polygon
          points={metrics.map((metric, index) => {
            const angle = (index * 120) * (Math.PI / 180)
            const radius = (metric.value / 100) * 80
            const x = 100 + Math.cos(angle) * radius
            const y = 100 + Math.sin(angle) * radius
            return `${x},${y}`
          }).join(' ')}
          fill={`${project.color}40`}
          stroke={project.color}
          strokeWidth="2"
        />
        
        {/* Data points */}
        {metrics.map((metric, index) => {
          const angle = (index * 120) * (Math.PI / 180)
          const radius = (metric.value / 100) * 80
          const x = 100 + Math.cos(angle) * radius
          const y = 100 + Math.sin(angle) * radius
          return (
            <circle
              key={`point-${index}`}
              cx={x}
              cy={y}
              r="4"
              fill={metric.color}
              stroke="#ffffff"
              strokeWidth="2"
            />
          )
        })}
      </svg>
      
      {/* Labels */}
      <div className="absolute inset-0">
        {metrics.map((metric, index) => {
          const angle = (index * 120) * (Math.PI / 180)
          const x = 50 + Math.cos(angle) * 45
          const y = 50 + Math.sin(angle) * 45
          return (
            <div
              key={metric.label}
              className="absolute text-xs font-medium text-white transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              {metric.label}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// 🚀 MAIN HOLOGRAPHIC PORTFOLIO SECTION
export default function HolographicPortfolioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState(projects[0])
  const [autoRotate, setAutoRotate] = useState(true)

  // Auto-rotate through projects
  useEffect(() => {
    if (!autoRotate) return
    
    const interval = setInterval(() => {
      setSelectedProject(current => {
        const currentIndex = projects.findIndex(p => p.id === current.id)
        const nextIndex = (currentIndex + 1) % projects.length
        return projects[nextIndex]
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [autoRotate])

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-b from-black via-purple-950/10 to-quantum-void overflow-hidden">
      {/* 🌌 Holographic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-cyan-900/20" />
        {Array.from({ length: 30 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* 🎯 Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-black/30 backdrop-blur-xl rounded-full border border-pink-500/30"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-3 h-3 rounded-full bg-pink-400 animate-quantum-pulse" />
            <span className="text-pink-300 text-sm font-mono">HOLOGRAPHIC PROJECTION ACTIVE</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-quantum block">QUANTUM</span>
            <span className="text-neural">PORTFOLIO</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            最先端プロジェクトを
            <span className="text-pink-400 font-semibold">3Dホログラム</span>
            で体験。量子技術とAIが融合した
            <span className="text-cyan-400 font-semibold">革新的作品群</span>
            を空間的に探索しましょう。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 🎲 3D Holographic Display */}
          <motion.div 
            className="relative h-96 bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
              <ambientLight intensity={0.4} />
              <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
              
              <Suspense fallback={null}>
                {projects.map((project) => (
                  <group 
                    key={project.id}
                    position={project.id === selectedProject.id ? [0, 0, 0] : [100, 100, 100]}
                  >
                    <ProjectHologram 
                      project={project} 
                      isActive={project.id === selectedProject.id}
                    />
                  </group>
                ))}
              </Suspense>
            </Canvas>

            {/* Holographic Frame Effect */}
            <div className="absolute inset-4 border border-cyan-400/30 rounded-xl pointer-events-none">
              <div className="absolute -top-px -left-px w-8 h-8 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute -top-px -right-px w-8 h-8 border-t-2 border-r-2 border-cyan-400" />
              <div className="absolute -bottom-px -left-px w-8 h-8 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute -bottom-px -right-px w-8 h-8 border-b-2 border-r-2 border-cyan-400" />
            </div>

            {/* Control Panel */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
              <motion.button
                onClick={() => setAutoRotate(!autoRotate)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  autoRotate ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {autoRotate ? '⏸️ 自動' : '▶️ 手動'}
              </motion.button>
              
              <div className="text-cyan-300 text-sm font-mono">
                {projects.findIndex(p => p.id === selectedProject.id) + 1} / {projects.length}
              </div>
            </div>
          </motion.div>

          {/* 📋 Project Details Panel */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
              >
                {/* Project Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: selectedProject.color }}
                  />
                  <span className="text-gray-400 text-sm font-medium">
                    {selectedProject.category}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-400/30 rounded-full text-sm text-purple-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Performance Radar */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4 text-center">
                    Performance Analysis
                  </h4>
                  <PerformanceRadar project={selectedProject} />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.button
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl text-white font-medium hover:shadow-neural transition-all"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    🔬 プロジェクト詳細
                  </motion.button>
                  <motion.button
                    className="px-6 py-3 bg-black/40 border border-cyan-400/30 rounded-xl text-cyan-300 font-medium hover:bg-cyan-400/10 transition-all"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    📊 ライブデモ
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Project Selector */}
            <div className="grid grid-cols-2 gap-3">
              {projects.map((project, index) => (
                <motion.button
                  key={project.id}
                  onClick={() => {
                    setSelectedProject(project)
                    setAutoRotate(false)
                  }}
                  className={`p-4 rounded-xl text-left transition-all border ${
                    selectedProject.id === project.id
                      ? 'bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border-purple-400/50'
                      : 'bg-black/20 border-white/10 hover:border-white/20'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: project.color }}
                    />
                    <span className="text-sm text-gray-400">{project.category}</span>
                  </div>
                  <div className="text-white font-medium text-sm">
                    {project.title}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}