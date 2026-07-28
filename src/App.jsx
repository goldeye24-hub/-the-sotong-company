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
const BLOG_URL = "https://blog.naver.com/the-sotong";
const INSTAGRAM_URL = "https://www.instagram.com/kwon_hyemi_/";

const serviceMeta = {
  "조직활성화": { icon: Users, accent: "from-slate-700 to-slate-500" },
  "성격유형진단": { icon: UserRoundSearch, accent: "from-sky-800 to-sky-600" },
  "소통교육": { icon: MessagesSquare, accent: "from-cyan-800 to-cyan-600" },
  "리더십교육": { icon: Briefcase, accent: "from-indigo-800 to-indigo-600" },
  "힐링 · 스트레스교육": { icon: HeartHandshake, accent: "from-teal-800 to-teal-600" },
  "법정의무교육": { icon: ShieldCheck, accent: "from-slate-800 to-slate-600" },
  "CS · 민원응대교육": { icon: Headset, accent: "from-sky-700 to-blue-600" },
  "청년취업 · 진로교육": { icon: GraduationCap, accent: "from-amber-600 to-orange-500" },
  "강의컨설팅 · 강사섭외": { icon: Presentation, accent: "from-blue-900 to-blue-700" },
};

const services = [
  {
    title: "조직활성화",
    items: [
      "팀빌딩강의",
      "조직활성화교육",
      "협업교육",
      "조직문화교육",
      "심리적안전감교육",
      "신규직원교육",
      "승진자교육",
      "워크숍교육",
    ],
  },
  {
    title: "성격유형진단",
    items: [
      "MBTI강의",
      "MBTI강사",
      "MBTI소통강사",
      "MBTI팀빌딩",
      "MBTI리더십교육",
      "성격유형진단",
      "애니어그램교육",
      "진로성격유형교육",
    ],
  },
  {
    title: "소통교육",
    items: [
      "소통강의",
      "소통강사",
      "조직소통교육",
      "세대공감교육",
      "갈등관리교육",
      "피드백교육",
      "협업커뮤니케이션",
      "공감소통교육",
    ],
  },
  {
    title: "리더십교육",
    items: [
      "리더십교육",
      "팀장리더십교육",
      "중간관리자교육",
      "신임리더교육",
      "코칭형리더십",
      "성과대화교육",
      "갑질예방교육",
      "관리자소통교육",
    ],
  },
  {
    title: "힐링 · 스트레스교육",
    items: [
      "스트레스관리교육",
      "감정관리교육",
      "감정노동교육",
      "번아웃예방교육",
      "회복탄력성교육",
      "직장인힐링교육",
      "자기돌봄교육",
      "마음건강교육",
    ],
  },
  {
    title: "법정의무교육",
    items: [
      "직장내괴롭힘예방교육",
      "성희롱예방교육",
      "장애인식개선교육",
      "개인정보보호교육",
      "인권교육",
      "아동권리교육",
      "갑질근절교육",
      "조직윤리교육",
    ],
  },
  {
    title: "CS · 민원응대교육",
    items: [
      "CS강의",
      "CS교육",
      "민원응대교육",
      "고객응대교육",
      "악성민원대응교육",
      "전화응대교육",
      "방문응대교육",
      "감정노동자보호교육",
    ],
  },
  {
    title: "청년취업 · 진로교육",
    items: [
      "청년취업교육",
      "취업특강",
      "진로탐색교육",
      "강점찾기교육",
      "Holland직업흥미검사",
      "면접이미지메이킹",
      "자기소개서코칭",
      "취업액션플랜",
    ],
  },
  {
    title: "강의컨설팅 · 강사섭외",
    items: [
      "기업교육컨설팅",
      "공공기관강사섭외",
      "교육기획",
      "맞춤형워크숍",
      "강사파견",
      "교육운영대행",
      "조직교육설계",
      "강사추천",
    ],
  },
];

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

const partnerGroups = [
  "공공기관",
  "지자체",
  "기업",
  "대기업",
  "중소기업",
  "학교",
  "대학",
  "복지기관",
];

