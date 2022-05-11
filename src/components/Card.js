import styled from 'styled-components/native';
import theme from '../utils/theme';
import Button from './Button';
export const CardLabel = styled.Text`
  color: ${theme.colors.textLight};
`;
export const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
export const CardSummary = styled.Text`
  font-size: 14px;
  color: ${theme.colors.textMedium};
  margin-top: 6px;
`;

export const Card = styled(Button)`
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 16px;
  padding-bottom: 16px;
  background: white;
  margin-top: 15px;
  margin-bottom: 15px;
  flex: 1;
  justify-content: flex-start;
`;

export const CardBody = styled.View`
  border-left-width: 3px;
  border-left-color: ${theme.colors.textLight};
  padding-left: 15px;
`;
