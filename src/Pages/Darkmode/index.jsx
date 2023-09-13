import { DarkmodeToggle } from '../../Components/DarkmodeToggle';
import PageContainer from '../../Components/PageContainer';

export default function Darkmode() {
  return (
    <PageContainer
      description={`The "DarkmodeToggle" component is partially implemented. 
        Looking at the App.jsx/AuthContext, make it so that we can toggle this anywhere.`}
    >
      <DarkmodeToggle />
    </PageContainer>
  );
}
