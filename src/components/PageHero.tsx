export function PageHero({ title }: { title: string }) {
  return (
    <section className="border-b border-black/5 bg-blush">
      <div className="mx-auto max-w-[1100px] px-5 py-16 text-center lg:px-8">
        <h1 className="page-title text-[28px] text-ink md:text-[36px]">{title}</h1>
      </div>
    </section>
  );
}
