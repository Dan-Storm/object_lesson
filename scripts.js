const cupcake = {
    color: ['pink','white','brown','yellow'],
    flavor: 'chocolate',
    size: 'mini',
    calories: 0,
    icing: true,
    eatCupcake: () =>{
        console.log('yum');
    }
}

console.log(cupcake.color);

for (let i = 0; i < cupcake.color.length; i++) {
    console.log("cupcake colors", cupcake.color[i]);
}

cupcake.color.forEach(color => {
    console.log ("what color", color);
})

const car = {
    color : 'red',
    year: 2015,
    make: 'Ford',
    model: 'Mustang'
}

console.log(car.color);


const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

console.log(`${beatles.members[1].name} was in the beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[3]} Album`);