import styled from '@emotion/styled';
import { theme } from 'utils/theme';

export const Div = styled.div`
  width: 400px;
  margin: 0 auto;
  text-align: center;
`;

export const Frame = styled.div`
  border: 2px solid ${theme.color.black};
  margin: 0 auto;
  width: 600px;
  padding: 50px 0;
  border-radius: 30px;
`;

export const Title = styled.h1`
  margin-bottom: 10px;
`;
