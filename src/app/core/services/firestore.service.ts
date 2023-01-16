import {AngularFirestore, QueryFn} from "@angular/fire/compat/firestore";
import {Inject, Injectable} from "@angular/core";
import {Observable, tap} from "rxjs";
import {environment} from "../../../environments/environment";
import {AuthService} from "../../authentication/service/auth.service";

@Injectable({
  providedIn: 'root'
})
export abstract class FirestoreService<T> {
  protected abstract basePath: string;

  protected constructor(@Inject(AngularFirestore) protected firestore: AngularFirestore,private authService: AuthService) {
    console.log(this.authService.userData)
  }

  private get collection() {
    return this.firestore.collection(`${this.path}`);

  }
 private get path(){
    return `users/${this.authService.userData.uid}/${this.basePath}`;
 }
 /* doc$(id: string): Observable<T> {
    return this.firestore.doc<T>(`${this.basePath}/${id}`).valueChanges().pipe(tap(r => {
      if (!environment.production) {
        console.groupCollapsed(`Firestore Streaming [${this.basePath}] [doc$] ${id}`)
        console.log(r)
        console.groupEnd()
      }
    }))
  }*/

  collection$(queryFn?: QueryFn): Observable<T[]> {
    return this.firestore.collection<T>(`${this.path}`, queryFn).valueChanges().pipe(tap(r => {
      if (!environment.production) {
        console.groupCollapsed(`Firestore Streaming [${this.basePath}] [collection$]`)
        console.table(r)
        console.groupEnd()
      }
    }))
  }

  create(value: T) {
    const id = this.firestore.createId();
    return this.collection.doc(id).set(Object.assign({}, {id}, value)).then(_ => {
      if (!environment.production) {
        console.groupCollapsed(`Firestore Service [${this.basePath}] [create]`)
        console.log('[Id]', id, value)
        console.groupEnd()
      }
    })
  }
  update(value: Partial<T>, id: string) {
    return this.collection.doc(id).update(value).then(_ => {
      if (!environment.production) {
        console.groupCollapsed(`Firestore Service [${this.basePath}] [create]`)
        console.log('[Id]', value)
        console.groupEnd()
      }
    })
  }

  delete(id: string) {
    return this.collection.doc(id).delete().then(_ => {
      if (!environment.production) {
        console.groupCollapsed(`Firestore Service [${this.basePath}] [delete]`)
        console.log('[Id]', id)
        console.groupEnd()
      }
    })
      .catch((err)=> {
        console.error(err)
      })
  }
}
