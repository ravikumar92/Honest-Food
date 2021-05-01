import React, {useState} from 'react';
import {connect} from "react-redux";
import { LOCATE_OUTLET } from '../../action/constant';

const Resturant = ({outlet, dispatch}) => {
    const [address, setAddress] = useState('');
    const locateOutlet = () => {
        dispatch({type: LOCATE_OUTLET, payload: address})
    } 
    return (
        <div>
          <label for="address">Address</label>
          <input 
          type="text" 
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter address"
          />
          <input type="button" value="locate" onClick={locateOutlet}/>

          {
            outlet &&
            <h3>{outlet}</h3>
          }
      </div>
      
)
}
const mapPropsToState = (state) => ({
    outlet: state.outlet,
});

export default connect(mapPropsToState, dispatch => ({dispatch}))(Resturant);