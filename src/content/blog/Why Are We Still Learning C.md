---
title: Why Are We Still Learning C
date: 2023-05-09
edited: 2024-08-26
image: { src: "/images/blog/C.png", alt: "A picture of C logo" }
description: C is still getting taught in 2024. It's called as the language that shaped modern programming. 
draft: false
category: Programming Languages
---

This is the demo blog article I wrote about a year ago when I first created the blog for my website. I realized I should write actual content instead of leaving it as an AI-generated post.  Unfortunately, due to my university workload, I couldn't consistently create content for a year.  However, I'm currently following the "two-minute rule" from James Clear's Atomic Habits to write for my blog and newsletter for just two minutes every day.  My goal is to write one blog article and newsletter every week.  You can sign up for the newsletter at [pruthivithejan.me/newsletter](http://pruthivithejan.me/newsletter).

When I started university last year, the first semester included a module called "Fundamentals of Programming" where we learned the C programming language.  Honestly, I was frustrated at having to learn such an old language, thinking it would be useless.  Boy, was I wrong!

## The Influence of C

Without C, the majority of syntaxes and concepts used in modern programming wouldn't exist.  Consider what's happened since Dennis Ritchie introduced C in 1970.  It's like the mother of all modern programming languages!  I did some research, and here's what I found,

**Compilers Written in C:**

- **GCC (GNU Compiler Collection):** One of the most widely used compilers, GCC, is primarily written in C. It supports a wide range of programming languages, including C, C++, Objective-C, Fortran, and Ada.
- **LLVM (Low Level Virtual Machine):** Another popular compiler infrastructure, LLVM, is also written in C. It provides a framework for building compilers and runtime systems for various programming languages.

**Programming Languages Written in C:**

- **Perl:** This dynamic programming language was originally written in C. It's known for its regular expression capabilities and text processing tasks.
- **Python:** While Python is now primarily written in CPython, the reference implementation, it was originally developed in C. CPython's interpreter and standard library are implemented in C.
- **Ruby:** Ruby was also initially written in C. Its interpreter, Matz's Ruby Interpreter (MRI), is implemented in C.

**Syntax Patterns and Code Snippets:**

- **Curly Braces for Blocks:** The use of curly braces to delimit code blocks is a common syntax pattern that originated in C. This syntax is used in many languages, including C++, Java, JavaScript, and Python.
- **Semicolons at the End of Statements:** Another C-inspired syntax pattern is the use of semicolons to terminate statements. This is a common practice in many

## Start with C or Learn C Now

If you're new to programming or eager to learn, many recommend starting with a low-level language like C. C has fewer built-in libraries and packages, requiring you to implement many things yourself. This deep dive into how computer programs work makes it easier to learn other languages later.

While today's demand also suggests starting with Rust (another low-level language gaining popularity), it's essential to begin with programming fundamentals and work your way up. As the famous YouTuber "Fireship" mentioned in his "[10 regrets of experienced programmer](https://www.youtube.com/watch?v=ehTIhQpj9ys)" video, this approach is crucial.

Here’s what a LLM will give you about pros and cons of learning C, I saved some time for you,

## Pros of Learning C

Based on the given context, here are some of the advantages of starting with C:

- **Deep Understanding of Computer Fundamentals:** C requires manual memory management and a close interaction with the hardware. This can provide a solid foundation in understanding how computer programs work at a low level.
- **Versatility:** C is a versatile language that can be used for various applications, from system programming to embedded systems and game development.
- **Efficiency:** C is known for its efficiency, making it suitable for performance-critical applications.
- **Solid Foundation for Other Languages:** The knowledge and skills acquired while learning C can be easily transferred to other programming languages, especially those with similar syntax or concepts.

## Cons of Learning C

- **Steeper Learning Curve:** C can have a steeper learning curve compared to some higher-level languages due to its manual memory management and lower-level abstractions.
- **Time-Consuming:** Implementing many things from scratch can be time-consuming, especially for beginners.
- **Error-Prone:** Manual memory management can lead to errors like memory leaks or segmentation faults if not handled carefully.
- **Less Readable:** C code can be less readable compared to some higher-level languages due to its lower-level syntax and the need for more explicit memory management.

Remember that C is a structural programming language and uses manual memory allocation and deallocation and uses a method called Pointers. These concepts will take some practice and a deeper understanding and pay attention to them closely. 

If you want to become a Game Developer, a C# or C++ Developer or work on Embedded Systems , it’s necessary that you follow along.

The creator of C, *Dennis Richie* told that “*The only way to learn a new programming language is by writing programs in it.*” So if you are self taught or just getting to learn C in university as I did just engage in the task rather than copying and pasting code from ChatGPT for your assignments. 

I highly recommend you read “***C Programming Language: ANSI C***” by the creator of C and ***Brian Kernighan*. We had this as a reference book in the library.** 

**You can also study open source code bases of notable projects written in C. Here are few examples. Search them with the keywork ‘GitHub’ and you’ll find the code repository.** 

### Operating Systems

- **Linux:** The most widely used open-source operating system, written primarily in C.
- **FreeBSD:** Another popular open-source operating system, known for its stability and performance.

### Databases

- **MySQL:** A widely used relational database management system.
- **PostgreSQL:** A powerful, object-relational database system.
- **SQLite:** A lightweight, embedded SQL database engine.

### Web Servers

- **Apache HTTP Server:** One of the most popular web servers in the world.
- **Nginx:** A high-performance web server known for its efficiency and scalability.

### Programming Tools

- **GCC (GNU Compiler Collection):** A popular compiler for C, C++, Objective-C, Fortran, and other languages.
- **LLVM (Low Level Virtual Machine):** A compiler infrastructure that can be used to build compilers for various programming languages.
- **Git:** A distributed version control system used for tracking changes in source code.

### Libraries and Frameworks

- **SDL (Simple DirectMedia Layer):** A cross-platform library for developing multimedia applications.
- **OpenCV (Open Source Computer Vision Library):** A library for computer vision tasks like image processing and object detection.
- **FFmpeg:** A complete, cross-platform solution for handling various multimedia formats.

### Other Notable Projects

- **Vim:** A highly configurable text editor.
- **Emacs:** Another popular text editor with a vast ecosystem of extensions.
- **OpenSSL:** A cryptography library used for secure communication.
- **curl:** A library for transferring data using various protocols.

Ok. I’ll end this here. I wanted to convince you to learn a low level programming language like C for the sake of learning how to write computer programs. Don’t do the same mistake I did and ignore it in the first time, you’ll have to come back. Have a nice time coding. Oh! Drink a coffee beforehand.
