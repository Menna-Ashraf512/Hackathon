import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'main',
        loadComponent:()=>import("./core/layout/main-layout/main-layout.component").then(e=>e.MainLayoutComponent),children:[
            {path:'home',loadComponent:()=>import("./core/pages/main/home/home/home.component").then(e=>e.HomeComponent)},
        ]
    },
    {path:'',
        loadComponent:()=>import("./core/layout/auth-layout/auth-layout.component").then(e=>e.AuthLayoutComponent),children:[
            {path:'',redirectTo:'signUp',pathMatch:'full'},
            {path:'signIn',loadComponent:()=>import("./core/auth/components/sign-in/sign-in.component").then(e=>e.SignInComponent)},
            {path:'signUp',loadComponent:()=>import("./core/auth/components/sign-up/sign-up.component").then(e=>e.SignUpComponent)},
        ]
    },

    {path:'**',loadComponent:()=>import("./core/pages/main/not-found/not-found.component").then(e=>e.NotFoundComponent)}
];
