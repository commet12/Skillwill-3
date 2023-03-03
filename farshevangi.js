// მეორე

const user = {
    Banks: {

    }
        
    
}

const {Banks: {address: {city} = {}}} = user;

console.log(city)


// პირველი
const gorilla = [];

const jami = (num1, num2, ...restOne) => {
    

    gorilla[0] =  num1 + num2;
    gorilla[1] = 1;

    for (const sayMyName of restOne) {
        gorilla[1] *= sayMyName;
    }

    console.log(`[${gorilla[0]}, ${gorilla[1]}]`)
    

}

console.log(jami(2,4,3,1,3))


// მესამე

const mutanti = {
    name: "optimus",
    username: "mashina",
    address: {
        qalaqi: 'Tbilisi'
    }
}

const user = (Seqcia) => {
    seqcia = {
        ...mutanti,
        address: {
            ...mutanti.address
        }
    }

    return seqcia;
}

console.log(user(mutanti))
