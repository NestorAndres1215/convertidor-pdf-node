export async function convertirArchivo(formData) {

const res = await fetch("http://localhost:3000/convertir", {
method: "POST",
body: formData
});

return res.json();

}