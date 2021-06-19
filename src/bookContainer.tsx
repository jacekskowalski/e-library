import React, {Component} from 'react';
import thumbnail from "./images/na.jpg";
import IBook from "./IBook";
import {AddBook} from "./actions/action";
import { connect } from "react-redux";


export class BookContainer extends Component<any, any>{
    constructor(props:any){
        super(props);
        this.state={
            title: "",
            publisher: "",
            author:"",
            pages:""
        }
    }

    handleChange=(e:any)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    submit=(e:any)=>{
        let entity= {} as IBook;
        entity.title= this.state.title;
        entity.author= this.state.author;
        entity.pages= Number(this.state.pages);
        entity.publisher= this.state.publisher;
  
        if(entity.title.length===0 || entity.publisher.length===0 || entity.author.length===0
          || entity.pages ===0 ){
            e.preventDefault();
        }else{
        this.props.addItem(entity);
        this.setState({
            title: "",
            subtitle:"",
            publisher: "",
            author:"",
            pages:0
        });
     }
    }

    render() {
        return(
            <div className="container">
            <div className="container__thumbnail">
            <div>
                <img className="container__img padding-left margin-small" alt="Thumbnail" src={thumbnail}/></div> 
            </div>
            <div className="container__text">
                <div className="container__title padding-left margin-small">
                <input className="text__input first" value={this.state.title} onChange={(e:any)=>this.handleChange(e)}
                   type="text" name="title" placeholder="Title"/>
                </div>
                <div className="padding-left">
                <input className="text__input" value={this.state.publisher} onChange={(e:any)=>this.handleChange(e)}
                type="text" name="publisher" placeholder="Publisher"/>
                </div>
                <div className="padding-left margin-xs"> 
                <input className="text__input font-small" value={this.state.author} placeholder="Author"
                 type="text" name="author" onChange={(e:any)=>this.handleChange(e)}/>                
                </div>
                <div className="padding-left margin-xs">
              <input className="text__input font-small" value={this.state.pages} placeholder="Pages"
                 type="number"  name="pages" onChange={(e:any)=>this.handleChange(e)}/>  
                </div>
                <div className="button_box">
                <button className="btn btn--green" onClick={this.submit}><i className="fas fa-save"></i></button>
                </div>
                </div>
           </div>        
        );
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        addItem: (entity:IBook)=> dispatch(AddBook(entity))
    }
}
export default connect(null, mapDispatchToProps)(BookContainer);