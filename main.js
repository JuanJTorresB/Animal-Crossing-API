const mainContainer = document.getElementById("container")

const peticiónNookpedia = async()=>{
    try {
        const respuesta = await fetch("https://api.nookipedia.com/villagers?api_key=aecd985e-8494-49fc-98d1-068ba2038ae8");
        if (respuesta.ok){
            const datos = await respuesta.json()
            console.log(datos)
            let aldeanos = ""
            for (let aldeano of datos){
                aldeanos += `
                    <div class="Aldeano">
                        <img class="Aldeano__Img" src="${aldeano.image_url}" alt="">
                        <figcaption class="Aldeano__Info">
                            <ul class="Aldeano__Info__Lista">
                                <li class="Info__Lista__Item"><b>Nombre:</b> ${aldeano.name}</li>
                                <li class="Info__Lista__Item"><b>Personalidad:</b> ${aldeano.personality}</li>
                                <li class="Info__Lista__Item"><b>Frase Celebre:</b> ${(aldeano.quote)??("No tiene Frase Celebre")}</li>
                            </ul>
                        </figcaption>
                    </div>`
            };
            mainContainer.innerHTML = (aldeanos)
        } else {
            throw new Error("Petición Fallida");
        }
    } catch (error) {
        console.error(error);
    };
};

peticiónNookpedia();