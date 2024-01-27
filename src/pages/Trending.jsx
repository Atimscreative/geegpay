/* eslint-disable react/prop-types */
import NavMenu from "../components/NavMenu";
import SideMenu from "../components/SideMenu";

const Trending = ({ theme, setTheme }) => {
  return (
    <div className="flex">
      <SideMenu theme={theme} setTheme={setTheme} />
      <section className="flex-grow">
        <NavMenu currentPage="Trending" />
        <div className="min-h-screen w-full dark:bg-neutral-900"></div>
      </section>
    </div>
  );
};

export default Trending;
