export const filter = (status, date) => {
    return {
        type: 'FILTERED',
        payload: {
            status: status,
            date: date
        }
    }
};

export const amount = (num) => {
    return {
        type: 'SET_AMOUNT',
        payload: num
    }
};

export const search = (status, text) => {
    return {
        type: 'SEARCH',
        payload: {
            status,
            text
        }
    }
};
