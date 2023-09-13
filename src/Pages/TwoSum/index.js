import PageContainer from '../../Components/PageContainer';
import Validity from './components/Validity';
import TwoSumDescription from './components/TwoSumDescription';
import checkTwoSum from './helper';

export default function TwoSum() {
  const twoSum = (nums, target) => {
    // Implement this
  };

  const valid = checkTwoSum(twoSum);
  return (
    <PageContainer description='TwoSum'>
      <Validity valid={valid} />
      <TwoSumDescription />
    </PageContainer>
  );
}
