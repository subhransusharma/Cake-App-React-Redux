import React from 'react'
import { buyIceCream } from '../redux'
import { connect } from 'react-redux'

function IceCreamContainer(props) {
  return (
    <div>
    <h2>Number of IceCreams: {props.numberOfIceCreams}</h2>
    <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
   
  )
}

const mapStateToProps = (state) => {
    return {
        numberOfIceCreams: state.iceCreams.numberOfIceCreams
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
