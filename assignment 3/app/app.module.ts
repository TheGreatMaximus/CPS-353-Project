import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NavbarComponent } from './nav/navbar.component' 
import { WebsiteService } from './services/website.service'
import { WebsitesAppComponent } from './websites-app.component'
import { UserService } from './services/user.service'
import { ProfileComponent } from './components/user/profile.component'
import { LoginComponent } from './components/user/login.component'
import { RegisterComponent } from './components/user/register.component'
import { RouterModule,Routes } from '@angular/router' ;
import { appRoutes } from './routes'

@NgModule({
    imports: [BrowserModule,RouterModule.forRoot(appRoutes)],
    declarations: [WebsitesAppComponent, NavbarComponent,LoginComponent,
                    RegisterComponent,ProfileComponent],
    providers: [WebsiteService,UserService],
    bootstrap: [WebsitesAppComponent]
})

export class AppModule {
}



