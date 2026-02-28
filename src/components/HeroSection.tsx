export default function HeroSection() {
  return (
    <section className="flex w-full flex-col items-center gap-[48px] bg-[var(--bg-dark)] px-[64px] pb-[80px] pt-[120px]">
      <div className="flex w-full flex-col items-center gap-[32px]">
        {/* Badge */}
        <div className="flex items-center gap-[8px] rounded-full bg-[#C17F6B18] px-[16px] py-[8px]">
          <i className="icon-sparkles" style={{ fontSize: 16, color: "var(--primary)" }} />
          <span className="text-[13px] font-medium text-[var(--primary)]">
            LINE AI 預約 × 記帳系統
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-center text-[64px] font-extrabold leading-[1.1] tracking-[-2px] text-[#F5F0ED]">
          你的 LINE，從今天開始
          <br />
          自動接單
        </h1>

        {/* Subline */}
        <p className="text-center text-[18px] leading-[1.7] text-[#8A8480]">
          客人在 LINE 傳訊息，AI 自動回覆、
          <br />
          確認預約、收訂金、發提醒、記帳。
          <br />
          你只要準時開工就好。
        </p>

        {/* CTA Row */}
        <div className="flex items-center justify-center gap-[16px]">
          <a
            href="#cta"
            className="flex items-center gap-[10px] rounded-full bg-[var(--primary)] px-[36px] py-[18px]"
          >
            <span className="text-[16px] font-semibold text-[var(--white)]">
              免費試用 14 天
            </span>
            <i className="icon-arrow-right" style={{ fontSize: 18, color: "var(--white)" }} />
          </a>
          <a
            href="#demo"
            className="flex items-center rounded-full border-[1.5px] border-[rgba(255,255,255,0.25)] px-[36px] py-[18px]"
          >
            <span className="text-[16px] font-medium text-[#F5F0ED]">觀看 Demo</span>
          </a>
        </div>
      </div>
    </section>
  );
}
