import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /**
 * Variables
 */
    const signupButton = document.getElementById('signup-button'),
      loginButton = document.getElementById('login-button'),
      userForms = document.getElementById('user_options-forms')

    /**
    * Add event listener to the "Sign Up" button
    */
    signupButton.addEventListener('click', () => {
      userForms.classList.remove('bounceRight')
      userForms.classList.add('bounceLeft')
    }, false)

    /**
    * Add event listener to the "Login" button
    */
    loginButton.addEventListener('click', () => {
      userForms.classList.remove('bounceLeft')
      userForms.classList.add('bounceRight')
    }, false)
  }

}
