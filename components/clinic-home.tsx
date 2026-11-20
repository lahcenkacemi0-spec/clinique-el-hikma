'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, Baby, Clock3, Droplets, Globe2, Menu, Phone, ScanLine, ShieldCheck, Stethoscope, X } from 'lucide-react'

const images = {
  facade: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG001%20%281%29-AbZhhTmgQee7D0o63HmwvpXSOYcxrw.jpg',
  logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG000%20%281%29-8cvNZUTIyBsr1WcGFvqlA3Kp30yvFn.jpg',
  reception: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG001-BCcF39ZeOTDi8mT95KQiogtjBK1Rds.jpg',
  ward: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG007-Hf5LD4GDQy8d3isLerqfVerp1GCPBz.jpg',
  corridor: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG008-8VZDq3oXIwHY3i1pEvryml1QXqHpBW.jpg',
}

const services = [
  { number: '01', title: 'Maternité & obstétrique', text: 'Un accompagnement attentif pour chaque étape de votre maternité.', icon: <Baby aria-hidden="true" className="size-7" /> },
  { number: '02', title: 'Imagerie médicale', text: 'Des équipements modernes pour des diagnostics fiables et précis.', icon: <ScanLine aria-hidden="true" className="size-7" /> },
  { number: '03', title: 'Hémodialyse', text: 'Une unité dédiée, confortable et une équipe à vos côtés.', icon: <Droplets aria-hidden="true" className="size-7" /> },
]

