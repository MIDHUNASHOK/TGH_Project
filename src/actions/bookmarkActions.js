import axios from "axios";

export const randomQuoyesApi = () => async (dispatch) => {
  try {
    dispatch({
      type: "RANDOM_REQUEST",
    });

    const { data } = await axios.get("https://api.quotable.io/random");
    // console.log("first", data);
    localStorage.setItem("randomQuot", JSON.stringify(data));
    dispatch({
      type: "RANDOM_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "RANDOM_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const tagQuoyesApi = () => async (dispatch) => {
    try {
      dispatch({
        type: "TAG_REQUEST",
      });
  
      const { data } = await axios.get("https://api.quotable.io/tags");
      //  console.log("tag", data);
      // localStorage.setItem("TAGQuot", JSON.stringify(data));
      dispatch({
        type: "TAG_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "TAG_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
export const getResetTag = () => async (dispatch) => {
    try {
      dispatch({
        type: "TAG_REFRESH",
      });

    } catch (error) {
      dispatch({
        type: "TAG_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };