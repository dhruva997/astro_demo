// src/lib/wordpress.js

// const API_URL = "http://localhost:80/wordpress/wp-json/wp/v2/pages";
const API_URL = "https://shreekailash.com/wp-json/wp/v2/pages/532";


export async function getPosts() {
  const response = await fetch(`${API_URL}?_embed`);

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
}