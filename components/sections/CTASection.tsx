'use client'

import React from 'react'
import Container from '../ui/Container'
import Button from '../ui/Button'

const CTASection = () => {
  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-accent-600 to-secondary-600">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 via-transparent to-accent-600/20 animate-gradient-x" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      <Container className="relative z-10">
        <div className="text-center text-white">
          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8 animate-slide-up">
            今すぐ
            <span className="bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
              Claude Code講座
            </span>
            を<br />始めませんか？
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            無料体験レッスンで、Claude Codeの可能性を実感してください。
            <br />
            あなたのプログラミングライフが大きく変わります。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="xl"
              className="bg-white text-primary-700 font-bold px-12 py-6 rounded-2xl hover:bg-yellow-50 hover:scale-105 shadow-2xl hover:shadow-3xl transition-all duration-300"
              leftIcon={<span className="text-2xl">🚀</span>}
            >
              無料体験を申し込む
            </Button>
            <Button 
              variant="outline"
              size="xl"
              className="border-2 border-white text-white font-bold px-12 py-6 rounded-2xl hover:bg-white hover:text-primary-700 hover:scale-105 transition-all duration-300"
              leftIcon={<span className="text-2xl">📞</span>}
            >
              個別相談を予約
            </Button>
          </div>

          {/* Features highlight */}
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl">
                ⚡
              </div>
              <h3 className="font-bold">即日開始</h3>
              <p className="text-sm opacity-90 text-center">申し込み後すぐに学習開始</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl">
                🛡️
              </div>
              <h3 className="font-bold">返金保証</h3>
              <p className="text-sm opacity-90 text-center">14日間の全額返金保証</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl">
                👥
              </div>
              <h3 className="font-bold">個別サポート</h3>
              <p className="text-sm opacity-90 text-center">専属メンターが徹底サポート</p>
            </div>
          </div>

          {/* Urgency element */}
          <div className="mt-16 animate-pulse-glow">
            <div className="inline-flex items-center px-6 py-3 bg-yellow-400 text-primary-900 rounded-full font-bold shadow-lg">
              <span className="mr-2">🔥</span>
              今月限定：入学金50%OFF キャンペーン実施中
              <span className="ml-2">🔥</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CTASection