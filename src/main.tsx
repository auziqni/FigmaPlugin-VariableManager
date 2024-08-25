import React, { useEffect, useState } from "react";
import {
  dispatchTS,
  getColorTheme,
  listenTS,
  subscribeColorTheme,
} from "./utils/utils";

import boltIconLight from "./assets/bolt-figma-lightmode.svg";
import boltIconDark from "./assets/bolt-figma-darkmode.svg";
import viteIcon from "./assets/vite.svg";
import reactIcon from "./assets/react.svg";
import typescriptIcon from "./assets/typescript.svg";
import sassIcon from "./assets/sass.svg";

export const App = () => {
  const [lightOrDarkMode, setLightOrDarkMode] = useState(getColorTheme());
  useEffect(() => {
    subscribeColorTheme((mode) => {
      setLightOrDarkMode(mode);
    });
  }, []);
  return <main className="h-full w-full bg-black text-white">hello</main>;
};
