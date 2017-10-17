import { ADD_REMINDER, DELETE_REMINDER } from '../constants';

const reminder = (action) => {
  let { text, dueDate } = action;
  return {
    text,
    dueDate,
    id: Math.random()
  };
};

const removeById = (state = [], id) => {
  const reminders = state.filter(reminder => {
    return reminder.id !== id;
  });
  return reminders;
};

const reminders = (state = [], action) => {
  let reminders = null;
  switch(action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)];
      console.log('reminders as state', reminders);
      return reminders;
    case DELETE_REMINDER:
      reminders = removeById(state, action.id);
      console.log('reminders as state', reminders);
      return reminders;
    default:
      return state;
  }
};

export default reminders;
