export default function reducer(state, action) {
  const { type, payload } = action;

  switch(type) {
    case 'FETCH_BURGERS': 
      const sortedBurgers = payload.sort((a, b) => b.created - a.created);
      return { ...state, burgers: sortedBurgers }

    case 'ADD_BURGER': 
      console.log(payload)
      return { ...state, burgers: [payload, ...state.burgers]}

    case 'SORT_BY_CREATED':
      const sortedByCreated = state.burgers.sort((a, b) => b.created - a.created);
      return { ...state, burgers: sortedByCreated }

    case 'SORT_BY_NAME':
      const sortedByName = state.burgers.sort((a, b) => a.name.replace(/\W/g, '').localeCompare(b.name.replace(/\W/g, '')));
      return { ...state, burgers: sortedByName }

    case 'SORT_MOST_POPULAR':
      const sortedMostPopular = state.burgers.sort((a, b) => b.votes - a.votes);
      return { ...state, burgers: sortedMostPopular }

    case 'SORT_LEAST_POPULAR':
      const sortedLeastPopular = state.burgers.sort((a, b) => a.votes - b.votes);
      return { ...state, burgers: sortedLeastPopular }

    case 'DISPLAY_APPROVED':
      const displayApproved = state.burgers.filter(el => el.approved);
      const displayDisapproved = state.burgers.filter(el => !el.approved)
      return { ...state, burgers: [ ...displayApproved, ...displayDisapproved ] }

    default: 
      return state;
  }
}


// payload.sort((a, b) => a.name.replace(/\W/g, '').localeCompare(b.name.replace(/\W/g, '')));