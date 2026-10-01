---
slug: why-do-we-need-interfaces
title: Why do we need interfaces?
authors: [ jan.stary ]
tags: [ software-enginering ]
---

The vast majority of tutorials addressing programming advocate for creating an interface prior to
implementation. However, only a few of these tutorials elaborate on the rationale behind this
approach. Why do we need an interface if there is only one implementation? What advantages does it
offer? Isn’t it just a waste of time? In this post, we delve into the reasons why interfaces are
indispensable in modern software development.

<!-- truncate -->

## Abstraction, modularity, maintaina…

Sure, first and foremost, interfaces foster **abstraction**. The abstraction allows for the creation
of a simplified view of a complex system, where only the relevant details are presented to the user,
and the internal workings of the system are hidden. This separation of concerns simplifies the
development process, enhances code **maintainability**, and mitigates the risk of unintended side
effects when making changes. At its core, an interface is a contract that defines the proper way of
communication without requiring knowledge of the underlying implementation.

Furthermore, interfaces facilitate **modularity**. By defining clear boundaries between different
parts of a system, interfaces enable developers to isolate functionalities, thus promoting code
**reusability** and facilitating parallel development.

Abstraction, modularity, maintainability, code reusability, loose coupling, testability, and much
more. While these are indeed compelling reasons to utilise interfaces, is there anything beyond
these considerations? Are there other benefits that interfaces provide?

## Client-oriented development

Writing an interface creates a space for a comprehensive evaluation. This process can be perceived
as a design phase, distinct from implementation phase. Throughout design phase, the whole specific
bunch of questions should be addressed. How to determine inputs and outputs of an interface to
ensure client convenience? Is the interface simple as possible, but not simpler? Is the interface
streamlined yet sufficiently robust? Is the interface intuitively understandable? Is the interface
strict enough to block invalid and unsafe usage — does the interface help the client to use it
correctly?

Do these types of questions not direct our focus towards the clients of our code? Does not this
shift in perspective assist us in prioritising the needs and perspectives of our clients (could it
be interpreted as a form of empathy…)? To illustrate, let’s contrast this perspective with questions
typically posed during the implementation phase. Is the implementation functioning optimally? Does
the implementation performing well? Is the implementation maintainable and testable?

Do you perceive the contrasting subjects of these questions? While the former addresses the needs of
the client, the latter emphasises the pursuit of implementation perfection (and that’s important
tho!). “We are not developing a library. Who are our clients?” you inquire. I respond: they are your
teammates, colleagues from other teams, and even your future self, reflecting on the code you
authored months ago.

Once an interface is made public, altering the contract becomes challenging. Consequently, the
design phase serves as an opportunity for thorough consideration before the final release. This
advantage holds true even when the interface has only one implementation or is inherently
straightforward. This segregation helps teams and individuals to create superior, robust, flexible
and client-oriented interfaces.

## Conclusion

In conclusion, interfaces play a pivotal role in modern software development by promoting
abstraction, modularity, testability, maintainability, and extensibility. Besides, creating an
interface facilitates a clear separation between the design and implementation phases. This division
empowers developers and teams to focus on each phase individually, extracting maximum value from the
process.