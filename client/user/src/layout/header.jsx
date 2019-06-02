import React from 'react';
import {AppBar, Toolbar, Typography, Button, IconButton} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


const Header = () => {
    const classes = useStyles();

    return(
        <React.Fragment>
            {/*<Container fluid>*/}
            {/*    <Row>*/}
            {/*        <Col>*/}
            {/*            /!*<Navbar expand="lg">*!/*/}
            {/*            /!*    <Navbar.Brand>*!/*/}
            {/*            /!*        Book shop*!/*/}
            {/*            /!*    </Navbar.Brand>*!/*/}
            {/*            /!*    <Navbar.Toggle aria-controls="basic-navbar-nav" />*!/*/}
            {/*            /!*    <Navbar.Collapse id="basic-navbar-nav">*!/*/}
            {/*            /!*        <Navbar.Text className="pl-3 pt-2">*!/*/}
            {/*            /!*            Signed as: John Doe*!/*/}
            {/*            /!*        </Navbar.Text>*!/*/}
            {/*            /!*        <Button className="text-left">Test</Button>*!/*/}
            {/*            /!*    </Navbar.Collapse>*!/*/}
            {/*            /!*</Navbar>*!/*/}
            {/*            */}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*</Container>*/}
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className="menuButton" color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Book Shop
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        </React.Fragment>
    )
};

export default Header;
