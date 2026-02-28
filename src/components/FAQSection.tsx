const faqs = [
  {
    q: "需要會寫程式才能用嗎？",
    a: "完全不需要！註冊後填入你的服務項目就能上線，整個過程大約 3 分鐘。",
  },
  {
    q: "免費試用結束後會自動扣款嗎？",
    a: "不會！免費試用不需要綁定信用卡，試用期結束後你可以自由選擇是否升級。",
  },
  {
    q: "客人需要下載 APP 才能預約嗎？",
    a: "不需要！客人只要點開你分享的連結就能直接預約，不用下載任何東西。",
  },
  {
    q: "訂金功能怎麼運作？",
    a: "客人預約時系統會自動收取你設定的訂金金額，到店後折抵消費。爽約則自動扣款，有效降低爽約率。",
  },
  {
    q: "可以跟現有的 LINE 官方帳號整合嗎？",
    a: "可以！我們支援 LINE 官方帳號整合，客人預約後會自動透過 LINE 收到確認和提醒通知。",
  },
];

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="flex w-full flex-col items-center gap-[48px] px-6 md:px-16 py-[80px]"
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-[12px]">
        <span className="text-[12px] font-semibold tracking-[2px] text-[var(--primary)]">
          FAQ
        </span>
        <h2 className="text-center text-[28px] md:text-[40px] font-bold tracking-[-1px] text-[var(--bg-dark)]">
          常見問題
        </h2>
      </div>

      {/* Questions */}
      <div className="w-full max-w-[800px] flex flex-col">
        {faqs.map((faq, i) => (
          <div
            key={faq.q}
            className={`flex flex-col gap-[12px] py-[24px] ${
              i < faqs.length - 1 ? "border-b border-[var(--border-light)]" : ""
            }`}
          >
            <span className="text-[18px] font-semibold text-[var(--bg-dark)]">{faq.q}</span>
            <p className="text-[15px] leading-[1.7] text-[var(--text-muted)]">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
