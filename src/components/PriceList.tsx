type Item = {
  name: string;
  price: string;
  note?: string;
};

export function PriceList({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: Item[];
}) {
  return (
    <section className="mb-14">
      <h2 className="page-title mb-2 text-[22px] md:text-[26px]">{title}</h2>
      {subtitle ? (
        <p className="mb-6 text-sm font-light uppercase tracking-[0.16em] text-muted">
          {subtitle}
        </p>
      ) : (
        <div className="mb-6 h-px w-16 bg-navy" />
      )}
      <ul>
        {items.map((item) => (
          <li
            key={`${item.name}-${item.price}`}
            className="grid gap-1 border-b border-line py-4 md:grid-cols-[1fr_auto] md:items-baseline"
          >
            <div>
              <p className="text-[15px] font-medium uppercase tracking-[0.04em]">
                {item.name}
              </p>
              {item.note ? (
                <p className="mt-1 text-sm font-light leading-6 text-muted">
                  {item.note}
                </p>
              ) : null}
            </div>
            <p className="text-[15px] font-medium text-navy">{item.price}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
