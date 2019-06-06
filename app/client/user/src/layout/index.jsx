import React from 'react';
import {withRouter} from 'react-router';
import {
    Button,
    IconButton,
    AppBar,
    Toolbar,
    Typography,
    CssBaseline,
    Slide,
    Drawer
} from "@material-ui/core";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

import FilterComponent from '../components/FilterComponent';

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
    list: {
        width: 300,
    }
}));

function HideOnScroll(props) {
    const {children, window} = props;
    const trigger = useScrollTrigger({target: window});

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const Layout = (props) => {
    const [menu, toggleMenu] = React.useState(false);
    const classes = useStyles();

    const toggleDrawer = (open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        toggleMenu(open);
    };

    return (
        <React.Fragment>
            <CssBaseline/>
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <IconButton onClick={toggleDrawer(true)} className={classes.menuButton} edge="start"
                                    color="inherit" aria-label="Menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Book Shop
                        </Typography>
                        <Button color="inherit">Cart</Button>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar/>
            {props.children}
            <Drawer open={menu} onClose={toggleDrawer(false)}>
                <div
                    className={classes.list}
                    role="presentation"
                >
                    <FilterComponent amount={props.amount} setAmount={props.setAmount} setFilter={props.setFilter} getFilteredItems={props.getFilteredItems}/>
                </div>
            </Drawer>
        </React.Fragment>
    )
};

export default withRouter(Layout);
