import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [NoopAnimationsModule, MatMenuModule, MatSelectModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct default language selected', () => {
    const select: HTMLSelectElement = fixture.debugElement.query(
      By.css('.language-select')
    ).nativeElement;
    expect(select.value).toBe(component.selectedLanguage);
  });

  it('should change language when a different option is selected', () => {
    const select: HTMLSelectElement = fixture.debugElement.query(
      By.css('.language-select')
    ).nativeElement;
    select.value = select.options[1].value;
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(component.selectedLanguage).toBe(select.options[1].value);
  });

  it('should display user name and title correctly', () => {
    const userName: HTMLElement = fixture.debugElement.query(
      By.css('.user-name')
    ).nativeElement;
    const userTitle: HTMLElement = fixture.debugElement.query(
      By.css('.user-title')
    ).nativeElement;
    expect(userName.textContent).toContain('John Doe');
    expect(userTitle.textContent).toContain('Diretor Itaú BBA');
  });

  it('menu items should be disabled', () => {
    const menuItems = fixture.debugElement.queryAll(
      By.css('button[mat-menu-item][disabled]')
    );
    expect(menuItems.length).toBe(3);
  });
});
