import auth from './auth';
import transaction from './transaction'

const actions = Object.assign({}, auth, transaction);

export default actions;
