"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Braces,
  Building2,
  Check,
  CircleDot,
  Code2,
  FileText,
  Gauge,
  Layers3,
  Menu,
  PanelTop,
  Presentation,
  Rocket,
  Send,
  Sparkles,
  Target,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { useMemo, useState } from "react";
import HeroScene from "./components/HeroScene";

const solutions = [
  {
    no: "01",
    icon: PanelTop,
    title: "Лендинги",
    subtitle: "Для запуска и продаж",
    text: "Один сильный оффер, понятный маршрут до заявки и аналитика без лишних экранов.",
    result: "Фокус: конверсия",
    kind: "landing",
  },
  {
    no: "02",
    icon: Building2,
    title: "Сайты компаний",
    subtitle: "Для доверия и масштаба",
    text: "Цифровая упаковка бизнеса, которая объясняет ценность и сокращает путь до решения.",
    result: "Фокус: доверие",
    kind: "company",
  },
  {
    no: "03",
    icon: Presentation,
    title: "Презентации",
    subtitle: "Для сделки и выступления",
    text: "Структура аргументов, сильная подача и визуальная логика, которая удерживает внимание.",
    result: "Фокус: убеждение",
    kind: "deck",
  },
  {
    no: "04",
    icon: Workflow,
    title: "CRM-системы",
    subtitle: "Для порядка и скорости",
    text: "Заявки, статусы, задачи и ключевые показатели в одном рабочем контуре.",
    result: "Фокус: процессы",
    kind: "crm",
  },
] as const;

const process = [
  { no: "01", title: "Диагностика", text: "Разбираю продукт, аудиторию, конкурентов и реальную цель проекта." },
  { no: "02", title: "Архитектура", text: "Собираю оффер, сценарий, структуру и прототип до визуального дизайна." },
  { no: "03", title: "Производство", text: "Создаю дизайн, разработку, анимацию и нужные интеграции как одну систему." },
  { no: "04", title: "Запуск и рост", text: "Проверяю, подключаю аналитику и оставляю понятную основу для улучшений." },
] as const;

const capabilities = [
  "Исследование",
  "UX-архитектура",
  "Арт-дирекшн",
  "Frontend",
  "CRM / API",
  "Аналитика",
  "Автоматизация",
  "Motion design",
];

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1] }}>{children}</motion.div>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [["projects", "Решения"], ["impact", "Эффект"], ["process", "Подход"], ["about", "Обо мне"], ["contact", "Контакт"]];
  return <><header className="topbar"><a className="brand" href="#home" aria-label="xxvii — на главную">xxvii<span>°</span></a><nav className="topnav">{links.map((link, i) => <a href={`#${link[0]}`} key={link[0]}><span>0{i + 1}</span>{link[1]}</a>)}</nav><a className="mini-cta" href="#contact">Обсудить проект <i /></a><button className="menu" aria-label="Открыть меню" onClick={() => setOpen(true)}><Menu size={21} /></button></header>{open && <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }}><button aria-label="Закрыть меню" onClick={() => setOpen(false)}><X /></button>{links.map((link, i) => <a onClick={() => setOpen(false)} href={`#${link[0]}`} key={link[0]}><span>0{i + 1}</span>{link[1]}</a>)}</motion.div>}</>;
}

function SideRail() {
  return <aside className="side-rail"><div className="rail-mark">27</div><div className="rail-copy"><span>НАЗИР</span><b>DIGITAL PRODUCT PARTNER</b></div><div className="rail-status"><i />AVAILABLE</div><div className="rail-place">46.3497° N<br />48.0408° E</div></aside>;
}

function Hero() {
  return <section className="hero" id="home"><div className="hero-copy"><motion.div className="hero-kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }}><span>XXVII / 2026</span><i />Астрахань · работаю удалённо</motion.div><motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>/// DIGITAL BUSINESS SYSTEMS</motion.p><motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>Не просто сайт.<br />Система, которая <em>двигает бизнес</em></motion.h1><motion.p className="lede" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18 }}>Я Назир, основатель xxvii. Создаю лендинги, сайты компаний, презентации и CRM-системы вокруг одной цели — помочь бизнесу получать больше клиентов и продаж.</motion.p><motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}><a className="button primary" href="#contact">Обсудить задачу <ArrowUpRight size={17} /></a><a className="button secondary" href="#projects">Смотреть решения <ArrowDown size={16} /></a></motion.div><div className="hero-meta"><span><Code2 size={14} />Strategy · Design · Development</span><span className="availability"><i />Открыт к проектам</span></div></div><div className="hero-art"><HeroScene /><span className="art-label art-top">XXVII / CORE_01</span><span className="art-label art-side">INTERACTIVE SYSTEM</span><div className="hero-console"><div><CircleDot size={12} />SYSTEM ONLINE</div><p><span>01</span>Business logic</p><p><span>02</span>Interface system</p><p><span>03</span>Product launch</p></div></div><div className="hero-strip">{[["01", "Лендинги"], ["02", "Сайты"], ["03", "Презентации"], ["04", "CRM"]].map(([no, label]) => <div key={no}><span>{no}</span><strong>{label}</strong><i /></div>)}</div><a className="scroll-hint" href="#projects"><ArrowDown size={14} />SCROLL / EXPLORE</a></section>;
}

