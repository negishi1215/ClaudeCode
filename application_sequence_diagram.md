# Webアプリケーション処理シーケンス図

このファイルは、プロジェクトの3つのWebアプリケーションの処理フローをマーメイド記法で表現したシーケンス図です。

## 1. 夏休みスケジュール管理アプリ

```mermaid
sequenceDiagram
    participant U as ユーザー
    participant B as ブラウザ
    participant A as スケジュール管理アプリ
    participant LS as LocalStorage
    participant UI as UI表示層

    Note over U,UI: アプリケーション初期化フロー
    U->>B: summer_schedule.html アクセス
    B->>A: DOMContentLoaded イベント
    A->>LS: 既存スケジュールデータ読み込み
    LS-->>A: JSON形式データ返却
    A->>A: スケジュールデータ解析・ソート
    A->>UI: スケジュール一覧表示
    A->>UI: 統計情報更新（総数・今後の予定数）
    A->>UI: 今日の日付をフォームにセット

    Note over U,UI: スケジュール追加フロー
    U->>UI: 日付・時間・タイトル・カテゴリ・詳細入力
    U->>A: スケジュール追加ボタンクリック
    A->>A: 入力値バリデーション（日付・タイトル必須）
    alt バリデーション成功
        A->>A: 新スケジュールオブジェクト生成（ID: Date.now()）
        A->>A: スケジュール配列に追加・日時順ソート
        A->>LS: 更新データをJSON形式で保存
        A->>UI: スケジュール一覧再表示
        A->>UI: フォームクリア
        A->>UI: 統計情報更新
    else バリデーション失敗
        A->>UI: エラーアラート表示
    end

    Note over U,UI: スケジュール削除フロー
    U->>A: 削除ボタンクリック
    A->>UI: 削除確認ダイアログ表示
    U->>A: 削除確認
    A->>A: 該当IDのスケジュール配列から除去
    A->>LS: 更新データ保存
    A->>UI: スケジュール一覧再表示
    A->>UI: 統計情報更新
```

## 2. 株価分析アプリ

```mermaid
sequenceDiagram
    participant U as ユーザー
    participant B as ブラウザ
    participant A as 株価分析アプリ
    participant D as データ処理層
    participant C as Chart.js
    participant UI as UI表示層

    Note over U,UI: アプリケーション初期化フロー
    U->>B: stock_analyzer.html アクセス
    B->>A: window load イベント
    A->>UI: デフォルト銘柄（7203）の会社名表示
    A->>A: analyzeStock() 自動実行
    A->>D: デフォルト設定で株価分析開始

    Note over U,UI: 株価分析実行フロー
    U->>UI: 銘柄コード・期間・間隔入力
    U->>A: 分析ボタンクリック
    A->>A: 入力値バリデーション（銘柄コード必須）
    A->>UI: ローディング表示・エラー非表示・結果非表示
    
    alt バリデーション成功
        A->>D: fetchStockData() 呼び出し
        D->>D: generateMockData() でモックデータ生成
        D->>D: 期間に応じた日数計算
        D->>D: 基準価格設定・価格変動シミュレーション
        D->>D: タイムスタンプ・価格・出来高データ生成
        D-->>A: 模擬株価データ返却
        
        A->>C: displayPriceChart() でChart.js初期化
        C->>UI: 価格チャート描画
        
        A->>UI: displayPriceInfo() で価格情報表示
        A->>UI: displayStatsInfo() で統計情報表示
        A->>UI: displayTrendInfo() でトレンド分析表示
        A->>UI: displayTechnicalInfo() でテクニカル指標表示
        A->>UI: 結果セクション表示
    else バリデーション失敗
        A->>UI: エラーメッセージ表示
    end
    A->>UI: ローディング非表示

    Note over U,UI: リアルタイム会社名表示
    U->>UI: 銘柄コード入力
    UI->>A: oninput イベント
    A->>A: getCompanyName() で銘柄辞書検索
    A->>UI: 会社名表示更新
```

## 3. 出生数・待機児童数インフォグラフィック

```mermaid
sequenceDiagram
    participant U as ユーザー
    participant B as ブラウザ
    participant A as インフォグラフィック
    participant CSS as CSSレンダリング
    participant UI as UI表示層

    Note over U,UI: 静的コンテンツ表示フロー
    U->>B: birth_waiting_children_infographic.html アクセス
    B->>A: HTML解析開始
    A->>CSS: スタイルシート読み込み・適用
    CSS->>UI: レスポンシブレイアウト構築
    
    Note over UI: データ可視化要素の描画
    CSS->>UI: ヘッダー・タイトル・期間表示
    CSS->>UI: エグゼクティブサマリー・重要発見事項表示
    CSS->>UI: メイン統計カード（出生数・待機児童数）表示
    CSS->>UI: 地域別分析グリッド表示
    CSS->>UI: 政策タイムライン・ドット・矢印表示
    CSS->>UI: 国際比較カード表示
    CSS->>UI: 経済・社会要因グリッド表示
    CSS->>UI: バーチャート（出生数・待機児童数推移）表示
    CSS->>UI: 政策提言・重要洞察表示
    CSS->>UI: フッター・データ出典表示

    Note over U,UI: レスポンシブ対応
    B->>CSS: 画面サイズ変更検知
    CSS->>UI: メディアクエリに基づくレイアウト調整
    CSS->>UI: モバイル向けグリッド・タイムライン最適化
```

## 共通処理パターン分析

```mermaid
sequenceDiagram
    participant App as アプリケーション
    participant Core as 共通処理コア
    participant Storage as データ保存層
    participant View as 表示層

    Note over App,View: 共通初期化パターン
    App->>Core: 初期化処理開始
    Core->>Storage: データ読み込み（localStorage/static）
    Storage-->>Core: データ返却
    Core->>Core: データ処理・計算
    Core->>View: 初期表示更新

    Note over App,View: 共通入力処理パターン  
    App->>Core: ユーザー入力受信
    Core->>Core: バリデーション実行
    alt 検証成功
        Core->>Core: データ処理・変換
        Core->>Storage: データ保存（該当アプリのみ）
        Core->>View: 表示更新
    else 検証失敗
        Core->>View: エラー表示
    end

    Note over App,View: 共通表示更新パターン
    Core->>Core: データ計算・統計処理
    Core->>View: HTML生成・DOM操作
    Core->>View: CSS適用・アニメーション
    Core->>View: レスポンシブ調整
```

## アーキテクチャ特徴

### 設計パターン
- **単一ファイル構成**: HTML/CSS/JavaScript一体型
- **バニラJavaScript**: フレームワーク非依存
- **レスポンシブデザイン**: CSS Grid/Flexbox活用
- **日本語対応**: 専用フォントスタック使用

### データ管理
- **スケジュール管理**: localStorage永続化
- **株価分析**: メモリ内モックデータ
- **インフォグラフィック**: 静的データ埋め込み

### 処理フロー特徴
- **同期処理中心**: 軽量データのため非同期処理最小限
- **イベント駆動**: DOM操作とユーザーイベント連携
- **状態管理**: 単純なオブジェクト・配列ベース
- **エラーハンドリング**: バリデーション・try-catch活用

最終更新: 2024年12月10日