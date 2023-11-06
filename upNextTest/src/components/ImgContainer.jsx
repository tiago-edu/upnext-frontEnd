// Importação de Imagens
import mainDesktopImage from "../assets/mainDesktopImage.svg";
import mainMobileImage from "../assets/mainMobileImage.svg";
import downArrow from "../assets/downArrow.svg";

// Importação de Styles
import styles from "../utils/styles";


const ImgContainer = () => {
  return (
    <>
      <div className="flex">
        {/* Imagem para visualização em dispositivos móveis */}
        <img
          src={mainMobileImage}
          alt="Mobile_Image"
          className={`${styles.mobileImage}`}
        />
        {/* Imagem para visualização em desktops */}
        <img
          src={mainDesktopImage}
          alt="Desktop_Image"
          className={`${styles.desktopImage}`}
        />
        {/* Container para texto e seta de navegação */}
        <div className={`${styles.textImageContainer}`}>
          <div>
            <h2 className="text-2xl font-medium sm:text-xl">
            green thumb.
          </h2>
          </div>
          <div>
            <h1 className={`${styles.textTitleImage}`}>Find your next green friend</h1>
            <img src={downArrow} alt="downArrow" className="pt-[5%]"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImgContainer;
