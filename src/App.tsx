import AppRoute from "./route/AppRoute";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useWindowSize from "./hooks/UseWindowSize";
import { useDispatch, useSelector } from "react-redux";
import { toggleMobileSideNavState } from "./redux/slices/layoutSlice";
import { RootState } from "./redux/store";

function App() {
  const windowWidth = useWindowSize().width;
  const location = useLocation();
  const path = location.pathname;
  const truncatedPathName = path == "/" ? "HOME" : path.substring(1).toUpperCase();

  const dispatch = useDispatch();
  const mobileSideNavOpen = useSelector((state: RootState) => state.layout.mobileSideNavOpen);

  document.title = `ZINARY | ${truncatedPathName}`;

  const toggleMobileSideNavVisibility = () => {
    if ((windowWidth < 767 || windowWidth === 767) && mobileSideNavOpen) {
      dispatch(toggleMobileSideNavState());
    } else {
      return;
    }
  };

  useEffect(() => {
    toggleMobileSideNavVisibility();
  }, [path]);

  return <AppRoute />;
}

export default App;
