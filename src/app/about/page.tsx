import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="page-shell grid gap-12 md:grid-cols-[0.75fr_1.25fr]">
      <div>
        <div className="overflow-hidden border border-ink/10 bg-white/70">
          <div className="relative aspect-[4/5]">
            <Image
              src="/images/about/Scan.jpg"
              alt="Portrait of Ellen Goovaerts"
              fill
              sizes="(min-width: 768px) 32vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="surface-panel p-7 md:p-9">
        <div className="space-y-6 text-base leading-8 text-ink/70">
          <p>
            Ellen Goovaerts (Belgium, 1969) is a Belgian art photographer with a background in
            art history. After many years working as a professional photographer for magazines and
            communication agencies, she returned to photography as an autonomous artistic practice.
          </p>
          <p>
            Her work explores themes of alienation, stillness, and the fragile relationship
            between the human body and its environment. Informed by a long-standing interest in
            existential thought and the visual language of melancholy in art, her photographs move
            between landscape, architecture, and the presence of the body, inhabiting spaces of
            quiet tension where boundaries between inside and outside, presence and absence, begin
            to blur.
          </p>
          <p>
            Her photographs linger in the fragile space where presence meets absence.
          </p>
        </div>
      </div>
    </div>
  );
}
