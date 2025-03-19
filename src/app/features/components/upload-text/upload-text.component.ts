import { Component, Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-upload-text',
  imports: [FormsModule],
  templateUrl: './upload-text.component.html',
  styleUrl: './upload-text.component.css'
})
export class UploadTextComponent {
  
  isDrawerOpen = false;

  paragraphs: { text: string }[] = [];


}
