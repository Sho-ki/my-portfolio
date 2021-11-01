import * as React from 'react';

import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { TabPanel } from './TabPanel';
import { Academic } from './Academic';
import { Experiences } from './Experiences';
import { Skills } from './Skills';
import styles from '../../styles/Home.module.css';
import { blueGrey } from '@mui/material/colors';
import { MyTimeLine } from '../MyTimeLine/MyTimeLine';

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function AboutMe() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
      <MyTimeLine handleChange={handleChange} />
      <Box
        sx={{
          bgcolor: 'primary.main',
          width: '100%',
          maxHeight: '40vh',
        }}
        overflow='auto'
        flex={1}
        flexDirection='column'
        display='flex'
      >
        <AppBar position='static' color={'transparent'}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor='secondary'
            variant='fullWidth'
            textColor='secondary'
            className={styles.tabBtn}
          >
            {' '}
            <Tab label='Skills' {...a11yProps(0)} />
            <Tab label='Experiences' {...a11yProps(1)} />
            <Tab label='Academic' {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel
            value={value}
            index={0}
            dir={theme.direction}
            className={styles.tabPanels}
          >
            <Skills />
          </TabPanel>
          <TabPanel
            value={value}
            index={1}
            dir={theme.direction}
            className={styles.tabPanels}
          >
            <Experiences />
          </TabPanel>
          <TabPanel
            value={value}
            index={2}
            dir={theme.direction}
            className={styles.tabPanels}
          >
            <Academic />
          </TabPanel>
        </SwipeableViews>
      </Box>
    </>
  );
}
