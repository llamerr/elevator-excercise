import { Box } from "@mui/material";
import React from "react";
import { useElementSize } from "usehooks-ts";

import Header from "@/components/Header/Header.tsx";

type LayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {
  const [headerRef, { width, height }] = useElementSize();

  return (
    <>
      <Header ref={headerRef} />
      <Box sx={{ marginTop: `${height}px` }}>{children}</Box>
    </>
  );
};

export default DefaultLayout;
