import React from 'react';
import {Pagination} from 'react-bootstrap';

const PaginationComponent = (props) => {
    const arr = [];

    for (let i = 1; i <= Math.ceil(props.count / 50); i++) {
        arr.push(i);
    }

    const lastPage = arr[arr.length - 1];

    const goTo = (index) => {
        if (index > arr.length || index < arr[0]) {
            return false
        } else {
            props.changePage(index);
        }
    };

    return (
        <Pagination>
            <Pagination.First onClick={() => goTo(1)}/>
            <Pagination.Prev onClick={() => goTo(props.page - 1)}/>
            {
                arr.map(index => <Pagination.Item active={props.page === index ? true : false} key={index} onClick={() => goTo(index)}>{index}</Pagination.Item>)
            }
            <Pagination.Next onClick={() => goTo(props.page + 1)}/>
            <Pagination.Last onClick={() => goTo(lastPage)}/>
        </Pagination>
    )
};

export default PaginationComponent;