function SolutionVisual({ kind }: { kind: typeof solutions[number]["kind"] }) {
  return <div className={`solution-visual ${kind}`}><div className="visual-head"><i /><i /><i /><span>xxvii / {kind}</span></div><div className="visual-body"><aside><b /><b /><b /><b /></aside><main><span /><strong /><span /><div><i /><i /><i /></div></main></div><small>BUSINESS INTERFACE</small></div>;
}

function Solutions() {
  return <section className="section solutions" id="projects"><div className="section-head"><div><p className="eyebrow">/// WHAT I BUILD</p><h2>Инструменты роста,<br />а не <em>набор экранов</em></h2></div><p>Каждый формат решает конкретную задачу бизнеса.<br />Технологии и визуал подчиняются результату.</p></div><div className="solution-grid">{solutions.map((solution) => <Reveal className="solution-card" key={solution.title}><div className="solution-copy"><span className="solution-no">{solution.no}</span><solution.icon size={20} /><p>{solution.subtitle}</p><h3>{solution.title}</h3><div className="solution-text">{solution.text}</div><strong><Check size={13} />{solution.result}</strong></div><SolutionVisual kind={solution.kind} /></Reveal>)}</div></section>;
}

function RangeControl({ label, value, min, max, step, suffix, onChange }: { label: string; value: number; min: number; max: number; step: number; suffix: string; onChange: (value: number) => void }) {
  const progress = ((value - min) / (max - min)) * 100;
  return <label className="range-control"><span>{label}<b>{value.toLocaleString("ru-RU")}{suffix}</b></span><input type="range" min={min} max={max} step={step} value={value} onChange={(event) => onChange(Number(event.target.value))} style={{ background: `linear-gradient(90deg, #ff3d31 ${progress}%, #242424 ${progress}%)` }} /></label>;
}

function ImpactCalculator() {
  const [visitors, setVisitors] = useState(3000);
  const [conversion, setConversion] = useState(2);
  const [closeRate, setCloseRate] = useState(20);
  const [average, setAverage] = useState(50000);
  const result = useMemo(() => {
    const current = visitors * (conversion / 100) * (closeRate / 100) * average;
    const improved = visitors * ((conversion + 0.8) / 100) * (closeRate / 100) * average;
    return { current, growth: improved - current, leads: visitors * 0.008 };
  }, [visitors, conversion, closeRate, average]);
  const money = (value: number) => `${Math.round(value).toLocaleString("ru-RU")} ₽`;
  return <section className="section impact" id="impact"><Reveal className="impact-copy"><p className="eyebrow">/// BUSINESS IMPACT LAB</p><h2>Сайт должен<br /><em>считать деньги</em></h2><p>Этот сценарий показывает, почему даже небольшой рост конверсии имеет значение. Меняйте вводные и смотрите потенциальный эффект.</p><div className="impact-note"><Gauge size={18} /><span>Сценарий: рост конверсии сайта на 0,8 процентного пункта без увеличения рекламного трафика.</span></div></Reveal><Reveal className="calculator"><div className="calc-head"><span>IMPACT_SIMULATOR / V1.0</span><i />LIVE MODEL</div><div className="calc-grid"><div className="calc-controls"><RangeControl label="Посетителей в месяц" value={visitors} min={500} max={20000} step={500} suffix="" onChange={setVisitors} /><RangeControl label="Конверсия сайта" value={conversion} min={0.5} max={8} step={0.1} suffix="%" onChange={setConversion} /><RangeControl label="Закрытие заявок" value={closeRate} min={5} max={70} step={5} suffix="%" onChange={setCloseRate} /><RangeControl label="Средний чек" value={average} min={10000} max={500000} step={10000} suffix=" ₽" onChange={setAverage} /></div><div className="calc-result"><span>ВОЗМОЖНЫЙ ПРИРОСТ</span><strong>+{money(result.growth)}</strong><p>в месяц</p><div><b>+{result.leads.toFixed(0)}</b><span>дополнительных<br />заявок</span></div><small>Расчёт ориентировочный и не является гарантией результата.</small></div></div></Reveal></section>;
}

