const platforms = [
  {
    company: "Book Bazaar",
    revenue: 2500000,
    rate: 15,
    color: "bg-indigo-500",
  },
  {
    company: "Artisan Aisle",
    revenue: 1800000,
    rate: 10,
    color: "bg-sky-400",
  },
  {
    company: "Toy Troop",
    revenue: 1200000,
    rate: 8,
    color: "bg-amber-300",
  },
  {
    company: "Xstore",
    revenue: 600000,
    rate: 5,
    color: "bg-rose-500",
  },
];

const TopPlatforms = () => {
  const totalRevenue = platforms.reduce((acc, cur) => acc + cur.revenue, 0);
  const Percentage = (amt, rate) => {
    const progress = (amt / totalRevenue) * 100 + rate;
    const newProgress = progress + progress * (rate / 100);
    return newProgress;
  };

  return (
    <section className="inline-flex w-full flex-col items-start justify-start rounded-[14px] border border-slate-100 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="mb-8 flex w-full items-center justify-between">
        <h3 className="text-base font-semibold leading-relaxed text-zinc-800 dark:text-neutral-100">
          Top Platforms
        </h3>
        <button className="cursor-pointer text-base font-medium text-emerald-400">
          See All
        </button>
      </div>
      <div className="scrollbar flex h-[300px] w-full flex-col gap-5 overflow-y-auto">
        {platforms.map((platform, index) => (
          <div key={index}>
            <h3 className="mb-2 font-semibold text-zinc-800 dark:text-neutral-100">
              {platform.company}
            </h3>
            <div className="relative mt-3 h-3 w-full overflow-hidden rounded-[40px] bg-neutral-100 dark:bg-neutral-800">
              <span
                style={{
                  visibility: "visible",
                  width: `${Math.ceil(Percentage(platform.revenue, platform.rate))}%`,
                }}
                className={`inline-block ${platform.color} absolute left-0 top-0 h-3 rounded-[40px]`}
              ></span>
            </div>
            <div className="mt-3 flex w-full items-center justify-between">
              <span className="text-sm font-normal leading-relaxed text-neutral-600 dark:text-neutral-200">
                ${platform.revenue.toLocaleString()}
              </span>
              <span className="text-sm font-normal leading-relaxed text-neutral-600 dark:text-neutral-200">
                +{platform.rate}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopPlatforms;
