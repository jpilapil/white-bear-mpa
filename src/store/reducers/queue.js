import actions from "../actions";

export default function queue(queue = {}, action) {
  // initial state, action
  let newQueue = { ...queue }; // create copy of queue, never mutate original state!
  switch (action.type) {
    case actions.STORE_QUEUED_CARDS: // if action is type of STORE_QUEUED_CARDS, run
      newQueue.cards = action.payload;
      return newQueue; // new state
    case actions.UPDATE_INDEX_OF_CURRENT_CARD: // if action is type of UPDATE_INDEX_OF_CURRENT_CARD, run
      newQueue.index += 1;
      return newQueue; // new state
    case actions.RESET_QUEUE:
      newQueue.cards = [];
      newQueue.index = 0;
      return newQueue;
    default:
      // else, return initial state
      return queue;
  }
}
