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
  조직활성화: { icon: Users, accent: "from-slate-700 to-slate-500" },
  성격유형진단: { icon: UserRoundSearch, accent: "from-sky-800 to-sky-600" },
  소통교육: { icon: MessagesSquare, accent: "from-cyan-800 to-cyan-600" },
  리더십교육: { icon: Briefcase, accent: "from-indigo-800 to-indigo-600" },
  "힐링 · 스트레스교육": { icon: HeartHandshake, accent: "from-teal-800 to-teal-600" },
  법정의무교육: { icon: ShieldCheck, accent: "from-slate-800 to-slate-600" },
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
        <div className={`font-bold tracking-tight text-slate-900 ${compact ? "text-lg" : "text-2xl"}`}>
          더소통컴퍼니
        </div>
        <div className={`text-slate-500 ${compact ? "text-[11px]" : "text-xs"}`}>
          Education & Consulting Partner
        </div>
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

  const [repImageError, setRepImageError] = useState(false);
  const [showCompanyDetail, setShowCompanyDetail] = useState(false);

  const menu = ["HOME", "회사소개", "교육프로그램", "교육문의"];

  const services = [
    {
      title: "조직활성화",
      items: ["팀빌딩", "조직문화진단", "심리적 안전감", "협업문화", "조직몰입", "조직활성화 워크숍"],
    },
    {
      title: "성격유형진단",
      items: ["MBTI", "애니어그램", "관계소통", "성향이해", "강점이해", "유형별 커뮤니케이션"],
    },
    {
      title: "소통교육",
      items: ["세대공감", "CS강의", "피드백", "부모소통", "직급별 소통", "갈등예방 대화", "고객응대 커뮤니케이션", "인성교육"],
    },
    {
      title: "리더십교육",
      items: ["팀장 리더십", "코칭형 리더십", "성과대화", "중간관리자 리더십", "공감 리더십", "팔로우십", "변화관리"],
    },
    {
      title: "힐링 · 스트레스교육",
      items: ["스트레스관리", "감정관리", "싱잉볼 명상", "번아웃 예방", "회복탄력성", "마음돌봄", "이완과 호흡"],
    },
    {
      title: "법정의무교육",
      items: ["장애인 인식개선", "개인정보보호", "성희롱예방", "직장 내 괴롭힘 예방", "퇴직연금교육", "기관 맞춤 의무교육", "인권교육"],
    },
    {
      title: "강의컨설팅 · 강사섭외",
      items: ["교육기획", "강사섭외", "운영컨설팅", "프로그램 설계", "맞춤형 워크숍", "연간 교육운영", "강사 파견 운영"],
    },
  ];

  const stats = [
    { label: "교육이수전문가", value: "500+" },
    { label: "업력", value: "15+" },
    { label: "고객유지율", value: "98%" },
  ];

  const formats = ["1회 특강", "반일 워크숍", "정기 과정", "연간 위탁운영", "강사섭외", "강사 파견 운영"];
  const targets = ["기업", "공공기관", "학교", "복지기관", "단체", "공동체"];
  const partnerGroups = [
    "공공기관",
    "지방자치단체",
    "공기업",
    "민간기업",
    "교육기관",
    "복지기관",
    "협회 · 단체",
    "여성·취업지원기관",
  ];

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
          people: formData.people,
          location: formData.location,
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
        email: "",
        field: "",
        people: "",
        location: "",
        schedule: "",
        budget_min: "",
        budget_max: "",
        message: "",
      });
    } catch (error) {
      alert("문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 lg:px-10 lg:py-4">
          <div className="min-w-0 flex-1 lg:flex-none">
            <DeosotongLogo compact />
          </div>

          <nav className="hidden items-center gap-3 overflow-x-auto whitespace-nowrap text-[12px] font-medium text-slate-600 sm:gap-4 sm:text-sm lg:flex lg:gap-8">
            {menu.map((item) => (
              <a key={item} href={`#${item}`} className="shrink-0 transition hover:text-slate-900">
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#교육문의"
            className="shrink-0 rounded-full bg-slate-900 px-3 py-2 text-[11px] font-medium text-white shadow-sm hover:bg-slate-800 sm:px-4 sm:text-xs lg:px-5 lg:py-2.5 lg:text-sm"
          >
            상담문의
          </a>
        </div>
      </header>

      <main>
        <section id="HOME" className="relative overflow-hidden bg-[linear-gradient(135deg,#f8fafc_0%,#eef4f8_50%,#e8eef5_100%)]">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-[1fr_0.95fr] lg:px-10 lg:py-24">
            <div className="flex flex-col justify-center">
              <div className="mb-5 inline-flex w-fit rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm">
                사람과 조직의 성장을 설계하는 교육 컨설팅 전문기업
              </div>
              <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-6xl">
                소통을 넘어
                <br />
                조직의 변화를 만드는 교육 컨설팅 기업
              </h1>
              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-slate-600 lg:mt-6 lg:text-lg">
                더소통컴퍼니는 대표강사 권혜미와 함께 조직의 변화와 성장을 설계하는 교육 컨설팅 파트너입니다.
                교육문의부터 상담, 강사섭외, 운영컨설팅까지 조직의 상황에 맞게 함께합니다.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#교육프로그램" className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-sm">
                  교육프로그램
                </a>
                <a
                  href="#교육문의"
                  className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-900 shadow-sm"
                >
                  교육문의
                </a>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:mt-10 lg:gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="relative h-[300px] sm:h-[360px] lg:h-[460px]">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80"
                  alt="회의 공간에서 교육을 진행하는 비즈니스 팀"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.35)_55%,rgba(15,23,42,0.72)_100%)]" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-[24px] border border-white/15 bg-white/10 p-5 text-white backdrop-blur-sm">
                      <div className="text-xs uppercase tracking-[0.18em] text-white/70">Deosotongcompany</div>
                      <div className="mt-3 text-2xl font-semibold leading-snug">
                        소통을 넘어 조직의 변화를 만드는 교육기업
                      </div>
                    </div>
                    <div className="rounded-[24px] border border-white/15 bg-slate-900/80 p-5 text-white shadow-lg backdrop-blur-sm">
                      <div className="text-sm font-medium text-white/75">Core Service</div>
                      <div className="mt-4 space-y-2 text-sm leading-6 text-white/90">
                        <div>• 교육기획</div>
                        <div>• 강사섭외</div>
                        <div>• 운영컨설팅</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="회사소개" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
          <div className="grid gap-6">
            <div className="rounded-[28px] border border-slate-200 bg-white px-5 py-6 shadow-sm sm:px-8 sm:py-8 lg:rounded-[32px] lg:px-10 lg:py-12">
              <div className="text-sm font-semibold text-slate-500">회사소개</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight lg:text-4xl">
                더소통컴퍼니는 사람과 조직의 성장을 설계하는 교육컨설팅 전문기업입니다.
              </h2>
              <div className="mt-5 max-w-5xl space-y-4 text-[15px] leading-7 text-slate-600 lg:mt-6 lg:space-y-5 lg:text-base lg:leading-8">
                <p>
                  더소통컴퍼니는 사람과 조직의 건강한 성장, 그리고 지속가능한 변화를 지원하는 교육 컨설팅 전문기업입니다.
                  우리는 소통을 단순한 대화의 기술이 아니라, 조직의 성과와 문화, 관계의 질을 결정하는 핵심 역량으로 바라봅니다.
                </p>
                <p>
                  기업, 공공기관, 교육기관 등 다양한 현장에서 축적한 경험을 바탕으로 커뮤니케이션, 조직문화, 리더십, CS, 감정관리,
                  관계역량, 직무역량 강화 등 조직에 꼭 필요한 주제를 중심으로 맞춤형 교육과 컨설팅을 제공합니다.
                </p>

                {showCompanyDetail && (
                  <>
                    <p>
                      더소통컴퍼니는 현장의 문제를 정확히 이해하고, 실질적으로 적용할 수 있는 해법을 제시하는 데 집중합니다.
                      단순히 좋은 내용을 전달하는 교육이 아니라, 구성원의 인식 변화와 행동 변화, 그리고 조직문화의 변화를 이끌어내는 교육을 지향합니다.
                    </p>
                    <p>
                      우리는 각 조직의 업종, 구성원 특성, 현장의 분위기와 과제를 반영하여 최적의 솔루션을 설계합니다.
                      이를 통해 조직 안에 더 나은 소통의 기준을 세우고, 신뢰와 협업이 살아 있는 건강한 문화를 함께 만들어갑니다.
                    </p>
                  </>
                )}

                <button
                  type="button"
                  onClick={() => setShowCompanyDetail((prev) => !prev)}
                  className="inline-flex rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 lg:hidden"
                >
                  {showCompanyDetail ? "간단히 보기" : "자세히 보기"}
                </button>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm lg:col-span-1">
                <div className="text-sm font-semibold text-slate-500">미션</div>
                <div className="mt-3 text-2xl font-bold tracking-tight">소통을 통해 사람과 조직의 가능성을 확장한다.</div>
              </div>
              <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm lg:col-span-2">
                <div className="text-sm font-semibold text-slate-500">비전</div>
                <div className="mt-3 text-2xl font-bold tracking-tight">
                  신뢰와 협업이 살아 있는 건강한 조직문화를 만드는 교육 컨설팅 파트너
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
          <div className="grid gap-4 lg:gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm">
              <div className="grid h-full md:grid-cols-[0.85fr_1.15fr]">
                <div className="flex items-center bg-slate-100 p-4 sm:p-6 md:p-8">
                  {repImageError ? (
                    <div className="flex h-full min-h-[280px] w-full items-center justify-center rounded-[24px] border border-slate-200 bg-white text-center text-sm leading-6 text-slate-500 sm:min-h-[360px] lg:min-h-[420px]">
                      대표강사 사진을 불러오지 못했습니다.
                    </div>
                  ) : (
                    <img
                      src={representativeImage}
                      alt="더소통컴퍼니 대표강사 권혜미 사진"
                      className="w-full max-h-[360px] rounded-[24px] object-cover object-top sm:max-h-[440px] lg:max-h-[520px]"
                      onError={() => setRepImageError(true)}
                    />
                  )}
                </div>
                <div className="flex flex-col justify-center p-5 sm:p-6 lg:p-8">
                  <div className="text-sm font-semibold text-slate-500">대표 인사말</div>
                  <h3 className="mt-2 text-3xl font-bold tracking-tight">대표강사와 함께하는 맞춤형 교육</h3>
                  <div className="mt-4 max-w-lg space-y-4 text-base leading-7 text-slate-600">
                    <p>
                      안녕하세요.
                      <br />
                      더소통컴퍼니 대표강사 권혜미 입니다.
                    </p>
                    <p>
                      오늘날 조직이 마주하는 많은 문제는 단순한 업무 방식의 문제가 아니라,
                      사람과 사람 사이의 소통, 관계, 신뢰의 문제에서 시작되는 경우가 많습니다.
                    </p>
                    <p>
                      더소통컴퍼니는 현장 경험을 바탕으로 실효성 있는 교육과 실질적인 변화로 이어지는 컨설팅을 제공합니다.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={BLOG_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                    >
                      대표강사 블로그 바로가기
                    </a>

                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                      대표강사 인스타그램 바로가기
                    </a>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["조직소통", "리더십", "관계교육", "힐링 프로그램"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full min-h-[360px] overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm">
              <div className="relative h-full min-h-[260px] sm:min-h-[320px] lg:min-h-[360px]">
                <img
                  src="/lecture-seminar-bg.jpg"
                  alt="많은 참석자가 강의를 듣고 있는 세미나 현장"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.04)_0%,rgba(15,23,42,0.14)_40%,rgba(15,23,42,0.48)_100%)]" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="text-sm font-medium text-white/80">Lecture & Seminar</div>
                  <div className="mt-2 text-3xl font-bold tracking-tight">활기찬 교육 현장 운영</div>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-white/85">
                    다양한 참석자가 함께하는 교육 현장에서, 프로그램 기획부터 강사섭외와 운영까지 안정적으로 진행합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-10 lg:py-6">
          <div className="rounded-[32px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_100%)] px-8 py-10 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="text-sm font-semibold text-slate-500">출강 분야 및 협업 대상</div>
                <h3 className="mt-2 text-2xl font-bold tracking-tight">다양한 기관과 기업에서 함께해 왔습니다</h3>
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
              <h2 className="mt-2 text-3xl font-bold tracking-tight">핵심 프로그램</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-600">
              핵심 카테고리를 더 쉽게 읽을 수 있도록 정리했습니다.
            </p>
          </div>

          <div className="mt-6 grid gap-4 lg:mt-10 lg:gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const meta = serviceMeta[service.title];
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
                      <div className="text-xl font-semibold tracking-tight">{service.title}</div>
                    </div>
                    <Sparkles size={18} className="mt-1 text-slate-400" />
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.items.slice(0, 5).map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-600"
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

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10 lg:py-16">
          <div className="grid gap-4 lg:gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-6">
              <div className="rounded-[24px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_100%)] p-5 shadow-sm sm:p-6 lg:rounded-[30px] lg:p-8">
                <div className="text-sm font-semibold text-sky-800/70">왜 더소통컴퍼니인가</div>
                <h3 className="mt-2 text-2xl font-bold tracking-tight">현장을 이해하는 교육 컨설팅의 기준</h3>
                <div className="mt-5 grid gap-3 md:mt-6 md:gap-4 md:grid-cols-2">
                  {strengthMeta.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-[24px] border border-slate-200 bg-[linear-gradient(180deg,#f8fbff_0%,#f2f7fb_100%)] p-5"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#dbeafe_0%,#eff6ff_100%)] text-slate-700 shadow-sm ring-1 ring-sky-100">
                          <Icon size={22} />
                        </div>
                        <div className="mt-4 text-lg font-semibold tracking-tight text-slate-900">{item.title}</div>
                        <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div
              id="교육운영"
              className="rounded-[30px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_100%)] p-8 shadow-sm"
            >
              <div className="text-sm font-semibold text-cyan-800/70">서비스 프로세스</div>
              <h3 className="mt-2 text-2xl font-bold tracking-tight">
                체계적인 단계별 과정을 통해 최고의 교육 효과를 보장합니다.
              </h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-2">
                {processMeta.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.no}
                      className="rounded-[24px] border border-slate-200 bg-[linear-gradient(180deg,#f8fbff_0%,#f2f7fb_100%)] p-5"
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold tracking-tight">{item.no}</div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#dbeafe_0%,#e0f2fe_100%)] text-slate-700">
                          <Icon size={20} />
                        </div>
                      </div>
                      <div className="mt-4 text-base font-semibold">{item.title}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
          <div className="grid gap-4 lg:gap-6 lg:grid-cols-2">
            <div className="rounded-[32px] border border-slate-200 bg-white px-8 py-10 shadow-sm">
              <div className="text-sm font-semibold text-sky-800/70">교육 대상</div>
              <h3 className="mt-2 text-2xl font-bold tracking-tight">이런 곳에 추천합니다</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {targets.map((item) => (
                  <span key={item} className="rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-sm text-sky-900/80">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white px-8 py-10 shadow-sm">
              <div className="text-sm font-semibold text-cyan-800/70">운영 형태</div>
              <h3 className="mt-2 text-2xl font-bold tracking-tight">유연한 운영</h3>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {formats.map((item) => (
                  <div key={item} className="rounded-2xl border border-cyan-100 bg-cyan-50 px-4 py-3 text-sm text-cyan-900/80">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="교육문의" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10 lg:py-16">
          <div className="grid gap-4 lg:gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-[24px] bg-[linear-gradient(180deg,#1e293b_0%,#0f172a_100%)] p-6 text-white shadow-sm lg:rounded-[30px] lg:p-8">
              <div className="text-sm font-medium text-white/75">교육문의</div>
              <h2 className="mt-2 text-3xl font-bold tracking-tight">소통으로 변화시킬 준비가 되셨나요?</h2>
              <p className="mt-4 text-base leading-7 text-white/85">
                문의 주시면 상담 후 필요한 방향에 맞춰 안내해드립니다.
              </p>
              <div className="mt-8 space-y-3 text-sm text-white/85">
                <div>전화번호 010-5007-2314</div>
                <div>이메일 konemi@naver.com</div>
                <div>운영시간 평일 09:00 - 18:00 (주말 및 공휴일 휴무)</div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-[30px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_100%)] p-8 shadow-sm"
            >
              <div className="mb-5 rounded-2xl border border-sky-100 bg-sky-50 px-4 py-3 text-sm leading-6 text-slate-600">
                문의 내용을 남겨주시면 확인 후 순차적으로 연락드립니다. 접수된 내용은 등록된 이메일로 전달됩니다.
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["기관명 / 회사명", "company"],
                  ["담당자명", "manager"],
                  ["연락처", "phone"],
                  ["이메일", "email"],
                  ["교육 희망 분야", "field"],
                  ["대상 인원", "people"],
                  ["예상 강의장소", "location"],
                  ["희망 일정", "schedule"],
                  ["예산 최소 금액", "budget_min"],
                  ["예산 최대 금액", "budget_max"],
                ].map(([label, key]) => (
                  <label key={label} className="text-sm text-slate-700">
                    <div className="mb-2 font-medium">{label}</div>
                    <input
                      value={formData[key]}
                      onChange={(e) => handleChange(key, e.target.value)}
                      className="w-full rounded-2xl border border-slate-200 bg-[linear-gradient(180deg,#f8fbff_0%,#f8fafc_100%)] px-4 py-3 outline-none placeholder:text-slate-400 focus:border-sky-300 focus:ring-2 focus:ring-sky-100"
                      placeholder={label}
                    />
                  </label>
                ))}

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
                className="mt-5 w-full rounded-full bg-[linear-gradient(135deg,#0f172a_0%,#1e3a8a_100%)] px-6 py-3 text-sm font-medium text-white shadow-sm hover:opacity-95"
              >
                문의하기
              </button>
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
