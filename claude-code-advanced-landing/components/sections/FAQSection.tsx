'use client'

import React, { useState } from 'react'
import Container from '../ui/Container'
import Card from '../ui/Card'
import { QuestionMarkCircleIcon } from '../icons'

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqs = [
    {
      question: 'プログラミング未経験でも受講できますか？',
      answer: 'はい、プログラミング未経験の方でも安心して受講いただけます。基礎から丁寧に指導し、Claude Codeの使い方を通じて自然にプログラミング概念を学べるカリキュラムを用意しています。'
    },
    {
      question: 'どのような言語を学習できますか？',
      answer: 'JavaScript、Python、Java、Go、Rust など主要なプログラミング言語に対応しています。また、HTML/CSS、React、Next.js などのWeb技術についても学習できます。'
    },
    {
      question: '受講期間はどのくらいですか？',
      answer: '基礎編は3ヶ月、実践編は6ヶ月、応用編からマスター編まで含めると12ヶ月のプログラムです。ただし、個人のペースに合わせて調整可能です。'
    },
    {
      question: '就職・転職サポートはありますか？',
      answer: 'スタンダードプラン以上では、履歴書・職務経歴書の添削、面接対策、企業紹介などの就職サポートを提供しています。プレミアムプランでは転職保証もあります。'
    },
    {
      question: '返金保証はありますか？',
      answer: '受講開始から14日以内であれば、満足いただけない場合は全額返金いたします。また、プレミアムプランでは転職できなかった場合の返金保証もあります。'
    },
    {
      question: 'オンラインでの受講は可能ですか？',
      answer: 'はい、すべてのコースはオンラインで受講可能です。世界中どこからでもアクセスでき、録画された講義はいつでも復習できます。'
    }
  ]

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-neutral-50 to-white">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 border border-primary-200 mb-6 animate-fade-in">
            <span className="text-sm font-semibold text-primary-700">❓ よくある質問</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6 animate-slide-up">
            疑問や不安を
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              解決します
            </span>
          </h2>
          
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            受講に関する疑問にお答えします
            <br />
            その他のご質問もお気軽にお問い合わせください
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card 
                variant="glass" 
                className={`transition-all duration-300 cursor-pointer hover:shadow-xl ${
                  openFAQ === index ? 'border-primary-200 shadow-lg' : 'border-white/40'
                }`}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      openFAQ === index 
                        ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white' 
                        : 'bg-neutral-100 text-neutral-600'
                    }`}>
                      <QuestionMarkCircleIcon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold text-lg mb-3 transition-colors duration-300 ${
                        openFAQ === index ? 'text-primary-700' : 'text-neutral-800'
                      }`}>
                        {faq.question}
                      </h3>
                      
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openFAQ === index 
                          ? 'max-h-96 opacity-100' 
                          : 'max-h-0 opacity-0'
                      }`}>
                        <p className="text-neutral-600 leading-relaxed pb-2">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`ml-4 transition-transform duration-300 ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Card variant="gradient" className="max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl mx-auto flex items-center justify-center text-white text-2xl mb-6">
                💬
              </div>
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                まだ疑問がありますか？
              </h3>
              <p className="text-neutral-600 mb-6">
                お気軽にお問い合わせください。専門スタッフが丁寧にお答えします。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:info@claude-code-course.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-glow-lg"
                >
                  📧 メールで問い合わせ
                </a>
                <a 
                  href="#cta"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-xl hover:bg-primary-600 hover:text-white hover:scale-105 transition-all duration-300"
                >
                  🎯 無料相談を予約
                </a>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}

export default FAQSection