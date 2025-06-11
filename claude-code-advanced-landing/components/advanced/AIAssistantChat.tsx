'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Bot, User, Sparkles, Code, Brain } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'ai'
  timestamp: Date
  typing?: boolean
}

const AIAssistantChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'こんにちは！Claude Codeアシスタントです。プログラミングに関する質問があればお気軽にどうぞ！',
      sender: 'ai',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const demoResponses = [
    'React Hooksを使ったカスタムフックの実装方法をご説明しますね。まず、useStateとuseEffectを組み合わせて...',
    'TypeScriptの型定義について詳しく解説します。インターフェースとタイプエイリアスの違いは...',
    'Next.js App Routerでの状態管理について、ZustandやRedux Toolkitを使った実装例をご紹介します...',
    'パフォーマンス最適化のベストプラクティスをお教えします。React.memoやuseMemoの効果的な使用法は...',
    'Claude Codeを使ったペアプログラミングのコツをお伝えします。効率的なプロンプトの書き方は...'
  ]

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // AI応答をシミュレート
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: demoResponses[Math.floor(Math.random() * demoResponses.length)],
        sender: 'ai',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const quickActions = [
    { icon: Code, text: 'コード生成', color: 'from-blue-500 to-cyan-500' },
    { icon: Brain, text: 'コード解説', color: 'from-purple-500 to-pink-500' },
    { icon: Sparkles, text: 'リファクタリング', color: 'from-green-500 to-emerald-500' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl mx-auto bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl"
    >
      {/* Header */}
      <div className="px-6 py-4 bg-gradient-to-r from-primary-600/20 to-accent-600/20 border-b border-white/10">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Bot className="w-8 h-8 text-primary-400" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          </div>
          <div>
            <h3 className="text-white font-semibold">Claude Code AI</h3>
            <p className="text-primary-200 text-sm">あなたのプログラミングパートナー</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 py-3 border-b border-white/10">
        <div className="flex space-x-3">
          {quickActions.map((action, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 px-3 py-2 rounded-full bg-gradient-to-r ${action.color} text-white text-xs font-medium shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <action.icon className="w-4 h-4" />
              <span>{action.text}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="h-80 overflow-y-auto p-6 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start space-x-3 max-w-xs ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.sender === 'user' 
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500' 
                    : 'bg-gradient-to-r from-purple-500 to-pink-500'
                }`}>
                  {message.sender === 'user' ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>
                <div className={`px-4 py-3 rounded-2xl ${
                  message.sender === 'user' 
                    ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white' 
                    : 'bg-white/80 text-gray-800 backdrop-blur-sm'
                } shadow-lg`}>
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className={`text-xs mt-1 opacity-70 ${
                    message.sender === 'user' ? 'text-primary-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing Indicator */}
        <AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex justify-start"
            >
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white/80 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg">
                  <div className="flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="px-6 py-4 border-t border-white/10">
        <div className="flex items-end space-x-3">
          <div className="flex-1 relative">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Claude Codeに質問してみましょう..."
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-300"
              rows={1}
              style={{ minHeight: '44px', maxHeight: '120px' }}
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isTyping}
            className="w-11 h-11 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Ambient Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl animate-neural-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-accent-500/10 rounded-full blur-3xl animate-aurora" />
      </div>
    </motion.div>
  )
}

export default AIAssistantChat