const username = 'gabriel';
const sum = (a: number, b:number)=> {
  return (a+b);
}
sum(1,2);

class Person{
  age: number;
  lastName: string;

  constructor(age:number , lastName:string){
    this.age = age;
    this.lastName = lastName;
  }
}

const gabriel = new Person(23,'choque');
gabriel.age;
