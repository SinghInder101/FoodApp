import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ShoppingListService } from './shopping-list.service';
import { RecipeService } from './recipe.service';
import { AuthInterceptorService } from '../auth/auth-interceptor.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from '../auth/auth.component';

@NgModule({
  providers: [
    
    ShoppingListService,
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  imports:[CommonModule,FormsModule,ReactiveFormsModule]
  
})
export class CoreModule {}
