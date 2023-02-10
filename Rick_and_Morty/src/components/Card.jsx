import style from './Card.module.css'


function Card(props) {
   return (
      <div className={style.singleCard}>
         <button onClick={props.onClose}>X</button>
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img  src={props.image} alt="Image" />
      </div>
   );
}


export default Card