import { cv } from "@/data/cv";

export default function CvPage() {
  return (
    <div className="page-shell flex max-w-5xl flex-col gap-14">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.25em] text-ink/45">CV</p>
        <h1 className="font-serif text-5xl text-ink">Exhibitions and education</h1>
        <p className="text-base leading-8 text-ink/68">
          A simple CV page keeps the site useful without pulling focus away from the image-based
          work.
        </p>
      </div>
      <section className="grid gap-8 md:grid-cols-2">
        <div className="surface-panel space-y-5 p-7 md:p-8">
          <h2 className="font-serif text-3xl text-ink">Selected exhibitions</h2>
          <div className="space-y-5">
            {cv.exhibitions.map((item) => (
              <div key={`${item.year}-${item.title}`} className="border-t border-ink/10 pt-4">
                <p className="text-xs uppercase tracking-[0.2em] text-ink/45">{item.year}</p>
                <p className="mt-2 text-lg text-ink">{item.title}</p>
                {item.place ? <p className="text-base text-ink/65">{item.place}</p> : null}
              </div>
            ))}
          </div>
        </div>
        <div className="surface-panel space-y-8 p-7 md:p-8">
          <div className="space-y-5">
            <h2 className="font-serif text-3xl text-ink">Education</h2>
            <div className="space-y-5">
              {cv.education.map((item) => (
                <div key={`${item.year}-${item.title}`} className="border-t border-ink/10 pt-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-ink/45">{item.year}</p>
                  <p className="mt-2 text-lg text-ink">{item.title}</p>
                  {item.place ? <p className="text-base text-ink/65">{item.place}</p> : null}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <h2 className="font-serif text-3xl text-ink">Publications and residencies</h2>
            <div className="space-y-5">
              {[...cv.publications, ...cv.residencies].map((item) => (
                <div key={`${item.year}-${item.title}`} className="border-t border-ink/10 pt-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-ink/45">{item.year}</p>
                  <p className="mt-2 text-lg text-ink">{item.title}</p>
                  {item.place ? <p className="text-base text-ink/65">{item.place}</p> : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
