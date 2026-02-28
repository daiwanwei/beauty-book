export default function FinalCTASection() {
  return (
    <section
      id="cta"
      className="flex w-full flex-col items-center gap-[32px] bg-[var(--primary)] px-[64px] py-[100px]"
    >
      <h2 className="text-center text-[48px] font-bold tracking-[-1px] text-[var(--white)]">
        準備好讓預約自動化了嗎？
      </h2>
      <p className="text-center text-[18px] leading-[1.6] text-[#FFFFFFCC]">
        14 天免費試用，不需綁卡。
        <br />
        3 分鐘上線，立刻開始省時間。
      </p>
      <a
        href="#"
        className="flex items-center gap-[10px] rounded-full bg-[var(--white)] px-[40px] py-[18px]"
      >
        <span className="text-[16px] font-semibold text-[var(--primary)]">免費試用 14 天</span>
        <i className="icon-arrow-right" style={{ fontSize: 18, color: "var(--primary)" }} />
      </a>
      <span className="text-[13px] text-[#FFFFFF99]">
        不需信用卡 · 隨時取消 · 3 分鐘上線
      </span>
    </section>
  );
}
