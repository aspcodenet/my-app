npm install -g @angular/cli
ng new my-app


copy https://github.com/aspcodenet/reacteventsochstate1/blob/main/catshop/src/index.css -> styles.css

index.html  ``` <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>```


I app.component.html - rensa och
```
<header class="siteheader">
  <div class="logo">
      <i class='bx bxs-cat logoicon'></i>
      Cat<span class="logopart2">Lovers</span>                
  </div>  
  <nav>
    <ul class="navmenu">
      <li><a class="headeranchor" href="#products">Products</a></li>
      <li><a class="headeranchor" href="#about">About</a></li>
      <li><a class="headeranchor" href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
<router-outlet />
<footer>(C) Whatever</footer>
```



npm run start

	
CREATE HEADER COMPONENT
ng generate component header
@Component({
  selector: 'app-header',  <------ detta blir taggen I app.component.html

Kom ihåg IMPORT I app.-component.ts
```
imports: [RouterOutlet,HeaderComponent, FooterComponent],
```

ng generate component footer
ng generate component home

Lägg till route för home


ng generate component products
 
```
        <li><a routerLink="products" class="headeranchor" routerLinkActive="active" >Products</a></li>
```
 

OBS I header 
```
Imports: [RouterLink, RouterLinkActive],
```







# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
