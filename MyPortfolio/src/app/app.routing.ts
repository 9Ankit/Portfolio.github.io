import { Routes } from '@angular/router';
import { StructureComponent } from './layout/structure.component';

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
];
