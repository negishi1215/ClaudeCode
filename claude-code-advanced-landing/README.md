# Claude Code Advanced Landing Page

最先端技術を駆使した革新的なClaude Codeランディングページ

## 🚀 主要機能

### ✨ 次世代UI
- **Framer Motion**: 滑らかなページ遷移とマイクロインタラクション
- **CSS Particle System**: パフォーマンス最適化された粒子アニメーション
- **Glass Morphism**: 最新のガラス効果デザイン
- **Gradient Animations**: 動的グラデーション背景

### 🎯 インタラクティブ要素
- **リアルタイムコードエディタ**: シンタックスハイライト付きタイピングアニメーション
- **AIチャットシミュレーター**: インテリジェントなボット会話インターフェース
- **3Dホバーエフェクト**: マウス追跡型カードアニメーション
- **データビジュアライゼーション**: 動的統計表示とチャートアニメーション

### 🌟 先進的技術スタック
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (カスタムアニメーション拡張)
- **Framer Motion**
- **React CountUp**
- **Canvas Confetti**
- **Lucide React Icons**

## 📁 プロジェクト構造

```
claude-code-advanced-landing/
├── app/
│   ├── globals.css           # グローバルスタイル＋カスタムアニメーション
│   ├── layout.tsx           # ルートレイアウト
│   └── page.tsx             # メインページ（動的インポート最適化）
├── components/
│   ├── advanced/            # 高度なコンポーネント群
│   │   ├── AdvancedHeroSection.tsx     # 3Dヒーローセクション
│   │   ├── AdvancedFeaturesSection.tsx # インタラクティブ機能セクション
│   │   ├── ParticleSystem.tsx          # パーティクルシステム
│   │   ├── InteractiveCodeEditor.tsx   # コードエディタ
│   │   ├── AIAssistantChat.tsx         # AIチャットボット
│   │   └── DataVisualization.tsx       # データ可視化
│   ├── sections/            # 基本セクションコンポーネント
│   ├── Header.tsx           # ヘッダーナビゲーション
│   └── Footer.tsx           # フッター
├── package.json             # プロジェクト依存関係
├── tailwind.config.js       # Tailwind設定（カスタムアニメーション）
├── tsconfig.json           # TypeScript設定
├── next.config.js          # Next.js設定
└── README.md               # このファイル
```

## 🛠 セットアップ

1. **依存関係インストール**
   ```bash
   npm install
   ```

2. **開発サーバー起動**
   ```bash
   npm run dev
   ```

3. **ブラウザでアクセス**
   ```
   http://localhost:3000
   ```

## 🎨 カスタムアニメーション

### Tailwind CSS拡張
- `animate-aurora`: オーロラ効果
- `animate-neural-pulse`: ニューラルネットワーク脈動
- `animate-cosmic-drift`: 宇宙的浮遊
- `animate-hologram`: ホログラム効果
- `animate-glitch`: グリッチエフェクト
- `animate-morph`: 形状変化

### グラデーション
- `bg-gradient-cosmic`: 宇宙的グラデーション
- `bg-gradient-neural`: ニューラルネットワーク風
- `bg-noise`: ノイズテクスチャ

## 🚀 デプロイ

このプロジェクトはVercel、Netlify、GitHub Pagesなどの静的サイトホスティングサービスでデプロイ可能です。

```bash
npm run build
npm start
```

## 💡 開発のポイント

- **パフォーマンス最適化**: 動的インポートとSuspense境界
- **SEO対応**: Server-Side Rendering対応
- **レスポンシブ**: モバイルファーストデザイン
- **アクセシビリティ**: ARIA対応とキーボードナビゲーション

## 🔧 カスタマイズ

カスタマイズは以下のファイルで行えます：
- `tailwind.config.js`: 色、アニメーション、ブレークポイント
- `app/globals.css`: グローバルスタイルとカスタムCSS
- `components/advanced/`: 各コンポーネントの動作とデザイン

---

**革新的なWebエクスペリエンスで、Claude Codeの可能性を最大限に表現したランディングページです。**