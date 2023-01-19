import { css } from 'emotion';
import { theme } from 'core/theme';

export const root = css`
  & > :nth-child(n + 2) {
    margin-top: 2rem;

  }
`;

export const header = css`
  {
    display: flex;
    display direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 10px;
  }
`;

export const list = css`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: ${theme.breakpoints.values.sm}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${theme.breakpoints.values.md}px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
