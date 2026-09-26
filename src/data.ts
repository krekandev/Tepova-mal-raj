import { ServiceItem, Review, ServiceArea, FAQItem, ProcessStep } from './types';

import logoImg from './assets/images/logo_light.png';
import interiorImage from './assets/images/interiersluzby.jfif';
import polishingImage from './assets/images/voskovaniekaroseria.jpg';
import furnitureImage from './assets/images/nabytok.jfif';
import slsCarCutout from './assets/images/sls_tepovac_clean.png';
import heroBgImage from './assets/images/hero-bg.jpg';
import logoDarkHeader from './assets/images/logo_dark_header.png';

export { logoImg, logoDarkHeader, slsCarCutout, heroBgImage };

export const BUSINESS_INFO = {
  name: 'Tepovač',
  subBrand: 'Tepovanie & Detailing Malý Raj',
  owner: 'Boris Hadvig',
  phoneDisplay: '0911 850 522',
  phoneInternational: '+421 911 850 522',
  phoneTel: 'tel:+421911850522',
  address: 'Južná 27, 900 26 Slovenský Grob (Malý Raj)',
  baseLocation: 'Malý Raj, Slovenský Grob',
  instagramUrl: 'https://www.instagram.com/BorisHadvig',
  instagramHandle: 'BorisHadvig',
  facebookUrl: 'https://www.facebook.com/profile.php?id=100063442699140',
  facebookName: 'Tepovač',
  primaryLocations: ['Malý Raj', 'Slovenský Grob', 'Bratislava', 'Senec', 'Pezinok', 'Bernolákovo', 'Ivanka pri Dunaji', 'Svätý Jur'],
  serviceAreasText: 'Slovenský Grob (Malý Raj), Bratislava, Senec, Pezinok a okolie',
  followersCount: '800+',
  satisfactionRate: '100%',
  workingHours: 'Pondelok - Nedeľa: 8:00 - 20:00 (podľa dohody)',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'car-detailing',
    title: 'Čistenie & Tepovanie áut',
    shortDesc: 'Kompletné hĺbkové čistenie interiéru, precízne tepovanie sedadiel, starostlivosť o kožu, plasty a okná.',
    fullDesc: 'Profesionálne hĺbkové tepovanie textilných sedadiel, kobercov a batožinového priestoru s výkonnou extrakčnou technológiou. Čistenie, výživa a impregnácia kožených interiérov, detailné vyčistenie palubnej dosky, plastov, pedálov, medzidverových priestorov a vetracích otvorov.',
    durationEstimate: '3 - 5 hodín',
    iconName: 'Car',
    imageUrl: interiorImage,
    popularTag: 'Najžiadanejšie',
    features: [
      'Hĺbkové extrakčné tepovanie sedadiel, kobercov a kufra',
      'Detailné čistenie a impregnácia plastov i medzidverových priestorov',
      'Špeciálne šetrné čistenie a výživa kožených povrchov',
      'Odstránenie zápachov, roztočov a mikroskopických nečistôt',
      'Rýchle a šetrné preschnutie interiéru bez zatuchnutia'
    ]
  },
  {
    id: 'furniture-upholstery',
    title: 'Hĺbkové tepovanie nábytku',
    shortDesc: 'Tepovanie sedacích súprav, kresiel, matracov a stoličiek priamo u vás doma alebo vo firme.',
    fullDesc: 'Profesionálne extrakčné čistenie čalúneného nábytku priamo u vás doma. Používame špičkové priemyselné tepovače a certifikovanú, ekologicky odbúrateľnú chémiu bezpečnú pre deti i domáce zvieratá. Odstraňujeme zažratú špinu, škvrny od nápojov, zvieracie pachy a alergény.',
    durationEstimate: '1 - 3 hodiny',
    iconName: 'Sofa',
    imageUrl: furnitureImage,
    popularTag: 'Mobilný servis u vás',
    features: [
      'Tepovanie sedacích súprav (rovné, rohové, U-tvar, rozkladacie)',
      'Hĺbkové čistenie matracov, kresiel a jedálenských stoličiek',
      'Účinné odstránenie škvŕn (káva, víno, jedlo, domáce zvieratá)',
      'Hygienická dezinfekcia textilu a neutralizácia pachov',
      'Certifikovaná chémia šetrná k textilu aj citlivým osobám'
    ]
  },
  {
    id: 'polishing-waxing',
    title: 'Leštenie & Voskovanie karosérie',
    shortDesc: 'Viacstupňové strojové leštenie laku, odstránenie mikroškrabancov, hlboký lesk a prémiová ochrana voskom.',
    fullDesc: 'Navráťte laku vášho vozidla hlboký showroomový lesk a jasnú farbu. Vykonávame dôkladnú chemickú i mechanickú dekontamináciu laku (clay bar), strojové leštenie s odstránením jemných škrabancov (swirls) a následnú aplikáciu prémiového syntetického vosku alebo nano ochrany pre odpudzovanie vody a ochranu pred UV žiarením.',
    durationEstimate: '4 - 8 hodín',
    iconName: 'Sparkles',
    imageUrl: polishingImage,
    popularTag: 'Prémiová starostlivosť',
    features: [
      'Dôkladné umytie a dekontaminácia laku (clay bar) pred leštením',
      'Jednokroková alebo viackroková korekcia laku a mikroškrabancov',
      'Obnova hlbokého lesku, jasu a odstránenie oxidácie',
      'Aplikácia prémiového hybridného vosku alebo keramickej ochrany',
      'Ošetrenie vonkajších plastových líšt a impregnácia pneumatík'
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Dohodnutie termínu',
    desc: 'Zavoláte na 0911 850 522, preberieme stav vozidla alebo nábytku a dohodneme si vyhovujúci čas.'
  },
  {
    number: '02',
    title: 'Príchod na adresu / Odovzdanie',
    desc: 'Prídeme k vám domov v rámci Senca, Grobu, Pezinka a Bratislavy, prípadne pristavíte auto priamo v Malom Raji.'
  },
  {
    number: '03',
    title: 'Poctivá práca bez náhlenia',
    desc: 'Používame priemyselné extraktory a prémiovú chémiu. Venujeme sa každému záhybu a štrbine.'
  },
  {
    number: '04',
    title: 'Osobná kontrola a odovzdanie',
    desc: 'Boris Hadvig osobne skontroluje výsledok pred odovzdaním. Platíte až po vašej úplnej spokojnosti.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Peter Holba',
    location: 'Sereď / Pezinok okolie',
    quote: 'Odporúčam, auto krásne čisté, voňavé a vyleštené, pán si dal naozaj záležať.',
    rating: 5,
    serviceType: 'Kompletný auto detailing & leštenie',
    date: 'Overený zákazník',
    avatarInitial: 'P'
  },
  {
    id: '2',
    author: 'Michaela Čalfová',
    location: 'Bratislava & okolie',
    quote: 'Odporúčame všetkými desiatimi, interiér auta bol vyčistený do poslednej štrbiny a vôňa vydržala týždne.',
    rating: 5,
    serviceType: 'Tepovanie interiéru auta',
    date: 'Overený zákazník',
    avatarInitial: 'M'
  },
  {
    id: '3',
    author: 'Martin K.',
    location: 'Senec / Malý Raj',
    quote: 'Skvelá komunikácia, ústretový a poctivý prístup. Sedačka po deťoch vyzerá znova ako z predajne. Určite zavolám znova.',
    rating: 5,
    serviceType: 'Hĺbkové tepovanie sedacej súpravy',
    date: 'Overený zákazník',
    avatarInitial: 'M'
  }
];

