import { Component } from '@angular/core';
import { faPaperclip,faClipboardCheck,faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  adj:string;
  
  nuevaTarea = faPlus;
}
