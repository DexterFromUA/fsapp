export default function fetchData(data) {
    return {
        type: "FETCH_DATA",
        payload: {
            rows: data.rows,
            count: data.count
        }
    }
}