export const SERVICE_AREAS: ServiceArea[] = [
  {
    name: 'Slovenský Grob & Malý Raj',
    badge: 'Centrála / Bez doplatku za dojazd',
    description: 'Sídlo prevádzky. Rýchly servis priamo v lokalite Malý Raj a obci Slovenský Grob.'
  },
  {
    name: 'Senec & Okolie',
    badge: 'Rýchly dojazd',
    description: 'Senec, Bernolákovo, Ivanka pri Dunaji, Veľký Biel, Kráľová pri Senci a priľahlé obce.'
  },
  {
    name: 'Pezinok & Okolie',
    badge: 'Pravidelné trasy',
    description: 'Pezinok, Svätý Jur, Viničné, Šenkvice, Modra, Limbach.'
  },
  {
    name: 'Bratislava & Okrajové časti',
    badge: 'Mobilný servis',
    description: 'Ružinov, Rača, Vajnory, Podunajské Biskupice, Petržalka a ďalšie mestské časti po dohode.'
  }
];

export const ADVANTAGES = [
  {
    icon: 'ShieldCheck',
    title: 'Prístup "Pán si dal naozaj záležať"',
    description: 'Neodfláknuté rýchle pretretie. Boris Hadvig ručí za precíznosť, čisté záhyby, koľajnice a detaily, ktoré iní prehliadnu.'
  },
  {
    icon: 'Sparkles',
    title: 'Špičková technológia a chémia',
    description: 'Používame overené priemyselné extrakčné tepovače a neagresívnu, certifikovanú autokozmetiku, ktorá neničí povrchy.'
  },
  {
    icon: 'Home',
    title: 'Maximálne pohodlie - mobilný servis',
    description: 'Tepovanie nábytku (sedačky, matrace, kreslá) vykonávame priamo u vás doma. Nepotrebujete nič sťahovať ani prenášať.'
  },
  {
    icon: 'Clock',
    title: 'Férové jednanie a flexibilita',
    description: 'Žiadne skryté poplatky. Vopred viete odhad ceny a termín prispôsobíme vašim časovým možnostiam, aj cez víkend.'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Ako dlho trvá tepovanie auta alebo sedacej súpravy?',
    answer: 'Kompletné hĺbkové čistenie bežného interiéru auta trvá približne 3 až 5 hodín. Tepovanie štandardnej rohovej sedačky zaberie cca 1,5 až 2,5 hodiny v závislosti od stupňa znečistenia a veľkosti.'
  },
  {
    question: 'Ako dlho schne vytepovaný interiér alebo sedačka?',
    answer: 'Vďaka výkonným priemyselným extraktorom, ktoré odsajú drvivú väčšinu tekutiny späť do zbernej nádrže, zostáva látka iba mierne vlhká. V štandardne vetranej a vykúrenej miestnosti či aute preschne zvyčajne za 3 až 6 hodín.'
  },
  {
    question: 'Prídete vytepovať nábytok priamo ku mne domov?',
    answer: 'Áno, hĺbkové tepovanie sedacích súprav, matracov, kresiel a stoličiek vykonávame priamo u zákazníka v lokalitách Malý Raj, Slovenský Grob, Pezinok, Senec, Bratislava a v priľahlých obciach.'
  },
  {
    question: 'Čo je potrebné zabezpečiť k tepovaniu nábytku?',
    answer: 'Potrebujeme len prístup k bežnej elektrickej zásuvke (230 V) a prístup k tečúcej vode na napustenie čistej vody a vyliatie zbernej nádoby. Všetky stroje, hadice a chémiu si prinesieme so sebou.'
  },
  {
    question: 'Je použitá chémia bezpečná pre deti a domáce zvieratá?',
    answer: 'Jednoznačne. Používame šetrnú, certifikovanú a biologicky odbúrateľnú chémiu od popredných európskych výrobcov, ktorá je po vyschnutí úplne bezpečná pre deti aj domáce zvieratá a neutralizuje alergény i pachy.'
  },
  {
    question: 'Ako si môžem objednať termín?',
    answer: 'Najrýchlejšie a najjednoduchšie je zavolať priamo Borisovi Hadvigovi na číslo 0911 850 522. Dohodneme si rozsah prác a termín, ktorý vám vyhovuje.'
  }
];
