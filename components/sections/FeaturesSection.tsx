'use client'

import React from 'react'
import Container from '../ui/Container'
import Card from '../ui/Card'
import { CodeBracketIcon, ChartBarIcon, AcademicCapIcon } from '../icons'

const FeaturesSection = () => {
  const features = [
    {
      icon: <CodeBracketIcon className="h-8 w-8" />,
      title: '高品質なコード生成',
      description: '自然言語の指示から、最適化されたコードを瞬時に生成。複数の言語に対応し、ベストプラクティスに従った実装を提供します。',
      gradient: 'from-primary-500 to-primary-600',
      delay: '0s'
    },
    {
      icon: <ChartBarIcon className="h-8 w-8" />,
      title: 'インテリジェントな分析',
      description: '既存のコードを理解し、改善点や潜在的な問題を特定。パフォーマンスの最適化やセキュリティの向上を提案します。',
      gradient: 'from-accent-500 to-accent-600',
      delay: '0.2s'
    },
    {
      icon: <AcademicCapIcon className="h-8 w-8" />,
      title: '学習サポート',
      description: 'コードの動作原理や設計思想を丁寧に説明。プログラミング初心者でも理解しやすい形で知識を伝授します。',
      gradient: 'from-secondary-500 to-secondary-600',
      delay: '0.4s'
    }
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-neutral-50">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-accent-100 border border-primary-200 mb-6 animate-fade-in">
            <span className="text-sm font-semibold text-primary-700">🤖 Claude Codeの特徴</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6 animate-slide-up">
            Claude Code
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              とは？
            </span>
          </h2>
          
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Anthropic社が開発した最先端のAIプログラミングアシスタント。
            <br />
            自然言語でのやり取りを通じて、高品質なコードの生成から複雑な問題解決まで幅広くサポートします。
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group animate-slide-up"
              style={{ animationDelay: feature.delay }}
            >
              <Card variant="glass" className="h-full hover:scale-105 transition-all duration-500 border-white/40 hover:border-white/60">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    {feature.icon}
                  </div>
                  <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-neutral-800 mb-4 group-hover:text-primary-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary-100/50 to-accent-100/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100" />
              </Card>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Card variant="gradient" className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  10+
                </div>
                <div className="text-neutral-600 font-medium">対応言語</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold bg-gradient-to-r from-accent-600 to-secondary-600 bg-clip-text text-transparent">
                  50%
                </div>
                <div className="text-neutral-600 font-medium">開発時間短縮</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold bg-gradient-to-r from-secondary-600 to-primary-600 bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-neutral-600 font-medium">サポート体制</div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}

export default FeaturesSection