import { Button, Typography } from '@mui/material';
import PageContainer from '../../Components/PageContainer';
import { useState } from 'react';

const questions = [
  'Tell me about a time when you had to give negative or constructive feedback to someone on their work.',
  'Tell me about a time when you took time to recognize others for their contributions.',
  'Tell me about a time when you tried to develop a new work-related skill.',
  'Tell me about a time when you learned from a mistake or failure.',
];

export default function Questions() {
  const [shownIndex, setShownIndex] = useState(0);
  return (
    <PageContainer>
      <Button disabled={shownIndex === 0} onClick={() => setShownIndex((val) => val - 1)}>
        Go Back
      </Button>
      <Button
        disabled={shownIndex >= questions.length}
        onClick={() => setShownIndex((val) => val + 1)}
      >
        {shownIndex === 0
          ? 'Show first question'
          : shownIndex === questions.length
          ? 'Huzzah! Last one'
          : 'Show next'}
      </Button>
      {questions.slice(0, shownIndex).map((text, key) => (
        <Typography margin='20px' key={text} variant='h5'>
          ⚪ {key + 1}. {text}
        </Typography>
      ))}
    </PageContainer>
  );
}
