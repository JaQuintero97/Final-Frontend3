import { useContext, createContext, useEffect, useReducer } from "react";

// Definir el estado inicial
const initialState = {
  theme: "light",
  dentists: [],
  dentistDetail: {},
  favs: JSON.parse(localStorage.getItem('favs')) || []
};

// Crear el contexto
const ContextGlobal = createContext();

// Reductor para gestionar el estado
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DENTISTS":
      return { ...state, dentists: action.payload };
    case "SET_DENTIST_DETAIL":
      return { ...state, dentistDetail: action.payload };
    case "HANDLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "ADD_TO_FAVS":
      return { ...state, favs: [...state.favs, action.payload] };
    case "REMOVE_FROM_FAVS":
      return {
        ...state,
        favs: state.favs.filter(fav => fav.id !== action.payload.id)
      };
    default:
      throw new Error(`Acción no reconocida: ${action.type}`);
  }
};

// Función personalizada para cargar dentistas desde la API utilizando fetch
const loadDentistsFromApi = async (dispatch) => {
  try {
    const urlApi = "https://jsonplaceholder.typicode.com/users/";
    const res = await fetch(urlApi);
    if (!res.ok) {
      throw new Error("No se pudo obtener la información");
    }
    const data = await res.json();
    dispatch({ type: 'SET_DENTISTS', payload: data });
  } catch (error) {
    console.error(error);
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Cargar dentistas al montar el componente
  useEffect(() => {
    loadDentistsFromApi(dispatch);
  }, []);

  // Actualizar el almacenamiento local cuando cambian los favoritos
  useEffect(() => {
    if (state.favs.length < 1) {
      localStorage.removeItem('favs');
    } else {
      localStorage.setItem('favs', JSON.stringify(state.favs));
    }
  }, [state.favs]);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

// Función personalizada para acceder al contexto
export const useContextGlobal = () => useContext(ContextGlobal);