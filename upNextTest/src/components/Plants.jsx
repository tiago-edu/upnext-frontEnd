import plants from "../plants.json";

import { useState } from "react";

// Estilos e Imagens
import styles from "../utils/styles";
import hand from "../assets/hand.svg";
import "../index.css";

// Components
import InputsContainer from "../components/InputsContainer";
import NoResultsContainer from "../components/NoResultsContainer";

const Plants = () => {
  // Define estados dos Selects
  const [sunlight, setSunlight] = useState("");
  const [water, setWater] = useState("");
  const [pets, setPets] = useState(null);

  // Funções para atualizar os estados com base nas seleções do usuário
  const handleSunlightChange = (event) => {
    setSunlight(event.target.value)
    if(event.target.value){
      setPets(null)
      setWater("")
      document.getElementById("water").value = "";
      document.getElementById("pet").value = null;
    }
  };

  const handleWaterChange = (event) => {
    setWater(event.target.value)
    if(event.target.value){
      setPets(null)
      setSunlight("")
      document.getElementById("sunlight").value = "";
      document.getElementById("pet").value = null;
    }
  };

  const handlePetsChange = (event) => {
    // transformar string em booleano
    let booleanValue;
    if(event.target.value === 'null'){
      booleanValue = null;
    }else if(event.target.value === 'true'){
      booleanValue = true;
    }else if(event.target.value === 'false'){
      booleanValue = false;
    }

    setPets(booleanValue);

    if(event.target.value){
      setSunlight("")
      setWater("")
      document.getElementById("sunlight").value = "";
      document.getElementById("water").value = "";
    }
    
  };


  // Verifica se os selects estão setados com o valor padrão inicial
  const noSelection = !sunlight && !water && pets === null;

  // Filtra as plantas com base nas seleções do usuário
  const filteredPlants = plants.filter(
    (plant) =>
      (sunlight === "" || sunlight === plant.sun) &&
      (water === "" || water === plant.water) &&
      (pets === null || plant.toxicity === (pets === true))
  );
  return (
    <>
      <InputsContainer
        handleSunlightChange={handleSunlightChange}
        handleWaterChange={handleWaterChange}
        handlePetsChange={handlePetsChange}
      />

      <div className={`${styles.mainContainer}`}>
        {/* Verifica se existem plantas filtradas */}
        {filteredPlants.length && !noSelection ? (
          <div className={`${styles.ourPicksContainer}`}>
            <img src={hand} alt="hand" />
            <h1 className={`${styles.textOurPicks}`}>Our picks for you</h1>
          </div>
        ) : null}
        {/* Filtro pra Container de NoResult*/}
        {filteredPlants.length && !noSelection ? (
          filteredPlants.map((plant) => (
            <div className={`${styles.cardsContainer}`} key={plant.id}>
              <div className={`${styles.card}`}>
                <img src={plant.url} alt={plant.name} className="w-40" />
                <h2>{plant.name}</h2>
                <p>${plant.price}</p>
              </div>
            </div>
          ))
        ) : (
          <NoResultsContainer />
        )}
      </div>
    </>
  );
};

export default Plants;
