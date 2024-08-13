const clearbutton = document.getElementById("btnClear");
const input = document.getElementById("Search");
const searchbutton = document.getElementById("btnSearch");
const search_container = document.getElementById('search_container');
search_container.style.height ="50%";

function clear(){
    input.value = "";
    search_container.innerHTML = "";
}

clearbutton.addEventListener("click",clear);

function search(){
    search_container.innerHTML = "";
    const keyword  = ["beaches","temples","countries"]

    keyword.forEach(element => {
        var ans = true;
        const x = input.value.toLowerCase();
        for(var y = 0; y<element.length && y < x.length; y++){
            if(element[y] != x[y]){
                ans = false;
                console.log("false");
                break;
            }
        }
        if(ans){
            

            fetch('travel_recommendation_api.json')
            .then(response => response.json())
            .then(data => {
                switch(element){
                    case 'beaches':
                        data.beaches.forEach(element => {
                            const imgdiv = document.createElement('div');
                            imgdiv.id = 'search_img';
                            imgdiv.innerHTML += `<img src="${element.imageUrl}" alt="hjh" style="width: 300px; height: 200px; filter: none;">`;

                            const contentdiv = document.createElement('div');
                            contentdiv.innerHTML += `<h1> ${element.name}</h1>`;
                            contentdiv.innerHTML += `<p> ${element.description}</p>`;
                            contentdiv.innerHTML += `<button> visit </button>`;
                            

                            search_container.appendChild(imgdiv);
                            search_container.appendChild(contentdiv);
                        });
                        break;
                    case 'temples':
                        data.temples.forEach(element => {
                            const imgdiv = document.createElement('div');
                            imgdiv.id = 'search_img';
                            imgdiv.innerHTML += `<img src="${element.imageUrl}" alt="hjh" style="width: 300px; height: 200px; filter: none;">`;

                            const contentdiv = document.createElement('div');
                            contentdiv.innerHTML += `<h1> ${element.name}</h1>`;
                            contentdiv.innerHTML += `<p> ${element.description}</p>`;
                            contentdiv.innerHTML += `<button> visit </button>`;
                            

                            search_container.appendChild(imgdiv);
                            search_container.appendChild(contentdiv);
                        });
                        break;
                    case 'countries':
                        data.countries.forEach(element => {
                            const titlediv = document.createElement('div');
                            titlediv.id = "countries_names";
                            titlediv.innerHTML += `<h1>${element.name}</h1>`
                            search_container.appendChild(titlediv);

                            element.cities.forEach(city => {
                                const imgdiv = document.createElement('div');
                                imgdiv.id = 'search_img';
                                imgdiv.innerHTML += `<img src="${city.imageUrl}" alt="hjh" style="width: 300px; height: 200px; filter: none;">`;
    
                                const contentdiv = document.createElement('div');
                                contentdiv.innerHTML += `<h2> ${city.name}</h2>`;
                                contentdiv.innerHTML += `<p> ${city.description}</p>`;
                                contentdiv.innerHTML += `<button> visit </button>`;
                                search_container.appendChild(imgdiv);
                                search_container.appendChild(contentdiv);
                            })
                        });
                        break;
                }
            })




        }   
    });

    

}
searchbutton.addEventListener("click",search);