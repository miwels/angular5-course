import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/forms/src/facade/async";

@Component({
    selector: 'header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() featureSelected = new EventEmitter<string>();

    onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }
}