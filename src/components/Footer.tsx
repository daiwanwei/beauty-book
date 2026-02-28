export default function Footer() {
  return (
    <footer className="flex w-full flex-col gap-[40px] bg-[var(--bg-dark)] px-6 md:px-16 py-[48px]">
      {/* Top */}
      <div className="flex w-full flex-col md:flex-row items-start justify-between gap-8">
        <div className="flex flex-col gap-[12px]">
          <span className="text-[22px] font-bold tracking-[-0.5px] text-[var(--white)]">
            BeautyBook
          </span>
          <span className="text-[14px] text-[#777777]">
            AI 預約 × 記帳系統，專為美業打造
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="flex flex-col gap-[12px]">
            <span className="text-[12px] font-semibold tracking-[1.5px] text-[#999999]">
              產品
            </span>
            <a href="#features" className="text-[14px] text-[#777777]">功能介紹</a>
            <a href="#pricing" className="text-[14px] text-[#777777]">方案價格</a>
            <a href="#testimonials" className="text-[14px] text-[#777777]">商家見證</a>
            <span className="text-[14px] text-[#777777]">更新日誌</span>
          </div>
          <div className="flex flex-col gap-[12px]">
            <span className="text-[12px] font-semibold tracking-[1.5px] text-[#999999]">
              公司
            </span>
            <span className="text-[14px] text-[#777777]">關於我們</span>
            <span className="text-[14px] text-[#777777]">合作夥伴</span>
            <span className="text-[14px] text-[#777777]">聯絡我們</span>
          </div>
          <div className="flex flex-col gap-[12px]">
            <span className="text-[12px] font-semibold tracking-[1.5px] text-[#999999]">
              支援
            </span>
            <span className="text-[14px] text-[#777777]">幫助中心</span>
            <span className="text-[14px] text-[#777777]">隱私權政策</span>
            <span className="text-[14px] text-[#777777]">服務條款</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] w-full bg-[#333333]" />

      {/* Bottom */}
      <div className="flex w-full flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-[13px] text-[#555555]">
          © 2026 BeautyBook. All rights reserved.
        </span>
        <div className="flex items-center gap-[16px]">
          <i className="icon-instagram" style={{ fontSize: 20, color: "#777777" }} />
          <i className="icon-youtube" style={{ fontSize: 20, color: "#777777" }} />
          <i className="icon-twitter" style={{ fontSize: 20, color: "#777777" }} />
        </div>
      </div>
    </footer>
  );
}