function Process() {
  return <section className="section process" id="process"><div className="section-head"><div><p className="eyebrow">/// WORKING PROTOCOL</p><h2>Сначала логика.<br />Потом <em>вау-эффект</em></h2></div><p>Красивый интерфейс становится сильным,<br />когда за ним стоит ясная система решений.</p></div><div className="process-line">{process.map((step, i) => <Reveal className="process-step" key={step.no}><div><span>{step.no}</span>{i < process.length - 1 && <i />}</div><h3>{step.title}</h3><p>{step.text}</p></Reveal>)}</div></section>;
}

function About() {
  return <section className="section about" id="about"><Reveal className="identity-card"><div className="identity-grid" /><span className="identity-code">PERSON / 0027</span><div className="identity-mark"><b>xx</b><b>vii</b></div><div className="identity-orbit" /><div className="identity-facts"><span><b>25</b>лет</span><span><b>AST</b>Астрахань</span><span><b>RU</b>работаю удалённо</span></div></Reveal><Reveal className="about-copy"><p className="eyebrow">/// NAZIR / XXVII</p><h2>Хочу быть специалистом, к которому приходят <em>за результатом</em></h2><p className="about-lead">Поэтому я не начинаю с цвета кнопок. Сначала выясняю, кому и что мы продаём, почему клиент должен выбрать вас и какой путь приведёт его к действию.</p><p>Мой бренд — xxvii. Через него я объединяю стратегию, дизайн и технологии в продукты, которые выглядят серьёзно и работают как часть бизнеса.</p><div className="about-values"><span><Target size={15} />Цель до инструмента</span><span><Layers3 size={15} />Система до декора</span><span><BarChart3 size={15} />Результат после запуска</span></div></Reveal></section>;
}

function SystemStack() {
  return <section className="section stack" id="stack"><div className="section-head"><div><p className="eyebrow">/// CAPABILITY MATRIX</p><h2>От смысла<br />до <em>работающей системы</em></h2></div><p>Подбираю стек под задачу,<br />а не задачу под любимый инструмент.</p></div><div className="stack-layout"><Reveal className="capability-grid">{capabilities.map((item, i) => <div key={item}><span>{String(i + 1).padStart(2, "0")}</span><strong>{item}</strong><ArrowUpRight size={14} /></div>)}</Reveal><Reveal className="terminal-card"><div className="terminal-head"><i /><i /><i /><span>xxvii://project/core</span></div><div className="terminal-body"><p><span>$</span> initialize_project</p><p><b>✓</b> audience ........ mapped</p><p><b>✓</b> offer ........... sharpened</p><p><b>✓</b> conversion_path . designed</p><p><b>✓</b> system .......... connected</p><p className="terminal-ready"><span>→</span> READY_TO_LAUNCH <i /></p></div><div className="stack-tags">{["Next.js", "React", "TypeScript", "CRM / API", "Analytics", "Motion"].map((tag) => <span key={tag}>{tag}</span>)}</div></Reveal></div></section>;
}

function Contact() {
  const [copied, setCopied] = useState(false);
  async function copyBrief() {
    await navigator.clipboard.writeText("Привет, Назир! Хочу обсудить проект. Задача: … Цель: … Срок: …");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2400);
  }
  return <section className="contact" id="contact"><div className="contact-grid" /><div className="contact-copy"><p className="eyebrow">/// START A PROJECT</p><h2>Есть бизнес-задача?<br /><em>Соберём решение.</em></h2><p>Опишите продукт, цель и текущую ситуацию. Я помогу сформулировать следующий шаг без лишней технической сложности.</p><div className="contact-actions"><button className="button primary" onClick={copyBrief}>{copied ? <><Check size={17} />Бриф скопирован</> : <>Скопировать шаблон сообщения <Send size={17} /></>}</button><span>Короткий бриф помогает<br />начать разговор предметно.</span></div></div><div className="contact-panel"><div className="contact-status"><i /><span>PROJECT INTAKE</span><b>OPEN</b></div>{["Лендинг", "Сайт компании", "Презентация", "CRM-система"].map((item, i) => <div className="contact-row" key={item}><span>0{i + 1}</span><strong>{item}</strong><ArrowUpRight size={15} /></div>)}<div className="contact-foot"><Zap size={14} />Начинаем с короткого разговора о задаче</div></div></section>;
}

function Footer() {
  return <><footer><a className="brand" href="#home">xxvii<span>°</span></a><p>Назир · Астрахань · Digital products for business</p><a href="#home">Наверх ↑</a></footer><div className="xx-colophon"><span>Колофон</span><span>Астрахань · 2026 · шрифты Geist, Geist Mono</span><span>Дизайн и разработка — <a href="https://t.me/xxviiexe" target="_blank" rel="noopener" aria-label="Написать xxvii в Telegram">xxvii</a></span></div></>;
}

export default function Home() {
  return <main><Navbar /><SideRail /><div className="page"><Hero /><Solutions /><ImpactCalculator /><Process /><About /><SystemStack /><Contact /><Footer /></div></main>;
}
