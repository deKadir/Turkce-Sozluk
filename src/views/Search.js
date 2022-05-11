import React from 'react';
import SvgLogo from './../components/icons/Logo';
import Search from '../components/Search';
import styled from 'styled-components/native';
import bg from '../../assets/bg.jpg';
import { Platform, ImageBackground } from 'react-native';
import theme from '../utils/theme';
import { SimpleCard, SimpleCardTitle } from '../components/SimpleCard';
import { FlatList } from 'react-native';
import SuggestionCard from '../components/SuggestionCard';
import { CardLabel } from '../components/Card';

export default function SearchView({ navigation }) {
  const [focus, setFocus] = React.useState(false);
  const [homeData, setHomeData] = React.useState(null);
  const getHomeData = async () => {
    const response = await fetch('https://sozluk.gov.tr/icerik');
    const data = await response.json();
    setHomeData(data);
  };
  React.useEffect(() => {
    getHomeData();
  }, []);
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
      {!focus && (
        <Content>
          <SuggestionCard
            title="Bir Kelime"
            data={homeData?.kelime[0]}
            onPress={() =>
              navigation.navigate('Details', {
                title: homeData?.kelime[0]?.madde,
              })
            }
          />
          <SuggestionCard
            title="Bir Deyim - Atasözü"
            data={homeData?.atasoz[0]}
            onPress={() =>
              navigation.navigate('Details', {
                title: homeData?.atasoz[0]?.madde,
              })
            }
          />
        </Content>
      )}
      {focus && (
        <Content focus={true}>
          <CardLabel>Son Aramalar</CardLabel>
          <HistoryContainer>
            <FlatList
              data={[
                {
                  title: 'kalem',
                },
                {
                  title: 'kagıt',
                },
                {
                  title: 'silgi',
                },
              ]}
              renderItem={({ item }) => {
                return (
                  <SimpleCard>
                    <SimpleCardTitle>{item.title}</SimpleCardTitle>
                  </SimpleCard>
                );
              }}
              keyExtractor={(item) => item.title}
            />
          </HistoryContainer>
        </Content>
      )}
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
  padding-top: ${(props) => (props.focus ? '60px' : '45px')};
`;

const HistoryContainer = styled.View`
  flex: 1;
`;
