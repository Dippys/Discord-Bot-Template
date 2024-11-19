<p align="center">
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="center" width="30%">
</p>
<p align="center"><h1 align="center">DISCORD-BOT-TEMPLATE</h1></p>
<p align="center">
	<em>Empower Your Discord with Seamless Bot Integration</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/last-commit/Dippys/Discord-Bot-Template?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/Dippys/Discord-Bot-Template?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/Dippys/Discord-Bot-Template?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<br>

##  Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
  - [ Project Index](#-project-index)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Testing](#-testing)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)

---

##  Overview

The Discord-Bot-Template project streamlines the creation of interactive Discord bots, offering a robust framework for developers. It simplifies bot development with features like event handling, command registration, and database integration. Ideal for developers seeking to build scalable, maintainable bots, it enhances user engagement through dynamic interactions and real-time communication.

---

##  Features

|      | Feature         | Summary       |
| :--- | :---:           | :---          |
| ⚙️  | **Architecture**  | <ul><li>Utilizes a modular architecture with separate components for Discord interactions, web server, and database management.</li><li>Employs a singleton pattern for managing core services like `Express`, `Discord`, and `MySQL` connections.</li><li>Centralizes event handling through an `EventManager`, promoting decoupled and scalable design.</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>Configured with `tsconfig.json` for strict type-checking and consistent code quality.</li><li>Integrates `Qodana` for static code analysis, ensuring adherence to coding standards.</li><li>Maintains a clean and organized codebase with TypeScript interfaces for structured interactions.</li></ul> |
| 📄 | **Documentation** | <ul><li>Comprehensive setup instructions using `npm` for installation, usage, and testing.</li><li>Codebase primarily written in `TypeScript`, with clear separation of concerns across modules.</li><li>Includes detailed comments and documentation within the code to guide developers.</li></ul> |
| 🔌 | **Integrations**  | <ul><li>Seamlessly integrates with `Discord.js` for bot functionalities and `mysql2` for database operations.</li><li>Supports environment configuration through `dotenv` for flexible deployment settings.</li><li>Utilizes `express` for web server capabilities, enabling API route management.</li></ul> |
| 🧩 | **Modularity**    | <ul><li>Features a modular design with distinct components for Discord interactions, web routing, and database management.</li><li>Employs a centralized `router.ts` for organizing API routes, enhancing maintainability.</li><li>Facilitates dynamic loading of Discord event modules, promoting extensibility.</li></ul> |
| 🧪 | **Testing**       | <ul><li>Includes `npm` scripts for running tests, ensuring code reliability.</li><li>Utilizes TypeScript's type-checking capabilities to prevent runtime errors.</li><li>Potential for integration with CI/CD pipelines for automated testing and deployment.</li></ul> |
| ⚡️  | **Performance**   | <ul><li>Optimized for performance with efficient resource management through singleton patterns.</li><li>Ensures fast response times by leveraging asynchronous operations in `Node.js`.</li><li>Minimizes latency in Discord interactions through event-driven architecture.</li></ul> |
| 🛡️ | **Security**      | <ul><li>Implements request signature verification for secure Discord webhook communication.</li><li>Manages environment variables securely using `dotenv`.</li><li>Ensures consistent dependency versions with `package-lock.json` to prevent vulnerabilities.</li></ul> |

---

##  Project Structure

```sh
└── Discord-Bot-Template/
    ├── package-lock.json
    ├── package.json
    ├── qodana.yaml
    ├── src
    │   ├── discord
    │   ├── index.ts
    │   ├── lib
    │   └── web
    └── tsconfig.json
```


###  Project Index
<details open>
	<summary><b><code>DISCORD-BOT-TEMPLATE/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/Dippys/Discord-Bot-Template/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
				<td>- Configure TypeScript compiler settings to ensure consistent and strict code quality across the project<br>- Establishes the target JavaScript version, module system, and output directory while enabling interoperability between CommonJS and ES modules<br>- Enforces strict type-checking and consistent file naming, enhancing maintainability and reducing potential errors<br>- Includes all source files within the 'src' directory for compilation, supporting a robust and reliable build process.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Dippys/Discord-Bot-Template/blob/master/qodana.yaml'>qodana.yaml</a></b></td>
				<td>- The qodana.yaml configuration file orchestrates static code analysis within the project, leveraging JetBrains' Qodana tool<br>- It specifies the inspection profile and linter to ensure code quality and consistency<br>- Integrated into the CI/CD pipeline, it allows for pre-execution commands and plugin installations, enhancing automated code review processes and maintaining high standards across the codebase.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Dippys/Discord-Bot-Template/blob/master/package.json'>package.json</a></b></td>
				<td>- The package.json file defines the configuration for the Discord bot project, specifying its name, version, and main entry point<br>- It manages dependencies essential for bot functionality, including Discord API interaction, environment variable management, and database connectivity<br>- Additionally, it outlines scripts for building, starting, and developing the application, facilitating efficient development and deployment within the project's architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Dippys/Discord-Bot-Template/blob/master/package-lock.json'>package-lock.json</a></b></td>
				<td>- The `package-lock.json` file is a crucial component of the project’s architecture, serving as a detailed manifest that ensures consistent dependency management across different environments<br>- It locks the specific versions of the project's dependencies, as well as their sub-dependencies, to maintain stability and predictability in the build process<br>- This file is automatically generated and updated by npm, and it plays a vital role in facilitating reproducible builds, which is essential for both development and production environments<br>- By capturing the exact dependency tree, it helps prevent potential conflicts and discrepancies that might arise from version mismatches, thereby supporting the overall reliability and integrity of the project.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- src Submodule -->
		<summary><b>src</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/Dippys/Discord-Bot-Template/blob/master/src/index.ts'>index.ts</a></b></td>
				<td>- Initialize and orchestrate the core components of the application, including database connectivity, Discord bot management, web server setup, and environment configuration<br>- Facilitate event handling and routing, ensuring the application is ready to process incoming requests<br>- Serve as the entry point that integrates various managers and services, coordinating their interactions to maintain seamless operation within the project's architecture.</td>
			</tr>
			</table>
			<details>
				<summary><b>web</b></summary>
				<blockquote>
					<details>
						<summary><b>routes</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Dippys/Discord-Bot-Template/blob/master/src/web/routes/router.ts'>router.ts</a></b></td>
								<td>- The router.ts file orchestrates the routing structure for the web application by integrating and organizing various API routes<br>- It serves as a central hub that connects the main API routes and the Discord-specific routes, ensuring that incoming requests are directed to the appropriate handlers<br>- This modular approach enhances the maintainability and scalability of the project's backend architecture.</td>
							</tr>
							</table>
							<details>
								<summary><b>api</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/Dippys/Discord-Bot-Template/blob/master/src/web/routes/api/discord.ts'>discord.ts</a></b></td>
										<td>- Facilitates secure communication between a Discord application and the server by handling incoming webhook events<br>- It verifies request signatures to ensure authenticity and processes various event types, such as application authorization and entitlement creation, by emitting corresponding events through an event manager<br>- This integration enhances the project's ability to interact with Discord, enabling real-time event-driven functionalities.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/Dippys/Discord-Bot-Template/blob/master/src/web/routes/api/index.ts'>index.ts</a></b></td>
										<td>- Defines API routes for the web application, facilitating user data retrieval and handling test requests<br>- It integrates with a MySQL database to fetch user information based on a provided ID and supports JSON data exchange<br>- This component plays a crucial role in managing client-server interactions within the broader architecture, ensuring seamless data flow and communication between the frontend and backend systems.</td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>lib</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Dippys/Discord-Bot-Template/blob/master/src/lib/eventManager.ts'>eventManager.ts</a></b></td>
						<td>- EventManager serves as a centralized hub for managing and dispatching events across the application, ensuring consistent communication between different components<br>- By implementing a singleton pattern, it provides a single instance for event handling, promoting efficient resource usage and streamlined event management<br>- This design enhances modularity and decouples components, allowing for scalable and maintainable architecture within the codebase.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Dippys/Discord-Bot-Template/blob/master/src/lib/envManager.ts'>envManager.ts</a></b></td>
						<td>- DotenvManager centralizes the management of environment variables within the project, ensuring consistent access and configuration through a singleton pattern<br>- By loading environment variables at initialization, it facilitates seamless integration of configuration settings across different parts of the codebase<br>- This approach enhances maintainability and scalability by providing a unified method to retrieve environment-specific data, supporting both default values and custom configurations.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Dippys/Discord-Bot-Template/blob/master/src/lib/expressManager.ts'>expressManager.ts</a></b></td>
						<td>- ExpressManager serves as a singleton class responsible for managing the Express application within the project<br>- It ensures a single instance of the Express server is created and initialized with middleware and server settings<br>- By encapsulating the server setup and management, it provides a centralized way to access and control the Express application, promoting efficient resource utilization and consistent server configuration across the codebase.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Dippys/Discord-Bot-Template/blob/master/src/lib/discordManager.ts'>discordManager.ts</a></b></td>
						<td>- DiscordManager orchestrates the integration with Discord by managing the client connection and handling interactions<br>- It ensures seamless command registration and execution through the InteractionHandler, facilitating communication between the application and Discord servers<br>- As a singleton, it provides a centralized point for managing Discord-related operations, enhancing the application's ability to respond to user interactions and maintain a stable connection with Discord's API.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Dippys/Discord-Bot-Template/blob/master/src/lib/mysqlManager.ts'>mysqlManager.ts</a></b></td>
						<td>- The `mysqlManager.ts` component manages database connections and operations within the project<br>- It implements a singleton pattern to ensure a single database connection instance, facilitating efficient resource use<br>- The class provides methods to connect to the database and retrieve user data, supporting the project's data management needs by enabling seamless interaction with the MySQL database through a centralized access point.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>discord</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Dippys/Discord-Bot-Template/blob/master/src/discord/eventHandler.ts'>eventHandler.ts</a></b></td>
						<td>- EventHandler orchestrates the dynamic loading and registration of event modules within the Discord bot architecture<br>- It ensures that each event module adheres to a predefined structure before integrating it into the EventManager<br>- By managing event folders and handling potential errors during the loading process, EventHandler facilitates a modular and scalable approach to event management in the project.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Dippys/Discord-Bot-Template/blob/master/src/discord/types.ts'>types.ts</a></b></td>
						<td>- Defines TypeScript interfaces for handling various Discord interactions, such as slash commands, context menu commands, buttons, modals, select menus, and autocomplete interactions<br>- These interfaces standardize the structure and execution of commands and interactions within the Discord bot, ensuring consistent implementation across the codebase<br>- By organizing interaction types, the codebase facilitates scalable and maintainable development of Discord bot features.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Dippys/Discord-Bot-Template/blob/master/src/discord/InteractionHandler.ts'>InteractionHandler.ts</a></b></td>
						<td>- InteractionHandler manages and processes various types of Discord interactions, including slash commands, buttons, select menus, context menus, modals, and autocomplete interactions<br>- It dynamically loads these interaction modules from specified directories, registers them with Discord's API, and executes the appropriate response when an interaction occurs, ensuring seamless integration and functionality within the broader Discord bot architecture.</td>
					</tr>
					</table>
					<details>
						<summary><b>Interactions</b></summary>
						<blockquote>
							<details>
								<summary><b>select-menus</b></summary>
								<blockquote>
									<details>
										<summary><b>test</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/Dippys/Discord-Bot-Template/blob/master/src/discord/Interactions/select-menus/test/test.ts'>test.ts</a></b></td>
												<td>- Facilitates user interaction within a Discord bot by defining a select menu component that responds to user selections<br>- Enhances the bot's interactivity by allowing users to choose from a list of options and receive immediate feedback<br>- Integrates seamlessly into the broader architecture by leveraging the existing interaction handling framework, contributing to a modular and extensible design for managing user inputs.</td>
											</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<details>
								<summary><b>autocomplete</b></summary>
								<blockquote>
									<details>
										<summary><b>fruits</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/Dippys/Discord-Bot-Template/blob/master/src/discord/Interactions/autocomplete/fruits/index.ts'>index.ts</a></b></td>
												<td>- Facilitates user interaction by providing an autocomplete feature for fruit names within a Discord application<br>- Enhances user experience by suggesting up to five fruit names based on user input, ensuring quick and relevant responses<br>- Integrates seamlessly into the broader architecture by utilizing Discord's interaction capabilities, contributing to a more dynamic and interactive user interface within the application.</td>
											</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<details>
								<summary><b>buttons</b></summary>
								<blockquote>
									<details>
										<summary><b>test</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/Dippys/Discord-Bot-Template/blob/master/src/discord/Interactions/buttons/test/test.ts'>test.ts</a></b></td>
												<td>- Facilitates user interaction within a Discord bot by defining a button that triggers a modal with text input fields<br>- This component enhances user engagement by allowing users to input and submit data through a structured interface<br>- It plays a crucial role in the bot's interactive capabilities, contributing to the overall user experience by providing a seamless way to gather user input and feedback.</td>
											</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<details>
								<summary><b>slash</b></summary>
								<blockquote>
									<details>
										<summary><b>fruits</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/Dippys/Discord-Bot-Template/blob/master/src/discord/Interactions/slash/fruits/index.ts'>index.ts</a></b></td>
												<td>- The slash command for listing fruits enhances user interaction within the Discord bot by allowing users to select a fruit and receive information about it<br>- It integrates with Discord's autocomplete feature to improve user experience<br>- This command is part of the broader command handling system, contributing to the bot's interactive capabilities and enriching user engagement through dynamic content delivery.</td>
											</tr>
											</table>
										</blockquote>
									</details>
									<details>
										<summary><b>test</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/Dippys/Discord-Bot-Template/blob/master/src/discord/Interactions/slash/test/test.ts'>test.ts</a></b></td>
												<td>- Implements a Discord slash command named 'ping' that responds with "Pong!" and provides interactive components such as a button and a select menu<br>- Enhances user interaction by allowing users to choose from options like Bulbasaur, Charmander, and Squirtle<br>- Serves as a test command within the broader architecture, demonstrating the integration of interactive elements in Discord bot commands.</td>
											</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<details>
								<summary><b>context-menus</b></summary>
								<blockquote>
									<details>
										<summary><b>user</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/Dippys/Discord-Bot-Template/blob/master/src/discord/Interactions/context-menus/user/test.ts'>test.ts</a></b></td>
												<td>- Facilitates user interaction within the Discord application by implementing a context menu command named 'test'<br>- Enhances user experience by providing feedback upon selection, confirming successful interaction or notifying of errors<br>- Integrates seamlessly into the broader project architecture, which likely includes various interactive elements, by leveraging Discord's application command framework to handle user-initiated events efficiently and responsively.</td>
											</tr>
											</table>
										</blockquote>
									</details>
									<details>
										<summary><b>message</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/Dippys/Discord-Bot-Template/blob/master/src/discord/Interactions/context-menus/message/test.ts'>test.ts</a></b></td>
												<td>- Implements a context menu command named 'testificate' within the Discord bot framework, allowing users to interact with messages through a right-click menu<br>- Enhances user interaction by providing feedback when the menu is clicked, confirming successful execution or notifying of errors<br>- Contributes to the broader architecture by facilitating user engagement and interaction within the Discord server environment.</td>
											</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<details>
								<summary><b>modals</b></summary>
								<blockquote>
									<details>
										<summary><b>test</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/Dippys/Discord-Bot-Template/blob/master/src/discord/Interactions/modals/test/test.ts'>test.ts</a></b></td>
												<td>- Facilitates user interaction within a Discord server by handling modal submissions<br>- It captures user input from a modal form, specifically small and large text inputs, and responds with a message displaying the captured data<br>- This functionality enhances user engagement by allowing dynamic content submission and feedback, integrating seamlessly into the broader architecture of Discord interactions within the project.</td>
											</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>events</b></summary>
						<blockquote>
							<details>
								<summary><b>ApplicationAuthorized</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/Dippys/Discord-Bot-Template/blob/master/src/discord/events/ApplicationAuthorized/index.ts'>index.ts</a></b></td>
										<td>- Facilitates user engagement by sending a welcome message and interactive buttons to users upon authorizing the application in Discord<br>- Enhances user experience by providing options to set up a profile and access help resources<br>- Integrates with the broader Discord bot framework, leveraging event handling to trigger personalized communication, thereby promoting user interaction and support within the Discord community.</td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---
##  Getting Started

###  Prerequisites

Before getting started with Discord-Bot-Template, ensure your runtime environment meets the following requirements:

- **Programming Language:** TypeScript
- **Package Manager:** Npm


###  Installation

Install Discord-Bot-Template using one of the following methods:

**Build from source:**

1. Clone the Discord-Bot-Template repository:
```sh
❯ git clone https://github.com/Dippys/Discord-Bot-Template
```

2. Navigate to the project directory:
```sh
❯ cd Discord-Bot-Template
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```




###  Usage
Run Discord-Bot-Template using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```


###  Testing
Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
```
---

##  Contributing

- **💬 [Join the Discussions](https://github.com/Dippys/Discord-Bot-Template/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/Dippys/Discord-Bot-Template/issues)**: Submit bugs found or log feature requests for the `Discord-Bot-Template` project.
- **💡 [Submit Pull Requests](https://github.com/Dippys/Discord-Bot-Template/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/Dippys/Discord-Bot-Template
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/Dippys/Discord-Bot-Template/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=Dippys/Discord-Bot-Template">
   </a>
</p>
</details>

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

---
