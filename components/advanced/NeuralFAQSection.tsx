'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

const faqData = [
  {
    question: "量子プログラミングとは何ですか？",
    answer: "量子プログラミングは、量子力学の原理を活用したコンピューティング手法です。従来のコンピューターが0か1のビットを使用するのに対し、量子コンピューターは重ね合わせ状態の量子ビット（クビット）を使用し、指数関数的な処理能力向上を実現します。",
    category: "基礎知識",
    icon: "⚛️"
  },
  {
    question: "AIニューラルネットワークは初心者でも学習できますか？",
    answer: "はい、Claude Code Quantumでは段階的学習システムを採用しています。基礎的な数学知識から始まり、視覚的なインターフェースとAIサポートにより、プログラミング初心者でも無理なくニューラルネットワークの概念を習得できます。",
    category: "学習",
    icon: "🧠"
  },
  {
    question: "3Dホログラフィック開発環境の動作要件は？",
    answer: "WebGL対応ブラウザ（Chrome、Firefox、Safari最新版）、GPU：OpenGL 3.3以上、RAM：8GB以上推奨。VR/ARデバイスは必須ではありませんが、Meta Quest、HoloLens等に対応しており、より没入感のある開発体験が可能です。",
    category: "技術要件",
    icon: "🌟"
  },
  {
    question: "量子暗号化のセキュリティレベルは？",
    answer: "量子暗号化は理論上解読不可能とされる最高レベルのセキュリティを提供します。量子もつれとハイゼンベルクの不確定性原理により、第三者による盗聴やデータ改ざんを物理的に検出・防止できます。",
    category: "セキュリティ",
    icon: "🛡️"
  },
  {
    question: "コードの自動最適化はどのように機能しますか？",
    answer: "AIエンジンがリアルタイムでコードを解析し、パフォーマンス、可読性、セキュリティの観点から改善提案を行います。機械学習により、あなたのコーディングパターンを学習し、個人に最適化された提案を生成します。",
    category: "AI機能",
    icon: "⚡"
  },
  {
    question: "チーム開発での利用は可能ですか？",
    answer: "Enterpriseプランでは、リアルタイム協調編集、量子同期システム、チーム専用AIアシスタントを提供。分散チームでも、ホログラフィック会議室で空間的な協働開発が可能です。",
    category: "チーム開発",
    icon: "👥"
  }
]

export default function NeuralFAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const categories = Array.from(new Set(faqData.map(item => item.category)))

  const filteredFAQ = selectedCategory 
    ? faqData.filter(item => item.category === selectedCategory)
    : faqData

  return (
    <section ref={ref} className="relative py-32 bg-quantum-void">
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-neural block">NEURAL</span>
            <span className="text-quantum">FAQ</span>
          </h2>
          <p className="text-xl text-gray-300">
            量子プログラミングに関するよくある質問
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-xl font-medium transition-all ${
              !selectedCategory
                ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                : 'bg-black/40 text-gray-400 hover:text-white border border-white/10'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            すべて
          </motion.button>
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                  : 'bg-black/40 text-gray-400 hover:text-white border border-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          <AnimatePresence>
            {filteredFAQ.map((item, index) => (
              <motion.div
                key={`${selectedCategory}-${index}`}
                className="bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                layout
              >
                <motion.button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-all"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {item.question}
                      </h3>
                      <span className="text-sm text-cyan-400">{item.category}</span>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-cyan-400 text-xl"
                  >
                    ↓
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 1 }}
        >
          <p className="text-gray-400 mb-6">
            他にご質問がございましたら、お気軽にお問い合わせください。
          </p>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl text-white font-bold hover:shadow-neural transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            🤖 AIサポートに質問
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}