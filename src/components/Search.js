import { Text, TextInput, Keyboard } from 'react-native';
import React from 'react';
import theme from '../utils/theme';
import styled from 'styled-components/native';
import SvgSearch from './icons/Search';
import Button from './Button';
function Search({ onChangeFocus }) {
  const [focus, setFocus] = React.useState(false);
  const [searchKey, setSearchkey] = React.useState('');
  const onFocus = () => {
    setFocus(true);
  };
  React.useEffect(() => {
    Keyboard.addListener('keyboardDidShow', keyboardShow);
    Keyboard.addListener('keyboardDidHide', keyboardHide);
    return () => {
      Keyboard.removeListener('keyboardDidShow', keyboardShow);
      Keyboard.removeListener('keyboardDidHide', keyboardHide);
    };
  }, []);

  const keyboardShow = () => {
    onChangeFocus(true);
  };
  const keyboardHide = () => {
    onChangeFocus(false);
  };
  const onCancel = () => {
    Keyboard.dismiss();
    setFocus(false);
    setSearchkey('');
  };
  return (
    <Container focus={focus}>
      <LogoContainer>
        <SvgSearch />
      </LogoContainer>
      <SearchInput
        placeholder="Türkçe Sözlük'te Ara"
        placeholderTextColor={theme.colors.textMedium}
        onFocus={onFocus}
        onChange={(e) => setSearchkey(e.target.value)}
        value={searchKey}
      />
      {focus && (
        <ButtonClose onPress={onCancel}>
          <Text>Vazgeç</Text>
        </ButtonClose>
      )}
    </Container>
  );
}

const LogoContainer = styled.View`
  pointer-events: none;
  position: absolute;
  left: 15px;
  top: 15px;
`;
const Container = styled.View`
  background: white;
  align-items: center;
  flex-direction: row;
  position: relative;
  shadow-color: #000;
  shadow-opacity: 0.8;
  shadow-radius: 5px;
  elevation: 5;
  border-radius: ${theme.radius.normal};
  border-width: 2px;
  border-color: ${(props) => (props.focus ? '#d1d1d1' : 'transparent')};
`;
const SearchInput = styled(TextInput)`
  height: 52px;
  color: ${theme.colors.textDark};
  padding-left: 52px;
  flex: auto;
`;
const ButtonClose = styled(Button)`
  height: 52px;
  padding: 15px;
`;
export default Search;
