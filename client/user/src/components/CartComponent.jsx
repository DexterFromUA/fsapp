import React from 'react';
import {Table} from 'react-bootstrap';
import {Button, IconButton, ButtonGroup, Paper, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import {useTranslation} from 'react-i18next';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}));

const CartComponent = (props) => {
    const [sum, setSum] = React.useState(0);
    const {t} = useTranslation();
    const classes = useStyles();

    React.useEffect(() => {
        let arr = props.cart.map(item => item.price);
        if (arr.length) {
            let sumOfArr = arr.reduce((out, current) => out + current);
            setSum(sumOfArr);
        }
    }, [props.cart]);

    const inc = (event, id) => {
        event.preventDefault();
        props.inc(id);
    };

    const dec = (event, id) => {
        event.preventDefault();
        props.dec(id);
    };

    const remove = (event, id) => {
        event.preventDefault();
        props.deleteFromCart(id);
    };

    if (props.cart.length <= 0) {
        return (
            <React.Fragment>
                {t('have no items')}
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Table responsive>
                <thead>
                <tr>
                    <th>{t('Title')}</th>
                    <th>{t('Amount')}</th>
                    <th>{t('Price')}</th>
                    <th>{t('Delete')}</th>
                </tr>
                </thead>
                <tbody>
                {
                    props.cart.map((item, index) => <tr key={index}>
                        <td>{item.title}</td>
                        <td><Button size="small" aria-label="dec" onClick={event => dec(event, item.id)}>-</Button>{item.count}<Button size="small" aria-label="inc" onClick={event => inc(event, item.id)}>+</Button></td>
                        <td>${item.price}</td>
                        <td><IconButton size="small" aria-label="Delete" onClick={event => remove(event, item.id)}><DeleteIcon /></IconButton></td>
                    </tr>)
                }
                </tbody>
            </Table>
            <div className="m-5">
                <Paper className={classes.root}>
                    <Typography>Sum of ur order - ${sum}</Typography>
                </Paper>
            </div>
            <ButtonGroup></ButtonGroup>
        </React.Fragment>
    )
};

export default CartComponent;
