'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, ChevronDown, Clock3, Facebook, Instagram, Menu, Phone, ShieldCheck, Stethoscope, X } from 'lucide-react'

const images = {
  facade: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG001%20%281%29-AbZhhTmgQee7D0o63HmwvpXSOYcxrw.jpg',
  logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG000%20%281%29-8cvNZUTIyBsr1WcGFvqlA3Kp30yvFn.jpg',
  reception: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG001-BCcF39ZeOTDi8mT95KQiogtjBK1Rds.jpg',
  ward: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG007-Hf5LD4GDQy8d3isLerqfVerp1GCPBz.jpg',
  corridor: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG008-8VZDq3oXIwHY3i1pEvryml1QXqHpBW.jpg',
}

const services = [
  { number: '01', title: 'Maternité & obstétrique', text: 'Un accompagnement attentif pour chaque étape de votre maternité.', icon: '✧' },
  { number: '02', title: 'Imagerie médicale', text: 'Des équipements modernes pour des diagnostics fiables et précis.', icon: '◌' },
  { number: '03', title: 'Hémodialyse', text: 'Une unité dédiée, confortable et une équipe à vos côtés.', icon: '⌁' },
]

export default function ClinicHome() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [arabic, setArabic] = useState(false)

  const t = arabic
    ? { home: 'الرئيسية', services: 'خدماتنا', about: 'من نحن', contact: 'اتصل بنا', hero: 'صحتكم، أولويتنا.', intro: 'رعاية طبية متميزة في الشلف، في خدمتكم على مدار الساعة.', cta: 'احجز موعداً', explore: 'اكتشف خدماتنا' }
    : { home: 'Accueil', services: 'Nos services', about: 'La clinique', contact: 'Contact', hero: 'Votre santé, notre priorité.', intro: 'Une prise en charge médicale d’excellence à Chlef, à vos côtés 24h/24.', cta: 'Prendre rendez-vous', explore: 'Découvrir nos services' }

  return (
    <main dir={arabic ? 'rtl' : 'ltr'} className="min-h-screen overflow-hidden bg-[#f8fbfb] text-[#123c4b]">
      <div className="bg-[#073b4c] px-6 py-2 text-center text-[11px] font-medium tracking-[0.15em] text-white/80">OUVERT 24H/24 · 7J/7 <span className="mx-3 text-[#64d6d0]">•</span> CHLEF, ALGÉRIE</div>
      <header className="absolute left-0 right-0 top-8 z-20 border-b border-white/15 bg-transparent px-6 py-5 text-white md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#accueil" className="flex items-center gap-3">
            <Image src={images.logo} alt="Logo Clinique El Hikma" width={48} height={48} className="size-11 rounded-full object-cover" />
            <span className="hidden text-sm font-bold leading-tight tracking-[0.08em] sm:block">CLINIQUE<br /><span className="font-normal text-white/70">EL HIKMA</span></span>
          </a>
          <nav className="hidden items-center gap-9 text-sm font-medium md:flex">
            <a href="#accueil" className="text-[#73ded7]">{t.home}</a><a href="#services" className="transition hover:text-[#73ded7]">{t.services}</a><a href="#clinique" className="transition hover:text-[#73ded7]">{t.about}</a><a href="#contact" className="transition hover:text-[#73ded7]">{t.contact}</a>
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={() => setArabic(!arabic)} className="rounded-full border border-white/30 px-3 py-1.5 text-xs font-semibold hover:bg-white/10" aria-label="Changer de langue">{arabic ? 'FR' : 'عربي'}</button>
            <a href="tel:020643535" className="hidden items-center gap-2 rounded-full bg-[#65d7d0] px-4 py-2.5 text-xs font-bold text-[#073b4c] sm:flex"><Phone className="size-3.5" /> 020 64 35 35</a>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">{menuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        {menuOpen && <nav className="mt-5 flex flex-col gap-4 border-t border-white/15 pt-5 text-sm md:hidden"><a href="#accueil">{t.home}</a><a href="#services">{t.services}</a><a href="#clinique">{t.about}</a><a href="#contact">{t.contact}</a></nav>}
      </header>

      <section id="accueil" className="relative flex min-h-[680px] items-end overflow-hidden bg-[#073b4c] px-6 pb-16 pt-44 text-white md:min-h-[760px] md:px-12 md:pb-24">
        <Image src={images.facade} alt="Façade de la Clinique El Hikma à Chlef" fill priority className="object-cover object-center opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#052d3b]/95 via-[#073b4c]/65 to-[#073b4c]/15" />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-end gap-12 md:grid-cols-[1.05fr_.95fr]">
          <div className="max-w-2xl">
            <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#73ded7]"><span className="h-px w-10 bg-[#73ded7]" /> Établissement hospitalier privé</p>
            <h1 className="max-w-xl font-serif text-5xl leading-[.98] tracking-[-0.04em] md:text-8xl">{t.hero}</h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-white/75">{t.intro}</p>
            <div className="mt-9 flex flex-wrap gap-3"><a href="#contact" className="group flex items-center gap-3 rounded-full bg-[#67d9d2] px-6 py-3.5 text-sm font-bold text-[#073b4c]">{t.cta}<ArrowUpRight className="size-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" /></a><a href="#services" className="rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold transition hover:bg-white/10">{t.explore}</a></div>
          </div>
          <div className="hidden justify-end md:flex"><div className="max-w-[220px] border-l border-white/30 pl-6 text-sm leading-relaxed text-white/70"><ShieldCheck className="mb-5 size-7 text-[#67d9d2]" /><p>Une équipe engagée pour votre bien-être et votre sécurité, à chaque instant.</p></div></div>
        </div>
        <div className="absolute bottom-7 right-12 hidden items-center gap-3 text-xs text-white/50 md:flex"><span className="h-px w-10 bg-white/40" /> SCROLL TO EXPLORE</div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32">
        <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end"><div><p className="eyebrow">Notre expertise</p><h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight text-[#073b4c] md:text-6xl">Des soins pensés autour de vous.</h2></div><p className="max-w-sm text-sm leading-relaxed text-[#55717a]">Des infrastructures modernes, une équipe pluridisciplinaire et une attention constante portée à chaque patient.</p></div>
        <div className="grid gap-4 md:grid-cols-3">{services.map((service) => <article key={service.number} className="group rounded-[2px] border border-[#cfe3e4] bg-white p-7 transition hover:-translate-y-1 hover:border-[#67d9d2] hover:shadow-xl hover:shadow-[#073b4c]/5"><div className="flex items-start justify-between"><span className="text-sm font-semibold text-[#78babb]">{service.number}</span><span className="text-3xl text-[#21aaa6]">{service.icon}</span></div><h3 className="mt-16 font-serif text-2xl text-[#073b4c]">{service.title}</h3><p className="mt-3 text-sm leading-relaxed text-[#607980]">{service.text}</p><a href="#contact" className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-[#139e9a]">En savoir plus <ArrowUpRight className="size-3" /></a></article>)}</div>
      </section>

      <section id="clinique" className="bg-[#eaf5f4] px-6 py-24 md:px-12 md:py-32"><div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-[1fr_1fr] md:gap-24"><div className="relative"><div className="absolute -bottom-5 -left-5 h-32 w-32 border-l border-b border-[#67d9d2]" /><Image src={images.ward} alt="Salle de soins de la Clinique El Hikma" width={750} height={520} className="relative h-[390px] w-full object-cover md:h-[530px]" /><div className="absolute bottom-5 right-5 bg-white px-5 py-4 shadow-lg"><div className="font-serif text-3xl text-[#073b4c]">24/7</div><div className="text-[10px] uppercase tracking-widest text-[#6a858b]">À votre service</div></div></div><div><p className="eyebrow">La clinique</p><h2 className="mt-4 font-serif text-4xl leading-tight text-[#073b4c] md:text-6xl">L’excellence médicale, ici à Chlef.</h2><p className="mt-7 text-base leading-8 text-[#55717a]">Pensée pour offrir un environnement rassurant et humain, la Clinique El Hikma réunit des espaces accueillants, des technologies de pointe et des professionnels qui prennent le temps de vous écouter.</p><div className="mt-9 grid grid-cols-2 gap-6 border-t border-[#c5dddd] pt-7"><div><div className="font-serif text-3xl text-[#139e9a]">+10</div><div className="mt-1 text-xs text-[#607980]">Spécialités médicales</div></div><div><div className="font-serif text-3xl text-[#139e9a]">100%</div><div className="mt-1 text-xs text-[#607980]">Engagement humain</div></div></div></div></div></section>

      <section className="relative overflow-hidden bg-[#073b4c] px-6 py-24 text-white md:px-12 md:py-28"><Image src={images.reception} alt="Accueil de la Clinique El Hikma" fill className="object-cover opacity-15" /><div className="relative z-10 mx-auto max-w-4xl text-center"><p className="eyebrow text-[#73ded7]">Votre confort, notre engagement</p><h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">Un accueil chaleureux. Des soins qui font la différence.</h2><a href="#contact" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#67d9d2] px-7 py-4 text-sm font-bold text-[#073b4c]">Nous contacter <ArrowUpRight className="size-4" /></a></div></section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32"><div className="grid gap-14 md:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">Parlons-nous</p><h2 className="mt-4 font-serif text-5xl leading-tight text-[#073b4c]">Nous sommes là pour vous.</h2><p className="mt-6 max-w-sm text-sm leading-7 text-[#607980]">Une question ou besoin d’un rendez-vous ? Notre équipe vous répond à tout moment.</p><div className="mt-10 flex flex-col gap-5 text-sm"><a href="tel:020643535" className="flex items-center gap-4 font-semibold text-[#073b4c]"><span className="flex size-10 items-center justify-center rounded-full bg-[#daf2f0] text-[#139e9a]"><Phone className="size-4" /></span>020 64 35 35</a><div className="flex items-center gap-4"><span className="flex size-10 items-center justify-center rounded-full bg-[#daf2f0] text-[#139e9a]"><Clock3 className="size-4" /></span><span>Ouvert 24h/24 · 7j/7</span></div><div className="flex items-center gap-4"><span className="flex size-10 items-center justify-center rounded-full bg-[#daf2f0] text-[#139e9a]"><Stethoscope className="size-4" /></span><span>Cité 184 logements AADL, Chlef</span></div></div></div><div className="bg-[#f1f8f7] p-7 md:p-10"><div className="mb-7 flex items-center justify-between"><h3 className="font-serif text-2xl text-[#073b4c]">Prendre rendez-vous</h3><span className="rounded-full bg-[#d7f2f0] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#139e9a]">Réponse rapide</span></div><form className="grid gap-4" onSubmit={(e) => e.preventDefault()}><div className="grid gap-4 sm:grid-cols-2"><input aria-label="Votre nom" placeholder="Votre nom" className="border-b border-[#b8d5d5] bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[#7b979b] focus:border-[#139e9a]" /><input aria-label="Votre téléphone" placeholder="Votre téléphone" className="border-b border-[#b8d5d5] bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[#7b979b] focus:border-[#139e9a]" /></div><select aria-label="Choisir un service" className="border-b border-[#b8d5d5] bg-transparent px-0 py-3 text-sm text-[#7b979b] outline-none"><option>Choisir un service</option><option>Maternité & obstétrique</option><option>Imagerie médicale</option><option>Hémodialyse</option></select><textarea aria-label="Votre message" placeholder="Votre message" rows={3} className="resize-none border-b border-[#b8d5d5] bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[#7b979b] focus:border-[#139e9a]" /><button className="mt-4 flex w-fit items-center gap-3 rounded-full bg-[#073b4c] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#139e9a]">Envoyer la demande <ArrowUpRight className="size-4" /></button></form></div></div></section>

      <footer className="bg-[#052f3d] px-6 py-10 text-white md:px-12"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 border-b border-white/15 pb-8 md:flex-row md:items-center"><div className="flex items-center gap-3"><Image src={images.logo} alt="Logo Clinique El Hikma" width={42} height={42} className="size-10 rounded-full object-cover" /><div className="text-xs font-bold tracking-widest">CLINIQUE EL HIKMA<div className="mt-1 font-normal tracking-normal text-white/50">Votre santé, notre priorité.</div></div></div><div className="flex gap-4 text-white/60"><a href="#" aria-label="Facebook"><Facebook className="size-4" /></a><a href="#" aria-label="Instagram"><Instagram className="size-4" /></a><a href="tel:020643535" className="text-xs font-semibold text-[#73ded7]">020 64 35 35</a></div></div><div className="mx-auto flex max-w-7xl justify-between pt-6 text-[10px] tracking-wide text-white/40"><span>© 2024 Clinique El Hikma. Tous droits réservés.</span><span className="hidden sm:block">Chlef · Algérie</span></div></footer>
    </main>
  )
}
