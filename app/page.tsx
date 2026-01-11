// app/page.tsx
export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div>
              <div className="eyebrow" aria-label="サービスの特長">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                リモートでも距離を感じさせない寄り添い運用
              </div>
              <h1>フルリモートで、<br/>総務と労務をまるごと伴走</h1>
              <p>日々の定型をチームで引き受ける。<br/>手順を整え、仕組みで回す。フルリモートでも運用の温度は下げない。</p>
              <div className="hero-buttons">
                <a href="#contact" className="btn-primary">無料相談を予約</a>
                <a href="#download" className="btn-secondary">資料をダウンロード</a>
              </div>
            </div>
            <div className="hero-illustration">
              <figure className="duotone" style={{ aspectRatio: '4 / 3' }}>
                <img
                  src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23999' font-family='sans-serif' font-size='20'%3Eサポート風景の写真%3C/text%3E%3C/svg%3E"
                  alt="リモートサポートの様子"
                />
              </figure>
            </div>
          </div>
        </div>
        <svg className="wave" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" className="wave-fill"/>
        </svg>
      </section>

      {/* Badges */}
      <section className="badges">
        <div className="container">
          <div className="badge-grid">
            <div className="badge">全国対応</div>
            <div className="badge">最短3営業日で開始</div>
            <div className="badge">情報セキュリティ対応</div>
            <div className="badge">月ごとに柔軟調整</div>
          </div>
        </div>
      </section>

      {/* Trust logos (仮) */}
      <section className="trust">
        <div className="container">
          <p className="trust-note">多くの中小企業・サロン運営で選ばれています</p>
          <div className="trust-logos">
            <div className="logo-box">Client A</div>
            <div className="logo-box">Client B</div>
            <div className="logo-box">Client C</div>
            <div className="logo-box">Client D</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-pill">Services</div>
          <h2 className="section-title">サービス一覧</h2>
          <div className="service-grid">
            <div className="service-card">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2"/>
                <line x1="16" y1="18" x2="32" y2="18" stroke="currentColor" strokeWidth="2"/>
                <line x1="16" y1="24" x2="32" y2="24" stroke="currentColor" strokeWidth="2"/>
                <line x1="16" y1="30" x2="28" y2="30" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <h3>総務サポート</h3>
              <p>契約管理、備品、稟議の運用をスムーズに。日常業務の効率化を実現します。</p>
            </div>
            <div className="service-card">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 40 C8 32 16 28 24 28 C32 28 40 32 40 40" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <h3>労務サポート</h3>
              <p>入退社手続き、勤怠、社保など、複雑な労務管理を確実にサポート。</p>
            </div>
            <div className="service-card">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="8" y="12" width="32" height="24" rx="4" stroke="currentColor" strokeWidth="2"/>
                <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2"/>
                <line x1="8" y1="18" x2="14" y2="18" stroke="currentColor" strokeWidth="2"/>
                <line x1="34" y1="18" x2="40" y2="18" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <h3>経理サポート</h3>
              <p>請求と支払、経費精算、月次の整理まで、経理業務を正確に処理。</p>
            </div>
            <div className="service-card">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="8" y="8" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                <rect x="26" y="8" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                <rect x="8" y="26" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                <rect x="26" y="26" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <h3>マニュアル化・DX</h3>
              <p>業務棚卸、手順書、SaaSとRPAの導入で、業務の標準化と自動化を推進。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beauty */}
      <section className="beauty">
        <div className="container">
          <div className="beauty-content">
            <div className="section-pill">For Beauty Industry</div>
            <h2>サロン運営に合わせた実務運用</h2>
            <p className="beauty-text">
              予約とシフトの調整、在庫と発注、同意書の電子化、給与計算の連動まで一連で支援。
              現場の流れに合わせて設計する。
            </p>
            <div className="beauty-features">
              <div className="beauty-feature">予約システム連携</div>
              <div className="beauty-feature">在庫管理の自動化</div>
              <div className="beauty-feature">電子同意書の導入</div>
              <div className="beauty-feature">スタッフシフト最適化</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process">
        <div className="container">
          <h2 className="section-title">進め方</h2>
          <div className="timeline">
            {[
              ['無料相談','現状の課題をヒアリングし、最適なプランをご提案'],
              ['要件設計','業務フローを分析し、カスタマイズした運用設計を作成'],
              ['2週間トライアル','実業務で効果を体感いただくトライアル期間'],
              ['本運用','トライアル結果を踏まえて、本格運用を開始'],
              ['改善サイクル','定期振り返りで継続的に最適化'],
            ].map((v,i)=>(
              <div className="timeline-item" key={i}>
                <div className="timeline-number">{i+1}</div>
                <div className="timeline-content">
                  <h3>{v[0]}</h3>
                  <p>{v[1]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="cases" id="cases">
        <div className="container">
          <h2 className="section-title">事例・声</h2>
          <div className="case-grid">
            {[
              ['事務時間を月30%削減','美容サロンA社様：スタッフが本業に集中でき、品質が向上。','代表'],
              ['勤怠のミス率が大幅に減少','IT企業B社様：給与計算の精度が上がり、満足度も改善。','人事責任者'],
              ['経理処理時間を50%短縮','小売業C社様：請求の電子化で月末の負荷を軽減。','管理部長'],
            ].map((v,i)=>(
              <div className="case-card" key={i}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="20" className="face-bg" strokeWidth="2"/>
                  <circle cx="18" cy="20" r="2" fill="currentColor"/>
                  <circle cx="30" cy="20" r="2" fill="currentColor"/>
                  <path d="M18 30 Q24 34 30 30" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
                <div className="case-text">
                  <h3>{v[0]}</h3>
                  <div className="stars" aria-label="5段階中の評価">
                    <span className="star" aria-hidden="true"></span>
                    <span className="star" aria-hidden="true"></span>
                    <span className="star" aria-hidden="true"></span>
                    <span className="star" aria-hidden="true"></span>
                    <span className="star" aria-hidden="true"></span>
                  </div>
                  <p className="reviewer">美容業界 {v[2]}</p>
                  <p>{v[1]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="container">
          <h2 className="section-title">よくある質問</h2>
          <div className="faq-list">
            <details>
              <summary>どのような企業が利用していますか？</summary>
              <p>従業員10〜200名規模の企業が中心です。美容、IT、小売など幅広く導入があります。</p>
            </details>
            <details>
              <summary>料金体系について教えてください</summary>
              <p>月額固定と時間制の2プランです。無料相談で最適な範囲を設計します。</p>
            </details>
            <details>
              <summary>セキュリティ対策はどうなっていますか？</summary>
              <p>暗号化、権限管理、監査を実施します。守秘義務契約も徹底します。</p>
            </details>
            <details>
              <summary>既存のシステムとの連携は可能ですか？</summary>
              <p>主要な会計・勤怠・給与とのAPIやCSV連携に対応します。</p>
            </details>
          </div>
        </div>
      </section>

      {/* Pricing, Company, Contact placeholders */}
      <section id="pricing" className="services">
        <div className="container">
          <div className="section-pill">Pricing</div>
          <h2 className="section-title">料金の目安</h2>
          <p style={{textAlign:'center', color:'var(--gray-700)', marginTop:8}}>
            月額固定と時間制の2プラン。詳細は無料相談で調整。
          </p>
        </div>
      </section>

      <section id="company" className="services">
        <div className="container">
          <div className="section-pill">Company</div>
          <h2 className="section-title">会社情報</h2>
          <p style={{textAlign:'center', color:'var(--gray-700)', marginTop:8}}>
            リモート運用の実績と体制を公開予定。
          </p>
        </div>
      </section>

      <section id="contact" className="cta-section">
        <div className="container">
          <h2>まずは無料相談で現状を可視化</h2>
          <a href="#" className="btn-primary">無料相談を予約</a>
        </div>
      </section>
    </main>
  );
}
