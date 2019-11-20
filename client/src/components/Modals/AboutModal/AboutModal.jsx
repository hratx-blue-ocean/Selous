import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Fab,
  Box,
} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircleOutlined';
import Modal from '@material-ui/core/Modal';
import { connect } from 'react-redux';
import { showAboutAction } from '../../../redux/actions/actions.js';

const useStyles = makeStyles(({
  bigContainer: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 25,
    width: '50%',
    height: '400px',
    borderRadius: '8px',
    // fontFamily: 'Arial',
    fontSize: '18px',
    background: '#F2F2F2',
    border: 2,
    borderColor: '#9F6CB7',
    borderStyle: 'solid',
    opacity: '100%',
    margin: '5% auto 30px auto',
    backgroundImage: 'url("https://selious.s3.amazonaws.com/selousSplice.PNG")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 20%',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
  },
  doNot: {
    color: '#DB5C5C',
    fontSize: 54,
    transform: 'rotate(45deg)',
    stroke: 'black',
    strokeWidth: '.5px',
  },
  buttons: {
    // marginRight: 20,
    float: 'right',
    // marginBottom: 10,
    // marginTop: 20,
    height: '50px',
  },
  buttonBoi: {
    borderRadius: 40,
  },
  description: {
    height: '50%',
    width: 'fit-content',
    border: '1px solid #9F6CB7',
    padding: '25px',
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: '6px',
    marginBottom: 10,
    lineHeight: '1.2em',
    // overflow: 'scroll',
    margin: '10px 0',
    backgroundColor: 'lightgrey',

  },
  apply: {
    height: '30px',
    width: '80px',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
    color: 'white',
    fontSize: 18,
  },
  title: {
    // marginLeft: 20,
    fontSize: 55,
  },
  titlesContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'flex-start',
    // marginLeft: 20,
    height: 50,
  },
  titleSec: {
    fontSize: 30,
    marginRight: 10,
    color: 'white',
  },
  titleTer: {
    fontSize: 20,
  },
}));

const mapStateToProps = (state) => ({ show: state.showAbout });

function AboutModal({ show, dispatch }) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        className={classes.bigContainer}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={show}
      >
        <div className={classes.container}>
          <div className={classes.header}>
            <div className={classes.titlesContainer}>
              <h3 className={classes.titleSec}>Why the name Selous?</h3>
            </div>
          </div>
          <div className={classes.description}>
            {
              'Frederick Selous was a famous big game hunter, tracker, and the inspiration for '
              + 'fictional character Allan Quartermain.  We wish you luck in your own big job hunting '
              + 'and tracking.  For more information on Frederick Selous click '
            }
            <a href="https://en.wikipedia.org/wiki/Frederick_Selous">here</a>
            .
          </div>
          <Box className={classes.buttons}>
            <Fab className={classes.buttonBoi}>
              <AddCircleIcon
                className={classes.doNot}
                onClick={() => dispatch(showAboutAction())}
              />
            </Fab>
          </Box>
        </div>
      </Modal>
    </div>
  );
}

export default connect(mapStateToProps)(AboutModal);
