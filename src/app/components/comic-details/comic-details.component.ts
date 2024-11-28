import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComicService } from '../../services/comic.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comic-details',
  templateUrl: './comic-details.component.html',
  styleUrls: ['./comic-details.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class ComicDetailsComponent implements OnInit {
  comicId: number = 0;
  comicData: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private comicService: ComicService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.comicId = params['comicId'];
      this.loadComicData();
    });
  }

  loadComicData(): void {
    this.comicService.getComic(this.comicId).subscribe(response => {
      console.log("[ LOAD COMIC DATA ]",response);
      this.comicData = response;
    });
  }
}
