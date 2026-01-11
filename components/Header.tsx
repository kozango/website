'use client';

import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className="container">
        <div className="header-inner">
          <a href="#" className="logo" aria-label="ホームへ">RemoteSupport</a>
          <nav role="navigation" aria-label="メインナビゲーション">
            <a href="#services">サービス</a>
            <a href="#cases">導入事例</a>
            <a href="#pricing">料金</a>
            <a href="#faq">よくある質問</a>
            <a href="#company">会社情報</a>
            <a href="#contact" className="nav-cta">お問い合わせ</a>
            <ThemeToggle />
          </nav>
          <div className="header-actions">
            <ThemeToggle />
            <button
              className="hamburger"
              aria-label="メニューを開く"
              aria-expanded={open ? 'true' : 'false'}
              aria-controls="mobileNav"
              onClick={() => setOpen((v) => !v)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </div>
      <div className={`mobile-nav ${open ? 'active' : ''}`} id="mobileNav">
        <a href="#services" onClick={() => setOpen(false)}>サービス</a>
        <a href="#cases" onClick={() => setOpen(false)}>導入事例</a>
        <a href="#pricing" onClick={() => setOpen(false)}>料金</a>
        <a href="#faq" onClick={() => setOpen(false)}>よくある質問</a>
        <a href="#company" onClick={() => setOpen(false)}>会社情報</a>
        <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>お問い合わせ</a>
      </div>
    </header>
  );
}
