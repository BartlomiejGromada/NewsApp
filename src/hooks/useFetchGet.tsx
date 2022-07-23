import { useCallback, useEffect, useReducer } from "react";

interface IState {
  loading: boolean;
  response: any;
  error: string;
}

const initialState: IState = {
  loading: true,
  response: null,
  error: "",
};

interface IAction {
  type: "FETCHING" | "SUCCESS" | "ERROR";
  payload?: any;
}

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "FETCHING": {
      return {
        ...state,
        loading: true,
        error: "",
      };
    }
    case "SUCCESS": {
      return {
        response: action.payload,
        loading: false,
        error: "",
      };
    }
    case "ERROR": {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

function useFetchGet<T>(url: string) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = useCallback(async () => {
    dispatch({ type: "FETCHING" });

    try {
      const response = await fetch(
        `${url}&apikey=${process.env.REACT_APP_NEWS_API_KEY}`
      );
      const json = await response.json();
      dispatch({ type: "SUCCESS", payload: json.results });
    } catch (error) {
      console.log("FETCHING ERROR: " + error);
      dispatch({ type: "ERROR", payload: error });
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    loading: state.loading,
    response: state.response as T,
    error: state.error,
  };
}

export default useFetchGet;
