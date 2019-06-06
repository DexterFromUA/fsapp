export default function filter(status, date) {
    return {
        type: 'FILTERED',
        payload: {
            status: status,
            date: date
        }
    }
}
