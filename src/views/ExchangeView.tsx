import React from 'react';
import { useLocation } from "wouter";


export const ExchangeView: React.FC = () => {
    const [location] = useLocation();
    const exName = location.replace("/exchange/", "");
  return <h1>Exchange: {exName}</h1>
}