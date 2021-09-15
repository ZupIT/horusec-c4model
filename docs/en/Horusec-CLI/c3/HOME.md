# c3

![diagram](c3.svg)

# C4Model Horusec-CLI - C3

## Description

Going down to a lower level of execution step by step, as soon as the start command is executed, the CLI will fill your configuration through three sources, which have a priority in the following order, configuration file, environment variables and finally flags, so a configuration passed by file will be overwritten by an environment variable and so on. When acquiring all the configurations, a validation will take place for the values ​​informed to the CLI as well as for the necessary dependencies to Horusec.

The next step is the duplication of the project, where it will be copied to a folder called .horusec, thus avoiding unwanted changes by the tools to the original code. In this process, files that should not be considered in the analysis are also excluded, as per example images, node_modules, IDE files and also files entered by the user in the settings. With the project copied, CLI will check all languages ​​that the repository has to start the next step.

Now, for each identified language, a Docker image will be downloaded, if it doesn't exist locally. Each one of them has the third-party open source tools installed, so you don't need anything other than Horusec and Docker on the machine running the CLI, remembering that if the commit author option is enabled, Git also becomes a dependency . With the images downloaded, we will run a language container for each tool, inside it will be done all the analysis, and when finished we will have the result with the probable vulnerabilities. Horusec also has its own analysis engine, which does not depend on Docker and if the user wishes, it can only run its own CLI engine, thus ignoring the dependence on Docker.

As soon as a container returns the result, it is formatted to Horusec's default and stored in the CLI until all are finished. After that, the display of the possible vulnerabilities found begins, where all are presented in the same format and with various useful information to validate and find the indicated error. In addition to showing the result in the terminal, it is possible to export to json , txt and sonarqube, as well as send it to Horusec's web services, as this part is completely optional and the CLI acts completely independently.

To send an analysis, it is necessary to inform an authorization token to the CLI, this will be sent to the WEB Horusec API service, which after validating the authenticity of this token and to which workspace and repository that new analysis belongs, will be saved in the centralized database. Publication in an AMQP queue will also occur, this package is sent to the analytic WEB service which, as the API, will process and save the data of the new analysis.

There are also two other commands besides the main one to start the analysis, they are the installed CLI version command and the CLI configuration file generation command, which will generate a configuration example with default values.
