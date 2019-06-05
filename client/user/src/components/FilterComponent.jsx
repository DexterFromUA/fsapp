import React from 'react';
import {Typography, Divider, List, ListItem} from "@material-ui/core";
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import {InputGroup, FormControl, Button} from 'react-bootstrap';

const FilterComponent = (props) => {
    const [date, setDate] = React.useState([new Date(), new Date()]);
    const [amount, setAmount] = React.useState(props.amount);

    const onChangeDate = (dateChange) => {
        setDate(dateChange);
    };

    const applyFilter = (event) => {
        event.preventDefault();
        props.getFilteredItems(amount, date[0].toISOString(), date[1].toISOString())
    };

    const onChangeAmount = (event) => {
        event.preventDefault();
        props.setAmount(amount);
        props.getItems(amount, 1)
    };

    const clearFilter = (event) => {
        event.preventDefault();

        props.getItems(props.amount, 1)
    };

    return (
        <React.Fragment>
            <Typography variant="h5" className="ml-4 mt-4">
                Filters:
            </Typography>
            <Divider/>
            <List>
                <ListItem>
                    <Typography>Amount items at one page:</Typography>
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
                            <Button onClick={event => onChangeAmount(event)} variant="outline-secondary">Set</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </ListItem>
                <Divider/>
                <ListItem>
                    <Typography>Filter by Date:</Typography>
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
                    <Button variant="outline-secondary" size="sm" block onClick={event => applyFilter(event)}>Filter</Button>
                </ListItem>
                <ListItem>
                    <Button variant="outline-secondary" size="sm" block onClick={event => clearFilter(event)}>Clear Filter</Button>
                </ListItem>
            </List>
        </React.Fragment>
    )
};

export default FilterComponent;
