---
title: "Why I built LifeLessonsVault instead of using Notion"
date: "2026-08-01"
subtitle: "The tools we reach for shape what we build. For preserving life knowledge, general-purpose tools aren't good enough."
draft: false
---

My mother has a notebook. Actually, she has several — filled with recipes, notes from her parents, things she wants to tell her grandchildren. They're written in a mix of Italian and English, some pages stuck together, no particular order. Irreplaceable. Also completely inaccessible.

When I started thinking about this problem — how families preserve and pass on what they know — I did what most people do. I opened Notion.

**Notion is a remarkable tool.** It's flexible, it syncs, it handles text well. But after a few weeks of testing it for this use case, I ran into the same wall every time: Notion is built for productivity, not posterity. The mental model is wrong.

## The friction is the product

With Notion, you're always aware you're using a tool. There are databases, templates, properties to fill in. For a 35-year-old who organises their life in Notion, that's fine. For a 72-year-old who wants to record the story of how they met their spouse, it's a barrier that kills the intention before anything gets written.

The insight that drove LifeLessonsVault is this: **the friction is the product**. When the tool gets out of the way, people actually record things. When it asks too much, they don't. This sounds obvious. It's surprisingly hard to build for.

## What I built instead

LifeLessonsVault is deliberately narrow. You record a memory or lesson — text, audio, or video — you give it a title and a category, and you decide who can see it. That's it.

No templates. No databases. No properties. The structure comes from the content, not from the tool imposing a schema before anything exists.

The categories are pre-defined (family history, life lessons, recipes, career wisdom, and a few others) because choosing a category is easy; designing your own taxonomy is work. Small decisions like this, made consistently, add up to an experience that an older person can navigate without instructions.

## What this means for AI tools

I built the entire thing with Claude Code and Claude Sonnet. While I started my career in software engineering back in 2002 on HP-UX systems, I hadn't been in a technical role since 2008, spending the intervening years in strategy and operations. Returning to building with modern AI tools showed me that AI coding tools don't just help you write code faster; they change what's feasible to attempt.

A decade ago, someone who had been out of hands-on coding for over fifteen years would have needed months to build a full working prototype from scratch. Now the bottleneck is product thinking — knowing what to build and why — not technical execution. That's a genuine shift, and it's the reason I'm building in public.

## The right tool matters

Notion is a great tool for the wrong problem. LifeLessonsVault is a narrow tool for a specific one. The difference matters because most of the people who need to record family knowledge won't ever open a Notion template — but they might open something that just asks them one question: *what do you want to remember?*
