import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import Dropdown from '../dropdown/Dropdown';

const options = [
  {
    name: 'Плазмова різка',
    path: '/plasma-cutting',
  },
  {
    name: 'Ковальсько-пресове виробництво',
    path: '/forging-press-production',
  },
  {
    name: 'Механічна обробка',
    path: '/mechanical-processing',
  },
  {
    name: 'Термічна обробка',
    path: '/heat-treatment',
  },
  {
    name: 'Фрезерні роботи',
    path: '/milling-work',
  },
  {
    name: 'Токарні роботи',
    path: '/turning-works',
  },
  {
    name: 'Заготівельне виробництво',
    path: '/procurement-production',
  },
  {
    name: 'Розробка креслень і технічної документації',
    path: '/drawing-documentation',
  },
  {
    name: 'Виготовлення виробів за індивідуальними замовленнями',
    path: '/custom-order',
  },
];

const AppHeader = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="flex justify-between" variant="regular">
          <Typography variant="h6" color="inherit" component="div">
            <Link href="/">QPart</Link>
          </Typography>
          <div>
            <Dropdown title="Продукти" options={options} />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppHeader;
