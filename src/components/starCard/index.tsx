import React, { FC } from "react";
import { ReactNode } from "react";
import people_img from "../../images/pic-people.jpg";

import {
  StarCardContainer,
  PeoplePicture,
  InfoRow,
  Name,
  FeaturesTitle,
  Features,
  NoVeryImportantInformation,
  TextContainer,
  Information,
  Description,
} from "./styles";

const StarCard: FC<StarCardProps> = ({ type }) => (
  <StarCardContainer>
    <PeoplePicture source={people_img} />

    <InfoRow>
      <Description>
        <Name>Luke Skywalker</Name>
        <Features>
          <FeaturesTitle>
            {type === "people" ? " Height: " : " Rotation period: "}
          </FeaturesTitle>
          172
        </Features>

        <Features>
          <FeaturesTitle>
            {type === "people" ? " Mass: " : " Orbital period: "}
          </FeaturesTitle>
          77
        </Features>

        <Features>
          <FeaturesTitle>
            {type === "people" ? " Hair color: " : " Diameter: "}
          </FeaturesTitle>
          Blond
        </Features>

        <Features>
          <FeaturesTitle>
            {type === "people" ? " Skin color: " : " Climate: "}
          </FeaturesTitle>
          Fair
        </Features>

        <Features>
          <FeaturesTitle>
            {type === "people" ? " Eye color: " : " Gravity: "}
          </FeaturesTitle>
          Blue
        </Features>
      </Description>
      <NoVeryImportantInformation>
        <TextContainer>
          <Information>{type === "people" ? "19BBY" : "terrain"}</Information>
        </TextContainer>
        <TextContainer>
          <Information>{type === "people" ? "Male" : " 1 "}</Information>
        </TextContainer>

        {type === "planets" && (
          <TextContainer>
            <Information>Population</Information>
          </TextContainer>
        )}
      </NoVeryImportantInformation>
    </InfoRow>
  </StarCardContainer>
);

export default StarCard;
