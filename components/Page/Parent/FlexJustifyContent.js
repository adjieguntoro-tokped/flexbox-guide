import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'

import {
  Typography,
  Button
} from '@material-ui/core'

const styles = theme => ({
  root: {
    marginBottom: 50,

    '& .content': {
      backgroundColor: '#eeeeee',
      borderRadius: 4,
      padding: '25px 20px',
      display: 'flex',
      flexWrap: 'no-wrap'
    },

    '& .box': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      height: 50,
      width: 85,

      '& h6': {
        color: '#000',
        fontWeight: 600,
        margin: 0
      },

      '&.box-1': {
        backgroundColor: '#69f0ae'
      },
      '&.box-2': {
        backgroundColor: '#40c4ff'
      },
      '&.box-3': {
        backgroundColor: '#7c4dff'
      },
      '&.box-4': {
        backgroundColor: '#ff5252'
      },
      '&.box-5': {
        backgroundColor: '#ffd740'
      }
    }
  },
  button: {
    padding: '5px 8px',
    minHeight: 24,
    margin: '0 5px',
    marginBottom: 10,

    '& span': {
      fontSize: 12
    },

    '&.active': {
      backgroundColor: '#2196f3',
      color: '#fff'
    }
  }
})

class Index extends React.Component {
  state = {
    value: 'flex-start'
  };

  handleChange = value => {
    this.setState({ value: value })
  };

  render () {
    const { classes } = this.props
    const { value } = this.state

    return (
      <div className={classes.root}>
        <Typography variant="h5" gutterBottom>
          justify-content
        </Typography>
        <div style={{ marginTop: 10, textAlign: 'center' }}>
          <Button variant="outlined" color="primary"
            className={[classes.button, `${value === 'flex-start' && 'active'}`]}
            onClick={() => this.handleChange('flex-start') }>
          flex-start
          </Button>
          <Button variant="outlined" color="primary"
            className={[classes.button, `${value === 'flex-end' && 'active'}`]}
            onClick={() => this.handleChange('flex-end') }>
          flex-end
          </Button>
          <Button variant="outlined" color="primary"
            className={[classes.button, `${value === 'center' && 'active'}`]}
            onClick={() => this.handleChange('center') }>
          center
          </Button>
          <Button variant="outlined" color="primary"
            className={[classes.button, `${value === 'space-between' && 'active'}`]}
            onClick={() => this.handleChange('space-between') }>
          space-between
          </Button>
          <Button variant="outlined" color="primary"
            className={[classes.button, `${value === 'space-around' && 'active'}`]}
            onClick={() => this.handleChange('space-around') }>
          space-around
          </Button>
          <Button variant="outlined" color="primary"
            className={[classes.button, `${value === 'space-evenly' && 'active'}`]}
            onClick={() => this.handleChange('space-evenly') }>
          space-evenly
          </Button>
        </div>
        <div className="content" style={{ justifyContent: value }}>
          <div className="box box-1">
            <Typography variant="h6" gutterBottom>
              1
            </Typography>
          </div>
          <div className="box box-2">
            <Typography variant="h6" gutterBottom>
              2
            </Typography>
          </div>
          <div className="box box-3">
            <Typography variant="h6" gutterBottom>
              3
            </Typography>
          </div>
          <div className="box box-4">
            <Typography variant="h6" gutterBottom>
              4
            </Typography>
          </div>
          <div className="box box-5">
            <Typography variant="h6" gutterBottom>
              5
            </Typography>
          </div>
        </div>
      </div>
    )
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Index)
