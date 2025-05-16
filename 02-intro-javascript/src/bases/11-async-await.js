// ASYNC Y EL AWAIT

const getImagen = async () => {
  try {
    const apikey = "6IZXUu5v07OxtMgWiOQk8bquV6JrMMiD";
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apikey}`
    );
    const { data } = await res.json();
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    //manejo de error
    console.error(error);
  }
};

getImagen();
