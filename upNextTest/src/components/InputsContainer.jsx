/* eslint-disable react/prop-types */
// Importação de imagens
import sun from "../assets/sun.svg";
import wateringcan from "../assets/wateringcan.svg";
import dog from "../assets/dog.svg";

// Importação Styles
import styles from "../utils/styles";

const InputsContainer = ({
  handleSunlightChange,
  handleWaterChange,
  handlePetsChange,
}) => {
  return (
    <>
      {/* Container com os inputs para seleção do usuário */}
      <div className={`${styles.inputContainer}`}>
        {/* Input para seleção da quantidade de luz solar */}
        <div className={`${styles.widthSelect}`}>
          <img src={sun} alt="sun" className="pb-3" />
          <p>
            <b>1.</b> Set the amount of <b>sunlight</b> your plant will get
          </p>
          <select
            name="sunlight"
            id="sunlight"
            className={`${styles.selectStyle}`}
            onChange={handleSunlightChange}
          >
            <option value="">Select...</option>
            <option value="no">no</option>
            <option value="low">low</option>
            <option value="high">high</option>
          </select>
        </div>

        {/* Input para seleção da frequência de regar */}
        <div className={`${styles.widthSelect}`}>
          <img src={wateringcan} alt="wateringcan" className="pb-3" />
          <p>
            <b>2.</b> How often do you want to <b>water</b> your plant?
          </p>

          <select
            name="water"
            id="water"
            className={`${styles.selectStyle}`}
            onChange={handleWaterChange}
          >
            <option value="">Select...</option>
            <option value="regularly">regularly</option>
            <option value="daily">daily</option>
            <option value="rarely">rarely</option>
          </select>
        </div>

        {/* Input para seleção da presença de animais de estimação */}
        <div className={`${styles.widthSelect}`}>
          <img src={dog} alt="dog" className="pb-3" />
          <p>
            <b>3.</b> do you have pets? Do they <b>chew</b> plants?
          </p>

          <select
            name="pet"
            id="pet"
            className={`${styles.selectStyle}`}
            onChange={handlePetsChange}
          >
            <option value='null'>Select...</option>
            <option value='true'>true</option>
            <option value='false'>false</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default InputsContainer;
