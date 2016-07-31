---
permalink: /getting-started/user-experience/
layout: styleguide
category: Getting started
title: For user experience designers
lead: User experience design is the enchances user satisifaction by improving the usability, accessibility, and pleasure provided in the the interaction of a user with the product and includes human-computer interaction, extending it by addressing all aspects of a product or service incorporating cognitive psychology and feedback.
---

## Information architecture

There are two primary ways for a front-end user to find information. The first is through links from one page to another. The second is by searching for content and following links within those results. 

When a front-end user is looking for high-level or general information, the front-end user should be able to navigate the site quickly via static menus. The front-end user may not know exactly where to go or what (s)he is looking for; the architecture can help guide the front-end user by starting broad (categories) and becoming more detailed (a specific notice, wage determination, program, and so on).

When a front-end user knows the information (s)he is looking for, search becomes the better option; therefore, front-end users should be allowed to search using text with additional filtering capabilities within a given category.

### Content

Information Architecture, in terms of content, refers to how content is displayed. This could be the ordering of information within a block of content (chapters within a book, paragraphs within a chapter, sentences within a paragraph, and so on) or how sections of content are arranged within a page.

For the purposes of the *SAM Web Standards* we recognize two primary types of content from a front-end user perspective: content and metadata. Content refers to titles of pages, body copy, attachments, and so on. Metadata refers to details related to *that* content; posting date, related category, and so on.

Grouping content and metadata separately allows you to quickly discern the *content* of a page from the information *about* the content of a page. Further, content and metadata should be ordered, as much as possible, in a way that gives you what you are most likely concerned about first, with the details later. For reference, see the Inverted Pyramid[^InvertedPyramid] from journalism.

### Content-focused and printable

For content pages (as opposed to those designed as portals or navigation), the text-based content should not be overpowered by the surrounding navigation or branding (chrome). Normal operating distance from the screen should be considered (mobile versus tablet, versus lap- or desk-top). 

To allow users the ability to adjust font sizes using their browser, front-end developers and designers should use relative font sizing. Increased leading (the space between lines) makes it easier for readers to discern one line of text from the next.

On any given page, you should be able to print (or print to file) the content of that page and receive a well-formed (readable) document, without chrome elements. Print stylesheets can be used to facilitate this outcome by hiding the navigation elements, sidebars, footers (except copyright information if applicable), and so on. Further, the size of the printed page is usually unknown; therefore, it is important to remove (or override) any fixed width information and replace it with a percentage (usually 100%).

Note: Printing a page should only include content considered public unless you add proper document handling, marking and labeling in accordance with Federal regulations.

## Keep it simple

As the joke goes:

<blockquote>
  <p>A user interface is like a joke. If you have to explain it, it&rsquo;s not that good.</p>
  <p><cite><a href="https://www.startupvitamins.com/products/startup-poster-a-user-interface-is-like-a-joke-if-you-have-to-explain-it-its-not-that-good">Poster from Startup Vitamins</a></cite></p>
</blockquote>

<ul>
  <li>Keep the user interface and navigation as simple as possible based on user feedback.</li>
  <li>Use workflows for complex actions to break the work down.</li>
</ul>


