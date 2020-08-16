import { Routes } from '@angular/router';
import { StructureComponent } from './layout/Dashboard Structure/structure.component';
import { AuthStructureComponent } from './layout/Auth Structure/auth-structure.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: StructureComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./feature/My-Descriptions/description-layout.module').then(
            (m) => m.DescriptionLayoutModule
          ),
      },
    ],
  },
  {
    path: '',
    component: AuthStructureComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./feature/Authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
];
