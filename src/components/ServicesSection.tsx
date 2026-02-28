const services = [
  {
    image: "https://images.unsplash.com/photo-1755311903451-d9c9cfe2803b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzIyNDcxNTZ8&ixlib=rb-4.1.0&q=80&w=1080",
    title: "💅 美甲",
    desc: "指甲彩繪、光療、卸甲⋯一鍵管理所有美甲預約時段",
  },
  {
    image: "https://images.unsplash.com/photo-1624597993888-0a395fb5c8dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzIyNDcxNTZ8&ixlib=rb-4.1.0&q=80&w=1080",
    title: "✂️ 美髮",
    desc: "剪染燙護各項目分開排班，客人自助選時段預約",
  },
  {
    image: "https://images.unsplash.com/photo-1761718210055-e83ca7e2c9ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzIyNDcxNTZ8&ixlib=rb-4.1.0&q=80&w=1080",
    title: "🪷 美容",
    desc: "臉部護理、身體SPA、脫毛⋯客人線上預約、自動提醒",
  },
  {
    image: "https://images.unsplash.com/photo-1629116986674-b2e4e5f582e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzIyNDcxNTZ8&ixlib=rb-4.1.0&q=80&w=1080",
    title: "🖋️ 刺青",
    desc: "諮詢、預約、訂金收取一站搞定，防爽約超有效",
  },
];

export default function ServicesSection() {
  return (
    <section className="flex w-full flex-col items-center gap-[48px] px-6 md:px-16 py-[80px]">
      {/* Header */}
      <div className="flex flex-col items-center gap-[12px]">
        <span className="text-[12px] font-semibold tracking-[2px] text-[var(--primary)]">
          SERVICES
        </span>
        <h2 className="text-center text-[28px] md:text-[40px] font-bold tracking-[-1px] text-[var(--bg-dark)]">
          一套系統，四種服務都能管
        </h2>
        <p className="text-center text-[16px] text-[var(--text-muted)]">
          不管你做美甲、美髮、美容還是刺青，都能輕鬆管理預約
        </p>
      </div>

      {/* Cards */}
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
        {services.map((svc) => (
          <div
            key={svc.title}
            className="flex flex-col overflow-hidden rounded-[20px] bg-[var(--white)]"
          >
            <div
              className="h-[220px] w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${svc.image})` }}
            />
            <div className="flex flex-col gap-[12px] p-[24px]">
              <span className="text-[22px] font-bold text-[var(--bg-dark)]">{svc.title}</span>
              <p className="text-[14px] text-[var(--text-muted)]">{svc.desc}</p>
              <span className="text-[14px] font-medium text-[var(--primary)]">預約管理 →</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
