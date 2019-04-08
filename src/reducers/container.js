
let initialState = [
]


const movieList = (state = initialState, action) => {
  if (action.type === 'FETCH_MOVIES_SUCCESS') {
    initialState = action.data
    return action.data
  }
  if (action.type === 'ADD_SUCCESS') { return state.concat([action.data]) }
  if (action.type === 'UPDATE_SUCCESS') {
    return state.map((m) => {
      if (m.id === action.data.id) {
        return action.data;
      }
      return m
    })
  }
  if (action.type === 'DELETE_SUCCESS') {
    return state.filter((m) => {
      if (m.id === action.id) {
        return false
      }
      return true
    })
  }
  if (action.type === 'FILTER') {
    const myMovies = initialState

    if (action.newTitle === '') {
      return initialState
    }

    const newArray = myMovies.filter(e => e.title.includes(action.newTitle))
    return newArray
  }
  return state
}

export default movieList
