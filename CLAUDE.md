# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Essential Commands

### Next.js Development (Main Project)
```bash
npm install          # Install dependencies
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Legacy HTML Development  
```bash
npm run legacy-dev   # Python HTTP server for HTML files (http://localhost:3000)
npm run legacy-preview # Python HTTP server for preview (http://localhost:4173)
```

### Advanced Landing Page (Separate Project)
```bash
cd claude-code-advanced-landing
npm install && npm run dev    # Independent Next.js project
```

## Project Architecture

This is a hybrid repository containing both modern Next.js applications and legacy HTML applications.

### Core Architecture Patterns

1. **Dual Development Approach**: 
   - **Next.js/React** (modern): `/app`, `/components` - TypeScript, Tailwind CSS, App Router
   - **Legacy HTML** (standalone): `*.html` files - vanilla JS, embedded CSS, localStorage

2. **Three Independent Projects**:
   - **Main Project** (root): Next.js landing page with advanced UI components
   - **Advanced Landing Page** (`claude-code-advanced-landing/`): Experimental Next.js project with 3D effects
   - **Legacy Applications** (`*.html`): Standalone web apps and games

3. **Shared Design System**:
   - Tailwind CSS with custom animations (aurora, neural-pulse, cosmic-drift)
   - Japanese font optimization (`Hiragino Sans`, `Yu Gothic`, `Meiryo`)
   - Consistent color palette: blue gradients (primary), pastel colors (elegant design)

### Component Architecture (Next.js)
- **Layered Structure**: `ui/` (basic) → `sections/` (page-level) → `advanced/` (complex features)
- **Three.js Integration**: Dynamic imports with SSR safety (`ssr: false`)
- **State Management**: Zustand for complex state, React hooks for local state

### プロジェクト構成
- **メインプロジェクト**: 高度なNext.js App Routerアプリケーション（ルートディレクトリ）
- **Advanced Landing Page**: 革新的なUIライブラリを使用した最先端のランディングページ（`claude-code-advanced-landing/`フォルダ）
- **Claude Code Course HTML**: エレガントなデザインに最適化された単一ファイルランディングページ（`claude-code-course.html`）
- **レガシーアプリケーション**: 単一ファイルのスタンドアロンHTMLアプリケーション群

## アーキテクチャ

### プロジェクト構造
```
/
├── app/                     # Next.js App Router（メインプロジェクト）
│   ├── globals.css         # グローバルスタイル（Tailwind CSS）
│   ├── layout.tsx          # ルートレイアウト
│   └── page.tsx            # ホームページ
├── claude-code-advanced-landing/  # 🚀 最先端ランディングページ（独立プロジェクト）
│   ├── app/                # Next.js App Router
│   ├── components/         # 革新的なReactコンポーネント
│   │   ├── advanced/       # 3D/AI/インタラクティブコンポーネント
│   │   ├── sections/       # ページセクション
│   │   └── ui/            # 基本UIコンポーネント
│   ├── package.json        # 独立した依存関係
│   ├── tailwind.config.js  # カスタムアニメーション設定
│   └── README.md          # 詳細なプロジェクト説明
├── components/             # Reactコンポーネント（メインプロジェクト）
│   ├── Header.tsx          # ヘッダーコンポーネント
│   ├── Footer.tsx          # フッターコンポーネント
│   ├── advanced/           # 高度なUIコンポーネント
│   │   ├── AdvancedHeroSection.tsx      # ヒーローセクション
│   │   ├── AdvancedFeaturesSection.tsx  # 機能セクション
│   │   ├── AIAssistantChat.tsx          # AIチャット機能
│   │   ├── InteractiveCodeEditor.tsx    # インタラクティブエディタ
│   │   ├── ParticleSystem.tsx           # パーティクルシステム
│   │   └── DataVisualization.tsx        # データ可視化
│   ├── sections/           # ページセクション
│   │   ├── CurriculumSection.tsx        # カリキュラム
│   │   ├── PricingSection.tsx           # 料金プラン
│   │   ├── FAQSection.tsx               # FAQ
│   │   └── CTASection.tsx               # Call to Action
│   ├── ui/                 # 基本UIコンポーネント
│   │   ├── Button.tsx      # ボタンコンポーネント
│   │   ├── Card.tsx        # カードコンポーネント
│   │   └── Container.tsx   # コンテナコンポーネント
│   └── icons.tsx           # アイコンコンポーネント
├── lib/                    # ユーティリティライブラリ
│   └── utils.ts            # 共通ユーティリティ関数
├── claude-code-course.html # エレガントデザインのメインランディングページ
├── *.html                  # レガシーHTMLアプリケーション
├── img_shooting/           # シューティングゲーム用画像アセット
├── *.md                    # 分析レポート・ドキュメント
├── package.json            # Node.js依存関係
├── tailwind.config.js      # Tailwind CSS設定
├── tsconfig.json           # TypeScript設定
├── next.config.js          # Next.js設定
├── postcss.config.js       # PostCSS設定
└── vercel.json             # Vercelデプロイ設定
```

### メインプロジェクト技術スタック
- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **UIライブラリ**: React 18
- **アニメーション**: Framer Motion
- **3D/パーティクル**: @react-three/fiber, @react-three/drei, three.js
- **状態管理**: Zustand
- **ユーティリティ**: clsx, tailwind-merge
- **アイコン**: Lucide React
- **エフェクト**: canvas-confetti, react-syntax-highlighter, react-countup
- **デプロイ**: Vercel

### Advanced Landing Page技術スタック
claude-code-advanced-landing/フォルダには最先端技術を使用したランディングページが含まれています：
- **革新的UI**: 3Dパーティクルシステム、インタラクティブコードエディタ、AIチャットデモ
- **高度なアニメーション**: カスタムTailwindアニメーション（aurora, neural-pulse, cosmic-drift, hologram, glitch, morph）
- **パフォーマンス最適化**: 動的インポート、Suspense境界、コード分割
- **モダンエフェクト**: ガラスモーフィズム、グラデーションアニメーション、マウス追跡ホバー

### レガシーアプリケーション技術スタック
- **フロントエンド**: バニラHTML/CSS/JavaScript
- **依存関係**: Chart.js（株価分析アプリのみ）
- **データストレージ**: localStorage
- **スタイリング**: CSS Grid、レスポンシブデザイン

### アプリケーション構成

## Claude Code講座ランディングページ

### メインプロジェクト（Next.js/React）
#### コンポーネント構成
- **AdvancedHeroSection**: 3Dパーティクル、インタラクティブコードエディタ、AIチャットデモ
- **AdvancedFeaturesSection**: AI駆動学習機能の可視化、データビジュアライゼーション
- **CurriculumSection**: 学習カリキュラムの詳細表示
- **PricingSection**: 料金プランの比較表示
- **FAQSection**: よくある質問
- **CTASection**: コール・トゥ・アクション
- **Header/Footer**: 共通UI要素

#### 高度なUI機能
- **パーティクルシステム**: Three.jsベースの3Dエフェクト
- **インタラクティブエディタ**: リアルタイムコードハイライト
- **AIチャット機能**: 模擬Claude対話システム
- **アニメーション**: Framer Motionによる高度なトランジション
- **レスポンシブデザイン**: モバイルファーストアプローチ

### Claude Code Course HTML（単一ファイル版）
エレガントで女性ウケするデザインに最適化されたスタンドアロンHTMLランディングページ。

#### デザイン特徴
- **エレガントカラーパレット**: パステル調の優しい色合い（ピンク、ラベンダー、ソフトブルー）
- **控えめアニメーション**: 過度な動きを排除した上品なエフェクト
- **背景システム**: 静的グラデーション背景（動的パーティクル無効化）
- **優しいインタラクション**: gentlePulse、subtleFloat、softGlowアニメーション

#### 技術実装
- **Canvas無効化**: 動的背景レンダリングを無効化してパフォーマンス向上
- **CSS変数設計**: エレガントなカラーシステム
- **レスポンシブ統計表示**: 4カラムグリッド（desktop）→ 2×2（tablet）→ 1列（mobile）
- **Web Audio API**: 控えめな音響フィードバック
- **Intersection Observer**: スクロール連動アニメーション

## レガシーHTMLアプリケーション群

#### 1. 夏休みスケジュール管理 (`summer_schedule.html`)
- **機能**: スケジュールCRUD操作、カテゴリベース整理、統計表示
- **データ管理**: localStorageによる永続化
- **カテゴリ**: 勉強、遊び、旅行、趣味、家族

#### 2. 株価分析アプリ (`stock_analyzer.html`)
- **機能**: 株価データの可視化・分析
- **UI特徴**: グラデーション背景、モダンなカードレイアウト

#### 3. 出生数・待機児童数分析インフォグラフィック (`birth_waiting_children_infographic.html`)
- **機能**: 政策データの視覚化、国際比較、タイムライン表示
- **特徴**: 詳細なCSS視覚化、レスポンシブ対応、統計バッジシステム

#### 4. ゲームアプリケーション群

##### テニスゲーム (`tennis_game.html`)
- **機能**: プレイヤー vs AI対戦、マルチボールシステム
- **ゲーム特徴**: 10秒ごとにボール追加、複数ボール同時処理、AI予測システム
- **操作**: W/S または矢印キーでパドル操作、スペースキーでゲーム開始

##### シューティングゲーム (`shooting_game.html`)
- **機能**: 敵機撃墜ゲーム、画像ベースキャラクター、スコアシステム
- **ゲーム特徴**: Canvas描画、衝突判定、爆発エフェクト、残像効果
- **操作**: 矢印キーで移動、スペースキーで弾丸発射
- **画像アセット**: `img_shooting/` フォルダ内の画像を使用（img00.png：プレイヤー、img01.png/img02.png：敵）

##### ボンバーゲーム (`bomber_game.html`)
- **機能**: 爆弾設置アクションゲーム
- **操作**: 爆弾を設置して敵を倒すゲームプレイ

##### オセロゲーム (`othello_game.html`)
- **機能**: クラシックなオセロゲーム
- **対戦**: コンピューター対戦機能

### 分析レポート

#### 出生数・待機児童数関係性レポート (`birth_and_waiting_children_report.md`)
- **内容**: 2004-2024年の包括的政策分析、国際比較、地域格差分析
- **データソース**: 厚生労働省、こども家庭庁、内閣府等の公式統計

## 開発パターン

## Next.jsプロジェクト開発時

### コンポーネント開発
1. **TypeScript優先**: 全てのコンポーネントはTypeScriptで記述
2. **Tailwind CSS**: スタイリングにはTailwind CSSのユーティリティクラスを使用
3. **コンポーネント分離**: UI、セクション、高度な機能ごとにディレクトリを分離
4. **Forwardref使用**: 再利用可能なコンポーネントはReact.forwardRefを活用
5. **动的インポート**: パフォーマンス最適化のためdynamic importを使用

### アニメーション・エフェクト
- **Framer Motion**: ページトランジション、要素アニメーション
- **Three.js**: 3Dエフェクト、パーティクルシステム
- **CSS-in-JS**: Tailwindのカスタムアニメーション定義
- **Intersection Observer**: スクロールベースアニメーション

### スタイリング設計
- **デザインシステム**: colors、spacing、typography等の一貫性
- **レスポンシブ**: Mobile-first approach
- **ダークモード**: CSS variables対応
- **グラデーション**: 独自のグラデーション背景定義

### パフォーマンス最適化
- **コード分割**: 重いコンポーネントの動的ローディング
- **画像最適化**: Next.js Image optimization
- **Bundle分析**: 依存関係の最適化
- **SSR/SSG**: 適切なレンダリング戦略

## レガシーHTML開発時

### 新しいWebアプリケーション作成時
1. **単一ファイル形式**: すべてのCSS・JavaScriptを埋め込み
2. **日本語対応**: フォントスタック `'Hiragino Sans', 'Hiragino Kaku Gothic Pro', 'Yu Gothic', 'Meiryo'`
3. **レスポンシブデザイン**: モバイルファーストアプローチ
4. **視覚的一貫性**: グラデーション背景、カードレイアウト、影効果
5. **index.htmlへの登録**: 新しいアプリケーションを作成したら、必ず `index.html` のアプリケーション一覧に項目を追加する

### ゲーム開発時
- **Canvas使用**: シューティングゲームなどではHTML5 Canvasを使用した描画
- **画像アセット管理**: 画像ファイルは専用フォルダに整理（例：`img_shooting/`）
- **入力処理**: キーボードイベントによるリアルタイム操作
- **ゲームループ**: requestAnimationFrameを使用した滑らかなアニメーション
- **衝突判定**: 矩形ベースの衝突検出アルゴリズム

### インフォグラフィック開発時
- **セクション構造**: ヘッダー、メイン統計、詳細分析、国際比較、政策提言
- **視覚化要素**: バーチャート、タイムライン、統計バッジ、地域比較表
- **アクセシビリティ**: 色分けによる情報整理、明確な階層構造

### データ分析レポート作成時
- **構造**: エグゼクティブサマリー、詳細分析、政策的含意、国際比較、結論
- **データ出典**: 信頼できる政府統計機関のデータを必須記載
- **分析期間**: 明確な対象期間設定と最終更新日記載

## 実行方法

## Next.jsプロジェクト開発

### メインプロジェクト（ルートディレクトリ）
```bash
# 依存関係のインストール
npm install

