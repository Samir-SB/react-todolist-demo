const reducerItems = (state, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case 'removeItem': // the paramater expected is id
      return state.filter((item) => item.id !== payload);

    case 'addItem': // the paramater expected is newItem
      return [...state, payload];

    case 'updateItem': // the paramater expected is newItem
      return state.map((item) => (item.id !== payload.id ? item : payload));

    case 'initItems':
      return payload;
    default:
      return state;
  }
};

export default reducerItems;
