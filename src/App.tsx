import AppRoute from "./route/AppRoute";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useWindowSize from "./hooks/UseWindowSize";
import { useDispatch } from "react-redux";
import { toggleMobileSideNavState } from "./redux/slices/layoutSlice";

function App() {
  const location = useLocation();
  const path = location.pathname;
  const truncatedPathName = path.substring(1).toUpperCase();
  const windowWidth = useWindowSize().width;
  const dispatch = useDispatch();

  document.title = `ZINARY | ${truncatedPathName}`;

  const toggleMobileSideNavVisibility = () => {
    if (windowWidth < 767 || windowWidth === 767) {
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
