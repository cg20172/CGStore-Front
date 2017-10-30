export class Product {
    
    constructor(
        public pid:number,
        public name:string,
        public description:string,
        public price:number,
        public stock:number
    ){      }
    
    public getName(){
        return this.name;
    }


}
