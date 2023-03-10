class Flower {
    static count = 0
    constructor(name,qanak) {
        this.name = name
        this.qanak = qanak
        Flower.count += this.qanak

    }
}

class Vard extends Flower {
};

class Mexak extends Flower {
};

class Kakach extends Flower {
};

class Hasmik extends Flower {
};

let Punj1=[new Vard("Vard",5),new Mexak("Mexak",11),new Kakach("Kakach",3),new Hasmik("Hasmik",5)]
let Punj2=[new Vard("Vard",7),new Mexak("Mexak",4),new Kakach("Kakach",2),new Hasmik("Hasmik",10)]
let Punj3=[new Vard("Vard",1),new Mexak("Mexak",3),new Kakach("Kakach",22),new Hasmik("Hasmik",8)]

console.log(Flower.count);