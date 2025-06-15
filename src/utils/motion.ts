import { cubicBezier } from 'motion'

export const motionEasing = {
  expoInOut: cubicBezier(0.87, 0, 0.13, 1),
  expoOut: cubicBezier(0.14, 1, 0.34, 1),
  materialBase: cubicBezier(0.2, 0, 0, 1),
  materialAccel: cubicBezier(0, 0, 0, 1),
}
