
const leerArchivos = async() => {
    const archivoOriginal = await fs.readFile('./datos/autos.txt');
    const datosOriginales = JSON.parse(archivoOriginal);

    return datosOriginales;
}

module.exports = leerArchivos;