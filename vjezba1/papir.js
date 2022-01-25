class Papir {
    constructor(x, y) {
        this.x = x; //visina
        this.y = y; //sirina
        this.circles = []; //niz krugova
    }

    dodajKrug(krug) {
        if (krug.x > this.x || krug.y > this.y) {
            console.log(`Krug sa centrom ${krug.x}, ${krug.y} 
            i prečnikom ${krug.precnik} ne može stati na papir`);
        return 1; 
        } else this.circles.push(krug);
    }
  
    ispisiKrugove() {
        this.circles.forEach((krug) => {
            console.log(`Krug (${krug.x}, 
                               ${krug.y},
                               ${krug.precnik}
                ) sa površinom ${krug.povrsina}`);
        });
    }
}
  