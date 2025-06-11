# Claude Code講座プロジェクト

このプロジェクトは、Claude Code講座のランディングページと、複数の独立したWebアプリケーションを含む包括的なWebプロジェクトです。

## 🚀 新機能: Claude Code講座ランディングページ

Next.js App Routerを使用したモダンなランディングページを追加しました。

### 技術スタック
- **フレームワーク**: Next.js 14 with App Router
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **パッケージマネージャー**: npm

### 開発・実行方法

#### 新しいNext.jsアプリケーション（推奨）
```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# ブラウザで http://localhost:3000 にアクセス

# プロダクションビルド
npm run build
npm run start

# リンター実行
npm run lint
```

#### レガシーHTMLアプリケーション
```bash
# 既存のHTMLアプリケーション用
npm run legacy-dev    # http://localhost:3000 でサーバー起動
npm run legacy-preview # http://localhost:4173 でプレビューサーバー起動

# または直接ブラウザでHTMLファイルを開く
open index.html
```

## 📁 プロジェクト構造

```
/
├── app/                     # Next.js App Router
│   ├── page.tsx            # メインランディングページ
│   ├── layout.tsx          # ルートレイアウト
│   └── globals.css         # グローバルスタイル
├── components/             # Reactコンポーネント
│   └── icons.tsx          # カスタムアイコン
├── *.html                  # レガシーWebアプリケーション
├── img_shooting/          # シューティングゲーム用画像
├── *.md                   # 分析レポート・ドキュメント
├── next.config.js         # Next.js設定
├── tailwind.config.js     # Tailwind CSS設定
└── tsconfig.json          # TypeScript設定
```

## 🎯 ランディングページの機能

### 主要セクション
1. **ヒーローセクション** - 講座の魅力的な紹介
2. **Claude Code説明** - ツールの特徴と利点
3. **カリキュラム** - 段階的な学習プログラム
4. **メリット・実績** - 受講効果と統計データ
5. **料金プラン** - 3つの選択可能なプラン
6. **FAQ** - よくある質問と回答
7. **CTA** - 申し込み・お問い合わせ

### デザイン特徴
- **レスポンシブデザイン** - モバイルファーストアプローチ
- **モダンUI** - グラデーション、カード、アニメーション
- **アクセシビリティ** - セマンティックHTML、適切なカラーコントラスト
- **日本語最適化** - 日本語フォントスタック、文化的配慮

## 📱 レガシーWebアプリケーション

### ゲームアプリケーション
- **テニスゲーム** (`tennis_game.html`) - AI対戦、マルチボール
- **シューティングゲーム** (`shooting_game.html`) - 画像ベース、Canvas描画
- **ボンバーゲーム** (`bomber_game.html`) - 爆弾設置アクション
- **オセロゲーム** (`othello_game.html`) - クラシックなボードゲーム

### ユーティリティアプリ
- **夏休みスケジュール管理** (`summer_schedule.html`) - localStorage永続化
- **株価分析アプリ** (`stock_analyzer.html`) - Chart.js使用

### インフォグラフィック
- **出生数・待機児童数分析** (`birth_waiting_children_infographic.html`) - データ可視化

## 🛠 開発ガイド

### コーディング規約
- **TypeScript**: 厳密な型定義
- **ESLint**: Next.js標準設定
- **Tailwind CSS**: ユーティリティファーストCSS
- **Prettier**: 自動コード整形（推奨）

### 新しい機能の追加
1. `app/`ディレクトリ内に新しいページを作成
2. `components/`ディレクトリに再利用可能なコンポーネントを追加
3. Tailwind CSSクラスを使用したスタイリング
4. TypeScriptで型安全性を確保

### レガシーアプリケーションの保守
- 既存のHTMLファイルは単一ファイル構成を維持
- JavaScript ES6+構文を使用
- レスポンシブデザインの原則を維持

## 🚀 デプロイメント

### Vercel（推奨）
```bash
# Vercel CLIでデプロイ
npx vercel

# または GitHubとの連携でCI/CD
```

### 従来の静的ホスティング
- 既存のHTMLファイルは任意の静的ホスティングサービスで利用可能
- CDNやGitHub Pagesでも動作

## 📄 ライセンス

MIT License

## 🤝 コントリビューション

プルリクエストや課題報告を歓迎します。開発ガイドラインに従ってください。

---

**Claude Code講座で、AIを活用した次世代のプログラミング学習を体験しましょう！**