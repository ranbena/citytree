import styled from 'styled-components';
import { breakpoints } from 'src/utils';

type TabKey = 'prosperity' | 'agriculture' | 'cultivation';

const tabKeyColors: Record<
  TabKey,
  {
    border: string;
  }
> = {
  prosperity: {
    border: '#7899c7',
  },
  agriculture: {
    border: '#679d7c',
  },
  cultivation: {
    border: '#9fc778',
  },
};

export const Wrapper = styled.div``;

export const Title = styled.div`
  font-size: 39px;
  font-weight: bold;
  line-height: 50px;
`;

export const Subtitle = styled.div`
  font-size: 30px;
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
  grid-template-areas: 'idx name';
  grid-template-columns: 60px auto;
  border-bottom: 1px solid ${({ tabKey }) => tabKeyColors[tabKey].border};

  &:last-of-type {
    border: 0;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  @media ${breakpoints.md} {
    grid-template-areas: 'idx name';
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

export const Name = styled(Cell)<{ tabKey: TabKey }>`
  grid-area: name;
  padding: 18px 30px;
  flex: 1;
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
