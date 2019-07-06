import { isLoading, hasErrored, fetchData } from "../items";
import { filter } from "../filter";

export function getFilteredItems(date) {
  return dispatch => {
    dispatch(isLoading(true));

    fetch(`/api/filtered/${date[0]}/${date[1]}`, {
      method: "GET"
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(
            "error while getting filtered items" + res.statusText
          );
        }

        dispatch(filter(true, date));
        return res.json();
      })
      .then(res => dispatch(fetchData(res)))
      .catch(e => dispatch(hasErrored(e.toString())))
      .finally(() => dispatch(isLoading(false)));
  };
}
