import React, { useRef, useEffect, useState } from "react";
import { Mail, Clock, MessageSquare, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby5hasrPccVVuaGdoHwAJ5Z4lkDaE3JtwkrW821evd9KPhCMey0IBXy7ikm3d8EijwruA/exec';

const SolContact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "입력 오류",
        description: "모든 필드를 입력해주세요.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    const data = {
      이름: formData.name.trim(),
      이메일: formData.email.trim(),
      문의내용: formData.message.trim(),
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      toast({
        title: "문의가 전송되었습니다",
        description: "빠른 시일 내에 답변드리겠습니다.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "전송 오류",
        description: "문의 전송 중 오류가 발생했습니다. 다시 시도해주세요.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "이메일",
      value: "tskim81@sgivers.com",
    },
    {
      icon: Clock,
      title: "응답 시간",
      value: "24시간 이내",
    },
    {
      icon: MessageSquare,
      title: "상담",
      value: "무료 초기 상담",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 bg-gradient-to-br from-background via-primary/5 to-accent/5 opacity-0 transition-all duration-700 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-primary">연락</span>하기
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            새로운 프로젝트나 협업 기회에 대해 이야기해보세요.
            <br />
            언제든지 연락주시면 성심껏 답변드리겠습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  성함 <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                  placeholder="홍길동"
                  maxLength={100}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  이메일 <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                  placeholder="example@email.com"
                  maxLength={255}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  메시지 <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground placeholder:text-muted-foreground resize-none"
                  placeholder="프로젝트에 대해 설명해주세요..."
                  maxLength={1000}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-primary-foreground rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  "전송 중..."
                ) : (
                  <>
                    함께 일해요
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-card/60 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">
                        {info.title}
                      </h4>
                      <p className="text-lg font-semibold text-foreground">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Additional CTA */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <p className="text-lg font-medium text-foreground mb-2">
                프로젝트에 대해 상담하고 싶으신가요?
              </p>
              <p className="text-muted-foreground">
                무료 상담을 통해 귀사의 요구사항을 파악하고 최적의 솔루션을 제안해드립니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolContact;
