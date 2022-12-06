import { Typography } from '@mui/material';
import PageContainer from '../../Components/PageContainer';

const questions = [
  'In your own words, tell me how React works.',
  'Describe functional vs class components in React',
  'I see you have experience with Typescript. Tell me about it.',
  'I see you\'ve used Next.js. Do you prefer it over the traditional front-end/backend web app?',
  'What state libraries have you used in React? Which do you prefer? Why?',
  'What testing libraries have you used with React?',
  'Have you used custom React hooks? Any favourites?',
  'Have you had to mentor other developers? Tell me about it.',
];

export default function Questions() {
  return (
    <PageContainer>
      {questions.map((text, key) => (
        <Typography margin='20px' key={text} variant='h5'>
          ⚪ {key + 1}. {text}
        </Typography>
      ))}
    </PageContainer>
  );
}
