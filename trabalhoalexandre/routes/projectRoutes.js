const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

router.post('/', async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.status(201).send(project);
});

router.get('/', async (req, res) => {
  const projects = await Project.find().populate('user');
  res.send(projects);
});

router.put('/:id', async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(project);
});

router.delete('/:id', async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.send({ message: 'Projeto deletado com sucesso' });
});

module.exports = router;
