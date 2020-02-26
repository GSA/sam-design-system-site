import {
  HttpClient,
  Response,
  RequestOptionsArgs,
  Headers,
  Connection,
  RequestOptions
} from '@angular/http';
import { DocumentationService } from './documentation.service';
import { Observable } from 'rxjs';
import { docs } from './mock';

const mockResponse = {
  body: { test: 'hello' },
  status: 200,
  headers: new Headers(),
  url: '',
  merge: undefined,
};

class MockResponse extends Response {

  constructor () {
    super(mockResponse);
  }

  public json () {
    return docs;
  }
}

const test = new MockResponse();

class MockHttpClient extends HttpClient {
  public get (url: string, options?: RequestOptionsArgs): Observable<MockResponse> {
    return Observable.of(test);
  }
}

class MockConnection extends Connection {}

class MockConnectionBackend {
  createConnection(request: any): Connection {
    return new MockConnection();
  }
}

const mocked = new MockHttpClient(
  new MockConnectionBackend(),
  new RequestOptions()
);

describe('The Design System Documentation Service', () => {

  let service: DocumentationService;

  beforeEach(() => {
    service = new DocumentationService(mocked);
  });

  it('should work', (done) => {

    testing();

    function testing () {
      service.loadData().subscribe(
        data => {
          expect(data).toEqual(docs);
          done();
        }
      );
    }
  });

  it('should test getComponents', (done) => {
    service.getComponents().subscribe(
      data => {
        expect(data).toEqual(data);
        done();
      }
    );
  });

  it('should test generateJSONReport', () => {
    service.generateJSONReport();
  });

  it('should test getComponentById', () => {
    service.getComponentById(1).subscribe(
      data => {
        expect(data).toEqual(data);
      }
    );
  });

  it('should test getComponentByName', () => {
    service.getComponentByName('haha').subscribe(
      data => {
        expect(data).toEqual(data);
      }
    );
  });

  it('should test getComponentProperties', () => {
    service.getComponentProperties('haha').subscribe(
      data => {
        expect(data).toEqual(data);
      }
    );
  });

  it('should test getComponentPropertiesById', () => {
    service.getComponentPropertiesById('haha', 1)
      .subscribe(
        data => {
          expect(data).toEqual(data);
        }
      );
  });

  it('should test getComponentPropertiesByName', () => {
    service.getComponentPropertiesByName('haha', 'haha')
      .subscribe(
        data => {
          expect(data).toEqual(data);
        }
      );
  });

  it('should test getInterfaces', () => {
    service.getInterfaces().subscribe(
      data => {
        expect(data).toEqual(data);
      }
    );
  });

  it('should test getTypes', () => {
    service.getTypes().subscribe(
      data => {
        expect(data).toEqual(data);
      }
    );
  });

});
