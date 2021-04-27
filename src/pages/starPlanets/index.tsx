import React from "react";
import { ReactNode } from "react";

import StarCard from "../../components/starCard";
import Starfield from "../../components/Starfield";
import { Heading, Wrapper } from "../starPeople/styles";

interface PlanetsProps {
  children: ReactNode;
}

function StarPlanets({ children }: PlanetsProps) {
  return (
    <Wrapper>
      <Starfield />
      {/* <Heading>Coming soon...</Heading> */}
      <StarCard type="planets" />
      {children}
    </Wrapper>
  );
}

export default StarPlanets;
