/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { createDeck } from "../../utils/misc";
import { Card } from "../card/Card";

let timer;

export const MemoryGameComponent = (props) => {
  const { gridSize, onMovePlayed, gameComplete, endTime, playerState } = props;

  const [openedCard, setOpenedCard] = useState([]);
  const [matched, setMatched] = useState([]);
  const [customers, setCustomers] = useState(createDeck(gridSize));

  function flipCard(index) {
    if (openedCard.length === 2) return;
    onMovePlayed();
    setOpenedCard((opened) => [...opened, index]);
  }

  useEffect(() => {
    if (openedCard < 2) return;

    const firstMatched = customers[openedCard[0]];
    const secondMatched = customers[openedCard[1]];

    if (secondMatched && firstMatched.id === secondMatched.id) {
      setMatched([...matched, firstMatched.id]);
    }

    if (openedCard.length === 2)
      timer = setTimeout(() => {
        setOpenedCard([]);
      }, 500);
  }, [openedCard]);

  if (matched.length === gridSize / 2) {
    clearTimeout(timer);
    gameComplete();
  }

  // On Game Reset
  useEffect(() => {
    setMatched([]);
    setOpenedCard([]);
    setCustomers(createDeck(gridSize));
  }, [endTime]);

  const renderGrid = () => {
    return customers.map((customer, index) => {
      let isFlipped = false;

      if (openedCard.includes(index)) isFlipped = true;
      if (matched.includes(customer.id)) isFlipped = true;

      return (
        <Card
          key={index}
          name={customer.name}
          isFlipped={isFlipped}
          flipCard={flipCard}
          index={index}
          playerState={playerState}
        />
      );
    });
  };

  return (
    <>
      <div className="memory-game">{renderGrid()}</div>
    </>
  );
};
