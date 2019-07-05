import auth from './auth';
import transaction from './transaction';

const state = Object.assign(
  {
    error: {
      title: null,
      message: null,
      error: null
    }
  },
  auth,
  transaction
);

export default state;
