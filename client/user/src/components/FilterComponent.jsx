import React from 'react';
import {Typography, Divider, List, ListItem} from "@material-ui/core";
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import {InputGroup, FormControl, Button} from 'react-bootstrap';
import {useTranslation} from "react-i18next";

const FilterComponent = (props) => {
    const [date, setDate] = React.useState([new Date(), new Date()]);
    const [amount, setAmount] = React.useState(props.amount);
    const {t} = useTranslation();

    const onChangeDate = (dateChange) => {
        setDate(dateChange);
    };

    const applyFilter = (event) => {
        event.preventDefault();
        
        let arr = [];
        date.map(date => arr.push(date.toISOString()));
        props.setFilter(true, arr)
    };

    const onChangeAmount = (event) => {
        event.preventDefault();

        props.setAmount(amount);
    };

    const clearFilter = (event) => {
        event.preventDefault();

        props.setFilter(false, []);
    };

    return (
        <React.Fragment>
            <Typography variant="h5" className="ml-4 mt-4">
                {t('Filters')}:
            </Typography>
            <Divider/>
            <List>
                <ListItem>
                    <Typography>{t('Amount items at one page')}:</Typography>
                </ListItem>
                <ListItem>
                    <InputGroup className="mb-2">
                        <FormControl
                            type='number'
                            placeholder={amount}
                            aria-label="Item count"
                            aria-describedby="basic-addon2"
                            onChange={event => setAmount(event.target.value)}
                        />
                        <InputGroup.Append>
                            <Button onClick={event => onChangeAmount(event)} variant="outline-secondary">{t('Set')}</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </ListItem>
                <Divider/>
                <ListItem>
                    <Typography>{t('Filter by Date')}:</Typography>
                </ListItem>
                <ListItem className="mt-2">
                    <DateRangePicker
                        className="ml-4"
                        onChange={(value) => onChangeDate(value)}
                        value={date}
                        clearIcon={null}
                    />
                </ListItem>
                <ListItem>
                    <Button variant="outline-secondary" size="sm" block onClick={event => applyFilter(event)}>{t('Filter')}</Button>
                </ListItem>
                <ListItem>
                    <Button variant="outline-secondary" size="sm" block onClick={event => clearFilter(event)}>{t('Clear Filter')}</Button>
                </ListItem>
            </List>
        </React.Fragment>
    )
};

export default FilterComponent;
