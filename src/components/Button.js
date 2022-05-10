import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Button = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 56px;
`;

export default Button;
