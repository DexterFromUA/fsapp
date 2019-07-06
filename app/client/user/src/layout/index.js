import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Form, Modal } from "react-bootstrap";
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
import { ShoppingBasket } from "@material-ui/icons";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { useTranslation } from "react-i18next";

import Ctx from "../context";
import FilterComponent from "../components/FilterComponent";
import CartComponent from "../components/CartComponent";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  list: {
    width: 300
  },
  listRight: {
    width: 600
  }
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Layout = props => {
  const {loginUser, logoutUser, user, cart} = React.useContext(Ctx);
  const [menu, toggleMenu] = React.useState(false);
  const [cartToggle, toggleCart] = React.useState(false);
  const [login, setLogin] = React.useState(false);
  const [mail, setMail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuEl, setMenuEl] = React.useState(null);
  const { t, i18n } = useTranslation();

  const classes = useStyles();

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function menuClick(event) {
    event.preventDefault();
    setMenuEl(event.currentTarget);
  }

  function menuClose() {
    setMenuEl(null);
  }

  function handleLng(event, lng) {
    event.preventDefault();

    i18n.changeLanguage(lng);
    handleClose();
  }

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    if (side === "left") {
      toggleMenu(open);
    } else if (side === "right") {
      toggleCart(open);
    } else return null;
  };

  const showLogin = event => {
    event.preventDefault();

    setMail("");
    setPassword("");

    setLogin(true);
  };

  const close = event => {
    if (event) event.preventDefault();

    setMail("");
    setPassword("");
    setLogin(false);
  };

  const send = event => {
    event.preventDefault();

    loginUser(mail, password);

    setLogin("");
    setPassword("");
    setMenuEl(null);
  };

  const logout = event => {
    event.preventDefault();

    if (localStorage.getItem("Token")) {
      localStorage.removeItem("Token");
    }

    logoutUser();
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <IconButton
              onClick={toggleDrawer("left", true)}
              className={classes.menuButton}
              edge="start"
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Book Shop
            </Typography>

            {user === null ? (
              <Button color="inherit" onClick={event => showLogin(event)}>
                {t("Login")}
              </Button>
            ) : (
              <div>
                <Button
                  color="inherit"
                  aria-controls="user-menu"
                  aria-haspopup="true"
                  onClick={menuClick}
                >
                  {user.firstName + " " + user.lastName}
                </Button>
                <Menu
                  id="user-menu"
                  anchorEl={menuEl}
                  keepMounted
                  open={Boolean(menuEl)}
                  onClose={menuClose}
                >
                  {user.role === "admin" ? (
                    <Link to="/admin">
                      <MenuItem>Admin Panel</MenuItem>
                    </Link>
                  ) : null}
                  <MenuItem onClick={event => logout(event)}>
                    {t("Logout")}
                  </MenuItem>
                </Menu>
              </div>
            )}

            <div>
              <Button
                color="inherit"
                aria-controls="lang-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                {t("Language")}
              </Button>
              <Menu
                id="lang-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={event => handleLng(event, "en")}>
                  English
                </MenuItem>
                <MenuItem onClick={event => handleLng(event, "ru")}>
                  Русский
                </MenuItem>
              </Menu>
            </div>
            <Button color="inherit" onClick={toggleDrawer("right", true)}>
              <Badge color="secondary" badgeContent={cart.length}>
                <ShoppingBasket />
              </Badge>
            </Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />

      {props.children}

      <Drawer open={menu} onClose={toggleDrawer("left", false)}>
        <div className={classes.list} role="presentation">
          <FilterComponent/>
        </div>
      </Drawer>
      <Drawer open={cartToggle} anchor="right" onClose={toggleDrawer("right", false)}>
        <div className={classes.listRight} role="presentation">
          <CartComponent toggleCart={toggleCart}/>
        </div>
      </Drawer>

      <Modal centered show={login} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>{t("Login")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="p-5">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>{t("Email address")}</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder={t("Enter email")}
                value={mail}
                onChange={event => setMail(event.target.value)}
              />
              <Form.Text className="text-muted">
                {t("We'll never share your email with anyone else")}
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>{t("Password")}</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder={t("Password")}
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outlined" onClick={event => close(event)}>
            {t("Close")}
          </Button>
          <Button variant="outlined" onClick={event => send(event)}>
            {t("Sign In")}
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default withRouter(Layout);
