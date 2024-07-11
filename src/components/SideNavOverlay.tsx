import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const SideNavOverlay = () => {

  const open = useSelector((state: RootState) => state.layout.mobileSideNavOpen);

  return open ? (
    <div className="h-screen absolute w-screen z-10 top-0 left-0 bg-[#fbf6f266]"></div>
  ) : null;
};

export default SideNavOverlay;
