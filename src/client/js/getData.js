/**
 * Function to get json data from endpoint
 *
 * @param url endpoint to fetch data from
 * @returns response in form of JSON
 */
const getData = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export default getData;
