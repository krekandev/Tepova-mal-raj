import { ServiceItem, Review, ServiceArea } from './types';

import heroBgImage from './assets/images/detailing_hero_bg_1786616621233.jpg';
import carUploadedImg from './assets/images/car-5725327_1280.jpg';
import logoImg from './assets/images/logo tepovac.png';
import interiorImage from './assets/images/interiersluzby.jfif';
import polishingImage from './assets/images/voskovaniekaroseria.jpg';
import furnitureImage from './assets/images/nabytok.jfif';

export { heroBgImage, carUploadedImg, logoImg };

export const BUSINESS_INFO = {
  name: 'Tepovač',
  owner: 'Boris Hadvig',
  phoneDisplay: '0911 850 522',
  phoneInternational: '+421 911 850 522',
  phoneTel: 'tel:+421911850522',
  address: 'Južná 27, 900 26 Slovenský Grob',
  instagramUrl: 'https://www.instagram.com/BorisHadvig',
  instagramHandle: '@BorisHadvig',
  facebookUrl: 'https://www.facebook.com/profile.php?id=100063442699140',
  primaryLocations: ['Bratislava', 'Senec', 'Pezinok', 'Bernolákovo', 'Ivanka pri Dunaji', 'Svätý Jur', 'Rovinka', 'Dunajská Lužná'],
  serviceAreasText: 'Bratislava, Senec, Pezinok a široké okolie',
  followersCount: '800+',
  satisfactionRate: '100%',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'car-detailing',
    title: 'Čistenie & Tepovanie áut',
    shortDesc: 'Kompletné hĺbkové čistenie interiéru, tepovanie sedadiel, starostlivosť o kožu a umytie exteriéru.',
    fullDesc: 'Profesionálne hĺbkové tepovanie látkových sedadiel a kobercov s extrakčnou technológiou. Čistenie, výživa a impregnácia kožených interiérov, detailné vyčistenie palubnej dosky, plastov, stropnice, kufra a vetracích otvorov.',
    priceStarting: 'od 50 €',
    durationEstimate: '3 - 5 hodín',
    iconName: 'Car',
    imageUrl: interiorImage,
    popularTag: 'Najobľúbenejšie',
    features: [
      'Hĺbkové tepovanie sedadiel, koberčekov a kufra',
      'Špeciálne čistenie a impregnácia kože',
      'Detailné čistenie plastov, medzidverových priestorov a skiel',
      'Eliminácia zápachov a mikroorganizmov',
      'Šetrné sušenie interiéru bez rizika plesní'
    ]
  },
  {
    id: 'polishing-waxing',
    title: 'Leštenie & Voskovanie karosérie',
    shortDesc: 'Strojové leštenie laku, odstránenie mikroškrabancov, obnovenie hlbokého lesku a ochranný vosk.',
    fullDesc: 'Navráťte vášmu vozidlu showroomový lesk! Vykonávame korekciu laku, odstraňujeme jemné škrabance (swirly) z umyváriat a oxidáciu. Na záver aplikujeme vysokokvalitný syntetický alebo hybridný vosk/keramiku pre stekanec vody a UV ochranu.',
    priceStarting: 'od 90 €',
    durationEstimate: '4 - 8 hodín',
    iconName: 'Sparkles',
    imageUrl: polishingImage,
    popularTag: 'Vysoký Lesk',
    features: [
      'Jednokrokové alebo viacstupňové strojové leštenie laku',
      'Odstránenie hologramov a jemných škrabancov',
      'Dekontaminácia laku (clay bar) pred leštením',
      'Aplikácia prémiového vosku alebo nanokeramiky',
      'Ošetrenie vonkajších plastov a pneumatík'
    ]
  },
  {
    id: 'furniture-upholstery',
    title: 'Hĺbkové tepovanie nábytku',
    shortDesc: 'Tepovanie sedačiek, kresiel, matracov a stoličiek u vás doma alebo v firme s rýchlym schnutím.',
    fullDesc: 'Priamo u vás doma vytepujeme a vyčistíme čalúnený nábytok. Používame špičkové extrakčné tepovače a overené ekologické čistiace prostriedky, ktoré odstraňujú škvrny, roztoče, prachové alergény a neprijemný zápach.',
    priceStarting: 'od 30 €',
    durationEstimate: '1 - 3 hodiny',
    iconName: 'Sofa',
    imageUrl: furnitureImage,
    popularTag: 'Pre Vašu Domácnosť',
    features: [
      'Tepovanie sedacích súprav (rohové, U-tvar, rozkladacie)',
      'Hĺbkové čistenie matracov, kresiel a jedálenských stoličiek',
      'Odstránenie škvŕn od kávy, vína, krvi či domácich miláčikov',
      'Neutralizácia zápachu a dezinfekcia textilu',
      'Šetrná chémia bezpečná pre deti a zvieratá'
    ]
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
    date: 'Nedávno',
    avatarInitial: 'P'
  },
  {
    id: '2',
    author: 'Michaela Čalfová',
    location: 'Bratislava',
    quote: 'Odporúčame, auto krásne vyčistené.',
    rating: 5,
    serviceType: 'Tepovanie interiéru auta',
    date: 'Nedávno',
    avatarInitial: 'M'
  },
  {
    id: '3',
    author: 'Martin K.',
    location: 'Senec',
    quote: 'Skvelá komunikácia, ústrety prístup a sedačka vyzerá ako nová zo showroomu! Určite zavolám znova.',
    rating: 5,
    serviceType: 'Tepovanie gauča & kresiel',
    date: 'Pred týždňom',
    avatarInitial: 'M'
  }
];

export const SERVICE_AREAS: ServiceArea[] = [
  {
    name: 'Bratislava',
    badge: 'Mobilná služba',
    description: 'Všetky mestské časti (Ružinov, Petržalka, Dúbravka, Rača, Vrakuňa, Záhorská Bystrica atď.)'
  },
  {
    name: 'Senec & Okolie',
    badge: 'Sídlo / Rýchly dojazd',
    description: 'Senec, Bernolákovo, Ivanka pri Dunaji, Veľký Biel, Tureň, Kráľová pri Senci'
  },
  {
    name: 'Pezinok & Okolie',
    badge: 'Pravidelné trasy',
    description: 'Pezinok, Svätý Jur, Slovenský Grob, Viničné, Modra, Šenkvice'
  },
  {
    name: 'Priľahlé obce',
    badge: 'Dohodou',
    description: 'Rovinka, Dunajská Lužná, Kvetoslavov, Malinovo, Zálesie a okolité obce do 35 km'
  }
];

export const ADVANTAGES = [
  {
    icon: 'ShieldCheck',
    title: 'Precízna práca ("Pán si dal naozaj záležať")',
    description: 'Neustále sa sústredíme na detaily, ktoré iní prehliadajú. Každý záhyb, medzera a štrbina dostane maximálnu starostlivosť.'
  },
  {
    icon: 'Sparkles',
    title: 'Špičková technológia & Chémia',
    description: 'Používame overené priemyselné tepovače a neagresívnu prémiovú autokozmetiku, ktorá nepoškodzuje povrchy.'
  },
  {
    icon: 'Users',
    title: 'Komunita 800+ Sledovateľov',
    description: 'Našu prácu denne sleduje viac ako 800 fanúšikov na Facebooku (Tepovač), kde pravidelne uverejňujeme reálne výsledky a fotky.'
  },
  {
    icon: 'Clock',
    title: 'Flexibilita & Osobný prístup',
    description: 'Majiteľ Boris Hadvig ručí za kvalitu každého odovzdaného auta alebo vyčisteného kus nábytku.'
  }
];
