import { Button, ButtonGroup } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import { routes } from '../../Routes';
import { DarkmodeToggle } from '../DarkmodeToggle';

export const HomeLayout = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav>
        <ButtonGroup variant='text'>
          {routes.map(({ name, path }, key) => (
            <Button key={key} onClick={() => navigate(path)}>
              {name}
            </Button>
          ))}
          <DarkmodeToggle />
        </ButtonGroup>
      </nav>
      <Outlet />
    </div>
  );
};
