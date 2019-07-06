export const fetchData = (data) => {
    return {
        type: "FETCH_DATA",
        payload: {
            rows: data.rows,
            count: data.count
        }
    }
};

export const hasErrored = (hasErrored) => {
    return {
        type: "HAS_ERRORED",
        payload: hasErrored
    }
};

export const isLoading = (isLoading) => {
    return {
        type: "IS_LOADING",
        payload: isLoading
    }
};
