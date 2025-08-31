# Remote Support Website (Next.js)

フルリモート総務・労務サポートのサイト最小構成です。Next.js (App Router, TypeScript) を採用。

## 開発

```bash
npm install
npm run dev
# http://localhost:3000
```

## 構成
- `app/layout.tsx` … フォント/メタデータ/ヘッダー
- `components/Header.tsx` … ハンバーガーメニュー付きナビ
- `app/page.tsx` … トップページ（Hero〜FAQ）
- `app/globals.css` … 全スタイル（<style> 内を移植＋補助）

## ビルド
```bash
npm run build
npm start
```
