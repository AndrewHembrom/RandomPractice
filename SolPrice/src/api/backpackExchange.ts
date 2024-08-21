// src/api/backpackExchange.ts

import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

export const getSolUsdcPrice = async (): Promise<number> => {
  try {
    const response = await axios.get(`${BASE_URL}/sol_usdc`);
    return response.data.price; // Adjust based on actual response structure
  } catch (error) {
    console.error('Error fetching SOL_USDC price:', error);
    throw error;
  }
};
