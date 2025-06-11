'use client'

import React from 'react'
import Button from '../ui/Button'
import Container from '../ui/Container'
import { StarIcon, AcademicCapIcon } from '../icons'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 via-transparent to-accent-600/5 animate-gradient-x" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full animate-float opacity-30`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`
            }}
          />
        ))}
      </div>

      <Container className="relative z-10 text-center py-32">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-accent-100 border border-primary-200 mb-8 animate-fade-in">
            <span className="text-sm font-semibold text-primary-700">✨ 最新のAI技術を学ぼう</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 animate-slide-up">
            <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 bg-clip-text text-transparent">
              Claude Code
            </span>
            <br />
            <span className="text-neutral-800">で未来の</span>
            <br />
            <span className="bg-gradient-to-r from-secondary-600 via-accent-600 to-primary-600 bg-clip-text text-transparent">
              プログラミング
            </span>
            <span className="text-neutral-800">を</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            最先端のAIツール「Claude Code」を使って、
            <span className="font-semibold text-primary-600">効率的</span>で
            <span className="font-semibold text-accent-600">実践的</span>な
            プログラミング技術を身につけませんか？
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              variant="gradient" 
              size="xl"
              className="text-lg px-12 py-6 shadow-glow hover:shadow-glow-lg"
              leftIcon={<span className="text-2xl">🚀</span>}
            >
              無料体験を始める
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="text-lg px-12 py-6 bg-white/80 backdrop-blur-sm hover:bg-white"
              leftIcon={<span className="text-2xl">📖</span>}
            >
              詳細を見る
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center space-x-2 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 shadow-lg">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-neutral-700 font-semibold">4.9/5</span>
              <span className="text-neutral-500">(200+ レビュー)</span>
            </div>
            
            <div className="flex items-center space-x-2 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 shadow-lg">
              <AcademicCapIcon className="h-6 w-6 text-primary-600" />
              <span className="text-neutral-700 font-semibold">1,500+</span>
              <span className="text-neutral-500">受講生</span>
            </div>
          </div>

          {/* Visual Element */}
          <div className="mt-20 animate-scale-in" style={{ animationDelay: '0.8s' }}>
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-500">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-neutral-400 text-sm">claude-code-terminal</span>
                </div>
                
                <div className="font-mono text-left space-y-3">
                  <div className="text-green-400">$ claude-code generate --component=LoginForm</div>
                  <div className="text-blue-400 animate-pulse">💡 React Login Form with TypeScript を生成中...</div>
                  <div className="text-neutral-300">
                    <div className="opacity-80">✅ バリデーション機能</div>
                    <div className="opacity-80">✅ セキュリティ対策</div>
                    <div className="opacity-80">✅ アクセシビリティ対応</div>
                    <div className="opacity-80">✅ レスポンシブデザイン</div>
                  </div>
                  <div className="text-yellow-400">🎉 完了！ 85行のコードを生成しました</div>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-6 -left-6 bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce-slow">
                AI搭載
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-secondary-500 to-accent-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce-slow" style={{ animationDelay: '1s' }}>
                高速生成
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neutral-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection