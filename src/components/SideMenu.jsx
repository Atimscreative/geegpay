import {
  ArrowCircleRight2,
  Box,
  Category,
  DiscountShape,
  InfoCircle,
  Logout,
  Moon,
  Profile2User,
  Setting2,
  Sun1,
  TrendUp,
} from "iconsax-react";
import Logo from "../assets/geegpay.svg";
import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const SideMenu = ({ theme, setTheme }) => {
  // const [theme, setTheme] = useState(null);
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  useEffect(() => {
    if (systemTheme) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [setTheme, systemTheme]);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="sticky left-0 top-0 flex h-screen w-[10%] flex-col items-center gap-6 border-r border-slate-200 bg-gray-50 py-5 dark:border-neutral-800 dark:bg-neutral-900 md:w-20">
      <Link to="/" className="mb-5">
        <img
          src={Logo}
          width="40px"
          height="40px"
          alt="Geegpay"
          className="px-1"
        />
      </Link>
      <div className="scrollbar absolute top-[100px] flex w-full flex-col items-center justify-start gap-6 px-2">
        <NavLink
          to="/"
          activeclassname="active"
          className="text-stone-400 duration-300 hover:text-slate-900 dark:hover:text-emerald-500"
        >
          <Category size="24" variant="Bulk" />
        </NavLink>
        <NavLink
          activeclassname="active"
          to="/trending"
          className="text-stone-400 duration-300 hover:text-slate-900 dark:hover:text-emerald-500"
        >
          <TrendUp size="24" variant="Broken" />
        </NavLink>
        <NavLink
          to="/user-profile"
          activeclassname="active"
          className="text-stone-400 duration-300 hover:text-slate-900 dark:hover:text-emerald-500"
        >
          <Profile2User size="24" variant="Broken" />
        </NavLink>
        <NavLink
          activeclassname="active"
          to="/wallets"
          className="text-stone-400 duration-300 hover:text-slate-900 dark:hover:text-emerald-500"
        >
          <Box size="24" variant="Broken" />
        </NavLink>
        <NavLink
          activeclassname="active"
          to="/discounts"
          className="text-stone-400 duration-300 hover:text-slate-900 dark:hover:text-emerald-500"
        >
          <DiscountShape size="24" variant="Broken" />
        </NavLink>
        <NavLink
          activeclassname="active"
          to="/information"
          className="text-stone-400 duration-300 hover:text-slate-900 dark:hover:text-emerald-500"
        >
          <InfoCircle size="24" variant="Broken" />
        </NavLink>

        <button
          onClick={toggleTheme}
          className={`relative inline-flex h-auto w-7 flex-col items-center justify-start gap-1 rounded-[100px] bg-white p-1 text-stone-400 duration-300 dark:bg-neutral-800  `}
        >
          <Sun1
            size="20"
            variant="Broken"
            className={`${theme === "light" && "text-neutral-50"} z-20`}
          />
          <Moon
            size="20"
            variant="Bold"
            className={`${theme === "dark" && "text-neutral-50"} z-20`}
          />
          <div
            className={`absolute z-10  h-5 w-5 scale-[1.1] rounded-full bg-emerald-400 duration-300 ${theme === "dark" ? "top-[28px]" : "top-1"}`}
          ></div>
        </button>

        <div className="mt-1 flex flex-col items-center gap-6 lg:mt-2">
          <span className="cursor-pointer text-stone-400 duration-300 hover:text-slate-900 dark:hover:text-emerald-500">
            <ArrowCircleRight2 size="24" variant="Broken" />
          </span>
          <span className="cursor-pointer text-stone-400 duration-300 hover:text-slate-900 dark:hover:text-emerald-500">
            <Setting2 size="24" variant="Broken" />
          </span>
          <span className="cursor-pointer text-stone-400 duration-300 hover:text-slate-900 dark:hover:text-emerald-500">
            <Logout size="24" variant="Broken" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
