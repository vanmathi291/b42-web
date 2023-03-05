url=
"https://www.anapioficeandfire.com/api/books"

async function api(){
v=fetch(url);
out1=await v;
prom=out1.json();
out2=await prom;
console.log(out2);  

const uiData=out2.map((data)=>{
    const ui=`
    <div class="main">
    <h3>NAME:${data.name}</h3>
    <br>
    <h3>ISBN:${data.isbn}</h3>
    <br>
    <h3>NUMBER OF PAGES:${data.numberOfPages
    }</h3>
    <br>
    <h3>AUTHOR OF THE BOOK:${data.authors}</h3>
    <br>
    <h3>PUBLISHER NAME:${data.publisher}</h3>
    <br>
    <h3>RELEASED DATA:${data.released}</h3>
    <br>
    console.log(data[0].characters.splice(0,5))
    </div>
    `;
    return ui
});
console.log(uiData);
document.getElementById('apiData').innerHTML=uiData
}
api()