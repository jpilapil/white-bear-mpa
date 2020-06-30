import actions from "../actions";

export default function currentUser(currentUser = {}, action) {
  // let newCurrentUser = { ...currentUser }; // create copy of queue, never mutate original state!
  switch (action.type) {
    case actions.STORE_CURRENT_USER:
      return action.payload;
    default:
      return currentUser;
  }
}
