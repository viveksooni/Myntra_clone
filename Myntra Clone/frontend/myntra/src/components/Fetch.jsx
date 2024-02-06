import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemAction } from "../store/itemSlice";
import { fetchAction } from "../store/fetchSlice";

const Fetch = () => {
  const dispatch = useDispatch();
  const fetchStatus = useSelector((store) => store.fetchStatus);

  useEffect(() => {
    if (fetchStatus.isFetched) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchAction.startedFetching());
    fetch(
      "https://miniature-space-fishstick-9wxrj77jx6x3pwgq-8080.app.github.dev/items",
      { signal }
    )
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(itemAction.addInitialItems(items[0]));
        dispatch(fetchAction.fetchedData());
        dispatch(fetchAction.doneFetching());
        console.log("fetch done");
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};
export default Fetch;
