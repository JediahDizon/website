import { Component, ElementRef, ViewChild, OnInit, Input } from "@angular/core";

@Component({
	selector: "collapse",
	templateUrl: "./collapse.component.html",
	styleUrls: ["./collapse.component.css"]
})
export class CollapseComponent implements OnInit {
	@Input() height = 333;
	@Input() expanded = false;
	@Input() imageUrl: string;
	@ViewChild("container") parentContainer: ElementRef;

	ngOnInit() {}

	toggle() {
		this.expanded = !this.expanded;
	}
}
