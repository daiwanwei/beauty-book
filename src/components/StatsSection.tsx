const stats = [
  { value: "30小時", label: "省下/月" },
  { value: "-60%", label: "爽約率下降" },
  { value: "3分鐘", label: "上線設定" },
  { value: "NT$0", label: "漏記帳金額" },
];

export default function StatsSection() {
  return (
    <section className="flex w-full items-center justify-around border-t border-[#333333] bg-[var(--bg-dark)] px-[64px] py-[48px]">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col items-center gap-[4px]">
          <span className="text-[36px] font-extrabold tracking-[-1px] text-[#F5F0ED]">
            {stat.value}
          </span>
          <span className="text-[14px] text-[#8A8480]">{stat.label}</span>
        </div>
      ))}
    </section>
  );
}
