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

	workExperiences = [
		{
			title: "Wellman Offline",
			subtitle: "Resource Energy Solutions",
			content: "Develop an Offline version of the Wellman NextGen. Made with ReactJS with Ant Design UI framework, as well as Dexie JS for saving data to local browser. Made using Electron to run the desktop application alongside automatic updates.\n\nCollaborated with a backend developer and a code reviewer.",
			imageUrl: "./assets/wellman-offline.png",
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
			imageUrl: "./assets/torc-mobile.png",
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
			content: "Made a NodeJS and React JS application combined with GraphQL and Sequelize framework to retrieve data from a MySQL database that showcases statistics involving the support team’s job performance.\n\nCollaborated with a Computer Systems person to provide the database access in which the application communicates with.",
			imageUrl: "./assets/support-dashboard.png",
			externalLinks: [
				{
					name: "Company Website",
					url: "https://www.resourceenergysolutions.com/"
				}
			]
		}
	];

	educationalExperiences = [
		{
			title: "SAIT Polytechnic",
			subtitle: "Software Development Major",
			content: "Took a 2-year course that helps prepare full-stack developers prepare for the workforce. Subjects include web-socket programming, web development (HTML, CSS, Javascript, PHP), Java programming (JSP, JSTL), and team management (Requirements documentation, Team collaboration).\n\nGraduated with 3.72 GPA.",
			imageUrl: "./assets/sait-polytechnic.png",
			externalLinks: [
				{
					name: "Website",
					url: "https://www.sait.ca/"
				}
			]
		},
		{
			title: "Udemy",
			subtitle: "Online Courses",
			content: "Took a variety of programs including React Native, ReactJS, Flutter, and Angular to know more about the emerging trends in the field of software development.",
			imageUrl: "./assets/udemy.png",
			externalLinks: [
				{
					name: "React JS",
					url: "https://goo.gl/MGnz7w"
				},
				{
					name: "Node JS",
					url: "https://goo.gl/w2xJ28"
				},
				{
					name: "Hibernate & JPA",
					url: "https://goo.gl/QB8dGb"
				}
			]
		}
	];



	openLink(...params) {
		// Since `window.open()` is not defined in the view, we must define it here where it has the `window` variable
		window.open(...params);
	}
}
