'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

// 🤖 AI CHAT SIMULATION - AIチャットシミュレーション
function AIChat() {
  const [messages, setMessages] = useState([
    { type: 'ai', content: 'こんにちは！Claude Code AI Lab へようこそ。何をお手伝いしましょうか？', timestamp: new Date() }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const aiResponses = [
    'そのコードは素晴らしいですね！パフォーマンスを20%向上させる最適化を提案させていただきます。',
    'Neural Networkアプローチを使用すると、この処理は量子レベルで高速化できます。',
    'コードの複雑度を分析中...🧠 AIが検出した改善点を3D可視化で表示します。',
    'Quantum Computingの原理を適用すれば、このアルゴリズムは指数関数的に高速化可能です。',
    'セキュリティホールを検出しました。量子暗号化レイヤーの追加をおすすめします。'
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!inputValue.trim()) return

    const userMessage = { type: 'user', content: inputValue, timestamp: new Date() }
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(() => {
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)]
      const aiMessage = { type: 'ai', content: randomResponse, timestamp: new Date() }
      setMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500 + Math.random() * 1000)
  }

  return (
    <div className="h-96 flex flex-col bg-black/40 backdrop-blur-xl rounded-2xl border border-cyan-400/30 overflow-hidden">
      {/* Chat Header */}
      <div className="flex items-center gap-3 p-4 border-b border-cyan-400/20 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="w-3 h-3 bg-green-400 rounded-full animate-quantum-pulse" />
        <span className="text-cyan-300 font-mono text-sm">Claude AI Neural Interface</span>
        <div className="ml-auto flex gap-1">
          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3 }}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-2xl ${
                message.type === 'user'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border border-cyan-400/30 text-cyan-100'
              }`}
            >
              <div className="text-sm">{message.content}</div>
              <div className={`text-xs mt-1 opacity-70 ${message.type === 'user' ? 'text-purple-200' : 'text-cyan-300'}`}>
                {message.timestamp.toLocaleTimeString()}
              </div>
            </div>
          </motion.div>
        ))}
        
        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border border-cyan-400/30 p-3 rounded-2xl">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-cyan-400/20">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="AI に質問してみてください..."
            className="flex-1 bg-black/50 border border-cyan-400/30 rounded-xl px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
          />
          <motion.button
            onClick={handleSend}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl text-white font-medium hover:shadow-neural transition-all"
          >
            送信
          </motion.button>
        </div>
      </div>
    </div>
  )
}

// 💻 INTERACTIVE CODE EDITOR - インタラクティブコードエディタ
function CodeEditor() {
  const [code, setCode] = useState(`// 🚀 Claude Code Quantum Algorithm
import { QuantumProcessor } from 'claude-quantum';

class NeuralCodeOptimizer {
  constructor() {
    this.quantum = new QuantumProcessor();
    this.neural = new NeuralEngine();
  }

  async optimize(sourceCode) {
    // Quantum analysis
    const qubits = this.quantum.analyze(sourceCode);
    
    // Neural pattern recognition
    const patterns = await this.neural.detectPatterns(qubits);
    
    // Generate optimized code
    return this.quantum.synthesize(patterns);
  }
}

// Usage Example
const optimizer = new NeuralCodeOptimizer();
const optimizedCode = await optimizer.optimize(yourCode);

console.log('🧠 AI optimization complete!', optimizedCode);`)

  const [activeTab, setActiveTab] = useState('javascript')
  const [isRunning, setIsRunning] = useState(false)
  const [output, setOutput] = useState('')

  const tabs = [
    { id: 'javascript', name: 'JavaScript', icon: '🟨' },
    { id: 'python', name: 'Python', icon: '🐍' },
    { id: 'rust', name: 'Rust', icon: '🦀' },
    { id: 'quantum', name: 'Quantum', icon: '⚛️' }
  ]

  const runCode = () => {
    setIsRunning(true)
    setOutput('実行中... 🚀')
    
    setTimeout(() => {
      setOutput(`✨ Quantum Code Execution Complete!

🧠 Neural Analysis:
  - Code complexity: O(log n) → O(1) 
  - Performance boost: +340%
  - Memory optimization: +85%
  - Security level: Quantum-safe

⚡ Execution Results:
  Hello, Quantum World!
  Neural patterns detected: 42
  Optimization suggestions: 7
  
