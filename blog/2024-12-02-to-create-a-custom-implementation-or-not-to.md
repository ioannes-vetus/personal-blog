---
slug: to-create-a-custom-implementation-or-not-to
title: To create a custom implementation or not to
authors: [ jan.stary ]
tags: [ software-enginering ]
---

Software engineers are often confronted with a familiar dilemma: create a custom implementation
tailored to our specific requirements or opt an existing one? And all we hear are phrases like: “Do
not reinvent the wheel!”, “Minimize dependencies!”, “ Every problem of a library becomes your
problem!”. All of these statements are valid and relevant. The key difference lies in the context.

<!-- truncate -->

## Trivial and non-trivial problems

Using a library does have its drawbacks, such as transitive dependencies and potential security
vulnerabilities, just to name a few. For these reasons, the default approach seems to lean towards
not using a library. However, what if a custom implementation requires specialized expertise outside
your domain? Or what if it leads to maintenance overheads that are unsustainable?

Well, there is no silver bullet. When considering libraries versus custom implementations, it’s
helpful to categorize problems into two types: trivial and non-trivial. But how do we differentiate
between them? Well, it depends. Generally, any implementation that demands substantial expertise —
potentially, outside your domain — falls into the non-trivial category, whether it’s a robust
persistence layer communicating with a database, a custom serializer, or even something seemingly
“simple” like a random number generator. On the other hand, problems that do not require specific
expertise e.g. checking an emptiness of a collection, can be considered “trivial”.

## Advantages of using standard libraries and frameworks

When dealing with non-trivial problems, reusing a standard library or framework should be the
preferred choice for several reasons.

Primarily, opting for a standard library or framework offers the invaluable advantage of tapping
into the expertise of the professionals who conceived it and the collective wisdom of those who have
utilized it previously. These tools have undergone rigorous beta testing, undergone official
releases, and very likely have been employed extensively by legions of programmers, perhaps
numbering in the millions.

Furthermore, these standard tools often evolve to encompass a broader array of functionalities as
they mature. Should you encounter a feature gap in the library or framework you’ve chosen, rest
assured that the developer community will voice their needs, potentially resulting in the
incorporation of these missing elements in subsequent releases.

Additionally, the performance of these established libraries and frameworks tends to exhibit an
upward trajectory over time, often without any direct intervention required on your part. As the
user base expands and community feedback flows in, developers behind these tools continually refine
and optimize their performance, ensuring that you benefit from ongoing enhancements without
additional effort.

Moreover, leveraging standard libraries or frameworks alleviates the need to invest precious time in
crafting bespoke solutions for issues that do not relate to your specific project or domain. Rather
than diverting your focus towards reinventing the wheel, you can channel your energies into refining
and enhancing your application, leaving the foundational groundwork to pre-existing solutions.

Lastly, embracing standard libraries or frameworks situates your code within the mainstream of
software development practices. This placement facilitates enhanced readability, maintainability,
and reusability, as your code aligns with widely accepted conventions and patterns, making it
readily comprehensible and adaptable by a diverse range of developers.

## When to create a custom implementation

At times, the functionality provided by a library may not align perfectly with your specific
requirements, particularly if your needs are highly specialized. In such cases, it becomes necessary
to explore alternative implementations. It’s essential to acknowledge that no library, regardless of
its breadth or sophistication, can cater to every conceivable use case or requirement. As your
project delves into more niche or specialized areas, you may encounter gaps in the functionality
provided by available libraries. In such scenarios, the burden falls upon you to consider crafting
custom solutions to bridge these gaps and fulfill your project’s unique demands.

## Conclusion

To summarize, if you need to do something that seems like it should be reasonably common and is
non-trivial, there may already be a facility in the libraries that does what you want. If there is,
use it; if you do not know, check. Generally speaking, library code is likely to be better than code
that you would write yourself and is likely improved over time. This is no reflection on your
abilities as a programmer. Economies of scale dictate that library code receives far more attention
than most developers could afford to devote to the same functionality. On the other hand, avoid
adding a dependency just to save a few lines of code. It’s crucial to weigh the pros and cons and
understand the trade-offs involved.
