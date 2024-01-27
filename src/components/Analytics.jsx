import { BoxTick, Coin1, I3DRotate, ShoppingCart } from "iconsax-react";
import ChartRed from "../assets/chart-red.png";
import ChartGreen from "../assets/chart-green.png";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

const Analytics = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2">
      <div className="inline-flex flex-col items-start justify-start rounded-[14px] border border-slate-100 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="mb-2 flex w-full items-center justify-between">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-emerald-400 dark:border-neutral-700">
            <BoxTick size="24" variant="Bulk" />
          </span>

          <img src={ChartGreen} alt="graph" />
        </div>

        <h3 className="mb-1 text-base font-medium text-zinc-500 dark:text-neutral-300">
          Total Order
        </h3>
        <span className="text-xl font-semibold text-gray-700 dark:text-neutral-100">
          350
        </span>
        <div className="mt-2 flex  w-full items-center justify-between gap-3">
          <span className="inline-flex items-center justify-center gap-3 rounded-full bg-emerald-400 bg-opacity-10 px-2 py-1 text-xs font-medium leading-none text-emerald-400">
            <FaArrowTrendUp size={16} />
            23,5%
          </span>
          <span className="text-sm font-normal text-zinc-600 dark:text-neutral-300">
            vs. previous month
          </span>
        </div>
      </div>

      <div className="inline-flex flex-col items-start justify-start rounded-[14px] border border-slate-100 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="mb-2 flex w-full items-center justify-between">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-emerald-400 dark:border-neutral-700">
            <I3DRotate size="24" variant="Bulk" />
          </span>

          <img src={ChartRed} alt="graph" />
        </div>

        <h3 className="mb-1 text-base font-medium text-zinc-500 dark:text-neutral-300">
          Total Refund
        </h3>
        <span className="text-xl font-semibold text-gray-700 dark:text-neutral-100">
          270
        </span>
        <div className="mt-2 flex  w-full items-center justify-between gap-3">
          <span className="inline-flex items-center justify-center gap-3 rounded-full bg-red-500 bg-opacity-10 px-2 py-1 text-xs font-medium leading-none text-red-500">
            <FaArrowTrendDown size={16} />
            23,5%
          </span>
          <span className="text-sm font-normal text-zinc-600 dark:text-neutral-300">
            vs. previous month
          </span>
        </div>
      </div>

      <div className="inline-flex flex-col items-start justify-start rounded-[14px] border border-slate-100 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="mb-2 flex w-full items-center justify-between">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-emerald-400 dark:border-neutral-700">
            <ShoppingCart size="24" variant="Bulk" />
          </span>

          <img src={ChartRed} alt="graph" />
        </div>

        <h3 className="mb-1 text-base font-medium text-zinc-500 dark:text-neutral-300">
          Average Sales
        </h3>
        <span className="text-xl font-semibold text-gray-700 dark:text-neutral-100">
          1567
        </span>
        <div className="mt-2 flex  w-full items-center justify-between gap-3">
          <span className="inline-flex items-center justify-center gap-3 rounded-full bg-red-500 bg-opacity-10 px-2 py-1 text-xs font-medium leading-none text-red-500">
            <FaArrowTrendDown size={16} />
            23,5%
          </span>
          <span className="text-sm font-normal text-zinc-600 dark:text-neutral-300">
            vs. previous month
          </span>
        </div>
      </div>

      <div className="inline-flex flex-col items-start justify-start rounded-[14px] border border-slate-100 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="mb-2 flex w-full items-center justify-between">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-emerald-400 dark:border-neutral-700">
            <Coin1 size="24" variant="Bulk" />
          </span>

          <img src={ChartGreen} alt="graph" />
        </div>

        <h3 className="mb-1 text-base font-medium text-zinc-500 dark:text-neutral-300">
          Total Income
        </h3>
        <span className="text-xl font-semibold text-gray-700 dark:text-neutral-100">
          $350.000
        </span>
        <div className="mt-2 flex  w-full items-center justify-between gap-3">
          <span className="inline-flex items-center justify-center gap-3 rounded-full bg-emerald-400 bg-opacity-10 px-2 py-1 text-xs font-medium leading-none text-emerald-400">
            <FaArrowTrendUp size={16} />
            23,5%
          </span>
          <span className="text-sm font-normal text-zinc-600 dark:text-neutral-300">
            vs. previous month
          </span>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
