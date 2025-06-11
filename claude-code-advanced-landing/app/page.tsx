import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

// 高度なコンポーネントを動的インポート（パフォーマンス最適化）
const AdvancedHeroSection = dynamic(() => import('../components/advanced/AdvancedHeroSection'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-cosmic">
      <div className="text-white text-center">
        <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4" />
        <p className="text-lg">革新的な体験を準備中...</p>
      </div>
    </div>
  )
})

const AdvancedFeaturesSection = dynamic(() => import('../components/advanced/AdvancedFeaturesSection'), {
  ssr: false
})

const CurriculumSection = dynamic(() => import('../components/sections/CurriculumSection'))
const PricingSection = dynamic(() => import('../components/sections/PricingSection'))
const FAQSection = dynamic(() => import('../components/sections/FAQSection'))
const CTASection = dynamic(() => import('../components/sections/CTASection'))

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
      <Header />
      
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-cosmic">
          <div className="text-white text-center">
            <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4" />
            <p className="text-lg">Next Generation UI Loading...</p>
          </div>
        </div>
      }>
        <AdvancedHeroSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-32 bg-transparent" />}>
        <AdvancedFeaturesSection />
      </Suspense>
      
      <CurriculumSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  )
}