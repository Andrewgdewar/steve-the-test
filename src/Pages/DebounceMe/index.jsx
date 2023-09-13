import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import PageContainer from '../../Components/PageContainer';

export default function DebounceMe() {
  const [value, setValue] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This is the API, do not touch!
    if (value) setCount(count + 1);
  }, [value]);

  const onChange = (event) => setValue(event.target.value);

  return (
    <PageContainer
      description={`This textfield is calling the API repeatedly!
      Debounce it so that it only sends a call to the api after the user stops writing for 500ms.`}
    >
      <TextField onChange={onChange} />
      <h4>Number of calls to the API: {count}</h4>
    </PageContainer>
  );
}
