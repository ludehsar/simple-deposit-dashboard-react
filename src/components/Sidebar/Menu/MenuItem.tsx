import React from "react";
import styled from "styled-components";

interface IMenuItemProps {
  title: string;
  icon: string;
  active?: boolean;
}

const Container = styled.div<Pick<IMenuItemProps, "active">>`
  border-left: 3px solid
    ${(props) => (props.active ? props.theme.activeMenu : "transparent")};
  width: 100%;
  padding: 0.3rem;
  padding-left: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
  transition: 0.2s all east-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Icon = styled.span<Pick<IMenuItemProps, "active">>`
  color: ${(props) => (props.active ? props.theme.activeMenu : "#AAA5A5")};
  font-size: 1rem;
  margin-right: 1rem;
`;

const Title = styled.h1<Pick<IMenuItemProps, "active">>`
  color: ${(props) => (props.active ? props.theme.activeMenu : "#AAA5A5")};
  font-size: 0.9rem;
  font-weight: 300;
`;

const MenuItem: React.FC<IMenuItemProps> = ({
  title,
  icon,
  active,
}: IMenuItemProps) => {
  return (
    <Container {...{ active }}>
      <Icon
        className="iconify"
        data-icon={`mdi-light:${icon}`}
        {...{ active }}
      ></Icon>
      <Title {...{ active }}>{title}</Title>
    </Container>
  );
};

export default MenuItem;
