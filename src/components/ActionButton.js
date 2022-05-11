import styled from 'styled-components/native';
import theme from '../utils/theme';

export const ActionButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: white;
  padding: 12px 16px;
  border-radius: 10000px;
  shadow-color: #000;
  shadow-opacity: 0.8;
  elevation: 5;
  margin-right: 5px;
`;

export const ActionButtonTitle = styled.Text`
  color: ${theme.colors.textLight};
  margin-left: 10px;
  font-weight: bold;
`;
