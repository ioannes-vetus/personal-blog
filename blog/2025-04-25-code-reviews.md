---
slug: code-reviews
title: Code reviews, the art of collaboration
authors: [ jan.stary ]
tags: [ software-enginering ]
---

Many organizations do regular code reviews, and those that do not would be better if they did.
However, code review is often seen as just another step of a process — a checkpoint before releasing
changes — rather than a meaningful practice. While processes are not inherently bad, without the
right mindset, they can become rigid and stagnant. Code review should not be regarded as merely a
mandatory checkpoint before releasing changes — it is far more significant than that.

<!-- truncate -->

## Code review as an investment

While code reviews are time-consuming — often amounting to hours per week — they should be seen as
an investment in the project’s future success. High-quality code reviews uphold code standards, help
identify bugs at an early stage, and increase overall code quality by inviting input from multiple
developers. One individual can only come up with a limited number of innovative ideas, but when the
collective expertise of the team is involved, the outcome often surpasses the original solution.
This shared effort reduces technical debt and promotes the creation of well-thought-out solutions.

Code reviews should naturally be regarded as an investment, not only by the development team but
also by project managers and other stakeholders. The development team plays a key role in advocating
for the significance of code reviews and ensuring they are prioritized. Consequently, most
experienced developers in a team — including the technical lead — should have sufficient time
explicitly allocated for reviewing code, reinforcing a culture of quality and continuous
improvement.

## Code review as a mentoring tool

Code reviews serve as an invaluable opportunity for mentoring within a development team, promoting
collaboration and knowledge-sharing among team members. Code reviews create a platform where more
experienced developers pass knowledge to those less experienced, offering constructive feedback and
guidance. Through this process, less experienced developers gain valuable insights into coding best
practices, architectural decisions, and the nuances of the project’s software system.

Moreover, code reviews enable the transfer of knowledge about the broader aspects of a complex
system, ensuring that a wider pool of developers understands how different components interact and
contribute to the whole. This improved understanding strengthens the team’s collective capacity to
maintain, troubleshoot, and innovate within the system.

## Code review as a perspective shift

> > _That is inevitable — it is hard for people to put themselves in the shoes of someone unfamiliar_
> > _with whatever they are working on._

Code reviews introduce an interesting psychological challenge that stems from human nature — it is
inherently difficult for individuals to adopt the perspective of someone who is unfamiliar with the
work they are immersed in. When developers are deeply involved in coding a feature or resolving an
issue, their familiarity with the context and details can create a cognitive bias, often referred to
as the “curse of knowledge.” This bias makes it challenging for them to recognize how their code
might be perceived by others, especially those who lack the same depth of understanding.

Code reviews help address this issue by inviting fresh perspectives. When other developers review
the code, they bring their unique viewpoints, which are often less influenced by the biases of the
original author. This process highlights areas that may be unclear, overly complex, or inconsistent.
It encourages the author to rethink and refine their work, enhancing its clarity, consistency, and
overall quality.

Furthermore, code reviews encourage developers to communicate their ideas more effectively, as they
must articulate their decisions and logic to reviewers. This process not only enhances the clarity
of the code but also helps the authors themselves step back and see their work through the lens of
someone less familiar with it.

## How to do a good code review

Good code review requires a thorough understanding of the broader context in which the changes
exist. Reviewing modifications in isolation is often insufficient, as the code interacts with
existing structures that must be considered. A comprehensive review should assess not only what has
changed but also **how these changes integrate with and impact the unchanged portions of the
codebase**. Some code constructs may no longer be relevant, or opportunities to refine other
sections may have been overlooked. How can one grasp the necessary context? Ideally, by asking
original author of the code — either in person or remotely — to provide insights into both the
code’s structure and the rationale behind the modifications. If direct access to the author is not
possible, then the reviewer must independently analyze and interpret the surrounding context.

Another crucial aspect of a good code review is the manner in which feedback is provided. Code
reviews should never be used as a means of settling personal conflicts or revenge. Instead, feedback
should be framed in a constructive and objective way, focusing on helping the author improve their
work and contributing to the overall quality of the project.

## Conclusion

By recognizing code review as an investment, a form of mentorship, and a way to mitigate cognitive
biases, teams can ensure continuous improvement. Prioritizing thorough and constructive reviews
results in more maintainable, and high-quality software systems while reinforcing collaboration and
learning within teams.