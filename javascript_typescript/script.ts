let arr : any= [];

// Creating the Parent Class
class Locations {
    constructor(public city : string, public zip : number,public img : string, public address : string, public name : string, public visited :string) {
        arr.push(this);
    }
    
    display() {
        return `
        <div class=" mb-3 col col-12 col-sm-12 col-md-6 col-lg-3 d-flex align-items-stretch ">
        <div class="row g-1 container-fluid card shadow-lg bg-card-color">
        <div class="container-fluid">
        <img  style="width:100%; height:220px; object-fit: cover;" src="${this.img}" class="card-img-top d-sm-none d-md-block d-none img-fluid" alt="...">
        <div class="card-body">
        <h5 class="card-title">${this.name}</h5>
        <p class="card-text">${this.address}, ${this.zip} ${this.city}</p>
        <p class="card-text">Visited: ${this.visited}</p>
        
        `
    }
    closingDiv() {
        return `
        </div>
        </div>
        </div>
        </div>`
    }
}
//Creating child Restaurants class of Locations
class Restaurants extends Locations {
    constructor( city : string,  zip : number, img : string,  address : string,  name : string, visited : string, public tel : string, public typof : string, public web : string) {
        super(city, zip, img, address, name, visited);
    }

    display() {
        return `${super.display()} 
        <p class="card-text">Tel: ${this.tel}  </p>
        <p class="card-text"> <a class="text-white" href="${this.web}">${this.web}</a></p>
        `
    }
}
//Creating child class Events of Locations
class Events extends Locations {
    constructor( city : string,  zip : number, img : string,  address : string,  name : string, visited : string, public eventDate : string, public eventTime : string, public web : string,  public price : string) {
        super(city, zip, img, address, name, visited);
    }

    display() {
        return `${super.display()} 
        <p class="card-text">${this.eventDate} ${this.eventTime}</p>
        <p class="card-text">${this.price} </p>
     <a class="text-white" href="${this.web}">${this.web}</a> 
        
        `
    }
}

// Data update
new Locations ("Vienna", 1010, "../img/stephan.jpg", "Stephansplatz 3", "Stephansdom", "2018-03-18 10:30");
new Locations ("Vienna", 1130, "../img/schonbrunn.jpg", "Schönbrunner Schloßstraße 47", "Schloss Schönbrunn", "2020-03-18 11:23");
new Locations ("Vienna", 1060, "../img/meer.jpg", "Fritz-Grünbaum-Platz 1", "Haus des Meeres", "2021-05-18 15:55")


new Restaurants ("Vienna", 1060, "../img/peter.jpg", "Mariahilfer Str. 127", "Peter Panne", "2019-08-18 9:55", "+431595353020", "Burger", "https://www.peterpane.de/");
new Restaurants ("Vienna", 1150, "../img/riva.jpg", "Favoritenstraße 4/6", "Pizzeria RIVA Favorita", "2021-05-25 15:10", "+43 1 3534040", "Italienish", "https://riva.pizza/")
new Restaurants ("Vienna", 1150, "../img/maria.jpg", "Mariahilfer Str. 152", "Mariahilferbräu", "2015-09-18 10:55",  "+431595353020", "Österreichish", "https://mariahilferbrau.com/")

new Events ("Vienna", 1130, "../img/solomun.jpg", "Schloss Schönbrunn", "Solomun", "2018-03-18 19:55",  "15.09.2021", "16:00", "https://www.ots.at/presseaussendung/OTS_20210706_OTS0152/imperialis-schloss-schoenbrunn-wien-foto/"," € 30.09 ")

new Events ("Vienna", 1150, "../img/charlotte.jpg", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "Charlotte De Witte", "2019-05-18 16:37",  "15.09.2021", "23:00", "https://en.wikipedia.org/wiki/Charlotte_de_Witte"," € 35.99 ")

new Events ("Vienna", 1150, "../img/tale.jpg", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "Tale Of Us", "2018-03-18 14:25" , "18.10.2021 14:25", "02:00", "https://en.wikipedia.org/wiki/Tale_of_Us_(DJs)"," € 25.99 ")
// Data update ENDS

//looping the outpot to html
var text = "";


for (let val of arr) {
    text += val.display() + val.closingDiv();
}

document.getElementById("location").innerHTML = text;

//looping the outpot to html

document.getElementById("sort-descending").addEventListener("click", sortDes)
document.getElementById("sort-ascending").addEventListener("click", sortAs)


//Function Sort Descending
function sortDes(){
    arr.sort(function(a, b) {
        var dateA :any = new Date(a.visited), dateB : any = new Date(b.visited);
        return dateB - dateA;
    });
    console.log(arr);
    var text = "";
    for (let val of arr) {
        text += val.display() + val.closingDiv();
    }
    document.getElementById("location").innerHTML = text;
}
//Function Sort Ascending
function sortAs(){
    arr.sort(function(a, b) {
        var dateA : any = new Date(a.visited), dateB : any = new Date(b.visited);
        return dateA - dateB;
    });
    console.log(arr);
    var text = "";
    for (let val of arr) {
        text += val.display() + val.closingDiv();
    }
    document.getElementById("location").innerHTML = text;
}

 
