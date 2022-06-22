import React, { ReactNode } from "react";

import * as C from "./styles";

interface SectionProps {
  variant: "blue" | "beige" | "white" | "black";
  title: string;
  description: string;
}

function Section({ variant, title, description }: SectionProps) {
  const buttonVariant = Math.round(Math.random());

  return (
    <C.Container className={variant}>
      <C.HeaderWrapper>
        <C.Header>
          <h1>
            <C.DropboxLogo />
            <span>Dropbox</span>
          </h1>
          <button>{buttonVariant === 0 ? "Acessar" : "Interagir"}</button>
        </C.Header>
      </C.HeaderWrapper>

      <C.Content>
        <h2> {title} </h2>
        <p>{description} </p>
      </C.Content>
    </C.Container>
  );
}

export default Section;
