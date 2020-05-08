import { Component } from "@angular/core";
const metaData = require("../../package.json");

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent {
	author = metaData.author;
	version = metaData.version;

	codeAdventures = [
		{
			title: "Ray Casting",
			subtitle: "Code Train",
			content: "Implemented a \"Ray Casting\" particle with the help of Code Train's tutorial online. Majority of the code was implemented by me with the exception of 2 mathematical formulas which was copied from the tutorial:\n\n- Formula to determine if 2 lines intersect\n- Formula to determine if the casted ray has already intersected.",
			projectUrl: "/assets/ray-casting/index.html",
			externalLinks: [
				{
					name: "Tutorial",
					url: "https://www.youtube.com/watch?v=TOEi6T2mtHo"
				}
			]
		}
	];

	workExperiences = [
		{
			title: "Wellman Offline",
			subtitle: "Resource Energy Solutions",
			content: "Develop an Offline version of the Wellman NextGen. Made with ReactJS with Ant Design UI framework, as well as Dexie JS for saving data to local browser. Made using Electron to run the desktop application alongside automatic updates.\n\nCollaborated with a backend developer and a code reviewer.",
			imageUrl: "/assets/wellman-offline.png",
			externalLinks: [
				{
					name: "Company Website",
					url: "https://www.resourceenergysolutions.com/"
				}
			]
		},
		{
			title: "TORC Mobile",
			subtitle: "Resource Energy Solutions",
			content: "Developed an Android & iOS app as derivative of the TORC Web application using React Native. Made overhauling architectural design to the old TORC Mobile codebase which includes utilization of Realm DB local database for offline capability.\n\nCollaborated with a team of 5 backend developers from a separate system where the app synchronizes with and 2 graphic designers.",
			imageUrl: "/assets/torc-mobile.png",
			externalLinks: [
				{
					name: "Company Website",
					url: "https://www.resourceenergysolutions.com/"
				},
				{
					name: "Google Play",
					url: "https://play.google.com/store/apps/details?id=com.torcmobile"
				}
			]
		},
		{
			title: "Support Dashboard",
			subtitle: "Resource Energy Solutions",
			content: "Made a NodeJS and React JS application combined with GraphQL and Sequelize framework to retrieve data from a MySQL database that showcases statistics involving the support team’s job performance.\n\nCollaborated with a Computer Systems person to give me database access in which the application communicated with.",
			imageUrl: "/assets/support-dashboard.png",
			externalLinks: [
				{
					name: "Company Website",
					url: "https://www.resourceenergysolutions.com/"
				}
			]
		}
	];



	openLink(...params) {
		// Since `window.open()` is not defined in the view, we must define it here where it has the `window` variable
		window.open(...params);
	}
}
