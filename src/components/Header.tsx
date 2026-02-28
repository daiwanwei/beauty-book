export default function Header() {
  return (
    <header className="flex w-full items-center justify-between px-[64px] py-[24px]">
      <span className="text-[22px] font-bold tracking-[-0.5px] text-[var(--bg-dark)]">
        BeautyBook
      </span>
      <nav className="flex items-center gap-[40px]">
        <a href="#features" className="text-[15px] text-[var(--secondary)]">功能介紹</a>
        <a href="#pricing" className="text-[15px] text-[var(--secondary)]">方案價格</a>
        <a href="#testimonials" className="text-[15px] text-[var(--secondary)]">商家見證</a>
        <a href="#faq" className="text-[15px] text-[var(--secondary)]">常見問題</a>
        <a
          href="#cta"
          className="rounded-full bg-[var(--primary)] px-[28px] py-[12px] text-[14px] font-medium text-[var(--white)]"
        >
          免費試用
        </a>
      </nav>
    </header>
  );
}
