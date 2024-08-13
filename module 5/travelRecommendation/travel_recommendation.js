const clearbutton = document.getElementById("btnClear");
const input = document.getElementById("Search");
const searchbutton = document.getElementById("btnSearch");
const search_container = document.getElementById('search_container');

function clear(){
    input.value = "";
    search_container.innerHTML = "";
}

clearbutton.addEventListener("click",clear);

function search(){

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
                            imgdiv.innerHTML += `<img src="${element.imageUrl}" alt="hjh">`;

                            const contentdiv = document.createElement('div');
                            contentdiv.innerHTML += `<h1> ${element.name}</h1>`;
                            contentdiv.innerHTML += `<p> ${element.description}</p>`;
                            contentdiv.innerHTML += `<button> visit </button>`;
                            

                            search_container.appendChild(imgdiv);
                            search_container.appendChild(contentdiv);
                        });
                        break;
                    case 'temples':

                        break;
                    case 'countries':

                        break;
                }
            })




        }   
    });

    

}
searchbutton.addEventListener("click",search);