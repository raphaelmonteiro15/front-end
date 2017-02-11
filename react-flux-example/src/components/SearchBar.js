import React from 'react'

  const SearchBar = (props) =>{
    function onInputChange(term){
      props.onChangeInput(term);
    }
    return(
    <div>
      <input type = "text" onChange={event => onInputChange(event.target.value)} />
    </div>
  );
}
export default SearchBar
