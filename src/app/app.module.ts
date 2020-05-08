import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ClarityModule } from "@clr/angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CollapseComponent } from "./components/collapse/collapse.component";
import { CodeProjectComponent } from "./components/code-project/code-project.component";

@NgModule({
	declarations: [
		AppComponent,
		CollapseComponent,
		CodeProjectComponent
	],
	imports: [
		BrowserModule,
		FormsModule,

		// UI Components
		ClarityModule,
		BrowserAnimationsModule,
		FlexLayoutModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
