console.log('App is connected');

// Protagonist of our application
const barbie = {
    name: 'Barbie',
    wardrobe: [],
    transaction: [],
    portfolio: [],
    garage: [],
    wallet: 0
}

class Career {
    constructor(name, description, income, id){
        this.name = name;
        this.description = description;
        this.income = income;
        this.id = id;
    }
}

const careerDescriptions = [
    {
        name: 'lawyer',
        description: 'works as an attorney of a high end law firm'
    },
    {
        name: 'software-engineer',
        description: 'solves software related problems and build application architecture.'
    },
    {
        name: 'doctor',
        description: 'helps people with their boo boos'
    },
    {
        name: 'influencer',
        description: 'talk about stuff on social media and people say wow and i get paid'
    },
    {
        name: 'stripper',
        description: 'well paid entertainment'
    },
    {
        name: 'UX-Designer',
        description: 'Software developers best friend or enemy'
    }
]
const careerIncomes = [
 8501,
 18501,
 2850,
 3850,
 4850,
 5850,
 6850,
 500
];
const careers = [];


const randomization = (limit) => {
 return Math.floor(Math.random() * limit)
}


for (let i = 10 ; i > 0; i--){
 const job = careerDescriptions[randomization(careerDescriptions.length)]
 const income = careerIncomes[randomization(careerIncomes.length)];
 careers.push(new Career(job.name, job.description, income, `${job.name}-${income}` ))
}


barbie.career = careers[randomization(careers.length)]

class Clothing {
    constructor(name, designer, color, type, size, price){
        this.name = name;
        this.designer = designer;
        this.color = color;
        this.type = type;
        this.size = size;
        this.price = price;
    }
}

class RealEstate {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Vehicle {
    constructor(year, make, model, cost){
        this.year = year;
        this.make = make;
        this.model = model;
        this.cost = cost;
    }
}

const birkin = new Clothing('Birkin Bag', 'Hermes', 'purple', 'bag', 'lg', 15470 )
const chanel = new Clothing('Chanel bag', 'Chanel', 'black', 'bag', 'med', 35000 )
const redBottoms = new Clothing('Red Bottoms', 'Christian Loboutin', 'black', 'shoes', '6', 3000)
const house = new RealEstate('Malibu Condo', 50000)
const tesla = new Vehicle(2024, 'Tesla', 'Model S', 50000)


// Game Screen

barbie.el = document.getElementById('barbie');
barbie.el2 = document.getElementById('barbie2')


barbie.render = () => {
    barbie.el.innerHTML = `
    <h1>${barbie.name} Status</h1>
    <h3>${barbie.name} works as a ${barbie.career.name} </h3>
    <h3> Each week ${barbie.name} takes home $${barbie.career.income}</h3>
    <h3> Currently ${barbie.name} has $${barbie.wallet} in their bank account</h3>
    <div> <h2>Wardrobe Contains: </h2> 
    <ul>${
        barbie.wardrobe.map((item => {
            return `<li>
            ${barbie.name} has a ${item.color} 
            ${item.name} made by ${item.designer}
            that is worth ${item.price} in size 
            ${item.size} 
            </li>`
        })).join('')
    }</ul>
    </div>
    <div>
    <h2>Real Estate portfolio contains:</h2>
    <ul>${
        barbie.portfolio.map((item => {
            return `<li>
            ${barbie.name} has a ${item.name} worth $${item.cost}.
            </li>`
        })).join('')
    }
    </ul>
    </div>
    <div>
    <h2>Garage contains:</h2>
    <ul>${
        barbie.garage.map((car => {
            return `<li>
            ${barbie.name} has a ${car.year} ${car.make} ${car.model} worth $${car.cost}.
            </li>`
        })).join('')
    }
    </ul>
    </div>
`;
}

barbie.render();




const birkinButton = document.getElementById('birkin');

birkinButton.addEventListener('click', ()=>{
    if(barbie.wallet >= birkin.price){
        barbie.wardrobe.push(birkin);
        barbie.wallet -= birkin.price;
        barbie.render();
        // WE updated the wardrobe that belongs to barbie so the object was changed
    // the object control the information that is visible to us on the screen
    // I want to re-render the content so that i can see the updated information in the browser
    } else {
        alert('Stop trippin you know you aint got it like that');
    }

})

const workButton = document.getElementById('work');

workButton.addEventListener('click', ()=>{
    barbie.wallet += barbie.career.income; // WE updated the wllet that belongs to barbie so the object was changed
    // the object control the information that is visible to us on the screen
    // I want to re-render the content so that i can see the updated information in the browser
    
    if(barbie.portfolio.length > 0){
        barbie.wallet += barbie.portfolio.length * 500
    }

    if(barbie.garage.length > 0){
        barbie.wallet -= barbie.garage.length * 150
    }
    barbie.render();
})

const redBottomButton = document.getElementById('red-bottoms');

redBottomButton.addEventListener('click' , () => {
    if(barbie.wallet >= redBottoms.price){
        barbie.wardrobe.push(redBottoms);
        barbie.wallet -= redBottoms.price;
        barbie.render();
        // WE updated the wardrobe that belongs to barbie so the object was changed
    // the object control the information that is visible to us on the screen
    // I want to re-render the content so that i can see the updated information in the browser
    } else {
        alert('Stop trippin you know you aint got it like that');
    }

})

const chanelButton = document.getElementById('chanel');

chanelButton.addEventListener('click' , () => {
    if(barbie.wallet >= chanel.price){
        barbie.wardrobe.push(chanel);
        barbie.wallet -= chanel.price;
        barbie.render();
        // WE updated the wardrobe that belongs to barbie so the object was changed
    // the object control the information that is visible to us on the screen
    // I want to re-render the content so that i can see the updated information in the browser
    } else {
        alert('Stop trippin you know you aint got it like that');
    }
})

const houseButton = document.getElementById('house');

houseButton.addEventListener('click', () => {
    if(barbie.wallet >= house.cost){
        barbie.portfolio.push(house);
        barbie.wallet -= house.cost;
        barbie.render();
        // WE updated the wardrobe that belongs to barbie so the object was changed
    // the object control the information that is visible to us on the screen
    // I want to re-render the content so that i can see the updated information in the browser
    } else {
        alert('Stop trippin you know you aint got it like that');
    }
})

const teslaButton = document.getElementById('buyTesla');

teslaButton.addEventListener('click', () => {
    if(barbie.wallet >= tesla.cost){
        barbie.garage.push(tesla);
        barbie.wallet -= tesla.cost;
        barbie.render();
        // WE updated the wardrobe that belongs to barbie so the object was changed
    // the object control the information that is visible to us on the screen
    // I want to re-render the content so that i can see the updated information in the browser
    } else {
        alert('Stop trippin you know you aint got it like that');
    }
})

const sellButton = document.getElementById('sell');

sellButton.addEventListener('click', () => {
    if(barbie.wardrobe.length === 0) {
        alert("you don't have anything to sell.")
    } else {
        let soldPrice = Math.floor((.7 + Math.random() * 1.3) * barbie.wardrobe[0].price);
        barbie.wallet += soldPrice
        barbie.render2 = () => {
            barbie.el2.innerHTML = `
            <h1>Transaction History: </h1>
            <h2>${barbie.name} has sold ${barbie.wardrobe[0].name} for $${soldPrice}</h2>`
        }
        barbie.render2();
        barbie.wardrobe.shift();
        barbie.render();
    }
})

