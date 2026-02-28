const painPoints = [
  { emoji: "😩", title: "LINE 訊息接不完", desc: "每天 LINE 訊息接不完，回完預約已經深夜" },
  { emoji: "😤", title: "客人臨時爽約", desc: "客人臨時爽約，時間空了收入蒸發" },
  { emoji: "🤯", title: "忘記提醒客人", desc: "忘記提醒客人，隔天才發現沒來" },
  { emoji: "📊", title: "月底對帳崩潰", desc: "月底對帳對到崩潰，不知道賺多少" },
];

export default function PainPointsSection() {
  return (
    <section className="flex w-full flex-col items-center gap-[40px] px-6 md:px-16 py-[80px]">
      {/* Header */}
      <div className="flex flex-col items-center gap-[12px]">
        <span className="text-[12px] font-semibold tracking-[2px] text-[var(--primary)]">
          PAIN POINTS
        </span>
        <h2 className="text-center text-[28px] md:text-[40px] font-bold tracking-[-1px] text-[var(--bg-dark)]">
          你是不是每天都在...
        </h2>
      </div>

      {/* Cards grid */}
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
        {painPoints.map((p) => (
          <div
            key={p.title}
            className="flex flex-col gap-[16px] rounded-[20px] border border-[var(--border-light)] bg-[var(--white)] p-6 md:p-8"
          >
            <span className="text-[32px]">{p.emoji}</span>
            <span className="text-[18px] font-semibold text-[var(--bg-dark)]">{p.title}</span>
            <p className="text-[15px] leading-[1.7] text-[var(--text-muted)]">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Banner */}
      <div className="flex w-full flex-col items-center gap-[12px] rounded-[20px] bg-[var(--bg-dark)] px-6 md:px-16 py-[48px]">
        <span className="text-center text-[20px] md:text-[24px] font-semibold text-[#F5F0ED]">
          這些問題，BeautyBook 幫你全部解決。
        </span>
        <span className="text-center text-[16px] text-[#8A8480]">
          從 LINE 預約到記帳，一個系統全包。
        </span>
      </div>
    </section>
  );
}
