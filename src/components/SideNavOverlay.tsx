import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const SideNavOverlay = () => {

  const open = useSelector((state: RootState) => state.layout.mobileSideNavOpen);

  return open ? (
    <div className="h-full absolute w-screen z-10 top-0 left-0 bg-[#00000080]"></div>
  ) : null;
};

export default SideNavOverlay;
