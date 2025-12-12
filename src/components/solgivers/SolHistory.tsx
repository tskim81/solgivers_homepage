import React, { useRef, useEffect } from "react";
import { Calendar, Briefcase } from "lucide-react";

const SolHistory = () => {
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
  const timeline = [
    {
      period: "2023.09",
      title: "회사 설립",
      items: ["㈜ SolGivers 설립"],
    },
    {
      period: "2024.01 ~ 2024.12",
      title: "사업 확장",
      items: [
        "국세청 통계사업 참여",
        "국세청 빅데이터 사업 참여",
      ],
    },
    {
      period: "2025.01 ~ 현재",
      title: "지속적 성장",
      items: [
        "국세청 통계사업 참여 중",
        "국세청 빅데이터 사업 참여 중",
        "전자 계측 및 제어 SW 개발 완료",
        "AI 투자 자동화 SW 개발 중",
        "이커머스 자동화 SW 개발 중",
        "공공 보안 SW 개발 중",
      ],
    },
  ];

  const projects = [
    {
      title: "국세청 24년 국세통계시스템 운영 및 유지관리",
      period: "2024.01.01 ~ 현재",
    },
    {
      title: "국세청 24년 빅데이터 운영 및 유지관리",
      period: "2024.01.01 ~ 현재",
    },
  ];

  const plans = [
    "이커머스 자동화 SW 개발",
    "AI 투자 자동화 프로그램 버전업",
    "공공 보안 SW 개발",
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-24 bg-gradient-to-br from-background via-accent/5 to-background opacity-0 transition-all duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company History */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              회사 <span className="text-primary">설립 연혁</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              지속적인 성장과 발전을 이어가고 있습니다
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-8`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-background shadow-lg z-10 animate-pulse-slow" />

                  {/* Content */}
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                    } ml-16 md:ml-0`}
                  >
                    <div className="inline-flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-sm font-semibold mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.period}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {item.title}
                    </h3>
                    <ul className="space-y-2">
                      {item.items.map((detail, idx) => (
                        <li
                          key={idx}
                          className="text-muted-foreground flex items-start"
                        >
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Major Projects */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              주요 <span className="text-primary">프로젝트 이력</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-gradient-to-br from-card to-primary/5 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.period}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Plans */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              <span className="text-primary">2026년</span> 완료 예정 사항
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 shadow-lg">
              <ul className="space-y-4">
                {plans.map((plan, index) => (
                  <li
                    key={index}
                    className="flex items-center text-lg text-foreground"
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mr-4 animate-pulse" />
                    {plan}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolHistory;
