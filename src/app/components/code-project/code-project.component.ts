import { Component, ElementRef, ViewChild, OnInit, Input } from "@angular/core";

@Component({
	selector: "code-project",
	templateUrl: "./code-project.component.html",
	styleUrls: ["./code-project.component.css"]
})
export class CodeProjectComponent implements OnInit {
	@Input() height = 350;
	@Input() expanded = false;
	@Input() projectUrl: string;
	@ViewChild("container") parentContainer: ElementRef;

	ngOnInit() {}

	toggle() {
		this.expanded = !this.expanded;
	}
}
