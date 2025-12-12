import React, { useRef, useEffect } from "react";
import { Cloud, Database, Brain, Shield, Factory, ShoppingCart } from "lucide-react";

const SolBusiness = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const businesses = [
    {
      icon: Brain,
      title: "AI 관련 SW 개발",
      description: "머신러닝, 딥러닝 모델 개발 및 AI 솔루션 통합",
      color: "from-pink-500/10 to-pink-600/10",
      borderColor: "hover:border-pink-500/50",
    },
    {
      icon: Database,
      title: "통계 및 빅데이터",
      description: "대용량 데이터 처리, 분석 등 시스템 구축 및 기술지원",
      color: "from-purple-500/10 to-purple-600/10",
      borderColor: "hover:border-purple-500/50",
    },
    {
      icon: ShoppingCart,
      title: "이커머스 관련 SW 개발",
      description: "온라인 쇼핑몰 자동화 및 통합 시스템 개발",
      color: "from-orange-500/10 to-orange-600/10",
      borderColor: "hover:border-orange-500/50",
    },
    {
      icon: Shield,
      title: "보안 SW 개발",
      description: "정보보안 시스템 및 보안 솔루션 개발",
      color: "from-red-500/10 to-red-600/10",
      borderColor: "hover:border-red-500/50",
    },
    {
      icon: Factory,
      title: "제조산업 관련 SW 개발",
      description: "스마트 팩토리, 전자 계측 및 제어 시스템 개발",
      color: "from-green-500/10 to-green-600/10",
      borderColor: "hover:border-green-500/50",
    },
    {
      icon: Cloud,
      title: "클라우드",
      description: "AWS, Azure, GCP 기반의 클라우드 인프라 구축 및 마이그레이션",
      color: "from-blue-500/10 to-blue-600/10",
      borderColor: "hover:border-blue-500/50",
    },
  ];

  return (
    <section ref={sectionRef} id="business" className="py-24 bg-gradient-to-br from-accent/10 via-background to-secondary/10 opacity-0 transition-all duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            주요 <span className="text-primary">추진 사업</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            최신 IT 기술을 적용한 다양한 분야의 소프트웨어 개발 사업을 추진하고
            있습니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businesses.map((business, index) => {
            const Icon = business.icon;
            return (
              <div
                key={index}
                className={`group relative p-6 rounded-xl bg-gradient-to-br ${business.color} border border-border ${business.borderColor} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <Icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {business.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {business.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolBusiness;
