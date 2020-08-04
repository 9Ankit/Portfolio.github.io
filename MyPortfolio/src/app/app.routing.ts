import { Routes } from '@angular/router';
import { StructureComponent } from './layout/Dashboard Structure/structure.component';
import { AuthStructureComponent } from './shared/Component/Authentication Structure/auth-structure.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';

export const AppRoutes: Routes = [
  // {
  //   path: '**',
  //   redirectTo: '404',
  // },

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
