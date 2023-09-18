let para = new URLSearchParams(window.location.search);
let pass = para.get("pokemon");
console.log("je suis ", pass);
fetch(`https://pokebuildapi.fr/api/v1/pokemon/${pass}`)
.then((res) => res.json())
    .then((data) => {
        console.log(data.name)
       
    });