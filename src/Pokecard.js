
import './Pokecard.css';

function Pokecard({id, name, type, base_experience}) {
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <div className="pokecard">
        <h3>{name}</h3>
        <img src={img} alt={name}/>
        <p>Type: {type}</p>
        <p>EXP: {base_experience}</p>
    </div>
  );
}

export default Pokecard;
