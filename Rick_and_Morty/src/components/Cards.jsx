import Card from './Card';
import style from './assets/Cards.module.css'


function Cards(props) {
   const { characters } = props;
   return (
      <div className={style.mainCards}>
         {
         characters.map(({name, species, gender, image}, index)=>{
            return <Card 
            key = {index}
            name = {name}
            species ={species}
            gender = {gender}
            image = {image}
            onClose = {()=> window.alert("Emulamos que se cierra la card")}
            />
         })
         }
      </div>
      );
}

export default Cards