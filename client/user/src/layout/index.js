import React from 'react';
import {withRouter} from 'react-router';
import {Form, Modal} from 'react-bootstrap';
import {
    Button,
    IconButton,
    AppBar,
    Toolbar,
    Typography,
    CssBaseline,
    Slide,
    Drawer,
    Menu,
    MenuItem,
    Badge
} from "@material-ui/core";
import {ShoppingBasket} from '@material-ui/icons';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import {useTranslation} from 'react-i18next'

import FilterComponent from '../components/FilterComponent';
import CartComponent from '../components/CartComponent';

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
    },
    listRight: {
        width: 600
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
    const [cart, toggleCart] = React.useState(false);
    const [login, setLogin] = React.useState(false);
    const [mail, setMail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const {t, i18n} = useTranslation();

    const classes = useStyles();

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    function handleLng(event, lng) {
        event.preventDefault();

        i18n.changeLanguage(lng);
        handleClose();
    }

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        if (side === 'left') {
            toggleMenu(open);
        } else if (side === 'right') {
            toggleCart(open);
        } else return null;

    };

    const showLogin = event => {
        event.preventDefault();

        setLogin(true);
    };

    const close = event => {
        if (event) event.preventDefault();

        setMail('');
        setPassword('');
        setLogin(false);
    };

    return (
        <React.Fragment>
            <CssBaseline/>
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <IconButton onClick={toggleDrawer('left', true)} className={classes.menuButton} edge="start"
                                    color="inherit" aria-label="Menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Book Shop
                        </Typography>

                        <Button color="inherit" onClick={event => showLogin(event)}>
                            Login
                        </Button>

                        <div>
                            <Button color="inherit" aria-controls="simple-menu" aria-haspopup="true"
                                    onClick={handleClick}>
                                {t('Language')}
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={event => handleLng(event, 'en')}>English</MenuItem>
                                <MenuItem onClick={event => handleLng(event, 'ru')}>Русский</MenuItem>
                            </Menu>
                        </div>
                        <Button color="inherit" onClick={toggleDrawer('right', true)}>
                            <Badge color="secondary" badgeContent={props.cart.length}>
                                <ShoppingBasket/>
                            </Badge>
                        </Button>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar/>
            {props.children}
            <Drawer open={menu} onClose={toggleDrawer('left', false)}>
                <div
                    className={classes.list}
                    role="presentation"
                >
                    <FilterComponent amount={props.amount} setAmount={props.setAmount} setFilter={props.setFilter}
                                     getFilteredItems={props.getFilteredItems}/>
                </div>
            </Drawer>
            <Drawer open={cart} anchor="right" onClose={toggleDrawer('right', false)}>
                <div
                    className={classes.listRight}
                    role="presentation"
                >
                    <CartComponent toggleCart={toggleCart} cart={props.cart} inc={props.inc} dec={props.dec}
                                   deleteFromCart={props.deleteFromCart} cleanUp={props.cleanUp}/>
                </div>
            </Drawer>

            <Modal centered show={login} onHide={close}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="p-5">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email"
                                          value={mail} onChange={event => setMail(event.target.value)}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password"
                                          value={password} onChange={event => setPassword(event.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={event => close(event)}>
                        Close
                    </Button>
                    <Button variant="danger">
                        Sign In
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
};

export default withRouter(Layout);
