import React from "react";
import { ReactNode } from "react";

import { Wrapper, Heading } from "./styles";

interface PeopleProps {
  children: ReactNode;
}

function StarPeople({ children }: PeopleProps) {
  return (
    <Wrapper>
      <Heading>Coming soon...</Heading>
      {children}
    </Wrapper>
  );
}

export default StarPeople;
