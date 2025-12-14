import React, { useRef, useEffect } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import companyMap from "@/assets/company-map.png";

const SolLocation = () => {
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
  return (
    <section ref={sectionRef} id="location" className="py-24 bg-background opacity-0 transition-all duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            오시는 <span className="text-primary">길</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            언제든지 편하게 방문하실 수 있습니다
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    주소
                  </h3>
                  <p className="text-muted-foreground">
                    세종특별자치시 한누리대로 245 807호
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    우편번호: 30127
                  </p>
                  <p className="text-sm text-muted-foreground">
                    지번: 세종특별자치시 나성동 747
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    연락처
                  </h3>
                  <p className="text-muted-foreground">T. 044-865-9022</p>
                  <p className="text-muted-foreground">M. 010-7794-3070</p>
                  <div className="flex gap-6">
                    <p className="text-muted-foreground">M. 010-7794-3070</p>
                    <p className="text-muted-foreground">M. 010-4493-0666</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    이메일
                  </h3>
                  <p className="text-muted-foreground">tskim81@sgivers.com</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    운영시간
                  </h3>
                  <p className="text-muted-foreground">평일 09:00 - 18:00</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    주말 및 공휴일 휴무
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
            <img
              src={companyMap}
              alt="회사 위치"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolLocation;
