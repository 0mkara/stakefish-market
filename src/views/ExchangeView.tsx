import React from 'react';
import useFetch from 'use-http';
import { useLocation } from "wouter";
import { Container, ListGroup, Button } from "react-bootstrap";
import { IExchangeInfo } from "../types";


export const ExchangeView: React.FC = () => {
  const [location, setLocation] = useLocation();
  const exchangeId = location.replace("/exchange/", "");
  const { loading, error, data = [] } = useFetch(`https://api.coingecko.com/api/v3/exchanges/${exchangeId}`, {}, []);
  console.log(data);
  const exchnageInfo: IExchangeInfo = data;
  return (
    <Container>
      {
        Object.keys(exchnageInfo).map((key: string) => {
          if(key !== "tickers" && key !== "status_updates") {
            return (
              <ListGroup horizontal className="justify-content-start">
                <ListGroup.Item variant="primary" className="lg-2 xl-2">{key}</ListGroup.Item>
                {/* @ts-ignore */}
                <ListGroup.Item className="w-100 text-justify">{exchnageInfo[key]}</ListGroup.Item>
              </ListGroup>
            )
          }
        })
      }
      <Button variant="primary" onClick={() => setLocation('/')}>Home</Button>
    </Container>
  )
}