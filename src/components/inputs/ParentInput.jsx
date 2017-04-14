import React, { PropTypes, Component } from 'react';
import { removeInput } from '../../actions/create.js'
import { connect } from 'react-redux';

 /** return primary information section (icon, title, location) of ob feed card.
 */
 export class ParentInput extends Component {
   static propTypes = {}

   constructor(props) {
     super(props)
   }

   remove = () => {
     const{ dispatch, id } = this.props;

     dispatch(removeInput(id))
   }

   addChild = () => {
     const{ dispatch, data } = this.props;

     dispatch(addChild(data))
   }

   render() {
     const { data, id } = this.props;

     const styles = {
       container: {
         height: 96,
         width: 400,
         background: '#f3f4f4'
       }
     }

     const children = () => {

     }

     return (
       <div style={styles.container}>
         <div onClick={this.remove}>
           X
         </div>
         <div onClick={this.remove}>
            + Add Child +
         </div>
         {children}
       </div>
       )
   }
 }

 export default connect()(ParentInput)
