---
slug: ai-reflections-3
title: AI Reflections (3)
authors: [ jan.stary ]
tags: [ software-enginering, ai ]
---

AI has consumed the industry’s attention like few topics before it. Somewhere along the way, we
stopped asking the right question. Not “can this be built with AI?” but “what is the best way to
build this?”

This space is where I explore AI from a different angle — not the hype, but the questions underneath
it.

<!-- truncate -->

## Is writing code a real bottleneck?

These days, bottleneck is one of the most overloaded words in the context of AI. Everything is a
bottleneck - code reviews, writing documentation, asking for advice, ... - starting with coding
itself. Ignoring the fact
that [not all bottlenecks are wrong](https://impatientprogramming.org/essays/sebastian-scholl-stop-apologizing-for-being-the-bottleneck/),
was coding a real bottleneck slowing down the SDLC the most?

To answer the question, first let's think about what coding is. Coding is the act of writing
code - that one was easy. What is code? Code, in my opinion, is the specification of the
system written in a structured and precise way (compared to natural language). To be more specific,
code is the only specification that can be treated as the single source of truth, as it is testable
and deterministically re-runnable (compared to Markdown files). To sum it up, coding is the act of
specifying how the system should behave in a structured and precise way using a programming
language.

When I think about the good old days, this was really not a bottleneck. Once I knew what I wanted to
build, in other words what the specification should look like, typing was not an issue. Real
software engineering is not about coding, it is about solving problems. And the hard parts are
elsewhere: talking to the customer and knowing what your customer wants; design and architecture;
defining boundaries and abstractions; keeping context windows small for humans and agents; dealing
with accidental complexity; accountability; designing for the future, etc. And none of these
disappeared.

## 10x as a goal

Almost everyone is talking about delivering much more with AI - *2x*, *5x*, *10x*. And most of the
time, by saying *Nx*, they mean increasing the number of delivered features.

First of all, developing Nx more features requires having Nx more good ideas. Something that looks
trivial. But considering the fact that every system can provide a finite number of features, while
some features conflict with others, we should be very careful
about [what to incorporate](https://newsletter.kentbeck.com/p/earn-and-learn?open=false#§failure-and-success-in-the-finish-line-game).
Additionally, are our customers even able to validate whether those changes bring the expected
value? For that reason, building feature after feature, while validating changes with the customer,
is a proven way of developing a software system.

Imagine all the problems I mentioned above are solved. Is measuring throughput on its own a good
metric? While I understand the intent to increase throughput, the problem I see with this way of
thinking is that it narrows software engineering down to a factory. Whoever produces more items
performs better. In my opinion, this is simplistic thinking. Shouldn't we measure real value
instead? Customer satisfaction, revenue, sustainability of development, ...

I'm not against the Nx goal or AI. I'm against confusing cheaper code production with better
software engineering. We've spent decades learning that the cost of writing software is only a
fraction of what it costs to own, maintain and evolve. We have an extraordinary opportunity to
improve software engineering, but only if we start measuring outcomes rather than activity, quality
rather than volume, and the cost of change rather than simply the cost of delivery.

## Do not tolerate technical debt

Explaining the importance of quality to management has always been hard. The quality of software,
achieved by architecting & designing, is something that slows you down at the beginning with the
promise to make your long-term
maintenance [more effective](https://martinfowler.com/bliki/DesignStaminaHypothesis.html).

However, this should not be a problem anymore. In times when one can run multiple PoCs in parallel
to find out what to build, technical debt should not be tolerated.

Instead, use AI to confirm feasibility, to figure out the best architecture & design possible, to
show customers what they would get, to collect feedback. Do not accept average solutions; strive for
the best solution possible.

