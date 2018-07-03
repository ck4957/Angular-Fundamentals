import {
    EventDetailsComponent,
    EventListResolver,
    EventRouterActivator,
    CreateEventComponent,
    EventsListComponent,
    CreateSessionComponent
  } from './app/events/index';
import { Routes } from '@angular/router';
import { Error404Component } from './app/errors/404.component';
import { UserModule } from './app/user/user.module';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver} },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouterActivator] },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: './app/user/user.module#UserModule' }
    //{ path: 'user', loadChildren: () => UserModule }
];
