// sanityService.js
import { client } from '../client';

export const fetchAboutSections = async () => {
  const query = '*[_type == "aboutSection"]';

  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error('Error fetching about sections:', error);
    return [];
  }
};
