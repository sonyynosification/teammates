import { Component } from '@angular/core';
import { FeedbackContributionQuestionDetails } from '../../../../../feedback-question';
import { QuestionDetailsFormComponent } from '../question-details-form.component';

/**
 * Question details edit form component for contribution question.
 */
@Component({
  selector: 'tm-contribution-question-details-form',
  templateUrl: './contribution-question-details-form.component.html',
  styleUrls: ['./contribution-question-details-form.component.scss'],
})
export class ContributionQuestionDetailsFormComponent
    extends QuestionDetailsFormComponent<FeedbackContributionQuestionDetails> {

  constructor() {
    super({
      isNotSureAllowed: false,
    });
  }

}
