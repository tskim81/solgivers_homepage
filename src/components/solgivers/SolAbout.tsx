import React, { useRef, useEffect } from "react";
import { Target, Users, Award } from "lucide-react";

const SolAbout = () => {
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
  const features = [
    {
      icon: Target,
      title: "IT 업계 대표 솔루션 기업",
      description:
        "AI, 클라우드, 빅데이터와 같은 최신 IT 트렌드 기술을 제공합니다.",
    },
    {
      icon: Users,
      title: "고객 맞춤형 서비스",
      description:
        "고객의 눈높이에 맞추는 맞춤형 소프트웨어를 제공하여 최적의 솔루션을 구현합니다",
    },
    {
      icon: Award,
      title: "검증된 프로젝트 실적",
      description:
        "국세청, 국가정보자원관리원 등 공공기관 및 민간기업과의 다양한 프로젝트 수행",
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-gradient-to-br from-secondary/10 via-background to-accent/10 opacity-0 transition-all duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            SolGivers <span className="text-primary">특징</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            최신 기술과 풍부한 경험을 바탕으로 고객에게 최적의 IT 솔루션을
            제공합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-card to-primary/5 border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
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

export default SolAbout;
