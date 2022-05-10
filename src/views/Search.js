import React from 'react';
import SvgLogo from './../components/icons/Logo';
import Search from '../components/Search';
import styled from 'styled-components/native';
import bg from '../../assets/bg.jpg';
import { Platform, ImageBackground } from 'react-native';
import { Card, CardBody, CardSummary, CardTitle } from '../components/Card';
import theme from '../utils/theme';
export default function SearchView({ navigation }) {
  const [focus, setFocus] = React.useState(false);

  return (
    <SafeArea>
      <Container source={bg} height={focus ? 0 : 285}>
        <LogoContainer focus={focus}>
          <SvgLogo width="120" height="120" color="white" />
        </LogoContainer>
        <SearchContainer>
          <Search onChangeFocus={(status) => setFocus(status)} />
        </SearchContainer>
      </Container>
      <Content>
        <Card onPress={() => navigation.navigate('Details')}>
          <CardBody>
            <CardTitle>on para</CardTitle>
            <CardSummary>çok az (para)</CardSummary>
          </CardBody>
        </Card>
        <CardLabel>Bir Deyim - Atasözü</CardLabel>
        <Card onPress={() => navigation.navigate('Details')}>
          <CardBody>
            <CardTitle>on para</CardTitle>
            <CardSummary>çok az (para)</CardSummary>
          </CardBody>
        </Card>
      </Content>
    </SafeArea>
  );
}
const SafeArea = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === 'android' ? '25px' : '0'};
`;
const LogoContainer = styled.View`
  justify-content: center;
  flex: 1;
  align-items: center;
  opacity: ${(props) => (props.focus ? 0 : 1)};
`;
const Container = styled(ImageBackground)`
  padding: 16px;
  height: ${(props) => props.height}px;
  padding-bottom: 0;
`;
const SearchContainer = styled.View`
  margin-bottom: -24px;
`;

const Content = styled.View`
  background: ${theme.colors.softRed};
  flex: 1;
  position: relative;
  z-index: -1;
  padding: 16px;
  padding-top: 40px;
`;

const CardLabel = styled.Text`
  color: ${theme.colors.textLight};
`;
