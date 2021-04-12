export class Animal {
  nome: string;
  dono: string;
  especie: string;
  imagemDoAnimal: string;
  dataConsulta: Date | undefined | string;

  constructor(name: string, owner: string, species: string, animalImage: string){
    this.dataConsulta = "undefined";
    this.nome = name;
    this.dono = owner;
    this.especie = species;
    this.imagemDoAnimal = animalImage;
  }

}
