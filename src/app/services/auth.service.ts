import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
//firebase
import { AngularFireAuth } from '@angular/fire/auth';
//rjxoperators
import { map } from 'rxjs/operators';

//model
import { User } from '../models/user.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private userAuthFirebase: AngularFireAuth,
    private userFirebaseStore: AngularFirestore,
    private routering: Router
  ) {}

  userIsAuth() {
    this.userAuthFirebase.authState.subscribe((user) => {
      console.log(user.uid);
    });
  }

  createUser(name: string, email: string, password: string) {
    console.log({ name, email, password });

    return this.userAuthFirebase
      .createUserWithEmailAndPassword(email, password)
      .then((userData) => {
        const newUser: User = new User(name, email, userData.user.uid);
        return this.userFirebaseStore
          .doc(`${userData.user.uid}/user`)
          .set({...newUser});
      });
      //Vease que despues de acceder y pasar los datos necesrios en la creacion (password y demas)
      //para poder adicionar a la collecion de users en firebase se haria necesario acceder mediante metodo
      //de firebase AngularFirestore a la creacion de una colleccion que inserte data , para ello
      //vease que en ;la promesa(then) se crearia una constante llamada newUser la cual se le asignaria
      //un nuevo instance del modelo User que en su constructor trae ciertos parametros que se pudiesen
      //sacar  de la accion de crear traida en la promesa , luego entonces se retornaria el metodo 
      //o servicio de firestore que crea colecciones(this.userFirebaseStore), seguido del nombre del 
      //documento a crear en este caso un compuesto de
  }

  loginUser(email: string, password: string) {
    console.log({ email, password });

    return this.userAuthFirebase.signInWithEmailAndPassword(email, password);
  }

  logOutUser() {
    return this.userAuthFirebase.signOut();
  }

  guardAuth() {
    return this.userAuthFirebase.authState.pipe(
      map((firebaseUser) => {
        if (firebaseUser) {
          return true;
        } else {
          return false;
        }
      })
    );
  }
}
