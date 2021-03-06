import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import HeaderAppBar from './navigation/HeaderAppBar'
import Footer from './Footer'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}))

const Layout = props => {
  const { children, data, license } = props
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <HeaderAppBar />
      <main style={{ maxWidth: '100vw', minHeight: '100vh', flexGrow: 1 }}>
        {children}
      </main>
      <Footer license={license} />
    </div>
  )
}

export default Layout
