import React from 'react'

const Book = (props) => {
    return (
      <li
        key={props.book.title}
        onClick={() => props.selectBook(props.book)}
        className="list-group-item">
        {props.book.title}
      </li>
    );
}

export default Book
