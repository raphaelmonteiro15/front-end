import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
import Book from '../components/book.js'

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <Book book={book} selectBook={this.props.selectBook}/>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
