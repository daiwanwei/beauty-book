const testimonials = [
  {
    quote:
      "\u0022以前每天花 2 小時回 LINE 預約，現在 AI 全部自動處理。一個月多接了 30% 的客人！\u0022",
    name: "小甜",
    role: "美甲師 · 板橋",
    avatarColor: "#C17F6B33",
  },
  {
    quote:
      "\u0022訂金功能超讚！以前每週都被爽約 2-3 次，開始收訂金之後幾乎沒有了。\u0022",
    name: "阿凱",
    role: "刺青師 · 台中",
    avatarColor: "#8B6F6F33",
  },
  {
    quote:
      "\u00223 分鐘就上線了，客人直接在 IG 點連結預約。省下來的時間可以多做 2 個客人。\u0022",
    name: "Bella SPA",
    role: "美容院 · 信義區",
    avatarColor: "#C17F6B55",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="flex w-full flex-col items-center gap-[48px] bg-[var(--bg-dark)] px-6 md:px-16 py-[80px]"
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-[12px]">
        <span className="text-[12px] font-semibold tracking-[2px] text-[var(--primary)]">
          TESTIMONIALS
        </span>
        <h2 className="text-center text-[28px] md:text-[40px] font-bold tracking-[-1px] text-[#F5F0ED]">
          商家真實見證
        </h2>
      </div>

      {/* Cards */}
      <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-[24px]">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="flex flex-col gap-[20px] rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-[32px]"
          >
            <span className="text-[16px] text-[var(--primary)]">★★★★★</span>
            <p className="text-[15px] leading-[1.6] text-[#999999]">{t.quote}</p>
            <div className="flex items-center gap-[12px]">
              <div
                className="h-[40px] w-[40px] rounded-full"
                style={{ backgroundColor: t.avatarColor }}
              />
              <div className="flex flex-col gap-[2px]">
                <span className="text-[14px] font-semibold text-[#F5F0ED]">{t.name}</span>
                <span className="text-[12px] text-[#8A8480]">{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
