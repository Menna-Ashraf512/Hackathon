import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',
        loadComponent:()=>import("./core/layout/auth-layout/auth-layout.component").then(e=>e.AuthLayoutComponent),children:[
            {path:'',redirectTo:'signIn',pathMatch:'full'},
            {path:'signIn',loadComponent:()=>import("./core/auth/components/sign-in/sign-in.component").then(e=>e.SignInComponent)},
            {path:'signUp',loadComponent:()=>import("./core/auth/components/sign-up/sign-up.component").then(e=>e.SignUpComponent)},
        ]
    },
    {path:'**',loadComponent:()=>import("./core/pages/main/not-found/not-found.component").then(e=>e.NotFoundComponent)}
];
