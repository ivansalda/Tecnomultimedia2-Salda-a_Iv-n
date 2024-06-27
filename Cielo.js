class Cielo {
    constructor(i) {
        this.imagen = i;
        this.magic = height *2/3 ;
        this.posY = random(this.magic);
        this.posX = random(width);
        this.tam = random(0, 50);
        this.color = 125;
        this.Tormenta = false;
        this.TTormenta = 0;
        this.rotar= random (0, 360);
    }


    mover() {
        push()
        this.tam = map(dist(this.posX, this.posY, width / 2, this.magic), 0, width/2, 10, 80); //map para que decresca el circle
        //let colorposta = map(dist(this.posX, this.posY, width / 2, this.magic), 0, height / 2, 52, this.color);
        let Brillo;
        let satu;
        let colorposta;
        if (this.Tormenta == false) {
            colorposta = this.color;
            Brillo = map(dist(this.posX, this.posY, width / 2, this.magic), 0, height, 100, 60);
            satu = map(dist(this.posX, this.posY, width / 2, this.magic), 0, height / 3, 0, 100);
        } else {
            colorposta = 360;
            Brillo = 60;
            satu = 70;
            this.TTormenta++;
            if (this.TTormenta > frameRate()) {
                this.Tormenta = false;
                this.TTormenta = 0;
            }
        }
        // fill(colorposta, satu, Brillo);

        // ellipse(this.posX, this.posY, this.tam);
        translate (this.posX,this.posY);
        rotate(this.rotar);
        tint(colorposta, satu, Brillo);
        image (this.imagen,0,0,this.tam*2,this.tam);
    

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

    colorTormenta() {
        this.Tormenta = true;
    }

}
