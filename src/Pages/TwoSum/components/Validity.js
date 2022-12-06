/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Grid } from '@mui/material';
import { CheckSquare, XCircle } from 'react-feather';

export default function Validity({ valid }) {
  return (
    <Grid container flexDirection='row'>
      <h1
        css={css`
          margin-right: 25px;
        `}
      >
        Current status:
      </h1>
      {valid ? (
        <h1
          css={css`
            color: green;
          `}
        >
          All tests passing <CheckSquare color='green' />
        </h1>
      ) : (
        <Grid flex flexDirection='row'>
          <h1
            css={css`
              color: red;
            `}
          >
            All tests failing <XCircle color='red' />
          </h1>
        </Grid>
      )}
    </Grid>
  );
}