# 開発サーバー起動（http://localhost:3000）
npm run dev

# 本番ビルド
npm run build

# 本番サーバー起動
npm run start

# リンター実行
npm run lint
```

### Advanced Landing Page（claude-code-advanced-landing/フォルダ）
```bash
# フォルダに移動
cd claude-code-advanced-landing

# 依存関係のインストール
npm install

# 開発サーバー起動（http://localhost:3000）
npm run dev

# 本番ビルド
npm run build

# 本番サーバー起動
npm run start

# リンター実行
npm run lint
```

### 必要な環境
- **Node.js**: >= 18.0.0
- **npm**: 最新版推奨
- **ブラウザ**: モダンブラウザ（Chrome, Firefox, Safari, Edge）

## レガシーHTMLアプリケーション

すべてのHTMLアプリケーションは、Webブラウザで直接開くだけで動作します。ビルドプロセスやサーバーは不要です。

### 開発・テスト時の実行コマンド
```bash
# レガシーHTMLアプリケーション開発用サーバー
npm run legacy-dev        # Python HTTP server (http://localhost:3000)
npm run legacy-preview    # Python HTTP server (http://localhost:4173)

# HTMLファイルをブラウザで直接開く
open index.html                    # アプリケーション一覧を表示
open claude-code-course.html       # メインランディングページ（エレガントデザイン）
open summer_schedule.html          # macOS
open stock_analyzer.html           # macOS
open birth_waiting_children_infographic.html  # macOS
open tennis_game.html              # macOS
open shooting_game.html            # macOS
open bomber_game.html              # macOS
open othello_game.html             # macOS
```

## デバッグ・テスト方法

### Next.jsプロジェクトのデバッグ
- **React Developer Tools**: コンポーネント階層の確認
- **Next.js DevTools**: パフォーマンス分析
- **TypeScript**: 型チェックによるエラー早期発見
- **Browser DevTools**: Network、Performance、Lighthouse分析
- **ESLint**: コード品質チェック

### レガシーHTMLアプリケーションのデバッグ
- ブラウザの開発者ツール（F12）でConsoleタブを使用
- localStorageの確認: `localStorage.getItem('schedules')`
- エラーログの確認: Console内でJavaScriptエラーを監視

### 動作確認・テスト手順

#### Next.jsプロジェクト
1. **ビルド確認**: `npm run build` でエラーなしでビルド完了
2. **レスポンシブ確認**: モバイル、タブレット、デスクトップでの表示確認
3. **アニメーション確認**: Framer Motion、Three.jsエフェクトの動作確認
4. **パフォーマンス確認**: Lighthouse scoreの確認（特にCLS、LCP）
5. **アクセシビリティ確認**: キーボードナビゲーション、スクリーンリーダー対応

#### レガシーHTMLアプリケーション
1. **スケジュール管理アプリ**: 
   - 新規スケジュール追加→保存→リロード後の永続化確認
   - 各カテゴリでの追加・削除・統計更新確認
2. **株価分析アプリ**:
   - 各銘柄コードでの分析実行→チャート表示確認
   - 期間・間隔設定の動作確認
3. **インフォグラフィック**:
   - 各ブラウザ・デバイスサイズでのレスポンシブ表示確認
   - 印刷時のレイアウト確認
4. **ゲームアプリケーション**:
   - **テニスゲーム**: キーボード操作（W/S、矢印キー）、マルチボール機能、AI対戦
   - **シューティングゲーム**: 矢印キー移動、スペースキー射撃、画像読み込み、衝突判定
   - **ボンバーゲーム**: ゲームプレイ動作確認
   - **オセロゲーム**: コンピューター対戦機能確認

## 開発時の注意点

### Next.jsプロジェクト開発ガイドライン

#### コードスタイル
- **TypeScript**: 厳格な型定義、interface活用
- **React**: 関数コンポーネント、Hooks使用
- **Tailwind CSS**: ユーティリティクラス、カスタムコンポーネント設計
- **ESLint**: Next.js推奨設定に準拠

#### パフォーマンス考慮事項
- **Code Splitting**: 動的インポート活用
- **Image Optimization**: next/image使用
- **Bundle Analysis**: @next/bundle-analyzer使用
- **Core Web Vitals**: LCP、FID、CLS最適化

#### アクセシビリティ
- **セマンティックHTML**: 適切なHTML要素使用
- **ARIA**: ラベル、ロール設定
- **キーボード操作**: フォーカス管理
- **カラーコントラスト**: WCAG AA準拠

### レガシーHTML開発ガイドライン

#### コードスタイル
- **JavaScript**: ES6+構文を使用、関数型プログラミングパターンを採用
- **CSS**: CSS Grid、Flexbox、CSS変数を積極活用
- **HTML**: セマンティックHTML5要素を使用、アクセシビリティ対応

#### データ管理パターン
- **localStorage**: JSONシリアル化でオブジェクト保存
- **状態管理**: 単一の状態オブジェクトによる管理
- **イベント処理**: delegationパターンを使用してメモリ効率化

#### UI/UXガイドライン
- **カラーパレット**: 
  - エレガントデザイン（claude-code-course.html）: パステル調の優しい色合い
  - レガシーアプリ: プライマリ色として青系グラデーション統一
- **タイポグラフィ**: 日本語可読性を重視したフォント選択
- **インタラクション**: 
  - エレガントデザイン: 控えめで上品なアニメーション
  - レガシーアプリ: ホバー効果、アニメーション、フィードバック重視
- **アニメーション設計**:
  - gentlePulse: 優しい拡縮エフェクト
  - subtleFloat: 微妙な浮遊動作
  - softGlow: 柔らかいグローエフェクト
  - 回転・激しい動きは避ける（女性ウケ重視）

## アプリケーション処理フロー

各アプリケーションの詳細な処理シーケンスについては、@application_sequence_diagram.md を参照してください。

### 処理フロー概要
- **初期化パターン**: localStorage読み込み → データ処理 → UI表示
- **CRUD操作**: バリデーション → データ更新 → 永続化 → UI再描画
- **可視化処理**: データ変換 → Chart.js/CSS描画 → レスポンシブ調整
- **エラーハンドリング**: 入力検証 → ユーザーフィードバック → 状態復旧

各アプリケーション固有の処理詳細、共通パターン、アーキテクチャ特徴は@application_sequence_diagram.mdで包括的に説明されています。

## デプロイメント

### Next.jsプロジェクトのデプロイ（推奨）

#### Vercel（推奨プラットフォーム）
```bash
# Vercel CLIを使用したデプロイ
npm install -g vercel
vercel

