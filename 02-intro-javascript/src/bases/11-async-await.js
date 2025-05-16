const getImagen = async () => {
  try {
    const apikey = "6IZXUu5v07OxtMgWiOQk8bquV6JrMMiD";
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apikey}`
    );
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    const { data } = await res.json();
    const { url } = data.images.original;
    document.body.innerHTML = ""; // Limpia el body
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.error(error);
    const errorMsg = document.createElement("p");
    errorMsg.textContent = "Error al cargar la imagen";
    document.body.append(errorMsg);
  }
};
getImagen();
