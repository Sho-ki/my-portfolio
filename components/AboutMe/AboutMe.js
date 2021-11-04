import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme, AppBar, Tabs, Tab, Box } from '@mui/material';

import { TabPanel } from './TabPanel';
import { Academic } from './Academic';
import { Experiences } from './Experiences';
import { Introduction } from './Introduction';
import styles from '../../styles/Home.module.css';
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
          height: '50vh',
        }}
        overflow='auto'
        flex={1}
        flexDirection='column'
        display='flex'
        paddingTop=' 5em'
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
            <Tab label='About Me' {...a11yProps(0)} />
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
            <Introduction />
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
