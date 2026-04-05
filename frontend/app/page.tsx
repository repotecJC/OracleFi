"use client";

import { StatsBar } from "@/components/StatsBar";
import { StakeForm } from "@/components/StakeForm";
import { WithdrawForm } from "@/components/WithdrawForm";
import { ClaimButton } from "@/components/ClaimButton";
import { AdminLinkButton } from "@/components/AdminLinkButton";
import { TypewriterText } from "@/components/TypewriterText";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen relative">
      {/* 網格背景 */}
      <div className="fixed inset-0 grid-background opacity-30 pointer-events-none" />
      
      {/* 原有內容 */}
      <div className="relative z-10 container mx-auto p-6">
        <div className="max-w-6xl mx-auto">
          <AdminLinkButton />
          
          <div className="text-center mb-8 mt-4">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              <TypewriterText text={t("home.title")} speed={60} />
            </h1>
            <p className="text-xl text-muted-foreground h-14">
              <TypewriterText text={t("home.subtitle")} delay={1000} speed={25} />
            </p>
          </div>
          
          <StatsBar />
          
          {/* 質押表單區域加上玻璃質感 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 border border-border/40 bg-zinc-950/30 backdrop-blur-md rounded-lg p-6">
            <StakeForm />
            <div className="space-y-6">
              <WithdrawForm />
              <ClaimButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
