import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
  return (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-4b88b-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );
    };
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending Cart data!",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-4b88b-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed!!!");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent Cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!!!",
        })
      );
    }

    const response = await fetch(
      "https://react-http-4b88b-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
      {
        method: "PUT",
        body: JSON.stringify(cart),
      }
    );

    if (!response.ok) {
      throw new Error("Sending cart data failed!!!");
    }
  };
};
