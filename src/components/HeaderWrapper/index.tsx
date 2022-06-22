import React, { ReactNode } from "react";

import * as C from "./styles";

interface HeaderWrapperProps {}

function HeaderWrapper({}: HeaderWrapperProps) {
  return (
    <C.Container>
      <h1>HeaderWrapper</h1>
    </C.Container>
  );
}

export default HeaderWrapper;
