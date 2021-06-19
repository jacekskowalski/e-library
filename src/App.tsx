import React, {Component} from 'react';
import Main from "./main";
import { connect } from "react-redux";
import getRequest from "./actions/getRequest";
import Header from './header';
export class App extends Component<any, any>{
  constructor(props: any) {
    super(props); 
    this.props.getAllBooks();
}
render() {
  return (
    <>
    <Header/>
    <Main />
    
    </>
  );
}
}
function mapStateToProps(state:any) {
      return {
       books: state.selectedBooks.val,
       history: state.history
      };
    }
    
    const mapDispatchToProps = (dispatch:any) => {
      return {
      getAllBooks: ()=> dispatch(getRequest()),
      dispatch
      };
    }
    export default connect(mapStateToProps, mapDispatchToProps)(App);