🔬 AI Recommendations:
  1. Apply quantum entanglement for parallel processing
  2. Use neural networks for predictive caching
  3. Implement holographic debugging markers`)
      setIsRunning(false)
    }, 2000)
  }

  return (
    <div className="h-96 flex flex-col bg-black/40 backdrop-blur-xl rounded-2xl border border-purple-400/30 overflow-hidden">
      {/* Editor Header */}
      <div className="flex items-center justify-between p-4 border-b border-purple-400/20 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white'
                  : 'text-purple-300 hover:bg-purple-800/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.icon} {tab.name}
            </motion.button>
          ))}
        </div>
        
        <motion.button
          onClick={runCode}
          disabled={isRunning}
          className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg text-white font-medium disabled:opacity-50 hover:shadow-matrix transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isRunning ? '🧠 AI実行中...' : '⚡ Quantum Run'}
        </motion.button>
      </div>

      {/* Code Area */}
      <div className="flex-1 flex">
        <div className="flex-1 overflow-hidden">
          <SyntaxHighlighter
            language="javascript"
            style={atomDark}
            customStyle={{
              margin: 0,
              padding: '1rem',
              background: 'transparent',
              fontSize: '0.875rem',
              height: '100%',
              overflow: 'auto'
            }}
            showLineNumbers
          >
            {code}
          </SyntaxHighlighter>
        </div>
        
        {/* Output Panel */}
        <div className="w-1/3 border-l border-purple-400/20 bg-black/30 p-4 overflow-y-auto">
          <div className="text-purple-300 text-sm font-mono mb-2">🔬 Quantum Output</div>
          <div className="text-green-400 text-xs font-mono whitespace-pre-wrap">
            {output || '実行結果がここに表示されます...'}
          </div>
        </div>
      </div>
    </div>
  )
}

// 🧪 MAIN AI LABORATORY SECTION
export default function AILaboratorySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeDemo, setActiveDemo] = useState<'chat' | 'code'>('chat')

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-b from-quantum-void to-black overflow-hidden">
      {/* 🌌 Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-neural-grid opacity-5" />
        {Array.from({ length: 15 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
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
            className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-black/30 backdrop-blur-xl rounded-full border border-green-500/30"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-3 h-3 rounded-full bg-green-400 animate-quantum-pulse" />
            <span className="text-green-300 text-sm font-mono">AI LABORATORY ACTIVE</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-cyber block">QUANTUM</span>
            <span className="text-neural">AI LAB</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            最先端AI技術を体験できる
            <span className="text-green-400 font-semibold">インタラクティブ研究室</span>
            。リアルタイムでAIとコミュニケーションを取り、
            <span className="text-cyan-400 font-semibold">量子コードエディタ</span>
            で未来のプログラミングを体感しましょう。
          </p>
        </motion.div>

        {/* 🎮 Demo Selector */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="flex bg-black/40 backdrop-blur-xl rounded-2xl p-2 border border-white/10">
            <motion.button
              onClick={() => setActiveDemo('chat')}
              className={`px-8 py-4 rounded-xl font-medium transition-all ${
                activeDemo === 'chat'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-neural'
                  : 'text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              🤖 AI Chat Demo
            </motion.button>
            <motion.button
              onClick={() => setActiveDemo('code')}
              className={`px-8 py-4 rounded-xl font-medium transition-all ${
                activeDemo === 'code'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-quantum'
                  : 'text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              💻 Quantum Code Editor
            </motion.button>
          </div>
        </motion.div>

        {/* 🔬 Interactive Demo Area */}
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <AnimatePresence mode="wait">
            {activeDemo === 'chat' ? (
              <motion.div
                key="chat"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <AIChat />
              </motion.div>
            ) : (
              <motion.div
                key="code"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <CodeEditor />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* 🎯 Feature Highlights */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 1 }}
        >
          {[
            {
              icon: "🧠",
              title: "Neural Processing",
              description: "リアルタイムでコードを分析し、AIが最適化提案を行います。"
            },
            {
              icon: "⚡",
              title: "Quantum Execution",
              description: "量子コンピューティングシミュレーションで超高速実行を体験。"
            },
            {
              icon: "🔮",
              title: "Predictive AI",
              description: "次に書くコードをAIが予測し、開発効率を劇的に向上。"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="text-center bg-black/30 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-500"
              whileHover={{ scale: 1.05, y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 + index * 0.2, duration: 0.6 }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(56, 189, 248, 0.5);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(56, 189, 248, 0.8);
        }
      `}</style>
    </section>
  )
}