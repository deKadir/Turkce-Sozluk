import {
  Card,
  CardBody,
  CardSummary,
  CardTitle,
  CardLabel,
} from '../components/Card';

import React from 'react';

export default function SuggestionCard({ onPress, data, title }) {
  return (
    <Card onPress={onPress}>
      <CardBody>
        <CardLabel>{title}</CardLabel>
        <CardTitle>{data?.madde}</CardTitle>
        <CardSummary>{data?.anlam}</CardSummary>
      </CardBody>
    </Card>
  );
}
