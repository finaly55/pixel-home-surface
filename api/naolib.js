import axios from "axios";

const BASE_URL = "https://openv2.tan.fr/ewp/tempsattente.json/BEMZ";

export const getNextBus = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des horaires du bus:", error);
    return null;
  }
};
