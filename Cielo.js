class Cielo {
    constructor(i) {
        this.imagen = i;
        this.magic = height * 2 / 3;
        this.posY = random(this.magic);
        this.posX = random(width);
        this.tam = random(0, 50);
        this.color = 125;
    

    }


    mover() {
        push()
        this.tam = map(dist(this.posX, this.posY, width / 2, this.magic), 0, height / 2, 0, 50); //map para que decresca el circle
        //let colorposta = map(dist(this.posX, this.posY, width / 2, this.magic), 0, height / 2, 52, this.color);
        let Brillo= map(dist(this.posX, this.posY, width / 2, this.magic), 0, height , 100, 60);
        let satu = map(dist(this.posX, this.posY, width / 2, this.magic), 0, height / 3, 0, 100);
        fill(this.color,satu,Brillo);
         
        ellipse(this.posX, this.posY, this.tam);

        if (this.posY < this.magic) {
            this.posY += 5;
        } else {
            this.posY -= this.magic + this.tam;
        }
        pop()

    }

    CamColor(P) {
        this.color = P;

    }



}
