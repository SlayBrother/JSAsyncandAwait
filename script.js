let favNumber = 5;
let baseURL = "http://numbersapi.com";

async function part1(){
    let data = await $.getJSON(`${baseURL}/${favNumber}?json`);
    console.log
}
part1();

const favNumbers = [2,5,8,5]
async function part2(){
    let data = await $.getJSON(`${baseURL}/${favNumbers}?json`)
    console.log(data)
}
part2()

async function part3() {
    let facts = await new Promise.all(
        Array.from({ length:4}, () => $.getJSON(`${baseURL}/${favNumber}?json`))
    );
    facts.forEach(data => {
        $('body').append(`<p>${data.text}</p>`)
    })
}
part3()
