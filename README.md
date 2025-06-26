# ALAB 320H.3.1 - Rendering Arrays from State

## Overview

This lab demonstrates the ability to create React components dynamically by rendering data stored in state. Learners will practice initializing state with complex data structures and passing that data down to child components as props for rendering.

---

## Learning Objectives

By completing this lab, learners will be able to:

- Initialize React state with an array of objects.
- Create reusable React components that render based on data passed via props.
- Map over arrays in state to dynamically render multiple components.
- Understand the flow of data from parent to child components.
  
---

## Tools Used

- React (functional components)
- React Hooks (`useState`)
- Optional: VSCode or other code editors for development

---

## Instructions

1. Create a React project named **"Rendering Arrays in React"** using your preferred method.
2. Use the provided learner array data to initialize state in the `<App>` component as an object with a `learners` key.
3. Code the `<App>` component to:
   - Hold the state with the learners data.
   - Render a `<Learner>` component for each learner in the `learners` array.
4. Code the `<Learner>` component to:
   - Render the learner's `name` and `bio` properties.
   - Render a `<Score>` component for each score object in the learner's `scores` array.
5. Code the `<Score>` component to:
   - Render the `date` and `score` properties from each score object.

> **Note:** You will not update the state in this lab. The state is only initialized once in the `<App>` component and passed down as props.

---

## Provided Learner Data

```js
[
  {
    name: 'Cait Yomorta',
    bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? Voluptatibus expedita saepe officia optio, commodi totam ratione laudantium ipsum porro molestias, quasi nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae eum pariatur. Aperiam doloremque blanditiis harum voluptate animi fugit beatae asperiores quo, dignissimos sed illum veniam eum accusantium nulla quod voluptatum',
    scores: [
      { date: '2018-02-08', score: 77 },
      { date: '2018-04-22', score: 92 },
      { date: '2018-09-15', score: 68 }
    ]
  },
  {
    name: 'Holly Baird',
    bio: 'Eum molestiae explicabo deserunt, maiores quod eaque omnis tenetur vero ducimus, magnam autem! Quia facere quaerat eum repudiandae dolorum eligendi iure quae. Eos id possimus accusantium, earum animi modi hic.',
    scores: [
      { date: '2018-12-14', score: 88 },
      { date: '2019-01-09', score: 79 },
      { date: '2019-02-23', score: 91 },
      { date: '2019-03-01', score: 95 }
    ]
  },
  {
    name: 'Wes Mungia',
    bio: 'Repudiandae veritatis recusandae quidem tenetur impedit, numquam incidunt enim, adipisci id cupiditate asperiores nam perferendis. Facere odit laborum ipsum autem repellendus natus eius doloremque ullam perferendis. Enim repellendus ut veniam?',
    scores: [
      { date: '2018-10-11', score: 62 },
      { date: '2018-11-24', score: 74 },
      { date: '2018-12-19', score: 85 }
    ]
  }
]
```
Using Vite
Initialize project with React template:

bash
Copy
Edit
npm create vite@latest rendering-arrays-react -- --template react
cd rendering-arrays-react
npm install
Replace contents of src/App.jsx, and add Learner.jsx and Score.jsx components as per the assignment requirements.

Run development server:

bash
Copy
Edit
npm run dev# ALAB-320H.3.1---Rendering-Arrays-from-State
