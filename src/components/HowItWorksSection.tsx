const steps = [
  {
    num: "1",
    icon: "link",
    title: "連結 LINE 官方帳號",
    desc: "把 BeautyOS 接上你的 LINE OA，\n設定服務項目、時段、訂金金額。",
  },
  {
    num: "2",
    icon: "share-2",
    title: "貼出你的 LINE 帳號",
    desc: "告訴客人來 LINE 找你預約，\n跟以前一樣，只是現在 AI 幫你回。",
  },
  {
    num: "3",
    icon: "bot",
    title: "AI 全自動處理",
    desc: "客人傳訊息 → AI 回覆 → 選時段 →\n付訂金 → 自動提醒 → 自動記帳。\n你什麼都不用做。",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="flex w-full flex-col items-center gap-[48px] bg-[var(--bg-dark)] px-[64px] py-[80px]">
      {/* Header */}
      <div className="flex flex-col items-center gap-[12px]">
        <span className="text-[12px] font-semibold tracking-[2px] text-[var(--primary)]">
          HOW IT WORKS
        </span>
        <h2 className="text-center text-[40px] font-bold tracking-[-1px] text-[#F5F0ED]">
          3 步驟上線，你的 LINE 開始自動工作
        </h2>
        <p className="text-center text-[16px] text-[#8A8480]">
          不需要工程師，最快 3 分鐘搞定
        </p>
      </div>

      {/* Steps */}
      <div className="grid w-full grid-cols-3 gap-[32px]">
        {steps.map((step) => (
          <div
            key={step.num}
            className="flex flex-col items-center gap-[20px] rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-[32px]"
          >
            <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[var(--primary)]">
              <span className="text-[20px] font-bold text-white">{step.num}</span>
            </div>
            <i className={`icon-${step.icon}`} style={{ fontSize: 32, color: "#F5F0ED" }} />
            <span className="text-center text-[20px] font-semibold text-[#F5F0ED]">
              {step.title}
            </span>
            <p className="whitespace-pre-line text-center text-[15px] leading-[1.7] text-[#8A8480]">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
