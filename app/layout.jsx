import React from "react";

import dynamic from 'next/dynamic';

import ThemeSwitcher from "../components/ThemeSwitcher";
import ThemeRegistry from "../theme/ThemeRegistry";

import "./globals.css"

const DynamicPageLoadChecker = dynamic(() => import('@utils/PageLoadChecker'), {
  ssr: false,
});


/**
 *
 *
 * @export
 * @param {*} { children }
 * @return {*} 
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-spirals">
        <ThemeRegistry options={{ key: "mui" }}>
          <DynamicPageLoadChecker />
          <ThemeSwitcher />
          {(children)}
        </ThemeRegistry>
      </body>
    </html>
  );
}
