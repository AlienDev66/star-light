import styled from "styled-components/native";
import colors from "../../style/colors";

export const StarCardContainer = styled.TouchableOpacity`
  flex-direction: row;
  height: 170px;
  width: 335px;
  background: transparent;
  border: 1px solid ${colors.purple};
  border-radius: 10px;
  margin: 10px;
`;

export const PeoplePicture = styled.Image`
  width: 119px;
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;
export const Description = styled.View`
  margin-left: 11px;
`;
export const InfoRow = styled.View`
  flex: 1;
`;
export const Name = styled.Text`
  color: ${colors.black};
  padding-top: 5px;
  font-size: 18px;
  font-family: roboto_700;
`;
export const Features = styled.Text`
  color: ${colors.black};
  padding-top: 5px;
`;
export const FeaturesTitle = styled.Text`
  font-family: roboto_700;
  color: ${colors.black};
`;
export const NoVeryImportantInformation = styled.View`
  height: 30px;
  width: 100%;

  flex-direction: row;
  align-items: center;
  margin-left: 3px;
`;
export const TextContainer = styled.View`
  height: 20px;
  width: 65px;
  background: ${colors.purple};
  border-radius: 50px;
  margin: 2px;

  align-items: center;
  justify-content: center;
`;
export const Information = styled.Text`
  color: ${colors.black};
`;
