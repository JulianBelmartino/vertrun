import axios from 'axios';

const BASE_URL = 'https://www.strava.com/api/v3';
const ACCESS_TOKEN = 'fc44e65c3298f6898bbf4d65ca50a715cebf5650';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

export const getActivities = async () => {
    try {
      const response = await axiosInstance.get('/athlete/activities');
      console.log('Respuesta exitosa:', response.data);
      return response.data;
    } catch (error) {
      handleApiError(error, 'Error al obtener actividades de Strava');
    }
  };


  const handleApiError = (error, customMessage) => {
    if (error.response) {
      // El servidor respondió con un código de estado que no está en el rango 2xx
      console.error('Error de respuesta del servidor:', error.response.data);
      console.error('Código de estado:', error.response.status);
      console.error('Cabeceras de respuesta:', error.response.headers);
    } else if (error.request) {
      // La solicitud fue realizada, pero no se recibió respuesta
      console.error('No se recibió respuesta del servidor:', error.request);
    } else {
      // Se produjo un error durante la configuración de la solicitud
      console.error('Error de configuración de la solicitud:', error.message);
    }
    throw error;
  };
