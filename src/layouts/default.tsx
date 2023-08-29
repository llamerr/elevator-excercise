import { Box } from "@mui/material";
import { useElementSize } from "usehooks-ts";

import Header from "@/components/Header/Header.tsx";

const DefaultLayout = ({ children }) => {
  const [headerRef, { width, height }] = useElementSize();

  return (
    <>
      <Header ref={headerRef} />
      <Box sx={{ marginTop: `${height}px` }}>{children}</Box>
    </>
  );
};

export default DefaultLayout;
