import React, { useRef, useEffect } from "react";
import { User } from "lucide-react";

const SolTeam = () => {
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
  const team = [
    {
      name: "김태선",
      position: "CEO",
      description: "대표이사",
    },
    {
      name: "이상우",
      position: "Department Head",
      description: "개발팀장",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 transition-all duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-primary">경영진</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            풍부한 경험과 전문성을 갖춘 경영진이 이끌어갑니다
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="group w-full md:w-80 p-8 rounded-2xl bg-gradient-to-br from-card to-primary/5 border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <User className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-2">
                  {member.position}
                </p>
                <p className="text-sm text-muted-foreground">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolTeam;
