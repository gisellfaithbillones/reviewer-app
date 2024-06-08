import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SideNavComponent} from '../side-nav/side-nav.component';
import {AchievementsComponent} from './achievements/achievements.component';
import {ContinueLearningComponent} from './continue-learning/continue-learning.component';
import {PopularReviewerComponent} from './popular-reviewer/popular-reviewer.component';
import {RecommendedForYouComponent} from './recommended-for-you/recommended-for-you.component';
import {RelatedReviewerComponent} from './related-reviewer/related-reviewer.component';
import {YourTimeComponent} from './your-time/your-time.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    SideNavComponent,
    AchievementsComponent,
    ContinueLearningComponent,
    PopularReviewerComponent,
    RecommendedForYouComponent,
    RelatedReviewerComponent,
    YourTimeComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
