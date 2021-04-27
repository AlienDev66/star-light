import React from "react";
import { ReactNode } from "react";
import { ScrollView } from "react-native-gesture-handler";
import StarCard from "../../components/starCard";
import Starfield from "../../components/Starfield";

import { Wrapper, Heading } from "./styles";

interface PeopleProps {
  children: ReactNode;
}

function StarPeople({ children }: PeopleProps) {
  return (
    <Wrapper>
      {/* <Heading>Coming soon...</Heading> */}
      <Starfield />
      <ScrollView>
        <StarCard type="people" />
        <StarCard type="people" />
        <StarCard type="people" />
        <StarCard type="people" />
        <StarCard type="people" />
        <StarCard type="people" />
        <StarCard type="people" />
        <StarCard type="people" />
        <StarCard type="people" />
        <StarCard type="people" />
        <StarCard type="people" />
        <StarCard type="people" />
        <StarCard type="people" />
        <StarCard type="people" />
        <StarCard type="people" />
        <StarCard type="people" />
        {children}
      </ScrollView>
    </Wrapper>
  );
}

export default StarPeople;
