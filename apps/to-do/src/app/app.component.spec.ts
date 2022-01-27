import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UtilityModule } from '@first-monorepo/utility'
import { RemoteEntryModule } from './remote-entry/entry.module';

describe('AppComponent', () => {

  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilityModule, HttpClientTestingModule, RemoteEntryModule],
      declarations: [AppComponent, NxWelcomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'to-do'`, () => {
  //   expect(app.title).toEqual('to-do');
  // });

  // it('should render title', () => {
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h1')?.textContent).toContain(
  //     'Welcome to-do'
  //   );
  // });

  it(`should have my name`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.name).toBe('Rajan Gupta');
  });
});


