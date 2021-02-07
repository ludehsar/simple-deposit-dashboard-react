import React from "react";
import styled from "styled-components";
import AllDepositsBtn from "./AllDepositsBtn";

import DepositItem from "./DepositItem";
import TableHead from "./TableHead";

interface IDepositsProps {
  title: string;
  data: {
    property: {
      address: {
        street: string;
        city: string;
        state: string;
      };
      imageUrl: string;
    };
    moveInDate: string;
    rent: number;
    deposit: {
      amount: number;
      type: string;
    };
    status: {
      message: string;
      level: number;
    };
  }[];
}

const Container = styled.div``;

const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textColor};
  display: flex;
  align-items: center;
`;

const DataCount = styled.div`
  background-color: ${({ theme }) => theme.header};
  color: ${({ theme }) => theme.headerNumber};
  margin-left: 1rem;
  font-size: 1rem;
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const Deposits: React.FC<IDepositsProps> = ({
  title,
  data,
}: IDepositsProps) => {
  return (
    <Container>
      <Title>
        {title}
        <DataCount>{data.length}</DataCount>
      </Title>
      <TableHead />
      {data.map((singleItem, key) => (
        <DepositItem {...{ key }} data={singleItem} />
      ))}
      <AllDepositsBtn {...{ title }} />
    </Container>
  );
};

export default Deposits;
