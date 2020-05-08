import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "code-project",
	templateUrl: "./code-project.component.html",
	styleUrls: ["./code-project.component.css"]
})
export class CodeProjectComponent implements OnInit {
	@Input() height = 300;
	@Input() expanded = false;
	@Input() projectUrl: string;

	ngOnInit() {}

	toggle() {
		this.expanded = !this.expanded;
	}
}
