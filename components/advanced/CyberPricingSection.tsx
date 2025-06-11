'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const plans = [
  {
    name: "Neural Starter",
    price: "¥29,800",
    period: "/月",
    icon: "🧠",
    description: "AI基礎学習に最適なエントリープラン",
    features: [
      "基礎Neural Networkアクセス",
      "量子シミュレーション（制限付き）", 
      "AI Chat Support 24/7",
      "基本3Dビジュアライゼーション",
      "コミュニティアクセス"
    ],
    color: "from-cyan-500 to-blue-600",
    popular: false
  },
  {
    name: "Quantum Pro",
    price: "¥98,000", 
    period: "/月",
    icon: "⚛️",
    description: "プロフェッショナル開発者向け完全パッケージ",
    features: [
      "無制限Quantum Computing",
      "高度Neural Network設計",
      "リアルタイムAI最適化",
      "3Dホログラフィック開発環境",
      "量子暗号化セキュリティ",
      "優先技術サポート",
      "カスタムAIトレーニング"
    ],
    color: "from-purple-500 to-pink-600",
    popular: true
  },
  {
    name: "Enterprise Infinity",
    price: "¥298,000",
    period: "/月", 
    icon: "🚀",
    description: "企業向け無限スケーラブルソリューション",
    features: [
      "専用量子クラスター",
      "カスタムNeural Architecture",
      "エンタープライズAI統合",
      "専属量子エンジニア",
      "SLA保証 99.99%",
      "グローバルCDN展開",
      "無制限チームライセンス"
    ],
    color: "from-orange-500 to-red-600", 
    popular: false
  }
]

export default function CyberPricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-b from-quantum-void to-black">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-neural block">QUANTUM</span>
            <span className="text-cyber">PRICING</span>
          </h2>
          
          <div className="flex justify-center mt-8">
            <div className="flex bg-black/40 backdrop-blur-xl rounded-2xl p-2 border border-white/10">
              <motion.button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                月額プラン
              </motion.button>
              <motion.button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  billingCycle === 'yearly'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                年額プラン <span className="text-green-400 text-sm">-20%</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 border transition-all duration-500 ${
                plan.popular 
                  ? 'border-purple-400/50 scale-105 shadow-quantum' 
                  : 'border-white/10 hover:border-white/20'
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    🌟 Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="text-6xl mb-4">{plan.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">
                    {billingCycle === 'yearly' 
                      ? `¥${Math.floor(parseInt(plan.price.replace('¥', '').replace(',', '')) * 0.8).toLocaleString()}`
                      : plan.price
                    }
                  </span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className="flex items-start gap-3 text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.2 + featureIndex * 0.1, duration: 0.5 }}
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <motion.button
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:shadow-quantum'
                    : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-neural'
                }`}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                🚀 {plan.name} を始める
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 1 }}
        >
          <p className="text-gray-400 mb-6">
            すべてのプランに30日間の無料トライアル付き。量子技術サポート含む。
          </p>
          <motion.button
            className="px-8 py-3 bg-black/40 border border-cyan-400/30 rounded-xl text-cyan-300 font-medium hover:bg-cyan-400/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            💬 専門家に相談
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}