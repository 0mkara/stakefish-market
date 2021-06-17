import React from 'react';
import { IExchange } from '../types';

interface Props {
  exchange: IExchange;
}

export const ExchangeItem: React.FC<Props> = ({ exchange }) => {
  return (
    <div>
      <p>{exchange.name}</p>
      <p>{exchange.country}</p>
      <p>{exchange.url}</p>
      <p>{exchange.image}</p>
      <p>{exchange.trust_score_rank}</p>
    </div>
  )
}