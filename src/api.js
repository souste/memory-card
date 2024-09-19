async function fetchImages() {
  try {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_T1LnrLnXcwvKqaSn5FrUtev693zNCbefFmLyEavTOOV046vj1ulb8koTJAV83PtZ"
    );

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

export default fetchImages;
