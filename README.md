<p align="center">
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="center" width="30%">
</p>
<p align="center"><h1 align="center">DISCORD-BOT-TEMPLATE</h1></p>
<p align="center">
	<em>Empower Your Discord with Seamless Bot Magic!</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/Dippys/Discord-Bot-Template?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
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

The Discord-Bot-Template project offers a robust foundation for building interactive Discord bots, streamlining development with pre-configured features like event handling, command management, and API integration. Ideal for developers seeking to create engaging Discord experiences, it ensures code reliability and maintainability, enhancing user interaction and simplifying bot deployment.

---

##  Features

|      | Feature         | Summary       |
| :--- | :---:           | :---          |
| ⚙️  | **Architecture**  | <ul><li>Utilizes a modular architecture with singleton patterns for managing core components like `Express`, `Discord`, and `MySQL`.</li><li>Centralized event management through `EventManager` to ensure consistent communication between components.</li><li>Integration of `dotenv` for environment configuration, enhancing maintainability and reliability.</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>Incorporates `Qodana` for static code analysis, ensuring adherence to coding standards.</li><li>Strict type-checking enforced by `TypeScript` for enhanced code reliability.</li><li>Consistent dependency management with `package-lock.json` to prevent version conflicts.</li></ul> |
| 📄 | **Documentation** | <ul><li>Comprehensive setup and usage instructions provided in `README.md` with `npm` commands.</li><li>Codebase primarily written in `TypeScript`, ensuring clear type definitions and interfaces.</li><li>Detailed configuration files like `tsconfig.json` and `qodana.yaml` for developers.</li></ul> |
| 🔌 | **Integrations**  | <ul><li>Seamless integration with `Discord.js` for bot functionalities.</li><li>Utilizes `express` for web server capabilities and API routing.</li><li>Database interactions managed through `mysql2` for efficient data handling.</li></ul> |
| 🧩 | **Modularity**    | <ul><li>Modular design with separate directories for Discord interactions, events, and API routes.</li><li>Dynamic loading of interaction modules for easy scalability and maintenance.</li><li>Encapsulation of logic in managers like `DiscordManager` and `ExpressManager`.</li></ul> |
| 🧪 | **Testing**       | <ul><li>Testing facilitated through `npm test` command, ensuring code reliability.</li><li>Automated checks integrated into CI/CD pipeline via `Qodana`.</li><li>Focus on maintaining high code quality and identifying issues early.</li></ul> |
| ⚡️  | **Performance**   | <ul><li>Efficient resource management through singleton patterns for core services.</li><li>Optimized build process with `tsconfig.json` for streamlined compilation.</li><li>Use of `nodemon` for automatic server restarts during development.</li></ul> |
| 🛡️ | **Security**      | <ul><li>Secure communication with Discord via signature validation using `tweetnacl`.</li><li>Environment variables managed securely with `dotenv`.</li><li>Adherence to best practices in API and database interactions.</li></ul> |

---

##  Project Structure

