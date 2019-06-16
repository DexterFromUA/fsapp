import React from 'react';
import {Table, Container, Row, Col} from 'react-bootstrap';
import {Button, IconButton, Paper, Typography} from '@material-ui/core';
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
    const [loading, setLoading] = React.useState(false);
    const {t} = useTranslation();
    const classes = useStyles();

    React.useEffect(() => {
        let arr = props.cart.map(item => item.fullPrice);
        if (arr.length) {
            let sumOfArr = arr.reduce((out, current) => out + current);
            setSum(sumOfArr.toFixed(2));
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

    const cleanUp = (event) => {
        event.preventDefault();
        props.cleanUp();
    };

    const send = event => {
        event.preventDefault();

        setLoading(true);

        const data = props.cart.map(item => [item.id, item.count]);

        const options = {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        };

        fetch('/api/order', options)
            .then(res => {
                if (!res.ok) {
                    throw new Error('error while sending order')
                }

                return res;
            })
            .catch(e => console.error(e))
            .finally(() => setLoading(false));
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
            <Container>
                <Row className='justify-content-center'>
                    <Table responsive>
                        <thead>
                        <tr>
                            <th>{t('Title')}</th>
                            <th>{t('Amount')}</th>
                            <th>{t('Price')}</th>
                            <th><Button variant='outlined' color='secondary' size='small' onClick={event => cleanUp(event)}>{t('Clean Up')}</Button></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            props.cart.map((item, index) => <tr key={index}>
                                <td>{item.title}</td>
                                <td><Button size="small" aria-label="dec" onClick={event => dec(event, item.id)}>-</Button>{item.count}<Button size="small" aria-label="inc" onClick={event => inc(event, item.id)}>+</Button></td>
                                <td>${item.fullPrice}</td>
                                <td><IconButton size="small" aria-label="Delete" onClick={event => remove(event, item.id)}><DeleteIcon /></IconButton></td>
                            </tr>)
                        }
                        </tbody>
                    </Table>
                </Row>
                <Row>
                    <Col md={8} className='align-content-center'>
                        <div className="m-2">
                            <Paper className={classes.root}>
                                <Typography>{t('Total amount of your order')} - ${sum}</Typography>
                            </Paper>
                        </div>
                    </Col>
                    <Col md={4} className='text-right align-self-center'>
                        <Button onClick={event => send(event)}>Order</Button>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
};

export default CartComponent;
