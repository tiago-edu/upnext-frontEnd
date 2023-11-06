
// Importação de Imagens
import jug from "../assets/jug.svg";

// Importação de Styles
import styles from "../utils/styles";

// Componente funcional NoResultsContainer para exibir quando não houver resultados
const NoResultsContainer = () => {
  return (
    <div className={`${styles.noResultContainer}`}>
        <div className="flex flex-col justify-center w-full md:w-96 text-lightGrey">
            <h1 className="text-5xl font-bold mb-4">No results yet...</h1>
            <p>use the filter above to find the plant that best fits your environments :)</p>
        </div>
        <div className="img-content">
            <img src={jug} alt="" className="mx-auto" />
        </div>
    </div>
  )
}

export default NoResultsContainer
