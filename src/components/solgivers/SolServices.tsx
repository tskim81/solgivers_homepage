import React, { useRef, useEffect } from "react";
import { Building2, Cog, Palette, Database, MessageSquare, Globe } from "lucide-react";

const SolServices = () => {
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

  const services = [
    {
      icon: Globe,
      title: "웹 개발",
      subtitle: "React, Vue.js, Next.js를 활용한 모던 웹 애플리케이션 개발",
      features: [
        "SPA/PWA 개발",
        "반응형 디자인",
        "SEO 최적화",
        "성능 최적화",
      ],
    },
    {
      icon: Cog,
      title: "자동화 솔루션",
      subtitle: "반복적인 업무를 자동화하여 효율성을 극대화합니다",
      features: [
        "업무 자동화",
        "API 통합",
        "스크래핑",
        "데이터 처리",
      ],
    },
    {
      icon: Building2,
      title: "B2G, B2B 특화",
      subtitle: "국세청, 국가정보자원관리원, 민간기업 등",
      features: [
        "공공기관 SI/SM 프로젝트 구축 및 기술지원",
        "정부 통계/빅데이터 시스템 구축",
        "기업 맞춤형 솔루션 개발",
        "레거시 시스템 현대화",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX 디자인",
      subtitle: "사용자 중심의 직관적인 인터페이스 디자인",
      features: [
        "디자인 시스템",
        "프로토타이핑",
        "사용성 테스트",
        "브랜딩",
      ],
    },
    {
      icon: Database,
      title: "백엔드 개발",
      subtitle: "확장 가능한 서버 아키텍처 구축",
      features: [
        "API 개발",
        "데이터베이스 설계",
        "클라우드 배포",
        "보안 구현",
      ],
    },
    {
      icon: MessageSquare,
      title: "컨설팅",
      subtitle: "기술 전략 수립과 프로젝트 관리",
      features: [
        "기술 컨설팅",
        "프로젝트 관리",
        "코드 리뷰",
        "성능 분석",
      ],
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="py-24 bg-gradient-to-br from-background via-primary/5 to-background opacity-0 transition-all duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            SolGivers <span className="text-primary">제공 서비스</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            다양한 기술 스택과 경험을 바탕으로 포괄적인 IT 서비스를 제공합니다
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="relative group p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border hover:border-primary/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-primary mb-6 font-medium">
                    {service.subtitle}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-muted-foreground"
                      >
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolServices;
