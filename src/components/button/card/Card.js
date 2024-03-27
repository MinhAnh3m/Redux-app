import React from "react";
 import styled from "styled-components";

const StyledCard = styled.div`
  position: absolute;
  width: 400px;
`;

const CardImage = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
`;

const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

const CardContent = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  background-color: white;
  z-index: 10;
  width : calc(100% - 60px) ;
  border-radius: 20px;
  padding: 20px;
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const CardUser = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100rem;
  object-fit: cover;
  flex-shrink: 0;
`;

const UserName = styled.span`
  font-size: 16px;
  font-weight: 300;
  color: #333
  `;

const CardFooter = styled.div`
  display: flex;
  justify-content : space-between;
  align-items: center;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: black;
`;

const CardAmout = styled.span`
font-size: 18px;
font-weight: bold;
background: linear-gradient(86.88deg, #7D6AFF 1.38%, #FFB86C 119.91%);
color: transparent;
-webkit-background-clip: text;
background-clip: text
`;

const Card = () => {
  
  return (

    <StyledCard>
      <CardImage>
        <CardImg
          alt=""
          src="https:cdn.dribbble.com/userupload/13659392/file/original-47b2d7a4761c625a6bbde329a3d4ae82.png?resize=1504x2493"
        />
      </CardImage>

      <CardContent>
        <CardTop>
          <CardUser>
            <UserAvatar
              alt=""
              src="https://cdn.dribbble.com/userupload/13659392/file/original-47b2d7a4761c625a6bbde329a3d4ae82.png?resize=1504x2493"
            />

            <UserName>@zndrson</UserName>
          </CardUser>

          <div>256</div>
        </CardTop>

        <CardFooter>
          <CardTitle>Cosmic Perspective</CardTitle>
          <CardAmout>12,000 PSL</CardAmout>
        </CardFooter>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
