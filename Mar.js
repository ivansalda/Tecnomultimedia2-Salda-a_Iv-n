class Mar {
    constructor(i) {
        this.imagen = i;
        this.magic = height * 2 / 3;
        this.posX = random(width);
        this.posY = random(this.magic, height);
        this.tam = random(0, 50);
        this.color = 125;
        this.Tormenta = false;
        this.TTormenta = 0;
    }

    mover() {
        push()
        this.tam = map(this.posY, this.magic, height, 100,160);
        //let colorposta = map (dist(this.posX, this.posY,width/2,this.magic), 0, height/2, 52, this.color);
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

        if (this.posX < width) {
            this.posX += 5;
        } else {
            this.posX -= width;
        }
        // fill(colorposta, satu, Brillo);
        // ellipse(this.posX, this.posY, this.tam);
        tint(colorposta, satu, Brillo);
        image (this.imagen,this.posX,this.posY,this.tam*3,this.tam);
        pop()

    }

    CamColor(P) {
        this.color = P;


    }
    colorTormenta() {
        this.Tormenta = true;
    }

}