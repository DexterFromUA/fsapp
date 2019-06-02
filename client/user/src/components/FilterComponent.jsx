import React from 'react';
import {Typography, Divider, List, ListItem} from "@material-ui/core";
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

const FilterComponent = () => {
    const newDate = new Date();
    const [date, setDate] = React.useState([newDate, newDate]);

    const onChange = dateChange => {
        setDate(dateChange);
        console.log(date)
    };

    return (
        <React.Fragment>
            <Typography variant="h5" className="ml-4 mt-4">
                Filters:
            </Typography>
            <Divider/>
            <List>
                <ListItem>
                    <DateRangePicker
                        onChange={onChange}
                        value={date}
                    />
                </ListItem>
            </List>
        </React.Fragment>
    )
};

export default FilterComponent;
