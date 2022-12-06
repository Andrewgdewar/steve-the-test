import { Routes, Route, Navigate } from 'react-router-dom';
import { HomeLayout } from '../Components/LandingLayout';
import CenterMe from '../Pages/CenterMe';
import Darkmode from '../Pages/Darkmode';
import DebounceMe from '../Pages/DebounceMe';
import FixMe from '../Pages/FixMe';
import Questions from '../Pages/Questions';
import TwoSum from '../Pages/TwoSum';

export const routes = [
  {
    name: 'Questions',
    path: '/',
    element: <Questions />,
  },
  {
    name: 'Two Sum',
    path: '/twoSum',
    element: <TwoSum />,
  },
  {
    name: 'Center Me!',
    path: '/centerMe',
    element: <CenterMe />,
  },
  {
    name: 'Fix Me!',
    path: '/fixMe',
    element: <FixMe />,
  },
  {
    name: 'Debounce Me!',
    path: '/debounceMe',
    element: <DebounceMe />,
  },
  {
    name: 'Darkmode',
    path: '/darkmode',
    element: <Darkmode />,
  },
];

export default function AllTheRoutes() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        {routes.map(({ name, path, element }) => (
          <Route key={name} path={path} element={element} />
        ))}
      </Route>
      <Route path='*' element={<Navigate to={routes[0].path} replace />} />
    </Routes>
  );
}
