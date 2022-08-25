export const getRandomQuotes = (state = {}, action) => {
  switch (action.type) {
    case "RANDOM_REQUEST":
      return { loading: true };
    case "RANDOM_SUCCESS":
      return { loading: false, quote: action.payload };
    case "RANDOM_FAIL":
      return { loading: false, error: action.payload };
    default:
        return state
  }
};

export const getTagQuotes = (state = {}, action) => {
  switch (action.type) {
    case "TAG_REQUEST":
      return { loading: true };
    case "TAG_SUCCESS":
      return { loading: false, tag: action.payload };
    case "TAG_FAIL":
      return { loading: false, error: action.payload };
    default:
        return state
  }
};

