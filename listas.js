const compra = ["manteca", "gaseosa", "carne", "leche", "pan"];
compra.push("Aceite de Girasol");
compra.pop("Aceite de Girasol");
const peliculas = [
    {titulo: volver, director:ricardo, fecha: 1978},
    {titulo: presente, director:raul, fecha: 1988},
    {titulo: pasado, director:macarena, fecha: 2005}
];

const peliculasNuevas = peliculas.filter(pelicula => pelicula.fecha > new Date(2010, 0, 1));
const directores = peliculas.map(pelicula => {
    return pelicula.director
})
const titulos = peliculas.map(pelicula => {
    return pelicula.titulo
})
const directoresTitulos = directores.concat(titulos)
const directoresTitulosProp = [...directores, ...titulos]