# または GitHub連携での自動デプロイ
# 1. Vercelダッシュボードでリポジトリ連携
# 2. Framework Preset: Next.js
# 3. 自動ビルド・デプロイ開始
```

#### デプロイ設定
- **next.config.js**: Next.js設定、画像最適化、出力設定
- **package.json**: ビルドコマンド、依存関係
- **tsconfig.json**: TypeScript設定
- **tailwind.config.js**: スタイル設定

#### 本番環境の特徴
- **Edge Runtime**: グローバルCDN配信
- **Automatic HTTPS**: SSL証明書自動設定
- **Image Optimization**: 自動画像最適化
- **API Routes**: サーバーレス関数
- **Analytics**: Core Web Vitals監視

### レガシーHTMLアプリケーションのデプロイ

#### 静的サイトデプロイ設定
プロジェクトは静的サイトデプロイにも対応しています：

- **vercel.json**: 静的サイト用設定、ルーティング、キャッシュ設定
- レガシーHTMLファイルの直接アクセス対応

#### デプロイ手順
1. GitHubリポジトリにpush
2. Vercelでリポジトリ連携（Framework Preset: Other）
3. ビルド設定不要で自動デプロイ開始

#### 本番環境の特徴
- 静的ファイル配信のため高速レスポンス
- ファイル別キャッシュ設定（HTML/CSS/JS: 1時間、画像: 1年）
- 全HTMLファイルへの直接アクセス対応

### 環境変数・設定

#### 本番環境での注意点
- **Node.js version**: >=18.0.0 必須
- **TypeScript**: 厳格モードでビルド
- **ESLint**: エラーなしでのビルド必須
- **Bundle Size**: パフォーマンス監視

#### CI/CD設定
- **GitHub Actions**: 自動テスト、ビルド確認
- **Vercel Preview**: プルリクエストプレビュー
- **Lighthouse CI**: パフォーマンス監視

## 設定ファイル詳細

### Tailwind CSS設定 (`tailwind.config.js`)
プロジェクトには高度なTailwind CSS設定が含まれています：

#### カスタムカラーパレット
- **Primary**: 青系グラデーション（50-950）
- **Secondary**: オレンジ系グラデーション
- **Accent**: 紫系グラデーション
- **Neutral**: グレースケール

#### カスタムアニメーション
- **Framer Motion連携**: fade-in, slide-up, scale-in
- **3Dエフェクト**: aurora, neural-pulse, cosmic-drift
- **インタラクティブ**: hologram, glitch, morph
- **パーティクル**: particle-float, matrix-rain

#### 日本語フォント対応
- **フォントスタック**: Inter + 日本語フォント
- **ヒラギノ系**: 'Hiragino Sans', 'Hiragino Kaku Gothic Pro'
- **Yu Gothic**: 'Yu Gothic', 'Meiryo'

### TypeScript設定 (`tsconfig.json`)
- **strict mode**: 厳格な型チェック
- **Path mapping**: `@/*` エイリアス設定
- **Next.js plugin**: App Router対応

### Next.js設定 (`next.config.js`)
- **画像最適化**: domains設定
- **standalone出力**: Docker対応
- **パフォーマンス最適化**: バンドルサイズ最適化

## プロジェクト全体の考慮事項

### 互換性とマイグレーション
- **段階的移行**: レガシーHTMLからNext.jsへの段階的移行可能
- **共存**: 両方のアプローチが同一リポジトリで共存
- **デプロイ**: 単一のVercelプロジェクトで両方をデプロイ可能
- **Advanced Landing Page**: 独立したプロジェクトとして個別にデプロイ可能

### 今後の発展
- **コンポーネント化**: レガシーHTMLの機能をReactコンポーネント化
- **API統合**: Next.js API Routesでバックエンド機能追加
- **PWA対応**: Progressive Web App化
- **国際化**: i18n対応でマルチ言語サポート
- **Advanced技術の活用**: claude-code-advanced-landingの革新的技術をメインプロジェクトに統合
- **デザイン統一**: claude-code-course.htmlのエレガントデザインパターンを他ページに適用

## 重要な開発ノート

### Advanced Landing Pageの活用
`claude-code-advanced-landing/`フォルダには、最先端技術を駆使した独立したランディングページが含まれています。このプロジェクトは：
- **技術検証**: 新しいUI/UXパターンの実験場
- **モジュール再利用**: 高度なコンポーネントをメインプロジェクトに移植可能
- **独立デプロイ**: 完全に独立したプロジェクトとして運用可能

### Three.js使用時の注意点
Three.jsコンポーネント使用時は依存関係の競合に注意してください：
- `@react-three/drei`のバージョン互換性確認
- SSR（サーバーサイドレンダリング）では`dynamic import`と`ssr: false`を使用
- パフォーマンス最適化のため、必要に応じてCSS-basedのfallbackを用意

### エレガントデザイン実装ガイドライン
claude-code-course.htmlで採用されているエレガントデザインパターン：

#### カラーシステム
```css
--neural-primary: #f8b5d1;    /* ソフトピンク */
--neural-secondary: #d1a3e4;  /* ラベンダー */
--quantum-cyan: #a8dadc;      /* ソフトブルー */
--quantum-purple: #c8a2c8;    /* ライトパープル */
--quantum-pink: #f1c0e8;      /* パステルピンク */
```

#### アニメーション原則
- 回転アニメーションは避ける
- 拡縮は1.02倍程度の微妙な変化
- アニメーション速度は3-4秒でゆっくりと
- 透明度変化は0.8-1.0の範囲

#### パフォーマンス最適化
- Canvas描画システムは無効化
- 動的パーティクル生成を停止
- CSS-onlyアニメーションを優先

## Development Workflow

### For Next.js Development
1. **Always run `npm run build` before committing** - ensures TypeScript compilation and production readiness
2. **Component Development Pattern**: Create in `components/ui/` → move to `components/sections/` → advanced features in `components/advanced/`
3. **Three.js Components**: Use dynamic imports with `ssr: false` to prevent SSR issues
4. **Performance**: Use `next/image` for optimization, code splitting for heavy components

### For Legacy HTML Development  
1. **Single-file architecture**: All CSS/JS embedded in HTML files
2. **When creating new HTML apps**: Add entry to `index.html` application list
3. **Data persistence**: Use localStorage with JSON serialization pattern
4. **Asset organization**: Images in dedicated folders (e.g., `img_shooting/`)

### Common Patterns
- **Japanese Typography**: Use established font stack for consistent rendering
- **Responsive Design**: Mobile-first approach with CSS Grid/Flexbox
- **Animation Design**: Gentle, elegant animations (avoid rotation for elegant designs)
- **Color System**: Maintain consistency between Next.js (Tailwind) and HTML (CSS variables)

このCLAUDE.mdファイルは、プロジェクトの全体像を把握し、効率的な開発・保守を行うためのガイドラインです。新しい機能追加や変更時は、このガイドラインに従って一貫性を保ってください。