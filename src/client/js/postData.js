/**
 * Function to sumbit POST request to endpoint
 * @param url of the end point to post data to
 * @param data object to post
 */

const postData = async (url = "", data = {}) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json", // the body of the request will be json
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (error) {
    console.error(`postData error : ${error.message}`);
  }
};

export default postData;
