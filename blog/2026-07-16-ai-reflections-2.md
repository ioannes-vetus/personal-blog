---
slug: ai-reflections-2
title: AI Reflections (2)
authors: [ jan.stary ]
tags: [ software-enginering, ai ]
---

AI has consumed the industry’s attention like few topics before it. Somewhere along the way, we
stopped asking the right question. Not “can this be built with AI?” but “what is the best way to
build this?”

This space is where I explore AI from a different angle — not the hype, but the questions underneath
it.

<!-- truncate -->

## Quality still matter

Let me start by citing opening paragraph of one of the most influential books in our profession —
The Mythical Man Month:

> No scene from prehistory is quite so vivid as that of the mortal struggles of great beasts in
> the
> tar pits. In the mind’s eye one sees dinosaurs, mammoths, and sabertoothed tigers struggling
> against
> the grip of the tar. The fiercer the struggle, the more entangling the tar, and no beast is so
> strong or so skillful but that he ultimately sinks.
>
> Large-system programming has over the past decade been such a tar pit, and many great and
> powerful
> beasts have thrashed violently in it. Most have emerged with running systems — few have met
> goals,
> schedules, and budgets. Large and small, massive or wiry, team after team has become entangled
> in
> the tar. No one thing seems to cause the difficulty — any particular paw can be pulled away. But
> the
> accumulation of simultaneous and interacting factors brings slower and slower motion. Everyone
> seems
> to have been surprised by the stickiness of the problem, and it is hard to discern the nature of
> it.
> But we must try to understand it if we are to solve it.

Every software system needs to be treated by applying two “simple” rules — recognise accidental
complexity from essential complexity, and try as aggressively as you can to minimise the first one.
Domain-Driven Design, layered architecture, hexagonal architecture, micro-services — different in
name, author, and nuance, yet all converging on the same insight: keep modules coherent, keep
interfaces narrow and intuitive, keep internals hidden. A decades-long collective effort to tame
accidental complexity. The question is: does AI change the need to face accidental complexity? Can
the Genie evade the tar pit, or will it struggle fruitlessly against the tar’s sticky grip?

Intuition tells me it will struggle. Would AI not multiply bad structures once it is launched into
entangled systems? Would not wrong boundaries, incoherent and coupled structures make it harder for
AI to aim changes precisely? Would AI, with its limited context window, not struggle to reason about
complexity it cannot fully see? And as time passes, there are also evidences (ai acceleration
whiplash takeaway, sunhealthy code is burning your token usage): code churn up ~860%, incidents per
change up ~245%, bugs per developer up ~55%, unhealthy codebases consume almost 50% more tokens to
complete the same tasks.

What is the solution? Does the model need to be trained on better code? Better harnesses? Tests?
Better prompting? Nobody knows, but perhaps awareness that the old wisdom still applies is where we
should start.

## Agility is still relevant

Software people have a weakness of thinking they invented everything. But many times, the core
inspiration resides well outside our industry (the car industry has used platform engineering for
more than half a century, for example). And that is good, because it shows that an adopted
principle/methodology/process is good enough to be relevant across a variety of industries.

I look at agility the same way. Norbert Wiener’s feedback-loop theory, Toyota’s kaizen, and John
Boyd’s OODA loop (Observe-Orient-Decide-Act) were all introduced decades ago. But we can go even
further by looking at John Henry Newman’s development of doctrine, invented centuries before the
Agile Manifesto. At the same time, both conceptions share the belief that a complex system (whether
theology or a software product) cannot be designed in detail in advance. Instead, it is allowed to
“grow” through a series of small, testable steps, where each step responds to feedback from the real
world.

Agility is natural to human beings. But some AI evangelists (I can’t find a better name) try to
convince us agility is obsolete: “AI makes big up-front design cheap, so why bother with small
steps?”, “AI lets us rebuild everything in minutes”… Fine, but what does that say about a system
that must be rebuilt on every change request? How do I know the direction is right when steps are
this big? How do I share that much change with the team at once?

Do not accept simplistic statements that sounds too good. Question everything. And don’t forget: if
you do a big-bang rewrite, the only thing you’re guaranteed of is a big bang.

## To spec or not to spec?

The old enemy has risen once again: the idea of getting rid of software engineers by replacing code
with something less technical. It runs from Model-Driven Development, Low-code, and No-code
platforms, straight to LLM-centric approaches such as Spec-Driven Development and its derivatives.
While the first category introduced inflexibility, SDD introduced non-determinism (with the
potential to combine both :)).

I see multiple problems:

1. It is not clear to me what problem size and type SDD is meant for. For the majority of problems,
   it feels like a sledgehammer to crack a nut.
2. The past has shown that the best way for us to stay in control of what we are building is small,
   iterative steps, so I am very skeptical that lots of up-front spec design is a good idea,
   especially when specs are overly verbose.
3. After playing a little bit with SDD, I can say for sure that I prefer reviewing code to reviewing
   markdown specs.

Among the issues mentioned above, SDD’s core flaw is one thing: it ignores the fact that only the
codebase can be perceived as a single source of truth. Code is the actual artifact that describes
the real behaviour of the system. Code is the artifact that is syntactically and semantically
verified by various steps, e.g. compiling and testing. For me, the only documentation you can 100%
trust is the code itself.