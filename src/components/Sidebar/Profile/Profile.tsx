import React from "react";
import styled from "styled-components";

import Image from "../../../assets/images/profile.png";

const Container = styled.div`
  margin-top: 5rem;
`;

const ProfileImage = styled.img`
  height: 5rem;
`;

const ProfileName = styled.h1`
  font-size: 1rem;
  font-weight: 300;
  color: ${({ theme }) => theme.textColor};
`;

const Profile: React.FC = () => {
  return (
    <Container>
      <ProfileImage src={Image} />
      <ProfileName>Rashedul Alam</ProfileName>
    </Container>
  );
};

export default Profile;
