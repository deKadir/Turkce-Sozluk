import styled from 'styled-components/native';
import Button from './Button';
export const SimpleCardTitle = styled.Text`
  font-size: 16px;
  font-weight: normal;
`;

export const SimpleCard = styled(Button)`
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 8px;
  padding-bottom: 8px;
  background: white;
  margin-top: 8px;
  margin-bottom: 8px;
  justify-content: flex-start;
  flex: none;
`;
