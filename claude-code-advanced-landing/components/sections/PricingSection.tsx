'use client'

import React from 'react'
import Container from '../ui/Container'
import Card from '../ui/Card'
import Button from '../ui/Button'
import { CheckCircleIcon } from '../icons'

const PricingSection = () => {
  const plans = [
    {
      name: 'ベーシック',
      price: '29,800',
      period: '月',
      description: '初心者向け',
      features: [
        '基礎カリキュラム',
        '週1回のグループレッスン',
        'チャットサポート',
        'コミュニティアクセス'
      ],
      buttonText: 'プランを選択',
      buttonVariant: 'outline' as const,
      popular: false,
      gradient: 'from-neutral-100 to-neutral-200'
    },
    {
      name: 'スタンダード',
      price: '49,800',
      period: '月',
      description: '実践重視',
      features: [
        '全カリキュラム',
        '週2回の個別レッスン',
        '24時間サポート',
        'プロジェクトレビュー',
        '就職サポート'
      ],
      buttonText: 'プランを選択',
      buttonVariant: 'gradient' as const,
      popular: true,
      gradient: 'from-primary-500 to-accent-500'
    },
    {
      name: 'プレミアム',
      price: '89,800',
      period: '月',
      description: '本格的なスキルアップ',
      features: [
        '全カリキュラム + 特別講座',
        '毎日の個別指導',
        '専属メンター',
        '企業プロジェクト参加',
        '転職保証'
      ],
      buttonText: 'プランを選択',
      buttonVariant: 'outline' as const,
      popular: false,
      gradient: 'from-secondary-100 to-secondary-200'
    }
  ]

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-neutral-50">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-secondary-100 to-accent-100 border border-secondary-200 mb-6 animate-fade-in">
            <span className="text-sm font-semibold text-secondary-700">💰 料金プラン</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6 animate-slide-up">
            あなたに
            <span className="bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text text-transparent">
              最適なプラン
            </span>
          </h2>
          
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            学習スタイルと目標に合わせて選べる3つのプラン
            <br />
            すべてのプランで14日間の返金保証付き
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group animate-slide-up ${plan.popular ? 'md:scale-110 z-10' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce-slow">
                    🔥 人気プラン
                  </div>
                </div>
              )}

              <Card 
                variant={plan.popular ? "glass" : "default"} 
                className={`h-full relative overflow-hidden transition-all duration-500 ${
                  plan.popular 
                    ? 'border-2 border-primary-200 shadow-2xl hover:shadow-3xl bg-gradient-to-br from-white to-primary-50/30' 
                    : 'hover:scale-105 border-neutral-200'
                }`}
              >
                {/* Background decoration */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500`} />
                
                {/* Content */}
                <div className="relative">
                  {/* Plan header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-neutral-800 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-neutral-600 mb-6">{plan.description}</p>
                    
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-neutral-900">¥{plan.price}</span>
                      <span className="text-lg text-neutral-500 ml-1">/{plan.period}</span>
                    </div>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-start space-x-3 animate-fade-in"
                        style={{ animationDelay: `${0.4 + featureIndex * 0.1}s` }}
                      >
                        <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    variant={plan.buttonVariant}
                    size="lg"
                    className={`w-full ${
                      plan.popular 
                        ? 'shadow-glow hover:shadow-glow-lg' 
                        : ''
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </div>

                {/* Decorative elements */}
                {plan.popular && (
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary-100/50 to-accent-100/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100" />
                )}
              </Card>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Card variant="gradient" className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                  🛡️ 安心の保証制度
                </h3>
                <ul className="space-y-3 text-neutral-600">
                  <li className="flex items-center space-x-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    <span>14日間の全額返金保証</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    <span>プレミアムプランは転職保証付き</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    <span>いつでもプラン変更可能</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto flex items-center justify-center text-white text-4xl animate-pulse-glow">
                  📚
                </div>
                <p className="mt-4 text-neutral-600 font-medium">
                  まずは無料体験から<br />始めてみませんか？
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}

export default PricingSection