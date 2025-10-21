import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search-box-component',
  standalone: true,
  imports: [],
  templateUrl: './SearchBoxComponent.component.html',
})
export class SearchBoxComponent { 
   @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
  @Output() search = new EventEmitter<string>();

  onSearch() {
    const value = this.searchInput.nativeElement.value.trim();
    
    if (value) {
      console.log('🔍 Buscando:', value); 
      this.search.emit(value);
      
      this.searchInput.nativeElement.value = '';
    }
  }
}
