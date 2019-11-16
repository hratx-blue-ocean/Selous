import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  titleCard: {
    backgroundColor: '#9F6CB7',
  },
  titleCardContent: {
    textAlign: 'center',
  },
  cardFooter: {
    justifyContent: 'space-between',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
  },
  cardContent: {
    textAlign: 'center',
    padding: '12px 0 0 0',
  },
  button1: {
    justifySelf: 'center',
    backgroundColor: '#9F6CB7',
    minWidth: '100%',
    padding: '0',
  },
  button2: {
    backgroundColor: '#9F6CB7',
    fontSize: '14px',
  },
  goalsContainer: {
    justifyContent: 'center',
  },
  titleContainer: {
    backgroundColor: '#9F6CB7',
    margin: '20px',
  },
  buttonContainer: {
    padding: '0',
  },
}));

const cards = [1, 2, 3, 4];

export default function Goals() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <main>
        <Container className={classes.goalsContainer} maxWidth="xs">
          <Card className={classes.titleCard}>
            <CardContent className={classes.titleCardContent}>
              <Typography variant="h3" component="h3">
                Goals
                </Typography>
            </CardContent>
          </Card>
          <hr style={{ margin: '20px 10px' }} />
          {cards.map((card) => (
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography variant="h5" component="h2">
                  {card} / 5
                  </Typography>
              </CardContent>
              <CardActions className={classes.cardFooter}>
                <Button size="small" className={classes.button2}>
                  -
                  </Button>
                <Typography>
                  This is the number {card} goal
                  </Typography>
                <Button size="small" className={classes.button2}>
                  +
                  </Button>
              </CardActions>
            </Card>
          ))}
          <CardActions className={classes.buttonContainer}>
            <Button
              variant="contained"
              size="large"
              className={classes.button1}
            >
              +
              </Button>
          </CardActions>
        </Container>
      </main>
    </>
  );
}
