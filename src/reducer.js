export default function reducer(state, action) {
  const { type, payload } = action;

  switch(type) {
    case 'FETCH_BURGERS': 
      const sortedBurgers = payload.sort((a, b) => b.created - a.created);
      return { ...state, burgers: sortedBurgers };

    case 'ADD_BURGER': 
      console.log(payload)
      return { ...state, burgers: [payload, ...state.burgers]};

    case 'SORT_BY_CREATED':
      const sortedByCreated = state.burgers.sort((a, b) => b.created - a.created);
      return { ...state, burgers: sortedByCreated };

    case 'SORT_BY_NAME':
      const sortedByName = state.burgers.sort((a, b) => a.name.replace(/\W/g, '').localeCompare(b.name.replace(/\W/g, '')));
      return { ...state, burgers: sortedByName };

    case 'SORT_MOST_POPULAR':
      const sortedMostPopular = state.burgers.sort((a, b) => b.votes - a.votes);
      return { ...state, burgers: sortedMostPopular };

    case 'SORT_LEAST_POPULAR':
      const sortedLeastPopular = state.burgers.sort((a, b) => a.votes - b.votes);
      return { ...state, burgers: sortedLeastPopular };

    case 'DISPLAY_APPROVED':
      const displayApproved = state.burgers.filter(el => el.approved);
      const displayDisapproved = state.burgers.filter(el => !el.approved);
      return { ...state, burgers: [ ...displayApproved, ...displayDisapproved ] };

    case 'SEARCH_BURGER':
      const selected = [];
      const search = payload.search;
      const allBurgers = payload.allBurgers;
      // console.log("IN REDUCER: ", allBurgers)
      if (search.length < 1) return { ...state, burgers: allBurgers };
      allBurgers.forEach(el => {
        if (el.name.replace(/\W/g, '').toLowerCase().includes(search.replace(/\W/g, '').toLowerCase())) {
          selected.push(el);
          // console.log("SELECTED: ", selected)
        }
      })
      return { ...state, burgers: selected };

    case 'APPROVE_BURGER':
      const approvedBurger = payload;
      const burgerToApprove = state.burgers.find(el => el.id === approvedBurger.id);
      const apprIdx = state.burgers.indexOf(burgerToApprove);
      const burgersWithApproved = [...state.burgers.slice(0, apprIdx), approvedBurger, ...state.burgers.slice(apprIdx + 1)];
      return { ...state, burgers: burgersWithApproved };

    case 'DISAPPROVE_BURGER':
      const disapprovedBurger = payload;
      const burgerToDispprove = state.burgers.find(el => el.id === disapprovedBurger.id);
      const disapprIdx = state.burgers.indexOf(burgerToDispprove);
      const burgersWithDispproved = [...state.burgers.slice(0, disapprIdx), disapprovedBurger, ...state.burgers.slice(disapprIdx + 1)];
      return { ...state, burgers: burgersWithDispproved };

    case 'UPVOTE_BURGER':
      const upvotedBurger = payload;
      const burgerToUpvote = state.burgers.find(el => el.id === upvotedBurger.id);
      const upvIdx = state.burgers.indexOf(burgerToUpvote);
      const burgersWithUpvoted = [...state.burgers.slice(0, upvIdx), upvotedBurger, ...state.burgers.slice(upvIdx + 1)];
      return { ...state, burgers: burgersWithUpvoted };

    case 'DOWNVOTE_BURGER':
      const downvotedBurger = payload;
      const burgerToDownvote = state.burgers.find(el => el.id === downvotedBurger.id);
      const downvIdx = state.burgers.indexOf(burgerToDownvote);
      const burgersWithDownvoted = [...state.burgers.slice(0, downvIdx), downvotedBurger, ...state.burgers.slice(downvIdx + 1)];
      return { ...state, burgers: burgersWithDownvoted };

    default: 
      return state;
  }
}
