class Carro {
  private _marca: string;
  private _modelo: string;
  private static contador: number = 0;

  constructor(_marca: string, _modelo: string) {
    this._marca = _marca;
    this._modelo = _modelo;
    Carro.contador++;
  }

  static getContador(): number {
    return Carro.contador;
  }

 
}


const a= new Carro("Fiat", "Uno");
const b= new Carro("Ford", "GT");
const c= new Carro("GM", "Camaro");


console.log(Carro.getContador());
