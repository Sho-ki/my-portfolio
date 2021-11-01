import { Grid, Typography } from '@mui/material';
import styles from '../../styles/Home.module.css';

export function Skills() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={4}>
          <div>
            <img src='/backend.svg' height={80} />
            <Typography>Backend Development</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={8} md={8}>
          <Typography>
            Backend Develveadvopmentackend Develveadvopmentackend
            Develveadvopmentackend Develveadvopmentackend Develveadvopmentackend
            Develveadvopmentackend Develveadvopmentackend Develveadvopmentackend
            Develveadvopmentackend Develveadvopmentackend Develveadvopment
            Backend Develveadvopmentackend Develveadvopmentackend
            Develveadvopmentackend Develveadvopmentackend Develveadvopmentackend
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
