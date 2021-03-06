import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { style } from '@angular/core/src/animation/dsl';

@Component({
    templateUrl: './login.component.html',
    styles: [`
        em { float: right; color: #E05C65; padding-left: 10px; }
    `]
})

export class LoginComponent {
    username;
    password;
    mouseoverLogin;
    constructor(private authService: AuthService, private router: Router) { }
    login(formValues) {
        this.authService.loginUser(formValues.username, formValues.password);
        console.log(formValues);
        this.router.navigate(['events']);
    }
    cancel() {
        this.router.navigate(['events']);
    }

}