```sh
└── Discord-Bot-Template/
    ├── README.md
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
				<td>- Configure TypeScript compiler settings to ensure consistent and strict type-checking across the project<br>- Establishes the target JavaScript version and module system, enables interoperability between CommonJS and ES modules, and specifies the output directory for compiled files<br>- By including only the source directory, it streamlines the build process, enhancing code reliability and maintainability within the project's architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Dippys/Discord-Bot-Template/blob/master/qodana.yaml'>qodana.yaml</a></b></td>
				<td>- The qodana.yaml file configures the Qodana static code analysis tool for the project, specifying the inspection profile and linter to be used<br>- It facilitates automated code quality checks within the CI/CD pipeline, ensuring adherence to coding standards and identifying potential issues early in the development process<br>- This integration enhances code reliability and maintainability across the entire codebase architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Dippys/Discord-Bot-Template/blob/master/package.json'>package.json</a></b></td>
				<td>- The package.json file defines the configuration and dependencies for the "discord-bot-multi-template" project<br>- It specifies the project's main entry point, build and start scripts, and includes essential libraries for Discord bot functionality, such as discord.js and discord-interactions<br>- Additionally, it incorporates tools for development and type-checking, like TypeScript and nodemon, ensuring a streamlined development process for building and running the Discord bot.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Dippys/Discord-Bot-Template/blob/master/package-lock.json'>package-lock.json</a></b></td>
				<td>- The `package-lock.json` file is a crucial component of the project, serving as a detailed manifest that ensures consistent dependency management across different environments<br>- It locks the specific versions of the project's dependencies, as well as their sub-dependencies, to maintain stability and predictability in the build process<br>- This file is automatically generated and updated by npm, and it plays a vital role in facilitating reproducible builds, which is essential for both development and production environments<br>- By capturing the exact dependency tree, it helps prevent potential conflicts and discrepancies that might arise from version mismatches, thereby supporting the overall integrity and reliability of the codebase.</td>
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
				<td>- Initialize and orchestrate the core components of the application, including environment configuration, database connection, Discord bot management, and web server setup<br>- Facilitate event handling and routing, ensuring the application is ready to process requests<br>- Serve as the entry point that integrates various managers and services, coordinating their interactions to maintain seamless operation within the broader architecture of the project.</td>
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
								<td>- Facilitates the routing mechanism for the web application by integrating and organizing API endpoints<br>- It serves as a central hub that connects various sub-route modules, specifically handling general API routes and Discord-specific routes<br>- This structure enhances modularity and maintainability within the codebase, ensuring that different API functionalities are neatly compartmentalized and easily accessible through defined paths.</td>
							</tr>
							</table>
							<details>
								<summary><b>api</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/Dippys/Discord-Bot-Template/blob/master/src/web/routes/api/discord.ts'>discord.ts</a></b></td>
										<td>- Handles incoming Discord webhook events by verifying request signatures and processing various event types such as application authorization, entitlement creation, and quest user enrollment<br>- Utilizes middleware to read raw request bodies and emits corresponding events through an event manager<br>- Ensures secure communication with Discord by validating signatures using a public key, maintaining the integrity and authenticity of the interactions.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/Dippys/Discord-Bot-Template/blob/master/src/web/routes/api/index.ts'>index.ts</a></b></td>
										<td>- Defines API routes for the web application, facilitating user data retrieval and handling test requests<br>- The `/user/:id` route retrieves user information from the database based on the provided ID, while the `/test` route processes incoming data and responds accordingly<br>- These routes integrate with the broader architecture by enabling client-server communication and database interaction, supporting the application's functionality and user management features.</td>
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
						<td>- EventManager serves as a centralized hub for managing and dispatching events across the application, ensuring consistent communication between different components<br>- By implementing a singleton pattern, it provides a single instance for event handling, promoting efficient resource usage and streamlined event management<br>- This design enhances modularity and decouples components, facilitating easier maintenance and scalability within the project's architecture.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Dippys/Discord-Bot-Template/blob/master/src/lib/envManager.ts'>envManager.ts</a></b></td>
						<td>- DotenvManager centralizes the management of environment variables within the project, ensuring consistent access and configuration across different modules<br>- By implementing a singleton pattern, it guarantees that environment variables are loaded only once, optimizing resource usage<br>- This approach enhances maintainability and reliability, as it provides a unified interface for retrieving environment variables, supporting default values when necessary, and aligning with the project's architectural goals.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Dippys/Discord-Bot-Template/blob/master/src/lib/expressManager.ts'>expressManager.ts</a></b></td>
						<td>- ExpressManager serves as a singleton class responsible for managing the Express application within the project<br>- It initializes the application, sets up middleware, and starts the server, ensuring that only one instance of the Express app is created and used throughout the codebase<br>- This design pattern promotes efficient resource management and consistent application behavior across different parts of the project.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Dippys/Discord-Bot-Template/blob/master/src/lib/discordManager.ts'>discordManager.ts</a></b></td>
						<td>- DiscordManager orchestrates the connection and interaction handling with the Discord API within the project<br>- It manages the Discord client setup, including intents and partials, and initializes command handling through the InteractionHandler<br>- By ensuring singleton access, it facilitates efficient interaction management, command registration, and event handling, thereby serving as a central component for Discord-related functionalities in the codebase.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Dippys/Discord-Bot-Template/blob/master/src/lib/mysqlManager.ts'>mysqlManager.ts</a></b></td>
						<td>- The `mysqlManager.ts` file establishes a singleton pattern for managing database connections within the project<br>- It provides a centralized mechanism to connect to a MySQL database and retrieve user data by ID<br>- This approach ensures efficient resource utilization and consistent database access across the codebase, enhancing maintainability and scalability by preventing multiple instances of database connections.</td>
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
						<td>- Facilitates the dynamic loading and registration of event modules within the Discord bot architecture<br>- By scanning a designated directory for event folders, it ensures that each event adheres to a predefined structure before registering it with the EventManager<br>- This approach promotes modularity and scalability, allowing for easy addition and management of new events without altering the core event handling logic.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Dippys/Discord-Bot-Template/blob/master/src/discord/types.ts'>types.ts</a></b></td>
						<td>- Defines TypeScript interfaces for handling various Discord interactions within the project, such as slash commands, context menu commands, buttons, modals, select menus, and autocomplete interactions<br>- These interfaces standardize the structure for executing interactions and events, ensuring consistent implementation across the codebase<br>- This organization facilitates the integration and management of Discord bot functionalities, enhancing modularity and maintainability.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Dippys/Discord-Bot-Template/blob/master/src/discord/InteractionHandler.ts'>InteractionHandler.ts</a></b></td>
						<td>- InteractionHandler manages and processes various types of Discord interactions, such as slash commands, buttons, select menus, context menus, modals, and autocomplete interactions<br>- It dynamically loads these interaction modules from specified directories, registers them with Discord's API, and executes the appropriate response when an interaction occurs, ensuring seamless integration and functionality within the broader Discord bot architecture.</td>
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
												<td>- Facilitates user interaction within a Discord bot by defining a select menu component that responds to user selections<br>- Integrates with the broader system to enhance user engagement through interactive elements<br>- Contributes to the modular architecture by encapsulating specific interaction logic, allowing for easy maintenance and scalability within the Discord bot's interaction handling framework.</td>
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
												<td>- Facilitates user interaction by providing an autocomplete feature for fruit names within a Discord bot<br>- Enhances user experience by suggesting up to five fruit names based on user input, ensuring quick and relevant suggestions<br>- Integrates seamlessly into the broader architecture by leveraging Discord.js interactions, contributing to a more interactive and responsive bot environment.</td>
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
												<td>- Facilitates user interaction within a Discord bot by defining a button that triggers a modal with text input fields<br>- This component enhances user engagement by allowing users to provide input through a structured interface<br>- It integrates seamlessly into the broader architecture, leveraging Discord.js to manage interactions and modals, thereby contributing to the bot's interactive capabilities and user experience.</td>
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
												<td>- The slash command for listing fruits enhances user interaction within the Discord bot by allowing users to select a fruit and receive information about it<br>- It integrates with Discord's autocomplete feature to improve user experience and streamline the process of selecting options<br>- This command contributes to the bot's functionality by providing an engaging and interactive way for users to access specific fruit-related information.</td>
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
												<td>- Implements a Discord slash command named "ping" that responds with "Pong!" and provides interactive components like a button and a select menu<br>- Enhances user interaction by allowing users to choose from Pokémon options such as Bulbasaur, Charmander, and Squirtle<br>- Serves as a test command within the broader Discord bot framework, demonstrating the integration of interactive elements in command responses.</td>
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
												<td>- Facilitates user interaction within the Discord application by implementing a context menu command named 'test'<br>- Enhances user experience by providing immediate feedback upon selection, confirming successful interaction or notifying of errors<br>- Integrates seamlessly into the broader architecture by leveraging Discord's application command framework, contributing to the project's goal of creating interactive and responsive Discord bot functionalities.</td>
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
												<td>- Facilitates user interaction within a Discord application by implementing a context menu command named 'testificate'<br>- Enhances user experience by providing feedback upon interaction, confirming successful execution or reporting errors<br>- Integrates seamlessly into the broader project architecture, which likely includes various interactive elements, by leveraging Discord's application command framework to handle user-initiated events efficiently and responsively.</td>
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
												<td>- Facilitates user interaction within a Discord application by handling modal submissions<br>- It captures user input from a modal with specific fields and responds with a message that includes the provided input values<br>- This functionality enhances user engagement by allowing dynamic data collection and response, contributing to the interactive capabilities of the broader application architecture.</td>
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
										<td>- Facilitates user engagement by sending a welcome message and interactive buttons to users upon authorizing the application on Discord<br>- Enhances user experience by providing options to set up a profile or seek help, integrating seamlessly with the broader Discord bot functionality<br>- Contributes to the project's goal of creating an interactive and user-friendly environment within the Discord platform.</td>
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
Copy the ``.env.example`` file to ``.env`` by using the following command:
```sh
cop .env.example .env
```

Update the ``.env`` file with all the information required.

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

##  License

This project is protected under the [UNLICENCE](https://choosealicense.com/licenses/unlicense/) License. For more details, refer to the [UNLICENCE](https://choosealicense.com/licenses/unlicense/) file.

---
