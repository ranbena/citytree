import styled from 'styled-components';
import { breakpoints } from 'src/utils';

type TabKey = 'usefulness' | 'movement' | 'satisfaction';

const tabKeyColors: Record<
  TabKey,
  {
    bg: string;
    text: string;
    border: string;
  }
> = {
  usefulness: {
    bg: '#f6f9e8',
    text: '#72722c',
    border: '#b7b75d',
  },
  movement: {
    bg: '#f9f4e3',
    text: '#725f2c',
    border: '#a18c53',
  },
  satisfaction: {
    bg: '#ffefe8',
    text: '#72482c',
    border: '#ab7d5e',
  },
};

export const Wrapper = styled.div``;

export const Title = styled.div`
  font-size: 31px;
  font-weight: bold;
  line-height: 50px;
`;

export const Subtitle = styled.div`
  font-size: 23px;
  line-height: 35px;
`;

export const Table = styled.div<{ tabKey: TabKey }>`
  border-radius: 10px;
  border: 1px solid ${({ tabKey }) => tabKeyColors[tabKey].border};
  margin-top: 48px;

  @media ${breakpoints.md} {
    border: 0;
  }
`;

export const Row = styled.div<{ tabKey: TabKey }>`
  display: grid;
  grid-template-areas: 'idx name date';
  grid-template-columns: 60px auto 230px;
  border-bottom: 1px solid ${({ tabKey }) => tabKeyColors[tabKey].border};

  &:last-of-type {
    border: 0;
    margin-bottom: 0;
    padding-bottom: 0;
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
  font-size: 22px;
  padding: 18px 20px;
  line-height: 15px;

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

export const Name = styled(Cell)<{ tabKey: TabKey }>`
  grid-area: name;
  padding: 18px 30px;
  flex: 1;
  border-left: 1px solid ${({ tabKey }) => tabKeyColors[tabKey].border};
  border-right: 1px solid ${({ tabKey }) => tabKeyColors[tabKey].border};

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
