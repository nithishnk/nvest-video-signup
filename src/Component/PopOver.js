import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import SignUp from '../Component/SignUp'
import '../Component/PopOver.css'

const useStyles = makeStyles(theme => ({
  typography: {
    margin: theme.spacing(2),
  },
}));

export default function PopoverPopupState() {
  const classes = useStyles();

  return (
    <div className="but-sty">
    <PopupState variant="popover" popupId="demo-popup-popover">
      {popupState => (
        <div>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Click Next
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorReference="anchorPosition"
            anchorPosition={{ top: 220, left: 1200}}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <Typography className={classes.typography}><SignUp/></Typography>
          </Popover>
        </div>
      )}
    </PopupState>
    </div>
  );
}
