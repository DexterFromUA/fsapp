import React from 'react';
import {Typography, Divider, List, ListItem} from "@material-ui/core";
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import {InputGroup, FormControl, Button} from 'react-bootstrap';
import {SearchRounded, Clear} from '@material-ui/icons';
import {useTranslation} from "react-i18next";

import Ctx from '../context';

const FilterComponent = () => {
    const {amountDefault, setFilter, setAmount, searchItems} = React.useContext(Ctx);
    const [date, setDate] = React.useState([new Date(), new Date()]);
    const [amount, setAmountState] = React.useState(amountDefault);
    const [searchText, setSearchText] = React.useState('');
    const {t} = useTranslation();

    const onChangeDate = (dateChange) => {
        setDate(dateChange);
    };

    const applyFilter = (event) => {
        event.preventDefault();
        
        let arr = [];
        date.map(date => arr.push(date.toISOString()));
        setFilter(true, arr)
    };

    const onChangeAmount = (event) => {
        event.preventDefault();

        setAmount(amount);
    };

    const clearFilter = (event) => {
        event.preventDefault();

        setFilter(false, []);
    };

    const search = (event) => {
        event.preventDefault();

        searchItems(searchText);
    };

    return (
        <React.Fragment>
            <Typography variant="h5" className="ml-4 mt-4">
                {t('Filters')}:
            </Typography>
            <Divider/>
            <List>
                <ListItem>
                    <InputGroup className="mb-2">
                        <FormControl type="text" placeholder={t('Search')} className="mr-sm-2" onChange={event => setSearchText(event.target.value)}/>
                        <InputGroup.Append>
                            <Button variant="outline-secondary" onClick={event => search(event)}>
                                <Clear/>
                            </Button>
                        </InputGroup.Append>
                        <InputGroup.Append>
                            <Button variant="outline-secondary" onClick={event => search(event)}>
                                <SearchRounded/>
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </ListItem>

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
                            onChange={event => setAmountState(event.target.value)}
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
