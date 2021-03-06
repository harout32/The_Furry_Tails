import axios from 'axios';
import { HOME__SET_PETS } from './types/pets.types';

import { handleHttpError } from './errors.actions';

export const fetchPets = () => handleHttpError(
  async (dispatch) => {

    const res =  await axios.get('http://localhost:6060/api/pets');

    return dispatch(setPets(res.data));

}
)

export const setPets = (payload) => ({ type: HOME__SET_PETS, payload });
