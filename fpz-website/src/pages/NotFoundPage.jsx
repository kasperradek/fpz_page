import { Button, PageBanner } from '../components/ui'

export function NotFoundPage() {
  return (
    <div className="flex flex-col">
      <PageBanner
        title="404 — Nie znaleziono strony"
        subtitle="Przepraszamy, strona której szukasz nie istnieje lub została przeniesiona."
      />
      <section className="fpz-container py-16 flex flex-wrap gap-4">
        <Button to="/" variant="primary">
          Wróć na stronę główną
        </Button>
        <Button to="/mapa-strony" variant="secondary">
          Zobacz mapę strony
        </Button>
      </section>
    </div>
  )
}
