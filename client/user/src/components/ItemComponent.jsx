import React from 'react';
import {Card, Button, Col, Form} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';

import Ctx from '../context';

const ItemComponent = () => {
    const {cart, inc, addToCart, items} = React.useContext(Ctx);
    const {t} = useTranslation();

    const addItem = (event, item) => {
        event.preventDefault();

        const arrOfIds = cart.map(item => item.id);

        if (arrOfIds.includes(item.id)) {
            cart.map(current => {
                if (current.id === item.id) {
                    return inc(item.id);  //TODO added return
                }

                return null
            })
        } else {
            addToCart(item);
        }
    };

    if (!items.rows.length) {
        return (
            <h1>{t('have no items')}</h1>
        )
    }

    return (
        items.rows.map(item => <Col lg={3}>
            <Card className="text-center mb-3">
                {
                    item.fileUrl !== null && item.fileUrl !== undefined && item.fileUrl !== '' ?
                        <Card.Img variant="top" height="350px"
                                  src={'/uploads/' + item.fileUrl}/> : ''
                }
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.author} {item.author && item.bookyear ? '-' : ''} {item.bookyear}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="outline-primary" onClick={event => addItem(event, item)}>{t('Add')} -
                        ${item.price}</Button>
                    <Form.Text className="text-muted">
                        {item.createdAt}
                    </Form.Text>
                </Card.Footer>
            </Card>
        </Col>)
    )
};

export default ItemComponent;
