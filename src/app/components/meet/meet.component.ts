import { Router } from '@angular/router';
import { AfterViewInit, Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-meet',
  standalone: true,
  imports: [],
  templateUrl: './meet.component.html',
  styleUrl: './meet.component.scss'
})
export class MeetComponent implements AfterViewInit, OnInit{


  private router : Router = inject(Router)

  ngOnInit() {
    this.initializeMedia();
  }

  ngAfterViewInit(): void {

    const localVideo = document.getElementById('localVideo') as HTMLElement;
    const remoteVideo = document.getElementById('remoteVideo') as HTMLElement;

    localVideo && this.makeDraggable(localVideo);

    localVideo.addEventListener('click', () => {
      this.swapVideos(localVideo, remoteVideo);
    });

    remoteVideo.addEventListener('click', () => {
      this.swapVideos(localVideo, remoteVideo);
    });
  }

  async initializeMedia() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      const localVideo = document.getElementById('localVideo') as HTMLVideoElement;
      localVideo.srcObject = stream;
    } catch (error) {
      console.error('Error accessing media devices.', error);
    }
  }

  makeDraggable(element: HTMLElement) {
    let isDragging = false;
    let x = 0, y = 0;

    element.addEventListener('mousedown', (event) => {
      isDragging = true;
      x = event.clientX - element.offsetLeft;
      y = event.clientY - element.offsetTop;
      element.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (event) => {
      if (isDragging) {
        // Calculate the new position
        let newX = event.clientX - x;
        let newY = event.clientY - y;

        // Get the container dimensions
        const container = element.parentElement as HTMLElement;
        const containerRect = container.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();

        // Ensure the new position is within the bounds of the container
        if (newX < 0) newX = 0;
        if (newY < 0) newY = 0;
        if (newX + elementRect.width > containerRect.width) {
          newX = containerRect.width - elementRect.width;
        }
        if (newY + elementRect.height > containerRect.height) {
          newY = containerRect.height - elementRect.height;
        }

        // Set the new position
        element.style.left = `${newX}px`;
        element.style.top = `${newY}px`;
      }
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
      element.style.cursor = 'move';
    });
  }

  swapVideos(localVideo: HTMLElement, remoteVideo: HTMLElement) {
    if (localVideo.classList.contains('full-screen')) {
      localVideo.classList.remove('full-screen');
      localVideo.classList.add('small-screen', 'draggable');
      this.makeDraggable(localVideo);

      remoteVideo.classList.remove('small-screen', 'draggable');
      remoteVideo.classList.add('full-screen');
    } else {
      localVideo.classList.remove('small-screen', 'draggable');
      localVideo.classList.add('full-screen');

      remoteVideo.classList.remove('full-screen');
      remoteVideo.classList.add('small-screen', 'draggable');
      this.makeDraggable(remoteVideo);
    }
  }

  endMeeting(){
    this.router.navigate(['dashboard/messages/Juan']);
  }

  mute(){

  }
}
