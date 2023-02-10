 import style from "./SearchBar.module.css"
 
 function SearchBar(props) {
   return (
      <div className = {style.main}>
         <input type='search' />
      <button onClick={()=>{props.onSearch(5)}}>Agregar</button>
      </div>
   );
}


export default SearchBar