import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface IDepositItemProps {
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
  };
  color?: string;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(190, 190, 190, 0.22);
  cursor: pointer;
  background-color: ${({ theme }) => theme.primary};
  transition: all ease-in-out 300ms;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

const Text = styled.h1`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textColor};
  margin: 0;
`;

const SubTitle = styled(Text)`
  font-size: 0.6rem;
  color: #b2bfe1;
  margin-top: 2px;
`;

const Property = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
`;

const PropertyText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

const PropertyImage = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 25px;
`;

const PropertyStreet = styled(Text)`
  font-size: 1rem;
`;

const MoveInDate = styled(Text)`
  width: 15%;
`;

const Rent = styled(Text)`
  width: 10%;
`;

const DepositWrapper = styled.div`
  width: 15%;
`;

const Status = styled.div`
  display: flex;
  align-items: center;
`;

const StatusIndicator = styled.div<Pick<IDepositItemProps, "color">>`
  width: 15px;
  height: 15px;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  margin-left: 1rem;
  position: absolute;
  right: 7rem;
`;

const DepositItem: React.FC<IDepositItemProps> = ({
  data,
}: IDepositItemProps) => {
  const { property, moveInDate, rent, deposit, status } = data;
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    import(`../../../../assets/images/${property.imageUrl}`).then((res) => {
      setImage(res.default);
    });
  });

  return (
    <Container>
      <Property>
        <PropertyImage src={image} />
        <PropertyText>
          <PropertyStreet>{property.address.street}</PropertyStreet>
          <SubTitle>
            {property.address.city} {property.address.state}
          </SubTitle>
        </PropertyText>
      </Property>
      <MoveInDate>{moveInDate}</MoveInDate>
      <Rent>${rent}</Rent>
      <DepositWrapper>
        <Text>${deposit.amount}</Text>
        <SubTitle>{deposit.type}</SubTitle>
      </DepositWrapper>
      <Status>
        <Text>{status.message}</Text>
        {(() => {
          switch (status.level) {
            case 1:
              return <StatusIndicator color="#F17E7E" />;
            case 2:
              return <StatusIndicator color="#FFD056" />;
            case 3:
              return <StatusIndicator color="#75C282" />;
            default:
              return <StatusIndicator color="#AAA5A5" />;
          }
        })()}
      </Status>
    </Container>
  );
};

export default DepositItem;

DepositItem.defaultProps = {
  color: "",
};
