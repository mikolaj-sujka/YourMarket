import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SignInComponent } from '../sign-in/sign-in.component';

@Injectable({
  providedIn: 'root'
})
export class PreventUnsavedChangesGuard implements CanDeactivate<unknown> {
//   canDeactivate(
//     currentRoute: ActivatedRouteSnapshot,
//     currentState: RouterStateSnapshot,
//     nextState?: RouterStateSnapshot): boolean {
//       if(component.editForm.dirty) {
//         return confirm('Any unsaved changes will be lost! Are you sure you want to continue?');
//       }
//     return true;
//   }
  
}
