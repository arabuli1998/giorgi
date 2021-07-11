import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width:'100%',
      marginTop:'20px'
    },
    margin: {
      height: theme.spacing(3),
    },
    slider:{
        color: 'black',
        width:'50%',
    }
  }),
);

const marks = [
  {
    value: 0,
    label: '0$',
  },
  
  {
    value: 100,
    label: '100$',
  },
];



export default function DiscreteSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-always" gutterBottom>
        price
      </Typography>
      <Slider className={classes.slider}
        defaultValue={50}
        aria-labelledby="discrete-slider-always"
        step={5}
        marks={marks}
      />
    </div>
  );
}
