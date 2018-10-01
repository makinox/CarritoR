export default function reducef(state, action) {
  switch (action.type) {

    case 'login': {
      return {
        ...state,
        logged: action.payload.logged,
        token: action.payload.token
      }
    }

    case 'SET_PRODUCTS': {
      return {
        ...state,
        products: action.payload.products
      }
    }

    case 'SET_SELECTED': {
      return {
        ...state,
        selected: action.payload.selected,
        counter: action.payload.counter
      }
    }

    case 'SET_TOTAL': {
      return {
        ...state,
        total: action.payload.total,
      }
    }

    default:
      return state
  }
}