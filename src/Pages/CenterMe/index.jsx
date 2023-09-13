import { Smile } from 'react-feather';
import PageContainer from '../../Components/PageContainer';

const numberOfSmiles = 20;

export default function CenterMe() {
  return (
    <PageContainer description='Center the smiles into a single centered vertical column with flexbox and css'>
      <div
      // use @emotion/react's css component here
      >
        {Array.from(Array(numberOfSmiles).keys()).map((_, key) => (
          <Smile key={key} />
        ))}
      </div>
    </PageContainer>
  );
}
