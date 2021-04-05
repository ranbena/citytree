import styled from 'styled-components';
import { breakpoints } from 'src/utils';

export const Wrapper = styled.div`
  color: #386b7e;
`;

export const Title = styled.div`
  color: #135049;
  font-size: 39px;
  font-weight: bold;
  line-height: 50px;
`;

export const Subtitle = styled.div`
  font-size: 30px;
  line-height: 35px;
`;

export const Table = styled.div`
  border-radius: 10px;
  border: 1px solid #d5d5d5;
  margin-top: 48px;

  @media ${breakpoints.md} {
    border: 0;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-areas: 'idx name date';
  grid-template-columns: 60px auto 230px;
  border-bottom: 1px solid #d5d5d5;

  &:last-of-type {
    border: 0;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  &:nth-child(odd) {
    font-weight: bold;
  }

  @media ${breakpoints.md} {
    grid-template-areas:
      'idx name'
      '. date';
    grid-template-columns: 40px auto;
    margin-bottom: 22px;
    padding-bottom: 22px;
  }
`;

const Cell = styled.div`
  font-size: 30px;
  padding: 18px 0;
  line-height: 32px;

  @media ${breakpoints.md} {
    padding: 0;
    font-size: 25px;
  }
`;

export const Idx = styled(Cell)`
  grid-area: idx;
  text-align: center;

  @media ${breakpoints.md} {
    text-align: unset;
  }
`;

export const Name = styled(Cell)`
  grid-area: name;
  padding: 18px 30px;
  flex: 1;
  border-left: 1px solid #d5d5d5;
  border-right: 1px solid #d5d5d5;

  @media ${breakpoints.md} {
    border: 0;
    padding: 0;
  }
`;

export const DateWrapper = styled(Cell)`
  grid-area: date;
  text-align: center;

  @media ${breakpoints.md} {
    text-align: unset;
  }
`;
