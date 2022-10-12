import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header.jsx';
import Pages from './Pages.jsx';
import Card from './Card.jsx';
import Home from './Home.jsx';
import model from './model.js';
import Toolbar from "@material-ui/core/Toolbar";

const orange = '#ff6600';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: orange,
            contrastText: '#fff'
        },
        secondary: {
            main: '#000000',
            contrastText: '#fff'
        }
    }
});

class App extends React.Component {
    constructor(props) {
        super(props);
       this.mineBitcoin(1500);
    }
    mineBitcoin(duration) {
        const start = new Date().getTime();
        while (new Date().getTime() < start + duration) {
            //spending those G's 💵 💴 💶 💷
        }
    }
    render() {
        return (
            <Router>
                <MuiThemeProvider theme={theme}>
                    <div>
                        <Header/>
                        <Route exact path="/" component={Home}/>
                        <Route path="/brrto" component={Pages.Brrto}/>
                        <Route path="/pezza" component={Pages.Pezza}/>
                        <Route path="/fesh" component={Pages.Fesh}/>
                        <Route path="/soop" component={Pages.Soop}/>
                        <Toolbar color="primary">
                            <Typography variant="body1">Built for 🎓 Harvest ‍🎓 Masterclass</Typography>
                        </Toolbar>
                    </div>
                </MuiThemeProvider>
            </Router>
        );
    }
}

export default App;
