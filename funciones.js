function nombre() {
    return true;
}

async function Promesa() {
    setTimeout(() => {
        console.log("Hola soy una promesa")
    }, 5000);
}

function* Par() {
    let id = 0
    while(true) {
        yield id += 4
    }
}