import {STORE_OUTLET} from '../action/constant';

export default  function outlet (state = '', {type, payload}) {
  switch (type) {
    case STORE_OUTLET:
      return  payload;
    default:
      return state;
  }
}
