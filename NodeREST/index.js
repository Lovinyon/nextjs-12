//express import
const express = require('express');
const app = express();
app.use(express.json());

//obj定義
const courses = [
  { id: 1, name: 'computer science' },
  { id: 2, name: 'information technology' },
  { id: 3, name: 'business intelligence' },
];

//READ API
app.get('/api/courses', (req, res) => {
  res.send(courses);
});

//POST API
app.post('/api/courses', (req, res) => {
  console.log(req);
  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

//UPDATE API
app.put('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('The course with the given');

  course.name = req.body.name;
  res.send(course);
})

//DELETE API
app.delete('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('The course with the given ID was not found.');

  const index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(course);
});

//port指定(localhost:3000)
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));