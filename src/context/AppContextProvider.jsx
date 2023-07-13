import { createContext, useContext, useReducer } from "react";
import { eventsData } from "../data";

const AppContext = createContext({
  state: {},
  dispatch: () => {},
});

const initialState = {
  events: eventsData.meetups,
  filter: "Both",
  search: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FILTER":
      return {
        ...state,
        filter: action.payload,
      };

    case "SEARCH":
      return {
        ...state,
        search: action.payload,
      };

    case "RSVP":
      return {
        ...state,
        events: state.events.map((event) =>
          event.id === action.payload ? { ...event, RSVP: true } : event
        ),
      };

    default:
      return;
  }
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
