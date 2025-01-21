import ActionButtons from "./action-buttons";
import Logo from "./logo";
import { NavigationMenuBar } from "./navigation-bar";

const Navbar = () => {
  return (
    <div className=" flex justify-between item-center border-b px-10 h-40">
      <Logo />
      <NavigationMenuBar />
      <ActionButtons />
    </div>
  );
};

export default Navbar;
