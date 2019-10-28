import styled from 'styled-components/native';

export const Slide = styled.View`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 80px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 25px;
  opacity: 0.9;
`;

export const Image = styled.Image`
  width: 320px;
  height: 320px;
`;

export const Message = styled.Text`
  color: #fff;
  margin: 0 40px;
  text-align: center;
  font-size: 18px;
  opacity: 0.7;
`;

export const RoundButton = styled.View`
  width: 40;
  height: 40;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 20;
  justify-content: center;
  align-items: center;
`;
