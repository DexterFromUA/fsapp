import React from 'react';

const BookContainer = () => {
    const [items, setItems] = React.useState([]);

    const fetchItems = () => (
        fetch('https://5c4070942928860014e07001.mockapi.io/items')
            .then(res => res.json())
            .then(res => setItems(res))
            .catch(e => console.log(e))
    );

    React.useEffect(() => {
        fetchItems();
    },[]);

    return (
        <React.Fragment>
            {
                items.map(item => {
                    return item.name
                })
            }
        </React.Fragment>
    )
};

export default BookContainer;
