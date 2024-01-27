import NavMenu from "../components/NavMenu";
import SideMenu from "../components/SideMenu";

// eslint-disable-next-line react/prop-types
const UserProfile = ({ theme, setTheme }) => {
  return (
    <div className="flex">
      <SideMenu theme={theme} setTheme={setTheme} />
      <section className="flex-grow">
        <NavMenu currentPage="User Profile" />
        <div className="min-h-screen w-full dark:bg-neutral-900"></div>
      </section>
    </div>
  );
};

export default UserProfile;
