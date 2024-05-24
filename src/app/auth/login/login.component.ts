import { Component, OnInit } from '@angular/core';
import { log } from 'node:console';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    console.log('object');
  }
}
