export class Serie{
    public id: number; 
    public name:string;
    public cadena:string;
    public temporadas:number;
    public summary:string;
    public link: string;
    public image: string;
    constructor(id: number,name:string,cadena:string,temporadas:number,summary:string,link: string,image: string){
        this.id = id;
        this.name = name; 
        this.cadena = cadena
        this.temporadas = temporadas;
        this.summary = summary;
        this.link = link;
        this.image = image
    }
}