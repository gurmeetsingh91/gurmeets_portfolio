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
	const myWorkDesc = `• Collaborated RPA Center of Excellence (COE) to support business partners, increase business process
	efficiency, improve quality, reduce operational risk, and reduce development time to market via automation.
	• Designing architecture & building RPAs for single family and multi-family business
	• Demonstrate initiative by self-teaching Python to develop scripts to aid RPA’s to seamlessly use 2 different
	technologies to achieve successful Automated bots.
	• Integrated SOAP and REST web service calls to the new Automation Anywhere tool.
	• Explored Consuming a SOAP Response and writing a base 64 decoder to decode XML Reponses for
	automation bots.
	• Used API tools SOAPUI, and Postman to test API calls to ensure a connection is made, and then
	Implementing that in a RPA Bot to run on a scheduled execution
	• Self managed modern delivery tasks in Jira by creating stories and features, and updating them to complete
	in 2 week sprints.`;


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
	const myWorkDesc = `• Established RPA Center of Excellence (COE) focused on Human Resources & Financial Processing
	• Created RPA processes to automate HR accounts payable to FTEs, financial & commercial account mgmt
	• Evaluated UI and data processes to inform & improve programming on UI Path software
	• Ensured data integration & connections from RPA bots & internal apps to Novelis SAP`;


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
	const myWorkDesc = `• Developed 6 robotic processes for financial advisory services, bot automated work for team of 5-10 FTEs.
	• Built & administered MS Access databases for RPAs to track task execution and to support debugging.
	• Automated HTML data extraction from 7 distinct USAA web platforms using VBA.
	• Integrated SOAP and REST APIs to make web services calls, improving RPA execution time by 50%.
	• Led debugging and troubleshooting within RPA codes to improve the quality of robotic processing
	• Supported RPA Center of Excellence (COE), onboarding & training 5 new hires in existing tools &
	established best practices.
	• Analyzed data & business process for automation, developed high-level RPA business cases & roadmaps`;


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
