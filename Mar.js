class Mar {
    constructor(i) {
        this.imagen = i;
        this.magic = height * 2 / 3;
        this.posX = random(width);
        this.posY = random(this.magic, height);
        this.tam = random(0, 50);
        this.color = 125;

    }

    mover() {
        push()
        this.tam = map(this.posY, this.magic, height, 20,80);
        //let colorposta = map (dist(this.posX, this.posY,width/2,this.magic), 0, height/2, 52, this.color);
        fill(this.color, 100, 100);
        ellipse(this.posX, this.posY, this.tam);

        if (this.posX < width) {
            this.posX += 5;
        } else {
            this.posX -= width;
        }
        pop()

    }

    CamColor(P) {
        this.color = P;


    }

}