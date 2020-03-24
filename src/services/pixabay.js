const API_URL = process.env.REACT_APP_PIXABAY_API_URL;

export async function searchTags({ query, pageNumber = 1, perPage = 20 }) {
  try {
    const url = `${API_URL}&per_page=${perPage}&page=${pageNumber}&q=${query}`;
    const response = await fetch(url);

    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}