export default function ClinicHome() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [arabic, setArabic] = useState(false)

  useEffect(() => {
    const root = document.querySelector('main')
    if (!root) return

    const targets = root.querySelectorAll<HTMLElement>(
      'main > section:not(#accueil), section h1, section h2, section h3, section .eyebrow, section p, section article, section img'
    )
    const groups = new Map<Element, HTMLElement[]>()

    targets.forEach((target) => {
      target.dataset.reveal = ''
      const parent = target.parentElement
      if (parent) groups.set(parent, [...(groups.get(parent) ?? []), target])
    })
    groups.forEach((items) => items.forEach((item, index) => {
      item.style.setProperty('--reveal-delay', `${Math.min(index * 90, 360)}ms`)
    }))

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targets.forEach((target) => target.dataset.revealed = 'true')
      return
    }

    root.dataset.revealReady = 'true'
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        ;(entry.target as HTMLElement).dataset.revealed = 'true'
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.18 })

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (!menuOpen) return

    root.classList.add('mobile-menu-open')
    return () => root.classList.remove('mobile-menu-open')
  }, [menuOpen])

  const t = arabic
    ? {
        home: 'الرئيسية', services: 'خدماتنا', about: 'من نحن', contact: 'اتصل بنا', hero: 'صحتكم، أولويتنا.', intro: 'رعاية طبية متميزة في الشلف، في خدمتكم على مدار الساعة.', cta: 'احجز موعداً', explore: 'اكتشف خدماتنا',
        topLine: 'مفتوحة 24/24 · 7/7 • الشلف، الجزائر', institution: 'مؤسسة استشفائية خاصة', serviceEyebrow: 'خبرة طبية', serviceHeading: 'رعاية تتمحور حولكم.', serviceIntro: 'بنية تحتية حديثة وفريق متعدد التخصصات واهتمام دائم بكل مريض.', serviceNames: ['الأمومة والتوليد', 'التصوير الطبي', 'غسيل الكلى'], serviceDescriptions: ['مرافقة واهتمام في كل مرحلة من مراحل الأمومة.', 'معدات حديثة لتشخيص موثوق ودقيق.', 'وحدة مخصصة ومريحة وفريق طبي إلى جانبكم.'], learnMore: 'اكتشفوا المزيد',
        clinicEyebrow: 'العيادة', clinicHeading: 'تميز طبي هنا في الشلف.', clinicIntro: 'صُممت عيادة الحكمة لتوفير بيئة مطمئنة وإنسانية، وتجمع بين فضاءات ترحيبية وتقنيات متطورة ومهنيين يصغون إليكم.', availability: 'في خدمتكم', specialties: 'تخصصات طبية', commitment: 'التزام إنساني', comfortEyebrow: 'راحتكم، التزامنا', comfortHeading: 'استقبال دافئ. رعاية تصنع الفرق.',
        contactEyebrow: 'لنتحدث', contactHeading: 'نحن هنا من أجلكم.', contactIntro: 'لأي استفسار أو لحجز موعد، فريقنا يجيبكم في أي وقت.', openHours: 'مفتوحة 24/24 · 7/7', address: 'حي 184 مسكن عدل، الشلف', appointment: 'حجز موعد', quickReply: 'رد سريع', name: 'اسمكم', phone: 'رقم هاتفكم', chooseService: 'اختاروا خدمة', message: 'رسالتكم', send: 'إرسال الطلب',
        footerTagline: 'صحتكم، أولويتنا.', copyright: '© 2024 عيادة الحكمة. جميع الحقوق محفوظة.', location: 'الشلف · الجزائر', social: 'شبكات التواصل الاجتماعي'
      }
    : {
        home: 'Accueil', services: 'Nos services', about: 'La clinique', contact: 'Contact', hero: 'Votre santé, notre priorité.', intro: 'Une prise en charge médicale d’excellence à Chlef, à vos côtés 24h/24.', cta: 'Prendre rendez-vous', explore: 'Découvrir nos services',
        topLine: 'OUVERT 24H/24 · 7J/7 • CHLEF, ALGÉRIE', institution: 'Établissement hospitalier privé', serviceEyebrow: 'Notre expertise', serviceHeading: 'Des soins pensés autour de vous.', serviceIntro: 'Des infrastructures modernes, une équipe pluridisciplinaire et une attention constante portée à chaque patient.', serviceNames: services.map((service) => service.title), serviceDescriptions: services.map((service) => service.text), learnMore: 'En savoir plus',
        clinicEyebrow: 'La clinique', clinicHeading: 'L’excellence médicale, ici à Chlef.', clinicIntro: 'Pensée pour offrir un environnement rassurant et humain, la Clinique El Hikma réunit des espaces accueillants, des technologies de pointe et des professionnels qui prennent le temps de vous écouter.', availability: 'À votre service', specialties: 'Spécialités médicales', commitment: 'Engagement humain', comfortEyebrow: 'Votre confort, notre engagement', comfortHeading: 'Un accueil chaleureux. Des soins qui font la différence.',
        contactEyebrow: 'Parlons-nous', contactHeading: 'Nous sommes là pour vous.', contactIntro: 'Une question ou besoin d’un rendez-vous ? Notre équipe vous répond à tout moment.', openHours: 'Ouvert 24h/24 · 7j/7', address: 'Cité 184 logements AADL, Chlef', appointment: 'Prendre rendez-vous', quickReply: 'Réponse rapide', name: 'Votre nom', phone: 'Votre téléphone', chooseService: 'Choisir un service', message: 'Votre message', send: 'Envoyer la demande',
        footerTagline: 'Votre santé, notre priorité.', copyright: '© 2024 Clinique El Hikma. Tous droits réservés.', location: 'Chlef · Algérie', social: 'Réseaux sociaux'
      }

  return (
    <main lang={arabic ? 'ar' : 'fr'} dir={arabic ? 'rtl' : 'ltr'} className="min-h-screen bg-[#f8fbfb] text-[#123c4b]">
      <div className="announcement-bar bg-[#073b4c] py-2 text-[11px] font-medium tracking-[0.15em] text-white/80" aria-label={t.topLine}><div className="announcement-track"><span className="announcement-message">{t.topLine}</span><span className="announcement-message" aria-hidden="true">{t.topLine}</span></div></div>
      <header className="absolute left-0 right-0 top-8 z-20 border-b border-white/15 bg-[#073b4c]/15 px-4 py-3.5 text-white backdrop-blur-sm sm:px-6 sm:py-5 md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#accueil" className="clinic-header-logo flex items-center gap-3">
            <Image src={images.logo} alt={arabic ? 'شعار عيادة الحكمة' : 'Logo Clinique El Hikma'} width={48} height={48} className="clinic-logo-symbol size-11 rounded-full object-cover" />
            <span className="clinic-logo-wordmark hidden text-sm font-bold leading-tight tracking-[0.08em] sm:block">CLINIQUE<br /><span className="font-normal text-white/70">EL HIKMA</span></span>
          </a>
          <nav className="hidden items-center gap-9 text-sm font-medium lg:flex">
            <a href="#accueil" className="text-[#73ded7]">{t.home}</a><a href="#services" className="transition hover:text-[#73ded7]">{t.services}</a><a href="#clinique" className="transition hover:text-[#73ded7]">{t.about}</a><a href="#contact" className="transition hover:text-[#73ded7]">{t.contact}</a>
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={() => setArabic(!arabic)} className="header-control header-language min-h-11 min-w-11 rounded-full border border-white/30 px-3 py-1.5 text-xs font-semibold hover:bg-white/10" aria-label={arabic ? 'تغيير اللغة' : 'Changer de langue'}>{arabic ? 'FR' : 'عربي'}</button>
            <a href="tel:020643535" className="hidden min-h-11 items-center gap-2 rounded-full bg-[#65d7d0] px-4 py-2.5 text-xs font-bold text-[#073b4c] lg:flex"><Phone className="size-3.5" /> 020 64 35 35</a>
            <button className="header-control header-menu-button flex size-11 items-center justify-center rounded-full transition hover:bg-white/10 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={arabic ? (menuOpen ? 'إغلاق القائمة' : 'فتح القائمة') : (menuOpen ? 'Fermer le menu' : 'Ouvrir le menu')} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        <nav aria-label={arabic ? 'التنقل الرئيسي' : 'Navigation principale'} aria-hidden={!menuOpen} inert={!menuOpen} data-menu-open={menuOpen} className="header-navigation flex flex-col gap-1 rounded-xl border border-white/10 bg-[#073b4c] p-3 text-sm shadow-2xl lg:hidden"><a onClick={() => setMenuOpen(false)} href="#accueil" className="rounded-lg px-4 py-3.5 transition hover:bg-white/10">{t.home}</a><a onClick={() => setMenuOpen(false)} href="#services" className="rounded-lg px-4 py-3.5 transition hover:bg-white/10">{t.services}</a><a onClick={() => setMenuOpen(false)} href="#clinique" className="rounded-lg px-4 py-3.5 transition hover:bg-white/10">{t.about}</a><a onClick={() => setMenuOpen(false)} href="#contact" className="rounded-lg px-4 py-3.5 transition hover:bg-white/10">{t.contact}</a></nav>
      </header>

      <section id="accueil" className="relative flex min-h-[610px] items-end overflow-hidden bg-[#073b4c] px-5 pb-11 pt-32 text-white sm:min-h-[680px] sm:px-6 sm:pb-16 sm:pt-44 md:min-h-[760px] md:px-12 md:pb-24">
        <Image src={images.facade} alt="Façade de la Clinique El Hikma à Chlef" fill priority className="object-cover object-[62%_center] opacity-55 md:object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#052d3b]/95 via-[#073b4c]/65 to-[#073b4c]/15" />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-end gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div className="max-w-2xl">
            <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#73ded7]"><span className="h-px w-10 bg-[#73ded7]" /> {t.institution}</p>
            <h1 className="max-w-xl font-serif text-5xl leading-[.98] tracking-[-0.04em] sm:text-6xl lg:text-8xl">{t.hero}</h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-white/75">{t.intro}</p>
            <div className="mt-9 flex flex-wrap gap-3"><a href="#contact" className="group flex items-center gap-3 rounded-full bg-[#67d9d2] px-6 py-3.5 text-sm font-bold text-[#073b4c]">{t.cta}<ArrowUpRight className="size-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" /></a><a href="#services" className="rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold transition hover:bg-white/10">{t.explore}</a></div>
          </div>
          <div className="hidden justify-end lg:flex"><div className="max-w-[220px] border-l border-white/30 pl-6 text-sm leading-relaxed text-white/70"><ShieldCheck className="mb-5 size-7 text-[#67d9d2]" /><p>{arabic ? 'فريق ملتزم براحتكم وسلامتكم في كل وقت.' : 'Une équipe engagée pour votre bien-être et votre sécurité, à chaque instant.'}</p></div></div>
        </div>
        <div className="absolute bottom-7 right-12 hidden items-center gap-3 text-xs text-white/50 md:flex"><span className="h-px w-10 bg-white/40" /> {arabic ? 'مرروا لاكتشاف المزيد' : 'SCROLL TO EXPLORE'}</div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 md:px-12 md:py-32">
        <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end"><div><p className="eyebrow">{t.serviceEyebrow}</p><h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight text-[#073b4c] md:text-6xl">{t.serviceHeading}</h2></div><p className="max-w-sm text-sm leading-relaxed text-[#55717a]">{t.serviceIntro}</p></div>
        <div className="grid gap-4 lg:grid-cols-3">{services.map((service, index) => <article key={service.number} className="group rounded-[2px] border border-[#cfe3e4] bg-white p-7 transition hover:-translate-y-1 hover:border-[#67d9d2] hover:shadow-xl hover:shadow-[#073b4c]/5"><div className="flex items-start justify-between"><span className="text-sm font-semibold text-[#78babb]">{service.number}</span><span className="text-[#21aaa6]">{service.icon}</span></div><h3 className="mt-16 font-serif text-2xl text-[#073b4c]">{t.serviceNames[index]}</h3><p className="mt-3 text-sm leading-relaxed text-[#607980]">{t.serviceDescriptions[index]}</p><a href="#contact" className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-[#139e9a]">{t.learnMore} <ArrowUpRight className="size-3" /></a></article>)}</div>
      </section>

      <section id="clinique" className="bg-[#eaf5f4] px-5 py-16 sm:px-6 sm:py-20 md:px-12 md:py-32"><div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-24"><div className="relative"><div className="absolute -bottom-5 -left-5 h-32 w-32 border-l border-b border-[#67d9d2]" /><Image src={images.ward} alt={arabic ? 'قاعة رعاية في عيادة الحكمة' : 'Salle de soins de la Clinique El Hikma'} width={750} height={520} className="relative h-[330px] w-full object-cover object-[54%_center] sm:h-[390px] md:h-[530px] md:object-center" /><div className="absolute bottom-5 right-5 bg-white px-5 py-4 shadow-lg"><div className="font-serif text-3xl text-[#073b4c]">24/7</div><div className="text-[10px] uppercase tracking-widest text-[#6a858b]">{t.availability}</div></div></div><div><p className="eyebrow">{t.clinicEyebrow}</p><h2 className="mt-4 font-serif text-4xl leading-tight text-[#073b4c] md:text-6xl">{t.clinicHeading}</h2><p className="mt-7 text-base leading-8 text-[#55717a]">{t.clinicIntro}</p><p className="mt-6 inline-flex rounded-full border border-[#9bdad7] bg-white/70 px-4 py-2.5 text-sm font-semibold text-[#087f80]">{arabic ? 'التصوير بالرنين المغناطيسي بأحدث التقنيات' : 'IRM de dernière génération'}</p><div className="mt-9 grid grid-cols-2 gap-6 border-t border-[#c5dddd] pt-7"><div><div className="font-serif text-3xl text-[#139e9a]">+10</div><div className="mt-1 text-xs text-[#607980]">{t.specialties}</div></div><div><div className="font-serif text-3xl text-[#139e9a]">100%</div><div className="mt-1 text-xs text-[#607980]">{t.commitment}</div></div></div></div></div></section>

      <section className="relative overflow-hidden bg-[#073b4c] px-5 py-16 text-white sm:px-6 md:px-12 md:py-28"><Image src={images.reception} alt={arabic ? 'استقبال عيادة الحكمة' : 'Accueil de la Clinique El Hikma'} fill className="object-cover opacity-15" /><div className="relative z-10 mx-auto max-w-4xl text-center"><p className="eyebrow text-[#73ded7]">{t.comfortEyebrow}</p><h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">{t.comfortHeading}</h2><a href="#contact" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#67d9d2] px-7 py-4 text-sm font-bold text-[#073b4c]">{t.contact} <ArrowUpRight className="size-4" /></a></div></section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 md:px-12 md:py-32"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-14"><div><p className="eyebrow">{t.contactEyebrow}</p><h2 className="mt-4 font-serif text-4xl leading-tight text-[#073b4c] sm:text-5xl">{t.contactHeading}</h2><p className="mt-6 max-w-sm text-sm leading-7 text-[#607980]">{t.contactIntro}</p><div className="mt-10 flex flex-col gap-5 text-sm"><a href="tel:020643535" className="flex items-center gap-4 font-semibold text-[#073b4c]"><span className="flex size-10 items-center justify-center rounded-full bg-[#daf2f0] text-[#139e9a]"><Phone className="size-4" /></span>020 64 35 35</a><div className="flex items-center gap-4"><span className="flex size-10 items-center justify-center rounded-full bg-[#daf2f0] text-[#139e9a]"><Clock3 className="size-4" /></span><span>{t.openHours}</span></div><div className="flex items-center gap-4"><span className="flex size-10 items-center justify-center rounded-full bg-[#daf2f0] text-[#139e9a]"><Stethoscope className="size-4" /></span><span>{t.address}</span></div></div></div><div className="bg-[#f1f8f7] p-7 md:p-10"><div className="mb-7 flex items-center justify-between"><h3 className="font-serif text-2xl text-[#073b4c]">{t.appointment}</h3><span className="rounded-full bg-[#d7f2f0] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#139e9a]">{t.quickReply}</span></div><form className="grid gap-4" onSubmit={(e) => e.preventDefault()}><div className="grid gap-4 sm:grid-cols-2"><input aria-label={t.name} placeholder={t.name} className="border-b border-[#b8d5d5] bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[#7b979b] focus:border-[#139e9a]" /><input aria-label={t.phone} placeholder={t.phone} className="border-b border-[#b8d5d5] bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[#7b979b] focus:border-[#139e9a]" /></div><select aria-label={t.chooseService} className="border-b border-[#b8d5d5] bg-transparent px-0 py-3 text-sm text-[#7b979b] outline-none"><option>{t.chooseService}</option>{t.serviceNames.map((service) => <option key={service}>{service}</option>)}</select><textarea aria-label={t.message} placeholder={t.message} rows={3} className="resize-none border-b border-[#b8d5d5] bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[#7b979b] focus:border-[#139e9a]" /><button className="mt-4 flex w-fit items-center gap-3 rounded-full bg-[#073b4c] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#139e9a]">{t.send} <ArrowUpRight className="size-4" /></button></form></div></div></section>

      <footer className="bg-[#052f3d] px-6 py-10 text-white md:px-12"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 border-b border-white/15 pb-8 md:flex-row md:items-center"><div className="flex items-center gap-3"><Image src={images.logo} alt={arabic ? 'شعار عيادة الحكمة' : 'Logo Clinique El Hikma'} width={42} height={42} className="size-10 rounded-full object-cover" /><div className="text-xs font-bold tracking-widest">CLINIQUE EL HIKMA<div className="mt-1 font-normal tracking-normal text-white/50">{t.footerTagline}</div></div></div><div className="flex items-center gap-4 text-white/60"><a href="#" aria-label={t.social}><Globe2 className="size-4" /></a><a href="tel:020643535" className="text-xs font-semibold text-[#73ded7]">020 64 35 35</a></div></div><div className="mx-auto flex max-w-7xl justify-between pt-6 text-[10px] tracking-wide text-white/40"><span>{t.copyright}</span><span className="hidden sm:block">{t.location}</span></div></footer>
    </main>
  )
}
