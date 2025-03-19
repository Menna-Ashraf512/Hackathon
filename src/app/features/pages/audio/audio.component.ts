import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-audio',
  imports: [FormsModule],
  templateUrl: './audio.component.html',
  styleUrl: './audio.component.css',
})
export class AudioComponent {
  badges: { text: string }[] = [];
  paragraphs: { text: string }[] = [];
  isPopupOpen = false;
  editorText: string = '';
  isDrawerOpen = false;
  isAudio = false;
  isModalDrag = false;
  selectedParagraph: string | null = null;
  constructor(private http: HttpClient) {}

  togglePump() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  dragAndDrop(){
    this.isModalDrag = !this.isModalDrag;
  }
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
    console.log('Emitting paragraphs:', this.paragraphs);
    // Clear the textarea
    this.editorText = '';
    this.isDrawerOpen = false;
  }

  onTextSelect() {
    const selectedText = window.getSelection()?.toString().trim();
    if (selectedText && !this.badges.some((b) => b.text === selectedText)) {
      const badge = { text: selectedText };
      this.badges.push(badge);
      setTimeout(
        () => (this.badges = this.badges.filter((b) => b !== badge)),
        10000
      );
    }
  }
  // Handle badge click to "send" the selected text
  sendBadgeText(badgeText: string) {
    console.log(`Sending selected text: ${badgeText}`);
    // Add your logic here to send the text (e.g., to an API or elsewhere)
  }

  logParagraph(paragraph: string): void {
    console.log(paragraph);
    this.selectedParagraph = paragraph;
    this.isAudio = !this.isAudio;
  }

  readText(text: string) {
    if (text) {
      const speech: SpeechSynthesisUtterance = new SpeechSynthesisUtterance(
        text
      );
      speech.lang = 'ar-EG';
      speech.volume = 1;
      speech.rate = 1;
      speech.pitch = 1;
      window.speechSynthesis.speak(speech);
    } else {
      console.log('لا يوجد نص للقراءة!');
    }
  }
  stopReading() {
    window.speechSynthesis.cancel();
  }
}
