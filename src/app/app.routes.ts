import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {'path': 'home', 'title': 'Home', component:HomeComponent},
    {'path': 'about', 'title': 'About', component:AboutComponent},
    {'path': 'experience', 'title': 'Experience', component:ExperienceComponent},
    {'path': 'projects', 'title': 'Projects', component:ProjectsComponent},
    {'path': 'contact', 'title': 'Contact', component:ContactComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
];
