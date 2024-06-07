"use client";
import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import SearchAppBar from "./components/navBar";
import { SessionProvider } from "next-auth/react";

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body>
        <SessionProvider session={props.session}>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <SearchAppBar></SearchAppBar>
              {props.children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
