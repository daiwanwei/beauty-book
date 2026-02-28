"use client";

import { useRef, useState, useEffect } from "react";

interface FeatureCard {
  icon: string;
  title: string;
  description: string;
  variant: "dark" | "light";
}

const features: FeatureCard[] = [
  {
    icon: "message-circle",
    title: "LINE 全自動接單",
    description:
      "客人在 LINE 傳訊息，AI 自動引導選時段、確認預約，你完全不用介入。24 小時不打烊。",
    variant: "dark",
  },
  {
    icon: "shield-check",
    title: "訂金防爽約",
    description: "LINE Pay 直接在對話中付款，杜絕惡意爽約",
    variant: "light",
  },
  {
    icon: "bell-ring",
    title: "自動提醒",
    description: "預約前 24 小時、當天早上自動在 LINE 推播提醒",
    variant: "dark",
  },
  {
    icon: "calculator",
    title: "自動記帳 🆕",
    description: "每筆預約收入自動記錄，月底對帳零秒鐘",
    variant: "light",
  },
  {
    icon: "users",
    title: "多人排班管理",
    description: "多位設計師共用一個系統，各自排班、各自管理",
    variant: "dark",
  },
  {
    icon: "chart-no-axes-column",
    title: "營收報表 🆕",
    description: "即時查看預約數、營收、熱門時段，用數據做決策",
    variant: "light",
  },
  {
    icon: "contact",
    title: "客戶資料管理",
    description: "完整記錄每位客人的偏好、歷史預約、消費紀錄",
    variant: "dark",
  },
  {
    icon: "image",
    title: "作品集展示",
    description: "在預約頁面展示你的作品，讓客人看到就想預約",
    variant: "light",
  },
];

function FeatureCardComponent({ icon, title, description, variant }: FeatureCard) {
  const isDark = variant === "dark";

  return (
    <div
      className={`flex w-[260px] md:w-[300px] shrink-0 flex-col gap-[20px] rounded-[20px] p-[32px] h-[260px] ${
        isDark
          ? "bg-[var(--bg-dark)]"
          : "bg-[var(--white)] border border-[var(--border-light)]"
      }`}
    >
      <i
        className={`icon-${icon}`}
        style={{ fontSize: 32, color: "var(--primary)" }}
      />
      <span
        className={`text-[20px] font-semibold ${
          isDark ? "text-[#F5F0ED]" : "text-[var(--bg-dark)]"
        }`}
      >
        {title}
      </span>
      <p
        className={`text-[14px] leading-[1.7] ${
          isDark ? "text-[#8A8480]" : "text-[var(--text-muted)]"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

export default function FeaturesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalPages = 4;

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const page = Math.round((scrollLeft / maxScroll) * (totalPages - 1));
      setActiveIndex(Math.min(page, totalPages - 1));
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="flex w-full flex-col gap-[40px] overflow-hidden py-[80px] pl-6 md:pl-16">
      {/* Header */}
      <div className="flex flex-col gap-[12px]">
        <span className="text-[12px] font-semibold tracking-[2px] text-[var(--primary)]">
          FEATURES
        </span>
        <h2 className="text-[28px] md:text-[40px] font-bold tracking-[-1px] text-[var(--bg-dark)]">
          省時、防爽約、帳清楚
        </h2>
        <p className="text-[14px] text-[var(--text-muted)]">
          左右滑動探索所有功能
        </p>
      </div>

      {/* Scrollable cards */}
      <div
        ref={scrollRef}
        className="flex gap-[20px] overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {features.map((feature) => (
          <FeatureCardComponent key={feature.icon} {...feature} />
        ))}
      </div>

      {/* Scroll indicators */}
      <div className="flex items-center gap-[8px]">
        {Array.from({ length: totalPages }).map((_, i) => (
          <span
            key={i}
            className={`rounded-full ${
              i === activeIndex
                ? "h-[8px] w-[8px] bg-[var(--primary)]"
                : "h-[6px] w-[6px] bg-[var(--border-light)]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
