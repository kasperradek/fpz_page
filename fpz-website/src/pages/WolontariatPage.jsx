import { ContactStrip, PageBanner } from '../components/ui'

/**
 * "Wolontariat / Desktop" (#3004:9092), content frame #3004:9098
 */
const VOLUNTEER_ACTIVITIES = [
  {
    id: 'tus',
    title: 'Trening Umiejętności Społecznych',
    description:
      'Oferujemy Trening Umiejętności Społecznych (TUS) dla dzieci, który pomaga w budowaniu relacji z rówieśnikami. Poprzez rozmowy, gry i wspólne wyjścia uczymy komunikacji i współpracy, pomagając najmłodszym zyskać pewność siebie w bezpiecznym otoczeniu.',
    image: '/images/wolontariat-tus.png',
  },
  {
    id: 'hipoterapia',
    title: 'Hipoterapia',
    description:
      'Poszukujemy odpowiedzialnych wolontariuszy do asysty przy zajęciach hipoterapii i pracach stajennych. Jeśli kochasz zwierzęta i masz doświadczenie w opiece nad końmi, dołącz do nas. Mile widziana umiejętność jeździecka na poziomie brązowej odznaki.',
    image: '/images/wolontariat-hipo.png',
  },
  {
    id: 'arteterapia',
    title: 'Zajęcia arteterapii',
    description:
      'Zapraszamy wolontariuszy do pomocy przy zajęciach z arteterapii. Twoim zadaniem będzie wspieranie podopiecznych w tworzeniu różnorodnych prac plastycznych. Nie wymagamy umiejętności artystycznych, a jedynie chęci do pomocy i zaangażowania.',
    image: '/images/card-arteterapia.png',
  },
  {
    id: 'teatr-kucyki',
    title: 'Integracyjny Teatr „Kucyki”',
    description:
      'Zapraszamy dzieci do naszego Integracyjnego Teatru „Kucyki”, prowadzonego przez doświadczonych terapeutów. Zajęcia pomagają rozwijać kreatywność i umiejętności społeczne w grupach dopasowanych wiekowo. Skontaktuj się z nami, aby zapisać swoje dziecko.',
    image: '/images/card-teatr.png',
  },
  {
    id: 'zorganizuj-wolontariat',
    title: 'Zorganizuj wolontariat',
    description:
      'Zorganizuj akcję wolontariacką w swojej szkole lub na uczelni. Każda okazja jest dobra, by pomagać naszym podopiecznym poprzez zbiórki, np. z okazji Dnia Wolontariusza, Mikołajek czy Dnia Dziecka. Skontaktuj się, a pomożemy Ci zacząć!',
    image: '/images/wolontariat-akcja.png',
  },
]

export function WolontariatPage() {
  return (
    <div className="flex flex-col">
      <PageBanner title="Wolontariat" image="/images/banner-wolontariat.png" />

      {/* Main Content Container (#3004:9098): padding 80px 120px, gap 128px */}
      <div className="fpz-container py-12 lg:py-20 flex flex-col gap-20 lg:gap-32">
        {/* Intro + Nasze działania (#3160:10280, gap 80px) */}
        <section className="flex flex-col gap-12 lg:gap-20">
          <p className="max-w-[925px] text-body-desktop lg:text-h5 text-blue-800 leading-[1.45]">
            Masz trochę wolnego czasu, który jesteś gotowy/a poświęcić na pomoc
            innym, zdobyć cenne doświadczenie zawodowe?{' '}
            <strong className="font-bold">Dołącz do naszego zespołu</strong>!
            Zadzwoń,{' '}
            <a
              href="mailto:fundacja@pelna-zycia.pl"
              className="underline hover:text-blue-500 transition-colors"
            >
              napisz do nas <strong className="font-bold">email</strong>
            </a>{' '}
            lub{' '}
            <a
              href="https://www.facebook.com/fundacjapelnazycia/"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-blue-500 transition-colors"
            >
              skontaktuj się z nami na{' '}
              <strong className="font-bold">Facebooku</strong>
            </a>
            .
          </p>

          <div className="flex flex-col gap-8 lg:gap-12">
            <h2 className="text-heading-mobile lg:text-heading-desktop font-semibold text-blue-500">
              Nasze działania
            </h2>

            <div className="flex flex-col gap-10">
              {VOLUNTEER_ACTIVITIES.map((activity) => (
                <article
                  key={activity.id}
                  id={activity.id}
                  className="scroll-mt-32 flex flex-col lg:flex-row items-start gap-6 lg:gap-8"
                >
                  <div className="w-full lg:w-[488px] h-[210px] sm:h-[250px] lg:h-[235px] rounded-base overflow-hidden bg-blue-50 shrink-0">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-3 lg:gap-4 max-w-[574px]">
                    <h3 className="text-heading-mobile lg:text-display-mobile font-medium text-blue-800 leading-[1.2]">
                      {activity.title}
                    </h3>
                    <p className="text-body-mobile lg:text-body-desktop text-blue-800 leading-[1.45]">
                      {activity.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Zdecydowani? (#3020:23291) */}
        <ContactStrip subtitle="Zachęcamy do kontaktu w dowolny sposób. Czekamy na Wasze zaangażowanie!" />
      </div>
    </div>
  )
}
