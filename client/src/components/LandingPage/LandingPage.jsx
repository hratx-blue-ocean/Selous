import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  Button,
} from '@material-ui/core/';
import SearchBar from 'material-ui-search-bar';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import { setSearchInput } from '../../redux/actions/actions.js';

// import { combineReducers } from 'redux';

const useStyles = makeStyles({
  root: {
    borderColor: 'purple',
    borderStyle: 'solid',
    borderWidth: 1,
    width: '515px',
    background: '#F2F2F2',
  },
  next: {
    borderRadius: '8px',
    padding: 10,
    background: '#FFFFFF',
    width: '445px',
    border: 'none',
  },
});

const PaperSheet = ({ searchInput, dispatch }) => {
  const classes = useStyles();
  console.log(searchInput);

  return (
    <div>
      <Card container className={classes.root}>
        <Button item m={2}>
          <SearchBar
            value={searchInput}
            onChange={(newValue) => dispatch(setSearchInput(newValue))}
            onRequestSearch={() => console.log('onRequestSearch')}
            style={{
              margin: '0 auto',
              maxWidth: 800,
            }}
          />
          <SearchBar />
        </Button>
        <input item type="search" className={classes.next} alignContent="flex-start" position="absolute" />
      </Card>

      <Card container className={classes.root} position="absolute">
        <Button item m={2}>
          <RoomOutlinedIcon style={{
            position: 'start',
          }}
          />
        </Button>
        <input item type="search" className={classes.next} alignContent="flex-start" position="absolute" />
      </Card>

      <img src="/learning.jpg" alt="Learning" />
    </div>
  );
};

const mapStatesToProps = (state) => ({ searchInput: state.searchInput });

export default connect(mapStatesToProps)(PaperSheet);
