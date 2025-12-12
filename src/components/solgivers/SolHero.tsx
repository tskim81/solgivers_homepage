import React from "react";
import { ArrowRight, Building2, Code, Brain } from "lucide-react";
const SolHero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-[0.03]" />
      
      {/* Animated Circles */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{
      animationDelay: "1s"
    }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
          <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
          IT 솔루션 전문 기업
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
          솔루션을 주는 사람들
          <br />
          <span className="text-primary">SolGivers</span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in" style={{
        animationDelay: "0.2s"
      }}>웹 개발, 자동화, 엔터프라이즈급 SW 까지<br />
          고객의 눈높이에 맞춘 최적의 IT 솔루션을 제공합니다
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{
        animationDelay: "0.4s"
      }}>
          <a href="#services" className="group inline-flex items-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
            서비스 알아보기
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="inline-flex items-center px-8 py-4 bg-background border-2 border-primary text-primary hover:bg-primary/5 rounded-lg font-semibold text-lg transition-all duration-300">
            문의하기
          </a>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in" style={{
        animationDelay: "0.6s"
      }}>
          <div className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
            <Brain className="w-12 h-12 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-lg mb-2">AI를 이용한 솔루션 개발</h3>
            <p className="text-sm text-muted-foreground">
              인공지능 관련 SW 개발
            </p>
          </div>

          <div className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
            <Code className="w-12 h-12 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-lg mb-2">다양한 분야의 SW 개발</h3>
            <p className="text-sm text-muted-foreground">
              도메인에 맞는 SW 툴 및 자동화 솔루션 개발
            </p>
          </div>

          <div className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
            <Building2 className="w-12 h-12 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-lg mb-2">B2G, B2B 전문</h3>
            <p className="text-sm text-muted-foreground">
              개인 외 공공기관/ 기업 맞춤형 솔루션 개발
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default SolHero;