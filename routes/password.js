import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import PasswordProvider from '../providers/PasswordProvider';
import MemoryStorage from '../storage/MemoryStorage';

const provider = new PasswordProvider(new MemoryStorage());
const router = Router();

router.get('/:name', asyncHandler(async (req, res) => {
  res.status(200).json({ password: await provider.get(req.params.name) });
}));

router.post('/:name', asyncHandler(async(req, res) => {
  await provider.save(req.params.name, req.body.password);
  res.status(201).send()
}));

module.exports = router;