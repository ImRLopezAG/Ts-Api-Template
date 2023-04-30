import { Router } from 'express'
import { authenticate } from '@/auth/auth.controller'

export const auth = Router()

auth.post('/Login', authenticate)