function DeosotongLogo({ compact = false }) {
  return (
    <div className={`flex items-center ${compact ? "gap-2" : "gap-3"}`}>
      <div
        className={`relative flex items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0f172a_0%,#1e3a8a_100%)] text-white shadow-sm ${
          compact ? "h-10 w-10" : "h-12 w-12"
        }`}
      >
        <svg
          viewBox="0 0 48 48"
          className={compact ? "h-6 w-6" : "h-7 w-7"}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 8C15.2 8 8 14.5 8 22.7C8 27.7 10.7 32.2 15.1 35L13.7 40L19.4 37.2C20.9 37.6 22.4 37.8 24 37.8C32.8 37.8 40 31.3 40 23.1C40 14.9 32.8 8 24 8Z"
            fill="white"
            fillOpacity="0.16"
          />
          <path
            d="M18 20.5C18 17.5 20.6 15 24 15C27.4 15 30 17.5 30 20.5C30 23.5 27.4 26 24 26C20.6 26 18 23.5 18 20.5Z"
            stroke="white"
            strokeWidth="2.4"
          />
          <path
            d="M15.5 31C17.5 28.7 20.5 27.3 24 27.3C27.5 27.3 30.5 28.7 32.5 31"
            stroke="white"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div>
        <div className={`${compact ? "text-lg" : "text-2xl"} font-bold tracking-tight text-slate-900`}>
          더소통컴퍼니
        </div>
        {!compact && (
          <div className="text-xs font-medium tracking-wide text-slate-500">
            Education & Consulting Partner
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "더소통컴퍼니 홈페이지 교육문의",
          from_name: formData.manager || formData.company || "홈페이지 문의",
          기관명_회사명: formData.company,
          담당자명: formData.manager,
          연락처: formData.phone,
          이메일: formData.email,
          교육희망분야: formData.field,
          대상인원: formData.people,
          예상강의장소: formData.location,
          희망일정: formData.schedule,
          예산최소금액: formData.budget_min,
          예산최대금액: formData.budget_max,
          문의내용: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage("문의가 접수되었습니다. 확인 후 연락드리겠습니다.");
        setFormData({
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
      } else {
        setSubmitMessage("문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      }
    } catch (error) {
      setSubmitMessage("문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
          <a href="#HOME" aria-label="더소통컴퍼니 홈">
            <DeosotongLogo />
          </a>

          <nav className="hidden items-center gap-10 text-sm font-medium text-slate-600 md:flex">
            <a href="#HOME" className="hover:text-slate-950">HOME</a>
            <a href="#회사소개" className="hover:text-slate-950">회사소개</a>
            <a href="#교육프로그램" className="hover:text-slate-950">교육프로그램</a>
            <a href="#교육문의" className="hover:text-slate-950">교육문의</a>
          </nav>

          <a
            href="#교육문의"
            className="rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
          >
            상담문의
          </a>
        </div>
      </header>

      <main>
        <section
          id="HOME"
          className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:py-20"
        >
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
              <Sparkles size={16} />
              기업 · 공공기관 · 학교 · 복지기관 맞춤형 교육
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              사람과 조직의 성장을 설계하는
              <br />
              <span className="text-blue-900">교육 컨설팅 파트너</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              더소통컴퍼니는 MBTI강의, 소통강의, 민원응대교육, CS강의,
              리더십교육, 팀빌딩, 감정노동교육, 갑질예방교육, 청년취업교육까지
              조직과 대상에 맞는 교육을 설계하고 운영합니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#교육프로그램"
                className="rounded-full bg-[linear-gradient(135deg,#0f172a_0%,#1e3a8a_100%)] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-95"
              >
                교육프로그램 보기
              </a>
              <a
                href="#교육문의"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-slate-50"
              >
                교육문의 하기
              </a>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-4 shadow-sm">
            <div className="overflow-hidden rounded-[24px] bg-slate-100">
              <img
                src={representativeImage}
                alt="더소통컴퍼니 권혜미 대표강사"
                className="h-[420px] w-full object-cover"
              />
            </div>
            <div className="p-5">
              <div className="text-sm font-semibold text-slate-500">대표강사</div>
              <div className="mt-1 text-2xl font-bold tracking-tight text-slate-950">
                권혜미
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                조직소통, MBTI, 팀빌딩, 리더십, 민원응대, 감정관리 분야를 중심으로
                기업과 공공기관의 교육 현장을 함께하고 있습니다.
              </p>
            </div>
          </div>
        </section>

        <section id="회사소개" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10 lg:py-16">
          <div className="grid gap-4 md:grid-cols-5">
            {strengthMeta.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-base font-bold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-10 lg:py-6">
          <div className="rounded-[32px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_100%)] px-8 py-10 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="text-sm font-semibold text-slate-500">출강 분야 및 협업 대상</div>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                  다양한 기관과 기업에서 함께해 왔습니다
                </h3>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-600">
                기업교육, 공공기관교육, 학교 및 복지기관 교육까지 현장에 맞는 방식으로 설계합니다.
              </p>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 lg:mt-6 lg:grid-cols-4">
              {partnerGroups.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="교육프로그램" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10 lg:py-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-sm font-semibold text-slate-500">교육프로그램</div>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                핵심 프로그램
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-600">
              핵심 카테고리를 더 쉽게 읽을 수 있도록 정리했습니다.
            </p>
          </div>

          <div className="mt-6 grid gap-4 lg:mt-10 lg:gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const meta = serviceMeta[service.title] || serviceMeta["조직활성화"];
              const Icon = meta.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md lg:rounded-[28px] lg:p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${meta.accent} text-white shadow-sm`}
                      >
                        <Icon size={22} />
                      </div>
                      <div className="text-xl font-semibold tracking-tight text-slate-950">
                        {service.title}
                      </div>
                    </div>
                    <Sparkles size={18} className="mt-1 text-slate-400" />
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="교육운영" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10 lg:py-16">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="text-sm font-semibold text-slate-500">교육운영 프로세스</div>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                  문의부터 사후 관리까지
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-600">
                교육 목적과 대상에 맞춰 강의, 워크숍, 팀빌딩, 컨설팅 형태로 운영합니다.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
              {processMeta.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.no}
                    className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <div className="text-sm font-bold text-blue-900">{item.no}</div>
                    <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-slate-900 shadow-sm">
                      <Icon size={22} />
                    </div>
                    <div className="mt-4 text-sm font-semibold text-slate-900">
                      {item.title}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="교육문의" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10 lg:py-16">
          <div className="grid gap-8 rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
            <div>
              <div className="text-sm font-semibold text-slate-500">교육문의</div>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                조직에 맞는 교육을 제안드립니다
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                교육 대상, 인원, 일정, 장소, 예산, 희망 주제를 남겨주시면 확인 후 연락드립니다.
              </p>

              <div className="mt-8 rounded-3xl bg-slate-50 p-5 text-sm leading-7 text-slate-600">
                <div className="font-semibold text-slate-900">주요 문의 분야</div>
                <div className="mt-2">
                  MBTI강의 · 소통강의 · 민원응대교육 · CS강의 · 리더십교육 · 팀빌딩 ·
                  감정노동교육 · 갑질예방교육 · 청년취업교육
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { label: "기관명 / 회사명", key: "company", placeholder: "", type: "text" },
                  { label: "담당자명", key: "manager", placeholder: "", type: "text" },
                  { label: "연락처", key: "phone", placeholder: "", type: "tel" },
                  { label: "이메일", key: "email", placeholder: "예: example@naver.com", type: "email" },
                  { label: "교육 희망 분야", key: "field", placeholder: "", type: "text" },
                  { label: "대상 인원", key: "people", placeholder: "00명", type: "text" },
                  { label: "예상 강의장소", key: "location", placeholder: "", type: "text" },
                  { label: "희망 일정", key: "schedule", placeholder: "예: 2026.4.15 / 2026년 4월 중 / 협의 가능", type: "text" },
                ].map((field) => (
                  <label key={field.key} className="text-sm text-slate-700">
                    <div className="mb-2 font-medium">{field.label}</div>
                    <input
                      type={field.type}
                      value={formData[field.key]}
                      onChange={(e) => handleChange(field.key, e.target.value)}
                      className="w-full rounded-2xl border border-slate-200 bg-[linear-gradient(180deg,#f8fbff_0%,#f8fafc_100%)] px-4 py-3 outline-none placeholder:text-slate-400 focus:border-sky-300 focus:ring-2 focus:ring-sky-100"
                      placeholder={field.placeholder}
                    />
                  </label>
                ))}

                <label className="text-sm text-slate-700">
                  <div className="mb-2 font-medium">예산 최소 금액</div>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.budget_min}
                      onChange={(e) => handleChange("budget_min", e.target.value)}
                      className="w-full rounded-2xl border border-slate-200 bg-[linear-gradient(180deg,#f8fbff_0%,#f8fafc_100%)] px-4 py-3 pr-12 outline-none placeholder:text-slate-400 focus:border-sky-300 focus:ring-2 focus:ring-sky-100"
                      placeholder=""
                      inputMode="numeric"
                    />
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">
                      원
                    </span>
                  </div>
                </label>

                <label className="text-sm text-slate-700">
                  <div className="mb-2 font-medium">예산 최대 금액</div>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.budget_max}
                      onChange={(e) => handleChange("budget_max", e.target.value)}
                      className="w-full rounded-2xl border border-slate-200 bg-[linear-gradient(180deg,#f8fbff_0%,#f8fafc_100%)] px-4 py-3 pr-12 outline-none placeholder:text-slate-400 focus:border-sky-300 focus:ring-2 focus:ring-sky-100"
                      placeholder=""
                      inputMode="numeric"
                    />
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">
                      원
                    </span>
                  </div>
                </label>

                <label className="text-sm text-slate-700 sm:col-span-2">
                  <div className="mb-2 font-medium">문의 내용</div>
                  <textarea
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-[linear-gradient(180deg,#f8fbff_0%,#f8fafc_100%)] px-4 py-3 outline-none placeholder:text-slate-400 focus:border-sky-300 focus:ring-2 focus:ring-sky-100"
                    placeholder="교육 목적, 대상, 희망 방향 등을 자유롭게 남겨주세요."
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-5 w-full rounded-full bg-[linear-gradient(135deg,#0f172a_0%,#1e3a8a_100%)] px-6 py-3 text-sm font-medium text-white shadow-sm hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "전송 중..." : "문의하기"}
              </button>

              {submitMessage && (
                <div className="mt-4 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-sm text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-8">
          <div>
            <DeosotongLogo compact />
            <div className="mt-2">사람과 조직의 성장을 설계하는 교육 컨설팅 파트너</div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#HOME">HOME</a>
            <a href="#회사소개">회사소개</a>
            <a href="#교육프로그램">교육프로그램</a>
            <a href="#교육운영">교육운영</a>
            <a href="#교육문의">교육문의</a>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={BLOG_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              대표강사 블로그
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white transition hover:bg-slate-800"
            >
              대표강사 인스타그램
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
