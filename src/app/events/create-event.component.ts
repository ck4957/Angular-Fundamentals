import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared';


@Component({
    templateUrl: './create-event.component.html',
    styles: [`
        em { float: right; color: #E05C65; padding-left: 10px; }
        .error input { background-color: #E3C3C5; }
        .error ::-webkit-input-placeholdor: { color: #999; }
    `]
})


export class CreateEventComponent implements OnInit {
    // newEvent
    isDirty = false;
    constructor(private router: Router, private eventService: EventService) { }

    ngOnInit() {
    //     this.newEvent = {
    //         name: 'Ng Spectacular',
    //         date: '8/8/2028',
    //         time: '10am',
    //         price: 799.99,
    //         location: {
    //             address: '456 Happ St',
    //             city: 'Felicity',
    //             country: 'Angularistan'
    //         },
    //         onlineUrl: 'http://ngSpectacular.com',
    //         imageUrl: 'http://ngSpectacular.com/logo.png'
    //     };
    }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues);
        this.router.navigate(['/events']);

    }
    cancel() {
        this.router.navigate(['/events']);
    }

}

