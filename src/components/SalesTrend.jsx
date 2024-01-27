import BarChart from "./BarChart";

// eslint-disable-next-line react/prop-types
const SalesTrend = ({ theme }) => {
  return (
    <section className="flex h-[350px] w-full flex-wrap items-center justify-between rounded-[14px] border border-slate-100 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
      <h1 className="text-base font-semibold text-zinc-800 dark:text-neutral-100">
        Sales Trends
      </h1>
      <div className="text-sm font-medium leading-snug text-gray-700 dark:text-neutral-300">
        Sort by:&nbsp;&nbsp;&nbsp;
        <select className="form-select w-[80px] appearance-none rounded-[50px]  p-2 text-xs focus:border-emerald-400 focus:ring-0 dark:border-neutral-800 dark:bg-neutral-800">
          <option value="weekly">Weekly</option>
          <option value="daily">Daily</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <div className="w-full">
        <BarChart theme={theme} />
      </div>
    </section>
  );
};

export default SalesTrend;
