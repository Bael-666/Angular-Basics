import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //stemplate: '<p>Hello World!!</p>',
  styleUrls: ['./app.component.css']
  //styles:['']
})
export class AppComponent {
  name = "jeovani villatoro";
  imgURL = 'https://i.pinimg.com/originals/33/c1/b4/33c1b427affb3f1fe0d8fd1d1e050be3.jpg'
  images = [
    'https://i.pinimg.com/originals/33/c1/b4/33c1b427affb3f1fe0d8fd1d1e050be3.jpg',
    'https://i.pinimg.com/originals/33/c1/b4/33c1b427affb3f1fe0d8fd1d1e050be3.jpg',
    'https://i.pinimg.com/originals/33/c1/b4/33c1b427affb3f1fe0d8fd1d1e050be3.jpg'
  ]
  currentDate = new Date()
  cost = 5000
  temperature = 25.8
  pizza = { 
    toppings: ['pepperoni', 'cum'],
    size: ['small', 'large']
  }

  blueClass = false
  fontSize = 40

  getName(){
    return this.name;
  }
  
  changeImage(e: KeyboardEvent){
    //Type assertion
    this.imgURL = (e.target as HTMLInputElement).value
  }

  logImg(event: string){
    console.log(event)
  }
}
