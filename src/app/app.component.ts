import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   imgParent = '';


   onloaded(img: string){
    console.log('log del padre', img);
   }
}

/*
widthImg =10;
  name = 'gabriel';
  age = 23;
  img = 'https://t4.ftcdn.net/jpg/02/37/82/41/360_F_237824130_KdcSnHrro2yVVp9UYIt0aVOxr7uEz0rA.jpg';

  btnDisabled = true;
  register={
    name: '',
    email:'',
    password:'',
  }

  person = {
    name: 'Gabriel',
    age : 23,
    avatar:'https://t4.ftcdn.net/jpg/02/37/82/41/360_F_237824130_KdcSnHrro2yVVp9UYIt0aVOxr7uEz0rA.jpg'

  }
 names: string[] = ['gabriel', 'jorge', 'alerjandro','naruto'];
 newName = '';
 box = {
  width:100,
  background:'red',
  height:100

 };

 products: Product[] = [
  {
    name: 'juguete',
    price: 12,
    image: './assets/img/img2.jpg'
  },
  {
    name: 'avion',
    price: 23,
    image: './assets/img/img1.jpg'
  },
  {
    name: 'tractor',
    price: 235,
    image: './assets/img/img2.jpg'
  },
  {
    name: 'fedelobo',
    price: 235,
    image: './assets/img/img1.jpg'
  },
  {
    name: 'viaja y prueba',
    price: 235,
    image: './assets/img/img2.jpg'
  },
  {
    name: 'lofkeos',
    price: 235,
    image: './assets/img/img1.jpg'
  }
 ]
  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.person.age ;
  }

onScroll(event : Event){
  const element = event.target as HTMLElement
  console.log(element.scrollTop);
}
changeName(event: Event){
  const element = event.target as HTMLInputElement;
  this.person.name = element.value;
}
addName(){
  this.names.push(this.newName);
  this.newName = '';
}
deleteName(index : number){
  this.names.splice(index, 1);
}
onRegister(){
  console.log(this.register);
}
*/
