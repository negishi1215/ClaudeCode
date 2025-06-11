'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Button from './ui/Button'
import Container from './ui/Container'
import { CodeBracketIcon } from './icons'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#about', label: '講座について' },
    { href: '#curriculum', label: 'カリキュラム' },
    { href: '#pricing', label: '料金' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <header className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-neutral-200/50' 
        : 'bg-white/80 backdrop-blur-md'
    )}>
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-105"
          >
            <div className="relative">
              <CodeBracketIcon className="h-8 w-8 text-primary-600 transition-colors duration-300 group-hover:text-primary-700" />
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Claude Code講座
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="gradient"
              size="md"
              className="shadow-glow hover:shadow-glow-lg"
            >
              今すぐ申し込む
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors duration-300"
            aria-label="メニューを開く"
          >
            <div className="space-y-1.5">
              <span className={cn(
                'block w-6 h-0.5 bg-neutral-700 transition-all duration-300',
                isMobileMenuOpen && 'rotate-45 translate-y-2'
              )} />
              <span className={cn(
                'block w-6 h-0.5 bg-neutral-700 transition-all duration-300',
                isMobileMenuOpen && 'opacity-0'
              )} />
              <span className={cn(
                'block w-6 h-0.5 bg-neutral-700 transition-all duration-300',
                isMobileMenuOpen && '-rotate-45 -translate-y-2'
              )} />
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={cn(
          'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 pb-6' 
            : 'max-h-0 opacity-0'
        )}>
          <div className="space-y-4 pt-4 border-t border-neutral-200">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-300 py-2 animate-slide-down"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button 
                variant="gradient"
                size="md"
                className="w-full shadow-glow hover:shadow-glow-lg animate-slide-down"
                style={{ animationDelay: '0.4s' }}
              >
                今すぐ申し込む
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header