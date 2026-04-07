type TextBlockProps = {
  eyebrow?: string;
  title: string;
  body: string;
};

export function TextBlock({ eyebrow, title, body }: TextBlockProps) {
  return (
    <div className="max-w-2xl space-y-5">
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.25em] text-ink/50">{eyebrow}</p>
      ) : null}
      <h2 className="font-serif text-[1.9rem] leading-[1.04] text-ink md:text-[2.4rem]">{title}</h2>
      <p className="max-w-xl text-base leading-8 text-ink/68 md:text-[1.02rem]">{body}</p>
    </div>
  );
}
