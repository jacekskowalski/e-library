import React, { Component } from 'react';
import { connect } from "react-redux";
import BookContainer from "./bookContainer"
import thumbnail from "./images/na.jpg";
import { DeleteBookById, UpdateBookById } from "./actions/action";
import Headline from "./headline";
import IBook from './IBook';
import { isModuleBlock } from 'typescript';
export class Main extends Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            items: [{
                "id": 0,
                "title": "",
                "publisher": "",
                "author": "",
                "pages": 0
            }]
        }
    }

    handleChange = (i: any, evt: any) => {
        /*
        let items = [...this.state.items];
        items[i] = evt.target.value;
        this.setState({ items });*/
        this.setState({
            [i]: evt
        });
    }

    deleteItem = (id: number) => {
        this.props.deleteItem(id);
    }

    updateItem = (id:string, title:string, publisher:string, author:string, pages:number) => {
       let ibook={} as IBook;
       ibook.id= id;
       ibook.title=title;
       ibook.author=author;
       ibook.publisher=publisher;
       ibook.pages=pages;
        this.props.updateItem({ibook});
    }

    render() {
        return (
            <div className="main">
            <Headline title="New record" />
                <BookContainer />
                <Headline title="Current records"/>
                <div>
                    {
                        this.props.books.map((item: any, key: any) => {
                            return (
                                <div className="main__section" key={item.id}>
                                    <div className="container" >
                                        <div className="container__thumbnail">
                                            {
                                                item.thumbnail === undefined ?
                                                    <div><img className="container__img padding-left margin-small" alt="Thumbnail" src={thumbnail} /></div> :
                                                    <div><img className="container__img padding-left margin-small" alt="Thumbnail" src={item.thumbnail} /></div>
                                            }
                                        </div>
                                        <div className="container__text">
                                            <div className="container__title padding-left margin-small">
                                                <input className="text__input first" value={this.state[item.title] || ""} onChange={(e) => this.handleChange(item.title, e.target.value)}
                                                    type="text" placeholder={item.title} />
                                            </div>
                                            <div className="padding-left">
                                                <input className="text__input" value={this.state[item.publisher] || ""} onChange={(e) => this.handleChange(item.publisher, e.target.value)}
                                                    type="text" placeholder={item.publisher === undefined ? "Publisher N/A" : item.publisher} name="published" />
                                            </div>
                                            <div className="padding-left margin-xs">
                                                {item.author === undefined ?
                                                    <input className="text__input font-small" type="text" value={this.state[item.author] || ""} placeholder="Author N/A"
                                                        onChange={(e) => this.handleChange(item.author, e.target.value)} />
                                                    : <input className="text__input font-small" type="text" value={this.state[item.author] || ""} placeholder={item.author}
                                                        onChange={(e) => this.handleChange(item.author, e.target.value)} />
                                                }
                                            </div>
                                            <div className="padding-left margin-xs">
                                                {item.pages === undefined ?
                                                    <input className="text__input font-small" type="number" value={this.state[item.pages] || ""} placeholder="Pages unknown"
                                                        onChange={(e) => this.handleChange(item.pages, e.target.value)} />
                                                    : <input className="text__input font-small" type="number" value={this.state[item.pages] || ""} placeholder={`Pages ${item.pages}`}
                                                        onChange={(e) => this.handleChange(item.pages, e.target.value)} />
                                                }
                                            </div>
                                            <div className="button_box">
                                                <button className="btn btn--green" onClick={()=>
                                                 this.updateItem(item.id,this.state[item.title],this.state[item.author],this.state[item.publisher], this.state[item.pages])}>
                                                <i className="fas fa-save"></i></button>
                                                <button className="btn btn--red" onClick={() => this.deleteItem(item.title)}><i className="far fa-trash-alt"></i></button>
                                            </div>
                                        </div>
                            
                                    </div>

                                    <div className="table">
                                    <p className="margin-small headline">The history of {item.title}</p>
{
    this.props.history.map((val1: any, key: any) => {
        if (val1.book_id === item.id) {
            return (
              
                <table key={key}>
                    <thead>
                    <tr>
                        <th className="table__headline">Borrower</th>
                        <th className="table__headline">From</th>
                        <th className="table__headline">To</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr key={key}>
                            <td className="table__cell">{val1.name}</td>
                            <td className="table__cell">{val1.start_date}</td>
                            <td className="table__cell">{val1.end_date}</td>
                        </tr>
                    </tbody>
                </table>
                 )
              }
          })
        }

                             </div>
                         </div>
                       )
                      }
                     )
                    }
                </div>
          </div>
        )
    }
}

function mapStateToProps(state: any) {
    return {
        books: state.selectedBooks.val,
        history: state.history
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        deleteItem: (id: number) => dispatch(DeleteBookById(id)),
        updateItem: (id: number) => dispatch(UpdateBookById(id)),
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);