'use client'

import React from 'react'
import Link from 'next/link'
import Container from './ui/Container'
import { CodeBracketIcon } from './icons'

const Footer = () => {
  const footerSections = [
    {
      title: '講座情報',
      links: [
        { label: '講座について', href: '#about' },
        { label: 'カリキュラム', href: '#curriculum' },
        { label: '料金プラン', href: '#pricing' },
        { label: 'よくある質問', href: '#faq' }
      ]
    },
    {
      title: 'サポート',
      links: [
        { label: 'お問い合わせ', href: 'mailto:info@claude-code-course.com' },
        { label: '技術サポート', href: 'mailto:support@claude-code-course.com' },
        { label: 'コミュニティ', href: '#community' },
        { label: 'ブログ', href: '#blog' }
      ]
    },
    {
      title: 'リソース',
      links: [
        { label: '学習リソース', href: '#resources' },
        { label: 'ドキュメント', href: '#docs' },
        { label: 'チュートリアル', href: '#tutorials' },
        { label: 'その他のアプリ', href: '/index.html' }
      ]
    },
    {
      title: '法的事項',
      links: [
        { label: 'プライバシーポリシー', href: '#privacy' },
        { label: '利用規約', href: '#terms' },
        { label: '会社概要', href: '#company' },
        { label: '特定商取引法', href: '#commerce-law' }
      ]
    }
  ]

  return (
    <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Brand section */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-6 group">
                <div className="relative">
                  <CodeBracketIcon className="h-10 w-10 text-primary-400 transition-colors duration-300 group-hover:text-primary-300" />
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  Claude Code講座
                </span>
              </Link>
              
              <p className="text-neutral-300 leading-relaxed mb-6 max-w-md">
                AIを活用したプログラミング学習で、未来のエンジニアを育成します。
                最先端の技術と実践的な指導で、あなたの可能性を最大限に引き出します。
              </p>
              
              {/* Social links */}
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-neutral-700 hover:bg-gradient-to-r hover:from-primary-600 hover:to-accent-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <span className="text-sm">📧</span>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-neutral-700 hover:bg-gradient-to-r hover:from-primary-600 hover:to-accent-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <span className="text-sm">💬</span>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-neutral-700 hover:bg-gradient-to-r hover:from-primary-600 hover:to-accent-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <span className="text-sm">📱</span>
                </a>
              </div>
            </div>

            {/* Footer sections */}
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-bold text-lg text-white mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-neutral-300 hover:text-primary-400 transition-colors duration-300 text-sm flex items-center group"
                      >
                        <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 transition-all duration-300 mr-0 group-hover:mr-2" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="py-8 border-t border-neutral-700">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h3 className="font-bold text-white mb-2">📨 最新情報をお届け</h3>
              <p className="text-neutral-300 text-sm">新しいコースやキャンペーン情報をメールでお知らせします</p>
            </div>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="メールアドレスを入力"
                className="px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-glow-lg">
                登録
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-neutral-700">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-neutral-400 text-sm">
              &copy; 2024 Claude Code講座. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-neutral-400 text-sm">
              <span>🏆 エデュテック部門 最優秀賞受賞</span>
              <span>🌟 受講満足度 4.9/5</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer