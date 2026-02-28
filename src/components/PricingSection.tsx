export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="flex w-full flex-col items-center gap-[48px] px-6 md:px-16 py-[80px]"
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-[12px]">
        <span className="text-[12px] font-semibold tracking-[2px] text-[var(--primary)]">
          PRICING
        </span>
        <h2 className="text-center text-[28px] md:text-[40px] font-bold tracking-[-1px] text-[var(--bg-dark)]">
          簡單透明的方案價格
        </h2>
        <p className="text-center text-[16px] text-[var(--text-muted)]">
          所有方案皆含 14 天免費試用，不需綁卡
        </p>
      </div>

      {/* Tiers */}
      <div className="flex w-full gap-[24px] overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        {/* Tier 1 - Starter */}
        <div className="flex min-w-[280px] shrink-0 snap-center flex-col gap-[24px] rounded-[20px] border border-[var(--border-light)] bg-[var(--white)] p-[32px] md:min-w-0 md:shrink">
          <span className="text-[18px] font-semibold text-[var(--bg-dark)]">入門方案</span>
          <div className="flex items-end gap-[4px]">
            <span className="text-[28px] md:text-[36px] font-extrabold tracking-[-1px] text-[var(--bg-dark)]">
              NT$ 299
            </span>
            <span className="text-[16px] text-[var(--text-muted)]">/月</span>
          </div>
          <span className="text-[14px] text-[var(--text-muted)]">適合剛起步的個人工作者</span>
          <div className="h-[1px] w-full bg-[var(--border-light)]" />
          <div className="flex flex-col gap-[12px]">
            <span className="text-[14px] text-[#555555]">✓  每月 50 筆預約</span>
            <span className="text-[14px] text-[#555555]">✓  基本預約頁面</span>
            <span className="text-[14px] text-[#555555]">✓  LINE 通知提醒</span>
            <span className="text-[14px] text-[#BBBBBB]">✗  AI 自動回覆</span>
            <span className="text-[14px] text-[#BBBBBB]">✗  訂金收取</span>
          </div>
          <button className="w-full rounded-full border-[1.5px] border-[var(--primary)] py-[16px] text-[15px] font-semibold text-[var(--primary)]">
            免費開始
          </button>
        </div>

        {/* Tier 2 - Pro (Featured) */}
        <div className="flex min-w-[280px] shrink-0 snap-center flex-col gap-[24px] rounded-[20px] border-2 border-[var(--primary)] bg-[var(--bg-dark)] p-[32px] md:min-w-0 md:shrink">
          <div className="flex items-center justify-center self-start rounded-full bg-[var(--primary)] px-[16px] py-[6px]">
            <span className="text-[12px] font-semibold text-white">最受歡迎</span>
          </div>
          <span className="text-[18px] font-semibold text-[#F5F0ED]">專業方案</span>
          <div className="flex items-end gap-[4px]">
            <span className="text-[28px] md:text-[36px] font-extrabold tracking-[-1px] text-[#F5F0ED]">
              NT$ 599
            </span>
            <span className="text-[16px] text-[#8A8480]">/月</span>
          </div>
          <span className="text-[14px] text-[#8A8480]">適合穩定接客的專業美業人</span>
          <div className="h-[1px] w-full bg-[#333333]" />
          <div className="flex flex-col gap-[12px]">
            <span className="text-[14px] text-[#CCCCCC]">✓  無限預約</span>
            <span className="text-[14px] text-[#CCCCCC]">✓  AI 自動回覆 + 確認</span>
            <span className="text-[14px] text-[#CCCCCC]">✓  訂金收取功能</span>
            <span className="text-[14px] text-[#CCCCCC]">✓  智能排班系統</span>
            <span className="text-[14px] text-[#CCCCCC]">✓  數據儀表板</span>
          </div>
          <button className="w-full rounded-full bg-[var(--primary)] py-[16px] text-[15px] font-semibold text-white">
            免費試用 14 天
          </button>
        </div>

        {/* Tier 3 - Team */}
        <div className="flex min-w-[280px] shrink-0 snap-center flex-col gap-[24px] rounded-[20px] border border-[var(--border-light)] bg-[var(--white)] p-[32px] md:min-w-0 md:shrink">
          <span className="text-[18px] font-semibold text-[var(--bg-dark)]">多人店方案</span>
          <div className="flex items-end gap-[4px]">
            <span className="text-[28px] md:text-[36px] font-extrabold tracking-[-1px] text-[var(--bg-dark)]">
              NT$ 999
            </span>
            <span className="text-[16px] text-[var(--text-muted)]">/月</span>
          </div>
          <span className="text-[14px] text-[var(--text-muted)]">
            適合多位設計師的工作室或店面
          </span>
          <div className="h-[1px] w-full bg-[var(--border-light)]" />
          <div className="flex flex-col gap-[12px]">
            <span className="text-[14px] text-[#555555]">✓  專業方案所有功能</span>
            <span className="text-[14px] text-[#555555]">✓  最多 10 位設計師帳號</span>
            <span className="text-[14px] text-[#555555]">✓  團隊排班協作</span>
            <span className="text-[14px] text-[#555555]">✓  進階數據分析</span>
            <span className="text-[14px] text-[#555555]">✓  優先客服支援</span>
          </div>
          <button className="w-full rounded-full border-[1.5px] border-[var(--primary)] py-[16px] text-[15px] font-semibold text-[var(--primary)]">
            聯絡我們
          </button>
        </div>
      </div>
    </section>
  );
}
