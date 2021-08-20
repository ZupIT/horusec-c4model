# C2-Model

![diagram](https://www.plantuml.com/plantuml/svg/0/7Ssz2i8m543XlT1tg9iERK2Sd2grg11_XXPnAjSqc42QX9iRzV5DNGyVd3eG8CN95CfX35AKpai4SbYATPujj1KcZh9GH3vi6KFuL2zDAZuJHk4iIKkLS1E34JNOjua-icPJtWnOwi-S6I0PAAMXcVMNAfzsUPPdVFUuzjrmFtN7WRU7zh9VhkPUIpl-oGy0)

# C4Model - C2

## Description
Once you understand how your system fits in to the overall IT environment, a really useful next step is to zoom-in to the system boundary with a Container diagram. A "container" is something like a server-side web application, single-page application, desktop application, mobile app, database schema, file system, etc. Essentially, a container is a separately runnable/deployable unit (e.g. a separate process space) that executes code or stores data.

The Container diagram shows the high-level shape of the software architecture and how responsibilities are distributed across it. It also shows the major technology choices and how the containers communicate with one another. It's a simple, high-level technology focussed diagram that is useful for software developers and support/operations staff alike.
