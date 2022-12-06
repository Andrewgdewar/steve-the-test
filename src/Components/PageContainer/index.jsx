/** @jsxImportSource @emotion/react */
import { css } from '@mui/material';

export default function PageContainer({ children, description }) {
  return (
    <div
      css={css`
        margin: 20px;
      `}
    >
      <h3>{description}</h3>
      {children}
    </div>
  );
}
