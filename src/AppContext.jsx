import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";

const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "CLEAR_CART": {
      return {
        ...state,
        cart: [],
      };
    }
    case "REMOVE": {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.id),
      };
    }
    case "TOGGLE_AMOUNT": {
      return {
        ...state,
        cart: state.cart.flatMap((item) => {
          if (item.id === action.id) {
            const newAmount = item.amount + action.amount;
            return newAmount <= 0 ? [] : { ...item, amount: newAmount };
          } else {
            return item;
          }
        }),
      };
    }
    case "GET_TOTALS": {
      const { total, amount } = state.cart.reduce(
        (acc, item) => {
          const { price, amount } = item;
          acc.total += price * amount * 100;
          acc.amount += amount;
          return acc;
        },
        { total: 0, amount: 0 }
      );
      return {
        ...state,
        total: total / 100,
        amount,
      };
    }
    case "LOADING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "DISPLAY_ITEMS": {
      return {
        ...state,
        isLoading: false,
        cart: action.cart,
      };
    }
    default: {
      throw new Error("Unknown action: " + action.type);
    }
  }
}

const initialState = {
  isLoading: false,
  cart: [],
  total: 0,
  amount: 0,
};

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR_CART" });
  }, []);

  const remove = useCallback((id) => {
    dispatch({ type: "REMOVE", id });
  }, []);

  const increase = useCallback((id) => {
    dispatch({ type: "TOGGLE_AMOUNT", id, amount: 1 });
  }, []);

  const decrease = useCallback((id) => {
    dispatch({ type: "TOGGLE_AMOUNT", id, amount: -1 });
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "LOADING" });
      const res = await fetch(url);
      const cart = await res.json();
      dispatch({ type: "DISPLAY_ITEMS", cart });
    };

    fetchData();
  }, []);

  const contextValue = useMemo(
    () => ({ ...state, clearCart, remove, increase, decrease }),
    [state, clearCart, remove, increase, decrease]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
