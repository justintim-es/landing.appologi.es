import { animate, style, transition, trigger } from "@angular/animations";

export const landingCurtainLeaveLeft = trigger('landingCurtainLeaveLeft', [
  transition(':leave', [
    style({
      transform: 'translateX(0) translateY(0)',
      position: 'absolute',
      minWidth: '100%',
      zIndex: 2
    }), animate(500, style({
      transform: 'translateX(-100%) translateY(0)',
      position: 'absolute',
      minWidth: '100%',
      zIndex: 2
    }))
  ])
])
export const landingCurtainLeaveRight = trigger('landingCurtainLeaveRight', [
  transition(':leave', [
    style({
      transform: 'translateX(0) translateY(100%)',
      position: 'absolute',
      minWidth: '100%',
      zIndeX: 2,
    }), animate(500, style({
      transform: 'translateX(100%) translateY(100%)',
      position: 'absolute',
      minWidth: '100%',
      zIndex: 2
    }))
  ])
])
