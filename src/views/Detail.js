import React from 'react';
import styled from 'styled-components/native';
import theme from '../utils/theme';
import { ActionButton, ActionButtonTitle } from './../components/ActionButton';
import SvgMore from './../components/icons/More';
import SvgFavorite from './../components/icons/Favorite';
import SvgSound from './../components/icons/Sound';
import SvgHand from './../components/icons/Hand';
import {
  DetailCard,
  DetailCardTitle,
  DetailCardCaption,
  DetailCardExample,
} from './../components/DetailCard';
export default function DetailView({ route, navigation }) {
  return (
    <Container>
      <Title>Kalem</Title>
      <Description>Arapça Kalem</Description>
      <Buttons>
        <ActionButton>
          <SvgFavorite color="gray" />
        </ActionButton>
        <ActionButton>
          <SvgSound color="gray" />
        </ActionButton>
        <ButtonRight>
          <SvgHand color="gray" />
          <ActionButtonTitle>Türk İşaret Dili</ActionButtonTitle>
        </ButtonRight>
      </Buttons>
      <Cards>
        <DetailCard>
          <DetailCardTitle>1 İSİM</DetailCardTitle>
          <DetailCardCaption>
            Yazma çizme eyleminde kullanılan çeşitli biçimlerde araç
          </DetailCardCaption>
          <DetailCardExample>
            "Kagıt, kalem, mürekkep, hepsi masanın üstündedir". -Falih Rıfkı
            Atay
          </DetailCardExample>
        </DetailCard>
        <DetailCard>
          <DetailCardTitle>1 İSİM</DetailCardTitle>
          <DetailCardCaption>
            Yazma çizme eyleminde kullanılan çeşitli biçimlerde araç
          </DetailCardCaption>
          <DetailCardExample>
            "Kagıt, kalem, mürekkep, hepsi masanın üstündedir". -Falih Rıfkı
            Atay
          </DetailCardExample>
        </DetailCard>
      </Cards>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  padding: 16px;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
`;
const Description = styled.Text`
  font-size: 16px;
  color: ${theme.colors.textLight};
  margin-top: 6px;
`;

const Buttons = styled.View`
  flex-direction: row;
  margin: 16px 0;
`;
const ButtonRight = styled(ActionButton)`
  margin-left: auto;
`;
const Cards = styled.View``;
