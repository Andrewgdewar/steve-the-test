import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import PageContainer from '../../Components/PageContainer';

export default function FixMe() {
  const [clickCount, setClickCount] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (clickCount) setCount(count + 1);
  });

  const onClick = () => setClickCount(clickCount + 1);

  return (
    <PageContainer
      description={
        'I don\'t understand! I made this button so that when I click it once, the count should increment by 1.'
      }
    >
      <Button onClick={onClick}>Increment by 1!</Button>
      <h1>{count}</h1>
    </PageContainer>
  );
}
