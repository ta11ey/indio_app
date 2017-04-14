import React, { PropTypes, Component } from 'react';


 /** return primary information section (icon, title, location) of ob feed card.
 */
 export default class ChildInput extends Component {
   static propTypes = {}

   constructor(props) {
     super(props)
     console.log(props)
   }

   render() {
     const styles = {
       container: {
         height: 96,
         width: '100%'
       }
     }

     return (
       <div style={styles.container}>

       </div>
       )
   }
 }
