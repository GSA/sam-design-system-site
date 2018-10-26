
import {
  Component
} from '@angular/core';
import { Comment, CommentsService } from '@gsa-sam/sam-ui-elements';
import { Observable, of } from 'rxjs';

export class CommentsDemoService implements CommentsService {

  private offset = 5;

  public _username: string = 'anon-user@common-components.team';
  public _disabled: boolean = false;

  public _comments: Comment[] = [
    {
      username: 'diego-dev@commoncomponents.team',
      datetime: new Date('6/1/2017'),
      text: `Lorem ipsum dolor sit amet, consectetuer adiing elit. ` +
      `Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque ` +
      `penatibus et magnis dis parturient montes, nascetur ridiculus mus. ` +
      `Donec quam felis, ultricies nec, pellentesque eu, pretium.`,
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Georgewashington.jpg'
    },
    {
      username: 'colin-dev@commoncomponents.team',
      datetime: new Date('02/14/2017'),
      text: `Lorem ipsum doit amet, consectetuer adipiscing elit. ` +
      `Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque ` +
      `penatibus et magnis dis parturient motur ridiculus mus. ` +
      `Donec quam felis, ultricies nec, pellentesque eu, pretium.`,
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Georgewashington.jpg'
    },
    {
      username: 'colin-dev@commoncomponents.team',
      datetime: new Date(),
      text: `Lorem ipsum dolor sit amet, conctetuer adipiscing elit. ` +
      `Aenean commodo ligula eget dolor. Aenean `,
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Georgewashington.jpg'
    },
    {
      username: 'colin-dev@commoncomponents.team',
      datetime: new Date(),
      text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ` +
      `Aenean modo ligula eget do\n massa. Cum sociis natoque penatibus et ` +
      `magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ` +
      `ultricies nec, pellentesque eu, pretium.`,
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Georgewashington.jpg'
    },
    {
      username: 'colin-dev@commoncomponents.team',
      datetime: new Date(),
      text: `Lo ipsum dolor sit amet, consectetuer adipiscing elit. ` +
      `Aenean commodo ligula eget do Cum sociis natoque penatibus et magnis ` +
      `dis parturient montes, nascetur ridiculus mus. Donec quam felis, ` +
      `ultricies nec, pellentesque eu, pretium.`,
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Georgewashington.jpg'
    },
    {
      username: 'colin-dev@commoncomponents.team',
      datetime: new Date(),
      text: `Lorem ipsum dolor sit amet, consectetuer adcing elit. ` +
      `Aenean commodo ligula eget dolor. Aenean massa. Cum sociis ` +
      `natoque penatibus et magnis dis parturient montes, nascetur us mus. ` +
      `Donec quam felis, ultricies nec, pellentesque eu, pretium.`,
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Georgewashington.jpg'
    },
    {
      username: 'carlos-dev@commoncomponents.team',
      datetime: new Date('7/16/2017'),
      text: `Lorem ipsum dolor sit amet, consectetuer adipido ` +
      `ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ` +
      `magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ` +
      `ultricies nec, pellentesque eu, pretium.`
    },
    {
      username: 'diego-dev@commoncomponents.team',
      datetime: new Date('6/1/2017'),
      text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean ` +
      `commodo ligula eget dolor. Aenean masa. Cum sociis natoque penatibus et ` +
      `magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ` +
      `ultricies nec, pellentesque eu, pretium.`,
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Georgewashington.jpg'
    },
    {
      username: 'colin-dev@commoncomponents.team',
      datetime: new Date(),
      text: `Lorem ipsum doit amet, consectetuer adipiscing elit. ` +
      `Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque ` +
      `penatibus et magnis dis parturient montes, nascetur ridiculus mus. ` +
      `Donec quam felis, ultricies nectesque eu, pretium.`,
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Georgewashington.jpg'
    },
    {
      username: 'colin-dev@commoncomponents.team',
      datetime: new Date(),
      text: `Lorem ipsum dolor sit amet, conctetuer adipiscing elit. ` +
      `Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque ` +
      `penatibus et magnis dis parturient montes, nascetur ridiculus mus. ` +
      `Donec quamies nec, pellentesque eu, pretium.`,
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Georgewashington.jpg'
    },
    {
      username: 'colin-dev@commoncomponents.team',
      datetime: new Date(),
      text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ` +
      `Aenean modo ligula eget dolor. Aenean massa. Cum sociis natoque ` +
      `penatibus et magnis dis parturient montes, nascetur ridiculus musquam ` +
      `felis, ultricies nec, pellentesque eu, pretium.`,
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Georgewashington.jpg'
    },
    {
      username: 'colin-dev@commoncomponents.team',
      datetime: new Date(),
      text: `Lo ipsum dolor sit amet, consectetuer adipiscing elit. ` +
      `Aenean commodo ligula egets, nascetur ridiculus mus. Donec quam felis, ` +
      `ultricies nec, pellentesque eu, pretium.`,
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Georgewashington.jpg'
    },
    {
      username: 'colin-dev@commoncomponents.team',
      datetime: new Date(),
      text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ` +
      `Aenean commodo ligula eget Aenean massa. Cum sociis natoque penatibus ` +
      `et magnis dis parturient montes, nascetur us mus. Donec quam felis, ` +
      `ultricies nec, pellentesque eu, pretium.`,
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Georgewashington.jpg'
    },
  ];

    private lastIndex = (this._comments.length - 1) - this.offset;

  isCommentingDisabled(): boolean {
    return this._disabled;
  }

  isCommentDeletable(comment: Comment): boolean {
    return true;
  }

  getUsername(): string {
    return this._username;
  }

  getComments(): Observable<Comment[]> {
    const endPoint = (this._comments.length - 1) - this.offset;
    this.lastIndex = endPoint;

    return of(this._comments.slice(endPoint, this._comments.length - 1));
  }

  postComment(_: any): Observable<Comment[]> {
    if (_.text === 'asdf') {
      const err = new Error('I errored, bro');
      return Observable.throw(err);
    }
    this._comments.push(_);
    return of(this._comments);
  }

  deleteComment(comment: Comment): Observable<Comment[]> {
    this._comments = this._comments.filter((item) => {
      if (item.text !== comment.text) {
        return item;
      }
    });
    return of(this._comments.slice(this.lastIndex, this._comments.length - 1));
  }

  getInitialState(): Observable<Comment[]> {
    this.lastIndex = 0;
    return of(this._comments.slice(-2));
  }
}

@Component({
  selector: 'doc-sam-comments',
  templateUrl: './component-example.html',
  providers: [
    { provide: CommentsService, useClass: CommentsDemoService }
  ]
})
export class SamCommentsComponentExampleComponent {

}
