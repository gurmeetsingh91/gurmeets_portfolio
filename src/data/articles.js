import React from "react";

function article_1() {
	const myWorkDesc = `• Developed Python scripts to consume JSON schemas from Excel spreadsheets, enabling efficient testing
  of JSON collections.<br>
• Utilized the Postman API platform to send JSON objects to webhooks for comprehensive testing.<br>
• Managed JSON collections within MongoDB, aligning them with testing requirements in the development
 environment.<br>
• Designed and implemented a custom web page using Angular and DevExtreme components, facilitating
 CRUD operations on a business display table.<br>
• Created and managed JSON authentication roles for various users on Serrala's Alevate product.<br>
• Implemented and configured JavaScript-based webhooks for Jira Stories.<br>
• Collaborated between business operations and technical requirements, resolving issues on both fronts.`;


	const header2Style ={
		textDecoration: 'underline',

	}

	return {
		date: "2021 - Present",
		title: "Serrala",
		role:"Technical Consultant",
		description:
			"Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
		keywords: [
			"Software Developer",
			"Gurmeet",
			"Gurmeet Singh",
			"Gurmeet S.",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<h2 className="paragraph"><span style={header2Style}>Technical Consultant</span></h2>
					<div dangerouslySetInnerHTML={{ __html: myWorkDesc }}></div>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	const myWorkDesc = `• Developed Python scripts to consume JSON schemas from Excel spreadsheets, enabling efficient testing
  of JSON collections.<br>
• Utilized the Postman API platform to send JSON objects to webhooks for comprehensive testing.<br>
• Managed JSON collections within MongoDB, aligning them with testing requirements in the development
 environment.<br>
• Designed and implemented a custom web page using Angular and DevExtreme components, facilitating
 CRUD operations on a business display table.<br>
• Created and managed JSON authentication roles for various users on Serrala's Alevate product.<br>
• Implemented and configured JavaScript-based webhooks for Jira Stories.<br>
• Collaborated between business operations and technical requirements, resolving issues on both fronts.`;


	const header2Style ={
		textDecoration: 'underline',
		fontSize:'22px'


	}

	return {
		date: "2020 - 2021",
		title: "TATA Consultancy Services",
		role:"FreddieMac - Robotic Process Automation (RPA) Developer - Consultant",
		description:
			"Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
		keywords: [
			"Software Developer",
			"Gurmeet",
			"Gurmeet Singh",
			"Gurmeet S.",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<h2 className="paragraph"><span style={header2Style}>FreddieMac - Robotic Process Automation (RPA) Developer - Consultant</span></h2>
					<div dangerouslySetInnerHTML={{ __html: myWorkDesc }}></div>
				</div>
			</React.Fragment>
		),
	};
}


function article_3() {
	const myWorkDesc = `• Developed Python scripts to consume JSON schemas from Excel spreadsheets, enabling efficient testing
  of JSON collections.<br>
• Utilized the Postman API platform to send JSON objects to webhooks for comprehensive testing.<br>
• Managed JSON collections within MongoDB, aligning them with testing requirements in the development
 environment.<br>
• Designed and implemented a custom web page using Angular and DevExtreme components, facilitating
 CRUD operations on a business display table.<br>
• Created and managed JSON authentication roles for various users on Serrala's Alevate product.<br>
• Implemented and configured JavaScript-based webhooks for Jira Stories.<br>
• Collaborated between business operations and technical requirements, resolving issues on both fronts.`;


	const header2Style ={
		textDecoration: 'underline',
		fontSize:'22px'


	}

	return {
		date: "2018 - 2020",
		title: "TATA Consultancy Services",
		role:"Novelis - Robotic Process Automation (RPA) Developer - Consultant",
		description:
			"Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
		keywords: [
			"Software Developer",
			"Gurmeet",
			"Gurmeet Singh",
			"Gurmeet S.",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<h2 className="paragraph">
						<span style={header2Style}>
						Novelis - Robotic Process Automation (RPA) Developer - Consultant
						</span>
					</h2>
					<div dangerouslySetInnerHTML={{ __html: myWorkDesc }}></div>
				</div>
			</React.Fragment>
		),
	};
}


function article_4()  {
	const myWorkDesc = `• Developed Python scripts to consume JSON schemas from Excel spreadsheets, enabling efficient testing
  of JSON collections.<br>
• Utilized the Postman API platform to send JSON objects to webhooks for comprehensive testing.<br>
• Managed JSON collections within MongoDB, aligning them with testing requirements in the development
 environment.<br>
• Designed and implemented a custom web page using Angular and DevExtreme components, facilitating
 CRUD operations on a business display table.<br>
• Created and managed JSON authentication roles for various users on Serrala's Alevate product.<br>
• Implemented and configured JavaScript-based webhooks for Jira Stories.<br>
• Collaborated between business operations and technical requirements, resolving issues on both fronts.`;


	const header2Style ={
		textDecoration: 'underline',
		fontSize:'22px'


	}

	return {
		date: "2015 - 2018",
		title: "TATA Consultancy Services",
		role:"USAA - Robotic Process Automation (RPA) Developer - Consultant",
		description:
			"Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
		keywords: [
			"Software Developer",
			"Gurmeet",
			"Gurmeet Singh",
			"Gurmeet S.",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<h2 className="paragraph">
						<span style={header2Style}>
						USAA - Robotic Process Automation (RPA) Developer - Consultant
						</span>
					</h2>
					<div dangerouslySetInnerHTML={{ __html: myWorkDesc }}></div>
				</div>
			</React.Fragment>
		),
	};
}



const myArticles = [article_1, article_2,article_3,article_4];

export default myArticles;
