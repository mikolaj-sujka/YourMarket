import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';

// components
import { MyProfileViewComponent } from '../my-profile-view/my-profile-view.component';

@Injectable({
  providedIn: 'root'
})
export class PreventUnsavedChangesGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: MyProfileViewComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean {
      if(component.editForm?.dirty) {
        return confirm('Any unsaved changes will be lost! Are you sure you want to continue?');
      }
    return true;
  }
  
}
