import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { EventService, ISession } from '../events';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
    .nav.navbar-nav {font-size: 15px; }
    #searchForm {margin-right: 100px;}
    @media (max-widhth: 1200px) {#searchForm {dispaly:none}}
    li > a.active { color: #F97924 }
    `]
})

export class NavBarComponent {
    searchTerm: string = "";
    foundSessions: ISession[];
    constructor(private auth: AuthService,
    private eventService: EventService) {}

    
    searchSessions(searchTerm) {
        this.eventService.searchSessions(searchTerm).subscribe
        (
            sessions => {
                this.foundSessions = sessions;
                console.log(this.foundSessions);
            }
        )
    }
}
