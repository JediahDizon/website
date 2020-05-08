import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CodeProjectComponent } from "./code-project.component";

describe("CodeProjectComponent", () => {
  let component: CodeProjectComponent;
  let fixture: ComponentFixture<CodeProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
