# C2-Model

![diagram](https://www.plantuml.com/plantuml/svg/0/7Ssz2i8m543XFP1tg9iEIK2Sd2grg51_XXPnAcaIR25DGd9lzV5jNGyVd3o1Z82ZpNeVCHd5fgIyDanjALaDJbdK9ki1GjeB4UM7lmVeiPjfLDw1SS2L7uNKSP1kiXXG53lsiD91Sws4bM0IpAaj5lq57kOP9PHKXzUzgTldfJwtLNagRyVrPkcvSVfFVW00)

# C4Model - C2

## Description
Once you understand how your system fits in to the overall IT environment, a really useful next step is to zoom-in to the system boundary with a Container diagram. A "container" is something like a server-side web application, single-page application, desktop application, mobile app, database schema, file system, etc. Essentially, a container is a separately runnable/deployable unit (e.g. a separate process space) that executes code or stores data.

The Container diagram shows the high-level shape of the software architecture and how responsibilities are distributed across it. It also shows the major technology choices and how the containers communicate with one another. It's a simple, high-level technology focussed diagram that is useful for software developers and support/operations staff alike.
