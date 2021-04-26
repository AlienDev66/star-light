import React from "react";
import { ReactNode } from "react";

import { Text } from "react-native";

import { Container } from "./styles";

interface PlanetsProps {
  children: ReactNode;
}

function StarPlanets({ children }: PlanetsProps) {
  return (
    <Container>
      <Text>planets</Text>
      {children}
    </Container>
  );
}

export default StarPlanets;
