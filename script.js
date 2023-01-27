"use strict";

class User{
   constructor(name,age){
      this.name = name;
      this._age = age;
   }

   #surname = 'Dolganov';

      say = () => {
         console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._age}`);
      }

      get age() {
         return this._age;
      }

      set age(age) {
         this._age = age;
      }

      get surname() {
         return this.#surname;
      }

      set surname(surname) {
         this.#surname = surname;
      }
}

const ivan = new User('Vlad',22);
console.log(ivan.age);
ivan.surname = 'shvedov';
ivan.say();