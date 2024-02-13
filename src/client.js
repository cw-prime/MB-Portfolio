// client.js
import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';

const projectId = process.env.REACT_APP_SANITY_PROJECT_ID;
const dataset = 'production';

if (!projectId) {
  console.error("Error: Sanity project ID is not defined. Please check your environment variables.");
}

const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: '2022-02-01',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
export default client;
