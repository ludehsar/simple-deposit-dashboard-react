import React from "react";
import styled from "styled-components";

import Navbar from "./Navbar";
import NewDepositButton from "./NewDepositButton";
import Deposits from "./Deposits";
import Data from "../../data/deposits.json";

const Container = styled.div`
  width: auto;
  margin-left: 16rem;
  position: relative;
  padding: 0 4rem;
`;

const Main: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Deposits title="Active Deposits" data={Data.active} />
      <Deposits title="Closed Deposits" data={Data.closed} />
      <NewDepositButton />
    </Container>
  );
};

export default Main;
