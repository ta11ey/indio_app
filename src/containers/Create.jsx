import React, { PropTypes, Component } from 'react';
import {connect} from 'react-redux'

//reducer
import ParentInput from '../components/inputs/ParentInput.jsx';
//actions
import { addInput } from '../actions/create.js'
//helpers

 /** containes the parent inputs
 */

 export class Create extends Component {
   static propTypes = {
     inputs: PropTypes.array
   }

   constructor(props) {
     super(props)
   }

   addInput = () => {
    const { dispatch } = this.props;

    dispatch(addInput())
   }

   render() {
     const { create } = this.props;

     const sortedInputKeys = Object.keys(create.inputs).sort((a, b) => {
       return create.inputs[a].created_at - create.inputs[b].created_at
     })

     const Inputs = sortedInputKeys.map(id => (
       <ParentInput
         key={id}
         id={id}
         data={create.inputs[id]}/>
      )
     )

     return (
       <div >
         <div onClick={this.addInput}>
           Add Input +
         </div>
         { Inputs }
       </div>
       )
   }
 }

 const mapStateToProps = state => (
   {
     create: state.create
   }
 )

export default connect(mapStateToProps)(Create)
