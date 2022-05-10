import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Button = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  justify-content: center;
  height: 56px;
`;

export default Button;
