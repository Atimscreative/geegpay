/* eslint-disable react/prop-types */
import {
  ArrowDown2,
  Calendar,
  Notification,
  SearchNormal1,
} from "iconsax-react";
import Avatar from "../assets/avatar.png";

const NavMenu = ({ currentPage }) => {
  const formatDate = () => {
    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = new Date().toLocaleDateString(undefined, options);
    return formattedDate;
  };

  const formattedDate = formatDate();

  return (
    <>
      <section className="flex w-full items-center justify-between  bg-neutral-50 px-4 py-2 dark:border-neutral-800 dark:bg-neutral-900 lg:py-4">
        <span className="text-base font-semibold text-zinc-800 dark:text-neutral-100 md:text-xl">
          {currentPage}
        </span>
        <div className="flex items-center gap-3 sm:gap-6">
          <label
            htmlFor="search"
            className="relative flex h-8 w-8 items-center justify-center gap-2 rounded-[50px] border border-zinc-300 bg-white p-0 has-[:focus]:border has-[:focus]:border-emerald-400 dark:border-neutral-700 dark:bg-neutral-800 md:hidden lg:static"
          >
            <SearchNormal1 size="18" className="dark:text-neutral-100" />
          </label>

          <label
            htmlFor="search"
            className="relative hidden w-[300px] items-center gap-2 rounded-[50px] border border-zinc-300 bg-white px-2 py-1 pl-3 has-[:focus]:border has-[:focus]:border-emerald-400 dark:border-neutral-700 dark:bg-neutral-800 md:flex lg:static"
          >
            <SearchNormal1 size="18" className="dark:text-neutral-100" />
            <input
              type="text"
              name="search"
              autoComplete="off"
              id="search"
              placeholder="Search..."
              className="form-input flex-grow border-none bg-transparent p-0 focus:border-none focus:shadow-none focus:outline-0  focus:ring-0 dark:text-neutral-200 "
            />
          </label>

          <div className="hidden items-center gap-3 dark:text-neutral-100 lg:flex">
            <Calendar size={20} />
            <span className="text-sm font-medium text-zinc-800 dark:text-neutral-100">
              {formattedDate}
            </span>
          </div>

          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-300 text-slate-900 dark:border-neutral-700 dark:text-neutral-100 md:h-10 md:w-10">
            <Notification size="20" />
          </span>

          <div className="flex scale-90  cursor-pointer items-center gap-2 rounded-[50px] p-1 pr-3 dark:border-neutral-700  md:border md:border-zinc-300">
            <img src={Avatar} className="h-8 w-8" alt="user" />
            <div className="hidden flex-col items-center justify-center md:flex">
              <span className="text-xs font-normal text-zinc-800 dark:text-neutral-100">
                Justin Bergson
              </span>
              <span className="text-right text-[9px] text-zinc-500 dark:text-neutral-200">
                Justin@gmail.com
              </span>
            </div>
            <ArrowDown2
              size={16}
              className="hidden dark:text-neutral-100 md:inline-block"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default NavMenu;
