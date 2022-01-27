import { getTestBed, TestBed } from '@angular/core/testing';
import { ToDoService } from './to-do.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Todo } from '@first-monorepo/data';

describe('ToDoService', () => {
  let todoService: ToDoService;
  let injector: TestBed;
  let httpTestingController: HttpTestingController


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ToDoService]
    });
    // Returns a service with the MockBackend so we can test with dummy responses
    todoService = TestBed.inject(ToDoService);
    // Inject the http service and test controller for each test
    injector = getTestBed();
    httpTestingController = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(todoService).toBeTruthy();
  });

  it('should return todos', () => {
    const expectedTodo: Todo[] = [{title: 'Todo 1'},{title: 'Todo2'}];
    todoService.getTodo().subscribe((data) => {
      expect(data).toEqual(expectedTodo);
    });
    const req = httpTestingController.expectOne(`/api/todos`);
    expect(req.request.method).toBe('GET');
    req.flush(expectedTodo);
});

  // it('should return expected heroes (HttpClient called once)', (done: DoneFn) => {
  //   const expectedTodo: Todo[] = [{title: 'Todo 1'},{title: 'Todo2'}];
  
  //   httpClientSpy.get.and.returnValue(asyncData(expectedTodo));
  
  //   todoService.getTodo().subscribe(
  //     heroes => {
  //       expect(heroes).toEqual(expectedTodo);
  //       done();
  //     },
  //     done.fail
  //   );
  //   expect(httpClientSpy.get.calls.count()).toBe(1);
  // });

});
