import type { ConsultancyContent } from "./types";

export const contentNl: ConsultancyContent = {
  locale: "nl",
  meta: {
    title: "Attentive Customs Consulting | Aruba",
    description:
      "Onafhankelijk douaneconsultant in Aruba voor importeurs en bedrijven met regelmatige import. Ondersteuning bij ASYCUDA, entrepot, restitutie, bezwaar en vrijstellingen.",
  },
  languageSwitcher: {
    enLabel: "EN",
    nlLabel: "NL",
    enHref: "/customconsultancy",
    nlHref: "/customconsultancy/nl",
  },
  brandName: "attentive",
  nav: [
    { href: "/customconsultancy/nl#what-we-cover", label: "Adviesonderwerpen" },
    { href: "/customconsultancy/about/nl", label: "Over ons" },
    { href: "/customconsultancy/nl#concepts", label: "Basis importeurs" },
    { href: "/customconsultancy/nl#import-process", label: "Invoerproces" },
    { href: "/customconsultancy/nl#services", label: "Diensten" },
    { href: "/customconsultancy/nl#topics", label: "Onderwerpen" },
    { href: "/customconsultancy/nl#faq", label: "FAQ" },
  ],
  ctaGetStarted: "Neem contact op",
  hero: {
    title: "Onafhankelijk douaneconsultant",
    titleHighlight: "in Aruba",
    subcopy:
      "Ik ondersteun importeurs en bedrijven die regelmatig importeren—ASYCUDA, entrepot, restitutie, bezwaar en beroep, en vrijstellingen op grond van artikel 128. Opdrachten worden per project of als doorlopend contract afgesproken.",
    ctaPrimary: "Neem contact op",
    ctaSecondary: "Bekijk diensten",
  },
  about: {
    title: "Waar ik over adviseer",
    subtitle:
      "Praktische begeleiding bij Arubaanse douanewetgeving, het invoerproces en de verplichtingen van uw onderneming als importeur.",
    cards: [
      {
        title: "Wettelijke helderheid",
        description:
          "Inzicht in de wettelijke verplichtingen van de douaneprocessen, van aankomst en aangifte tot vrijmaking van goederen.",
      },
      {
        title: "Risico en verantwoordelijkheid",
        description:
          "In kaart brengen waar uw onderneming aansprakelijk is, wat non-compliance kost en hoe rollen aansluiten bij de eisen van Departamento di Aduana.",
      },
      {
        title: "Praktische compliance",
        description:
          "Voldoen aan minimale compliance-vereisten per proces met gedocumenteerde controles, toezicht op brokers en auditklare dossiers.",
      },
    ],
    coverageTitle: "Typische adviesonderwerpen",
    coverageItems: [
      "Uitleg van het entrepotstelsel en administratieve eisen",
      "Bezwaar, beroep en restitutie bij te veel betaalde rechten",
      "Vrijstelling en oprichten van een handelsonderneming",
      "Praktische handvatten om risico's, boetes en vertragingen te voorkomen",
      "Rol van interne controles en audit trails",
      "Gevolgen van non-compliance",
    ],
  },
  concepts: {
    title: "Kernbegrippen voor importeurs",
    subtitle: "Essentiële begrippen en verplichtingen voor elke importeur in Aruba.",
    items: [
      {
        title: "Goederencode (HS-code)",
        description:
          "De juiste classificatie bepaalt het tarief en de invoerrechten. Fouten leiden tot te veel of te weinig betaalde rechten en sancties.",
      },
      {
        title: "Douanewaarde",
        description:
          "Rechten worden berekend over de douanewaarde (transactiewaarde en toegestane aanpassingen). Onjuiste waardering beïnvloedt alle heffingen.",
      },
      {
        title: "ASYCUDA-aangifte",
        description:
          "Invoeraangiften moeten tijdig en correct in ASYCUDA worden ingediend. Vertraging of fouten kunnen tot blokkades en handhaving leiden.",
      },
      {
        title: "Preferentiële oorsprong",
        description:
          "Bij naleving van de regels kunnen invoerrechten worden verlaagd. Bewijsstukken moeten volledig en consistent met de aangifte zijn.",
      },
      {
        title: "Vergunningen",
        description:
          "Voor bepaalde goederen zijn vergunningen vereist (bijzondere regelingen, CITES, dual-use). Zonder juiste vergunning is de aangifte ongeldig.",
      },
      {
        title: "Bewijsstukken",
        description:
          "Factuur, paklijst, vervoersdocument en vrachtbrieven moeten overeenkomen met de aangifte en bewaard blijven voor controle.",
      },
      {
        title: "Importeurnummer",
        description: "Verplicht voor elke importeur die importactiviteiten in Aruba uitvoert.",
      },
      {
        title: "Gecertificeerde douanedeclaranten",
        description:
          "Declaranten dienen namens u in; uw onderneming blijft verantwoordelijk voor de juistheid van de verstrekte gegevens.",
      },
    ],
  },
  importProcess: {
    title: "Standaard invoerproces",
    subtitle: "Overzicht van het typische invoertraject van aankomst tot vrijmaking.",
    steps: [
      "Aankomst goederen → summiere aangifte (inklaring ASYCUDA)",
      "Lossen onder douanetoezicht (selectieprofiel groen, oranje of rood)",
      "Tijdelijke opslag op de haven of RTO's luchthaven (aerocargo)",
      "Indienen invoeraangifte of plaatsing onder regeling",
      "Betaling of zekerheid van invoerrechten, accijnzen, BBO en BAZV",
      "Vervoer tot opslaginrichting of particulier entrepot",
      "Vrijgave van goederen (vrijmaking douane)",
    ],
  },
  services: {
    title: "Diensten",
    subtitle:
      "Per project of als doorlopend contract voor bedrijven die in Aruba importeren.",
    riskHighlights: {
      title: "Compliance-risico's in het kort",
      complianceRisksTitle: "Risico's bij non-compliance",
      complianceRisks: [
        "Navorderingen",
        "Boetes en strafrechtelijke vervolging",
        "Intrekking vergunningen (entrepot, RTO's)",
        "Vertragingen in de supply chain",
        "Reputatieschade",
      ],
      commonMistakesTitle: "Veelvoorkomende risico's",
      commonMistakes: [
        "Verkeerde HS-code → te veel of te weinig rechten",
        "Onjuiste oorsprong → verlies van preferentie",
        "Fouten in voorraadadministratie → boetes en naheffingen",
        "Onjuiste interne overboekingen tussen entrepots",
      ],
    },
    items: [
      {
        icon: "globe",
        title: "Invoerproces & ASYCUDA-ondersteuning",
        description:
          "Hulp voor importeurs bij aankomst, ASYCUDA-aangiften, betaling, opslag en vrijmaking van goederen.",
      },
      {
        icon: "file",
        title: "Douane-compliance",
        description:
          "Classificatie, waardering, documentatie, toezicht op broker-aangiften, accijnsgoederen en vergunningvoorwaarden.",
      },
      {
        icon: "warehouse",
        title: "Entrepot (bonded warehouse)",
        description:
          "Voor entrepothouders en importeurs: administratie, voorraadregistratie, rapportage en scheiding accijns/niet-accijns.",
      },
      {
        icon: "refund",
        title: "Restitutie invoerrechten",
        description:
          "Beoordeling van uw dossier en opstelling van restitutieverzoeken bij te veel betaalde rechten.",
      },
      {
        icon: "scale",
        title: "Bezwaar & beroep",
        description:
          "Hulp bij het opstellen van bezwaar, beroep bij de Raad van Beroep Belastingzaken en onderbouwde correcties.",
      },
      {
        icon: "shield",
        title: "Vrijstelling artikel 128",
        description:
          "Begeleiding bij in-, uit- en doorvoer: toelaatbaarheid, aanvraag bij de Inspecteur en vereiste documenten.",
      },
      {
        icon: "building",
        title: "Starten als importeur",
        description:
          "Ondersteuning bij nieuwe handelsondernemingen: KvK, importeurnummer, ASYCUDA, entrepotvergunning en eerste aangiften.",
      },
      {
        icon: "audit",
        title: "Compliance-controles",
        description:
          "Periodieke controle van classificaties, broker-aangiften en interne processen—praktische aanbevelingen vóór controle door de Douane.",
      },
    ],
  },
  topics: {
    title: "Onderwerpgidsen",
    subtitle:
      "Referentiemateriaal dat ik met opdrachtgevers gebruik—verplichtingen, procedures en wat Departamento di Aduana verwacht.",
    blocks: [
      {
        title: "Compliance met douanewetgeving",
        subsections: [
          {
            title: "Verplichtingen voor handelsbedrijven",
            items: [
              "Correcte classificatie van goederen",
              "Juiste douanewaarde en documentatie",
              "Bewaren van alle documenten (min. 5 jaar)",
              "Interne controles op broker-aangiften",
              "Tijdige en juiste aangifte van accijnsgoederen",
              "Naleving van vergunningvoorwaarden (entrepot, AGP, opslaginrichting, vrijstelling, enz.)",
            ],
          },
        ],
      },
      {
        title: "Entrepotstelsel (bonded warehouse)",
        subsections: [
          {
            title: "Wat is een entrepot?",
            items: [
              "Een door de Douane vergunde opslagplaats waar goederen onder schorsing van invoerrechten, accijnzen, BBO en BAZV worden opgeslagen.",
              "Soorten: open entrepots en particuliere entrepots.",
            ],
          },
          {
            title: "Voordelen",
            items: [
              "Uitstel van betaling van invoerrechten",
              "Mogelijkheid tot heruitvoer zonder rechten",
              "Flexibel voorraadbeheer voor handelsbedrijven",
            ],
          },
          {
            title: "Verplichtingen",
            items: [
              "Per-item administratie en real-time voorraadadministratie",
              "Registratie van inbound, outbound en transfers",
              "Maandelijkse/jaarlijkse rapportages aan Douane",
              "Fysieke beveiliging en toegangscontrole",
              "Scheiding excise- en niet-excisegoederen",
            ],
          },
          {
            title: "Veelgemaakte fouten",
            items: [
              "Onjuiste voorraadstanden",
              "Foutieve interne overboekingen",
              "Niet-geregistreerde vernietigingen",
              "Onjuiste accijnsberekeningen",
            ],
          },
          {
            title: "Wat controleert de Douane?",
            items: [
              "Klopt de administratie met de fysieke voorraad?",
              "Zijn alle mutaties traceerbaar?",
              "Zijn vergunningvoorwaarden nageleefd?",
              "Zijn accijnsgoederen correct verantwoord?",
            ],
          },
          {
            title: "Best practices",
            items: [
              "Periodieke cycle counts",
              "Interne audits",
              "Duidelijke scheiding van goederen",
              "Reconciliatie documenten vs. fysieke voorraad",
            ],
          },
        ],
      },
      {
        title: "Restitutie",
        subsections: [
          {
            title: "Wanneer mogelijk?",
            items: [
              "Onverschuldigde betaling: verkeerde HS-code, onjuiste douanewaarde, preferentie niet toegepast, vernietiging onder toezicht, dubbele betaling, administratieve fout",
              "Goederen niet ingevoerd zoals aangegeven: retour afzender, niet aangekomen, vernietigd onder toezicht",
              "Vrijstelling had moeten gelden: verhuisboedel, diplomatieke vrijstelling, andere categorieën",
              "Invoerrechten of accijns te hoog berekend door foutieve waardering of berekening",
            ],
          },
        ],
      },
      {
        title: "Bezwaar & beroep",
        subsections: [
          {
            title: "Wanneer indienen?",
            items: [
              "Onjuiste tariefindeling",
              "Foutieve douanewaarde",
              "Onjuiste accijnsberekening",
              "Foutieve toepassing van oorsprong/preferentie",
              "Onterechte naheffing",
            ],
          },
          {
            title: "Procedure (Aruba)",
            items: [
              "Bezwaar binnen wettelijke termijn",
              "Douane beoordeelt bezwaar",
              "Bij afwijzing → beroep bij Raad van Beroep Belastingzaken",
              "Eventueel hoger beroep",
            ],
          },
          {
            title: "Sterke bezwaarbrief bevat",
            items: [
              "Referentie aangifte",
              "Feitelijke onderbouwing",
              "Juridische basis (wet, tarief, oorsprongsregels)",
              "Bewijsstukken",
            ],
          },
          {
            title: "Vereiste documenten",
            items: [
              "Oorspronkelijke aangifte",
              "Factuur, B/L",
              "Bewijs van betaling",
              "Correctieberekening",
              "Verzoekschrift restitutie",
            ],
          },
          {
            title: "Kritische deadlines",
            items: [
              "Meestal 1 jaar vanaf datum betaling",
              "Naheffing binnen 5 jaar na betaling van de rechten",
            ],
          },
        ],
      },
      {
        title: "Vrijstelling artikel 128 LV in-, uit- en doorvoer",
        subsections: [
          {
            title: "Procedures voor aanvraag vrijstelling",
            items: [
              "Vrijstelling alleen indien wettelijk toegestaan",
              "Schriftelijke aanvraag bij de Inspecteur van Departamento di Aduana",
              "Duidelijk aangeven waarvoor en voor wie de goederen bestemd zijn",
              "Vaak economische, sociale, humanitaire of culturele redenen",
              "Vrijstelling is persoonlijk; schriftelijke machtiging mogelijk",
              "Alleen op aanvraag en schriftelijk verleend",
              "Altijd aangifte doen, ook bij vrijstelling",
            ],
          },
          {
            title: "Vereiste documenten",
            items: [
              "Aanvraagformulier vrijstelling",
              "Specificatie van goederen (bijv. machines)",
              "Bewijs van bestemming en gebruik",
              "Eventuele machtigingen",
            ],
          },
        ],
      },
      {
        title: "Oprichten handelsonderneming",
        subsections: [
          {
            title: "Douaneprocedure",
            items: [
              "Registratie bij Kamer van Koophandel en Belastingdienst Aruba",
              "Aanvraag importeurnummer (verplicht voor import)",
              "Inrichten administratiesysteem voor douaneaangiften",
              "Bij entrepot: vergunning aanvragen bij Departamento di Aduana",
              "Aangifte via ASYCUDA bij invoer",
              "Betaling invoerrechten, accijnzen, BBO en BAZV",
              "Naleving vergunningvoorwaarden en douanewetgeving",
              "Periodieke rapportages en controles door Douane",
              "Bij overtredingen: waarschuwingen, boetes of intrekking vergunning",
            ],
          },
        ],
      },
    ],
  },
  faq: {
    title: "Veelgestelde vragen",
    subtitle: "Veelgestelde vragen van importeurs en regelmatige importeurs in Aruba.",
    groups: [
      {
        title: "Samenwerken met Attentive",
        items: [
          {
            question: "Wat voor adviesbureau is Attentive?",
            answer:
              "Onafhankelijk douaneadvies voor Aruba. U werkt met dezelfde consultant gedurende uw opdracht. Opdrachten worden per project of onder contract overeengekomen, met vooraf afgesproken scope en honorarium.",
          },
          {
            question: "Voor wie werkt u meestal?",
            answer:
              "Importeurs en handelsondernemingen die goederen in Aruba binnenbrengen, inclusief bedrijven met terugkerende import, entrepotactiviteiten of behoefte aan specialistisch advies.",
          },
          {
            question: "Hoe worden opdrachten ingedeeld?",
            answer:
              "In overleg per opdracht: een enkel adviesgesprek, een afgebakend project (bijvoorbeeld restitutie of compliance-review) of een contract voor doorlopende ondersteuning. Scope, resultaat en honorarium worden vooraf afgesproken.",
          },
        ],
      },
      {
        title: "Algemeen en compliance",
        items: [
          {
            question:
              "Wat zijn mijn minimale compliance-verplichtingen als handelsbedrijf in Aruba?",
            answer:
              "U moet goederen correct classificeren, de juiste douanewaarde aangeven, tijdig ASYCUDA-aangiften doen, documenten minimaal vijf jaar bewaren, broker-aangiften controleren, accijnsgoederen juist rapporteren en alle vergunningvoorwaarden naleven.",
          },
          {
            question: "Wat gebeurt er bij non-compliance?",
            answer:
              "Gevolgen kunnen zijn: navorderingen, boetes, strafrechtelijke vervolging, intrekking van entrepot- of RTO-vergunningen, vertragingen en reputatieschade. Interne controles beperken risico's vóór handhaving door de Douane.",
          },
          {
            question: "Wat zijn de meest voorkomende douanefouten?",
            answer:
              "Veelvoorkomend zijn verkeerde HS-codes, onjuiste oorsprong, fouten in entrepotvoorraad en onjuiste interne overboekingen—elk kan leiden tot naheffingen, boetes of verlies van preferentie.",
          },
        ],
      },
      {
        title: "Import en documentatie",
        items: [
          {
            question: "Waarom is de HS-code belangrijk voor mijn zending?",
            answer:
              "De HS-code bepaalt het tarief en het bedrag aan rechten. Een foutieve code leidt tot te veel of te weinig betaalde rechten en kan worden gecorrigeerd via navordering, restitutie of bezwaar.",
          },
          {
            question: "Welke documenten moet ik bewaren en hoe lang?",
            answer:
              "Bewaar facturen, paklijsten, vervoersdocumenten, vrachtbrieven, aangiften en correspondentie minimaal vijf jaar, in lijn met classificatie, waarde en oorsprong in de aangifte.",
          },
          {
            question: "Wat is een importeurnummer en wanneer heb ik het nodig?",
            answer:
              "Een importeurnummer is verplicht voor elke importeur met importactiviteiten in Aruba en maakt deel uit van registratie en douane-onboarding.",
          },
        ],
      },
      {
        title: "Entrepotstelsel",
        items: [
          {
            question: "Wat is een entrepot en wat zijn de voordelen?",
            answer:
              "Een vergunde opslagplaats onder schorsing van invoerrechten, accijnzen, BBO en BAZV, met uitstel van betaling, mogelijke heruitvoer zonder rechten en flexibel voorraadbeheer.",
          },
          {
            question: "Welke administratieve verplichtingen gelden voor entrepothouders?",
            answer:
              "Per-item administratie, real-time voorraad, registratie van mutaties, rapportages aan Douane, fysieke beveiliging en scheiding van accijns- en niet-accijnsgoederen.",
          },
          {
            question: "Wat controleert de Douane bij voorraadcontroles?",
            answer:
              "Of administratie en fysieke voorraad overeenkomen, mutaties traceerbaar zijn, vergunningvoorwaarden worden nageleefd en accijnsgoederen correct zijn verantwoord.",
          },
        ],
      },
      {
        title: "Restitutie, bezwaar en vrijstelling",
        items: [
          {
            question: "Wanneer kan ik restitutie van te veel betaalde rechten aanvragen?",
            answer:
              "Volgens de Landsverordening Tarief van Invoerrechten en interne procedures onder meer bij onverschuldigde betaling, afwijkende feiten, vrijstelling die had gemoeten gelden, of te hoge berekening—met volledige onderbouwing.",
          },
          {
            question: "Hoe werken bezwaar en beroep?",
            answer:
              "Bezwaar binnen de termijn; Douane beslist. Bij afwijzing beroep bij de Raad van Beroep Belastingzaken. Een sterke brief verwijst naar de aangifte, feiten, wet en bewijs.",
          },
          {
            question: "Hoe vraag ik een vrijstelling artikel 128 aan?",
            answer:
              "Schriftelijke aanvraag bij de Inspecteur met doel en bestemming, formulier, specificatie goederen, bewijs van bestemming/gebruik en machtigingen. Aangifte blijft verplicht.",
          },
          {
            question: "Wat zijn kritische deadlines voor restitutie en bezwaar?",
            answer:
              "Restitutie meestal binnen 1 jaar na betaling; naheffing kan binnen 5 jaar na betaling van rechten. Controleer altijd de actuele wet en data van uw aangifte.",
          },
        ],
      },
      {
        title: "Bedrijf starten",
        items: [
          {
            question:
              "Welke douanestappen zijn nodig om een handelsonderneming op te richten in Aruba?",
            answer:
              "Registratie KvK en Belastingdienst, importeurnummer, administratie voor aangiften, eventueel entrepotvergunning, aangifte via ASYCUDA, betaling van rechten en heffingen, en voortdurende rapportage en naleving onder toezicht van de Douane.",
          },
        ],
      },
    ],
  },
  contact: {
    title: "Neem contact op",
    subtitle:
      "Importeur of regelmatige importeur in Aruba? Beschrijf uw vraag of opdracht—ik laat weten of en hoe ik kan helpen.",
    emailLabel: "E-mail",
    phoneLabel: "Telefoon",
    officeLabel: "Kantoor",
    email: "info@attentivecustoms.com",
    phone: "+297 000 0000",
    officeLines: ["Oranjestad", "Aruba"],
  },
  form: {
    title: "Stuur een bericht",
    subtitle: "Vul het formulier in; ik reageer binnen één werkdag.",
    name: "Naam",
    email: "E-mail",
    company: "Bedrijf",
    message: "Bericht",
    submit: "Verstuur bericht",
    successMessage: "Bedankt voor uw bericht. Ik neem spoedig contact op.",
  },
  footer: {
    tagline:
      "Onafhankelijk douaneadvies in Aruba voor importeurs en bedrijven die regelmatig importeren.",
    servicesTitle: "Diensten",
    servicesLinks: [
      { label: "Import & ASYCUDA", href: "/customconsultancy/nl#services" },
      { label: "Compliance", href: "/customconsultancy/nl#services" },
      { label: "Entrepot", href: "/customconsultancy/nl#services" },
      { label: "Restitutie & bezwaar", href: "/customconsultancy/nl#services" },
    ],
    companyTitle: "Bedrijf",
    companyLinks: [
      { label: "Over Attentive", href: "/customconsultancy/about/nl" },
      { label: "Adviesonderwerpen", href: "/customconsultancy/nl#what-we-cover" },
      { label: "Basis importeurs", href: "/customconsultancy/nl#concepts" },
      { label: "Onderwerpgidsen", href: "/customconsultancy/nl#topics" },
      { label: "FAQ", href: "/customconsultancy/nl#faq" },
      { label: "Contact", href: "/customconsultancy/nl#contact" },
    ],
    contactTitle: "Contact",
    contactLines: ["info@attentivecustoms.com", "+297 000 0000", "Aruba"],
    copyright: "Attentive Customs Consulting. Alle rechten voorbehouden.",
  },
};
