import { useState } from "react";

import {
  Briefcase,
  HeartHandshake,
  MessagesSquare,
  ShieldCheck,
  Sparkles,
  UserRoundSearch,
  Users,
  GraduationCap,
  Headset,
  ClipboardList,
  PencilRuler,
  Presentation,
  BarChart3,
  HandHeart,
  BadgeCheck,
  Brain,
  Stars,
  MonitorCheck,
} from "lucide-react";

const representativeImage = "/kwon-profile.png";
const WEB3FORMS_ACCESS_KEY = "b9e281e2-547a-4280-8f47-96b69aa10334";

const serviceMeta = {
  "조직활성화": { icon: Users, accent: "from-slate-700 to-slate-500" },
  "성격유형진단": { icon: UserRoundSearch, accent: "from-sky-800 to-sky-600" },
  "소통교육": { icon: MessagesSquare, accent: "from-cyan-800 to-cyan-600" },
  "리더십교육": { icon: Briefcase, accent: "from-indigo-800 to-indigo-600" },
  "힐링 · 스트레스교육": { icon: HeartHandshake, accent: "from-teal-800 to-teal-600" },
  "법정의무교육": { icon: ShieldCheck, accent: "from-slate-800 to-slate-600" },
  "강의컨설팅 · 강사섭외": { icon: GraduationCap, accent: "from-blue-900 to-blue-700" },
};

const processMeta = [
  { no: "01", title: "상담 및 문의", icon: Headset },
  { no: "02", title: "니즈 분석", icon: ClipboardList },
  { no: "03", title: "교육 설계", icon: PencilRuler },
  { no: "04", title: "교육 실시", icon: Presentation },
  { no: "05", title: "성과 평가", icon: BarChart3 },
  { no: "06", title: "사후 관리", icon: HandHeart },
];

const strengthMeta = [
  {
    title: "10년 이상의 풍부한 현장 경험",
    description: "공공기관부터 대기업까지 다양한 조직의 소통 이슈를 해결해 왔습니다.",
    icon: BadgeCheck,
  },
  {
    title: "100% 맞춤형 교육 설계",
    description: "기성 프로그램이 아닌, 조직의 특성과 당면 과제에 최적화된 솔루션을 제안합니다.",
    icon: PencilRuler,
  },
  {
    title: "심리학 기반의 전문성",
    description: "단순한 스킬 전달을 넘어 사람에 대한 깊은 이해를 바탕으로 교육을 운영합니다.",
    icon: Brain,
  },
  {
    title: "검증된 전문 강사진",
    description: "전국 네트워크를 통한 검증된 500명 이상의 강사진을 보유하고 있습니다.",
    icon: Stars,
  },
  {
    title: "지속 가능한 사후 관리",
    description: "일회성 교육으로 끝나지 않도록 실행 모니터링 및 피드백을 지원합니다.",
    icon: MonitorCheck,
  },
];

function DeosotongLogo({ compact = false }) {
  return (
    <div className={`flex items-center ${compact ? "gap-2" : "gap-3"}`}>
      <div className={`relative flex items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0f172a_0%,#1e3a8a_100%)] text-white shadow-sm ${compact ? "h-10 w-10" : "h-12 w-12"}`}>
        <svg viewBox="0 0 48 48" className={compact ? "h-6 w-6" : "h-7 w-7"} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 8C15.2 8 8 14.5 8 22.7C8 27.7 10.7 32.2 15.1 35L13.7 40L19.4 37.2C20.9 37.6 22.4 37.8 24 37.8C32.8 37.8 40 31.3 40 23.1C40 14.9 32.8 8 24 8Z" fill="white" fillOpacity="0.16"/>
          <path d="M18 20.5C18 17.5 20.6 15 24 15C27.4 15 30 17.5 30 20.5C30 23.5 27.4 26 24 26C20.6 26 18 23.5 18 20.5Z" stroke="white" strokeWidth="2.4"/>
          <path d="M15.5 31C17.5 28.7 20.5 27.3 24 27.3C27.5 27.3 30.5 28.7 32.5 31" stroke="white" strokeWidth="2.4" strokeLinecap="round"/>
        </svg>
      </div>
      <div>
        <div className={`font-bold tracking-tight text-slate-900 ${compact ? "text-lg" : "text-2xl"}`}>더소통컴퍼니</div>
        <div className={`text-slate-500 ${compact ? "text-[11px]" : "text-xs"}`}>Education & Consulting Partner</div>
      </div>
    </div>
  );
}

export default function DeosotongCompanyHomepage() {
  const [formData, setFormData] = useState({
    company: "",
    manager: "",
    phone: "",
    email: "",
    field: "",
    people: "",
    location: "",
    schedule: "",
    budget_min: "",
    budget_max: "",
    message: "",
  });

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `[더소통컴퍼니 교육문의] ${formData.company || formData.manager || "홈페이지 문의"}`,
          from_name: "더소통컴퍼니 홈페이지",
          replyto: formData.email,
          company: formData.company,
          manager: formData.manager,
          phone: formData.phone,
          email: formData.email,
          field: formData.field,
          people: formData.people,          location: formData.location,
          schedule: formData.schedule,
          budget_min: formData.budget_min,
          budget_max: formData.budget_max,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (!result.success) throw new Error("문의 전송 실패");

      alert("문의가 정상 접수되었습니다.");
            setFormData({
        company: "",
        manager: "",
        phone: "",
