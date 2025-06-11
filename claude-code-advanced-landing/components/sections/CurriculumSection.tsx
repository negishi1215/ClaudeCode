'use client'

import React from 'react'
import Container from '../ui/Container'
import Card from '../ui/Card'

const CurriculumSection = () => {
  const curriculumItems = [
    {
      number: '1',
      title: '基礎編',
      duration: '3ヶ月',
      items: [
        'Claude Codeの基本操作',
        'プロンプトエンジニアリング',
        '基本的なコード生成',
        'デバッグテクニック'
      ],
      color: 'from-primary-500 to-primary-600',
      bgColor: 'from-primary-50 to-primary-100'
    },
    {
      number: '2',
      title: '実践編',
      duration: '6ヶ月',
      items: [
        'Webアプリケーション開発',
        'API設計・実装',
        'データベース操作',
        'テスト駆動開発'
      ],
      color: 'from-accent-500 to-accent-600',
      bgColor: 'from-accent-50 to-accent-100'
    },
    {
      number: '3',
      title: '応用編',
      duration: '9ヶ月',
      items: [
        'アーキテクチャ設計',
        'パフォーマンス最適化',
        'セキュリティ対策',
        'CI/CD導入'
      ],
      color: 'from-secondary-500 to-secondary-600',
      bgColor: 'from-secondary-50 to-secondary-100'
    },
    {
      number: '4',
      title: 'マスター編',
      duration: '12ヶ月',
      items: [
        '大規模システム開発',
        'チーム開発手法',
        'プロジェクト管理',
        '技術リーダーシップ'
      ],
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'from-emerald-50 to-emerald-100'
    }
  ]

  return (
    <section id="curriculum" className="py-24 bg-gradient-to-b from-neutral-50 to-white">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-accent-100 to-secondary-100 border border-accent-200 mb-6 animate-fade-in">
            <span className="text-sm font-semibold text-accent-700">📚 学習プログラム</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6 animate-slide-up">
            段階的
            <span className="bg-gradient-to-r from-accent-600 to-secondary-600 bg-clip-text text-transparent">
              学習カリキュラム
            </span>
          </h2>
          
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            初心者から上級者まで、あなたのペースに合わせて学習を進められる
            <br />
            体系的なカリキュラムを用意しています
          </p>
        </div>

        {/* Curriculum Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {curriculumItems.map((item, index) => (
            <div
              key={index}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card variant="glass" className="h-full hover:scale-105 transition-all duration-500 border-white/40 hover:border-white/60 relative overflow-hidden">
                {/* Background decoration */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} opacity-0 group-hover:opacity-20 transition-all duration-500`} />
                
                {/* Number badge */}
                <div className="relative mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    {item.number}
                  </div>
                  <div className={`absolute inset-0 w-14 h-14 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-300`} />
                </div>

                {/* Content */}
                <div className="relative">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-neutral-800 group-hover:text-primary-700 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <span className="text-sm font-medium text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
                      {item.duration}
                    </span>
                  </div>
                  
                  <ul className="space-y-3">
                    {item.items.map((listItem, itemIndex) => (
                      <li 
                        key={itemIndex}
                        className="flex items-start space-x-3 text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300"
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mt-2.5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{listItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Progress indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-neutral-200 to-neutral-300">
                  <div 
                    className={`h-full bg-gradient-to-r ${item.color} transition-all duration-1000 group-hover:w-full`}
                    style={{ width: `${(index + 1) * 25}%` }}
                  />
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Learning Path Visualization */}
        <div className="mt-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Card variant="gradient" className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-neutral-800 mb-6">
              🎯 あなたの学習ペースに合わせて進行
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl mx-auto flex items-center justify-center text-white text-2xl">
                  ⚡
                </div>
                <h4 className="font-semibold text-neutral-800">集中学習</h4>
                <p className="text-sm text-neutral-600">週15時間の学習で6ヶ月で完了</p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl mx-auto flex items-center justify-center text-white text-2xl">
                  🎯
                </div>
                <h4 className="font-semibold text-neutral-800">標準学習</h4>
                <p className="text-sm text-neutral-600">週10時間の学習で12ヶ月で完了</p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl mx-auto flex items-center justify-center text-white text-2xl">
                  🚶
                </div>
                <h4 className="font-semibold text-neutral-800">マイペース学習</h4>
                <p className="text-sm text-neutral-600">週5時間の学習で18ヶ月で完了</p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}

export default CurriculumSection