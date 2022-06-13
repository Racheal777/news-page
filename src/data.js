import React from 'react'

let articles = [
    {
        "id": 1001,
        "author": "Tara Prasad Routray",
        "title": "Top 30 Git Commands You Should Know To Master Git ",
        "description": `
                    Set Up Your Username and Email. The username is required to link commits
                    with your name. It is not the same as your GitHub account username, which
                    you use to login into your GitHub profile. You can set or update your 
                    username by using the git config command. The new name will automatically
                    reflect in any future commits that you push to GitHub from the command line.`,
        "url": "https://medium.com/gitconnected/top-30-git-commands-you-should-know-to-master-git-cli-f04e041779bc",
        "source": "ABC News",
        "image": "../images/pics2.jpg",
        "published_at": "2021-07-26T01:04:23+00:00"
    },

    {
        "id": 1002,
        "author": "Eric Elliott",
        "title": "10 Interview Questions Every JavaScript Developer Should Know",
        "description": `
        1.Can you name two programming paradigms important for JavaScript app developers?
        JavaScript is a multi-paradigm language, supporting imperative/procedural 
        programming along with OOP (Object-Oriented Programming) and functional programming.
         JavaScript supports OOP with prototypal inheritance.

         2. What is functional programming?
        Functional programming produces programs by composing mathematical
         functions and avoids shared state & mutable data. Lisp (specified in 1958) 
         was among the first languages to support functional programming, and was heavily 
         inspired by lambda calculus. Lisp and many Lisp family languages are still in common use today.
        
        .`,
        "url": "https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95",
        "source": "Medium",
        "image": "../images/pics3.jpg",
        "published_at": "2022-07-26T01:04:23+00:00"
    },

    {
        "id": 1003,
        "author": "Brandon Morelli",
        "title": "JavaScript: What the heck is a Callback? ",
        "description": `
        What is a Callback? Simply put: A callback is a function that is to be
         executed after another function has finished executing — hence the name ‘call back’.
        More complexly put: In JavaScript, functions are objects. Because of this,
         functions can take functions as arguments, and can be returned by other functions.
          Functions that do this are called higher-order functions. Any function that is passed as an argument is called a callback function.`,

        "url": "https://medium.com/codeburst/javascript-what-the-heck-is-a-callback-aba4da2deced",
        "source": "Medium",
        "image": "../images/pics4.jpg",
        "published_at": "2022-02-06T01:04:23+00:00"
    },

    {
        "id": 1004,
        "author": "Daniel Yerimah",
        "title": "ReactJS: Spread Operator(…) simplified ",
        "description": `
        The Spread operator is a Javascript operator that can be used when all 
        elements from an object or array need to be included in a list of some kind.
         It offers you access to the internals of an iterable.
        The word “iterable” refers to a group of data types in computer science. 
        Arrays, object literals, and strings, to be specific.
        
        In a simpler term, a Spread operator allows us to quickly copy 
        all or part of an existing array or object into another array or object.
         It is an ES6 syntax represented with a three-dot (…).`,

        "url": "https://medium.com/@danielyerimah/reactjs-spread-operator-simplified-343e3592d95c",
        "source": "Medium",
        "image": "../images/pics5.jpg",
        "published_at": "2021-08-16T01:04:23+00:00"
    },

    {
        "id": 1005,
        "author": "Pranita Patil",
        "title": "Node Js Basics",
        "description": `
        Node.js is an open-source framework based on JavaScript. It was developed by Ryan Dahl in 2009.
        It is designed from the JavaScript V8 Engine of Google Chrome.
        Node.js allows the JavaScript to run on the machine –
        It allows access to the file system on the machine
        It listens to network traffic on the machine
        It can handle HTTP requests like a Web server and send back responses including files
        It can directly access databases from JavaScript`,

        "url": "https://medium.com/@pranitapatilk/node-js-basics-34d7f9c3ef3b",
        "source": "Medium",
        "image": "../images/pics6.jpg",
        "published_at": "2022-03-16T01:04:23+00:00"
    },
]



export function data() {
  return (articles)
}

export function getArticle(id) {
    return articles.find((data) => data.id === id)
    
}
