import React from "react";
import solGiversLogo from "@/assets/solgivers-logo.jpg";

const SolFooter = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={solGiversLogo}
                alt="SolGivers"
                className="h-10 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-primary">
                  SolGivers
                </span>
                <span className="text-xs text-muted-foreground">
                  솔루션을 주는 사람들
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              웹 개발, 자동화, 엔터프라이즈급 SW 까지
              <br />
              고객의 눈높이에 맞춘 최적의 IT 솔루션을 제공합니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">바로가기</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  회사소개
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  서비스
                </a>
              </li>
              <li>
                <a
                  href="#business"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  사업분야
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  프로젝트
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-foreground mb-4">연락처</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>세종특별자치시 한누리대로 245</li>
              <li>우편번호: 30127</li>
              <li className="pt-2">
                <span className="font-semibold text-foreground">
                  운영시간:
                </span>{" "}
                평일 09:00 - 18:00
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SolGivers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SolFooter;
