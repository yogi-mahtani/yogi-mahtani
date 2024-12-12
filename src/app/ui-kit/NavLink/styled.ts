import styled, { css } from 'styled-components';

type LinkItemProps = {
  underline: string;
};

const underLineLink = css<LinkItemProps>`
  text-decoration: ${({ underline }) =>
    underline === 'true' ? 'underline' : 'none'};
  text-decoration-color: ${({ underline }) =>
    underline === 'true' ? 'initial' : 'transparent'};
  text-decoration-thickness: 2px;
`;

export const LinkItem = styled.div<LinkItemProps>`
  display: flex;
  flex-wrap: wrap;

  /* Default underline styling */
  ${({ underline }) => underline === 'true' && underLineLink}

  &:hover {
    background: linear-gradient(
      to right,
      rgba(255, 48, 48, 1),
      rgba(255, 0, 160, 0.8)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    ${({ underline }) =>
      underline === 'true' &&
      css`
        text-decoration-color: transparent;
        text-decoration: underline;
        text-decoration-thickness: 2px;
        background: linear-gradient(
          to right,
          rgba(255, 48, 48, 1),
          rgba(255, 0, 160, 0.8)
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        position: relative;

        &::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(
            to right,
            rgba(255, 48, 48, 1),
            rgba(255, 0, 160, 0.8)
          );
        }
      `}
  }
`;
