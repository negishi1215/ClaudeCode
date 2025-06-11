'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const curriculumData = [
  {
    phase: "Phase 1",
    title: "Quantum Fundamentals",
    icon: "⚛️",
    duration: "4 weeks",
    modules: [
      "量子力学とプログラミングの融合",
      "Neural Network基礎理論",
      "Quantum Computing入門",
      "AI駆動開発環境構築"
    ],
    difficulty: "Beginner",
    color: "from-cyan-500 to-blue-600"
  },
  {
    phase: "Phase 2", 
    title: "Neural Programming",
    icon: "🧠",
    duration: "6 weeks",
    modules: [
      "ディープラーニング実装",
      "量子アルゴリズム設計",
      "3Dデータ可視化技術",
      "リアルタイム最適化システム"
    ],
    difficulty: "Intermediate",
    color: "from-purple-500 to-pink-600"
  },
  {
    phase: "Phase 3",
    title: "Holographic Systems",
    icon: "🌟",
    duration: "8 weeks", 
    modules: [
      "空間プログラミング理論",
      "ホログラフィックUI設計",
      "量子暗号化実装",
      "AI自動コード生成"
    ],
    difficulty: "Advanced",
    color: "from-green-500 to-emerald-600"
  },
  {
    phase: "Phase 4",
    title: "Quantum Mastery",
    icon: "🚀",
    duration: "10 weeks",
    modules: [
      "量子プロセッサ設計",
      "Neural Architecture Search",
      "次世代UI/UXパラダイム",
      "産業レベル実装プロジェクト"
    ],
    difficulty: "Expert",
    color: "from-orange-500 to-red-600"
  }
]

export default function QuantumCurriculumSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedPhase, setSelectedPhase] = useState(0)

  return (
    <section ref={ref} className="relative py-32 bg-quantum-void">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-cyber block">QUANTUM</span>
            <span className="text-neural">CURRICULUM</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {curriculumData.map((phase, index) => (
            <motion.div
              key={index}
              className={`relative bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 cursor-pointer transition-all duration-500 ${
                selectedPhase === index ? 'border-cyan-400/50 scale-105' : 'hover:border-white/20'
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              onClick={() => setSelectedPhase(index)}
              whileHover={{ y: -5 }}
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{phase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                <div className="text-sm text-gray-400">{phase.duration}</div>
              </div>
              
              <div className="space-y-3">
                {phase.modules.map((module, moduleIndex) => (
                  <div key={moduleIndex} className="text-sm text-gray-300 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    {module}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-white/10">
                <span className={`px-3 py-1 bg-gradient-to-r ${phase.color} rounded-full text-xs text-white font-medium`}>
                  {phase.difficulty}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}