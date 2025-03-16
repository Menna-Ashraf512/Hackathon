import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-audio',
  imports: [FormsModule],
  templateUrl: './audio.component.html',
  styleUrl: './audio.component.css'
})
export class AudioComponent {
  editorText: string = ''; // Textarea input
  paragraphs: { text: string }[] = []; // Array to store paragraphs
  badges: { text: string }[] = []; //
  onPublish(event: Event): void {
    event.preventDefault();

    if (!this.editorText.trim()) return;

    // Split text into words
    const words = this.editorText.trim().split(/\s+/);

    // Create paragraphs of 50 words each
    this.paragraphs = [];
    for (let i = 0; i < words.length; i += 100) {
      this.paragraphs.push({ text: words.slice(i, i + 100).join(' ') });
    }

    // Clear the textarea
    this.editorText = '';
  }


  onTextSelect() {
    const selection = window.getSelection();
    const selectedText = selection?.toString().trim();
  
    if (
      selectedText &&
      !this.badges.some((badge) => badge.text === selectedText)
    ) {
      const newBadge = { text: selectedText };
  
      this.badges.push(newBadge);
  
      setTimeout(() => {
        this.badges = this.badges.filter(badge => badge !== newBadge);
      }, 3000);
    }
  }
  // Handle badge click to "send" the selected text
  sendBadgeText(badgeText: string) {
    console.log(`Sending selected text: ${badgeText}`);
    // Add your logic here to send the text (e.g., to an API or elsewhere)
  }
  logParagraph(paragraph: string): void {
    console.log(paragraph);
  }
}


