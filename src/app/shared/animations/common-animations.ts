import {
  trigger,
  state,
  style,
  animate,
  stagger,
  transition,
  query,
} from '@angular/animations';

export const CommonAnimations = {
  hover: trigger('hover', [
    state(
      'down',
      style({
        transform: 'translateY(5%)',
      })
    ),
    state(
      'up',
      style({
        transform: 'translateY(-5%)',
      })
    ),
    transition('void => down, up => down', [animate('400ms ease-in')]),
    transition('down => up', [animate('1s ease-in-out')]),
  ]),
  fadeInDownCascade: trigger('fadeInDownCascade', [
    transition(':enter', [
      query('.cascade', [
        style({ opacity: 0, transform: 'translateY(-40px)' }),
        stagger(150, [
          animate(
            '600ms cubic-bezier(0.35, 0, 0.25, 1)',
            style({ opacity: 1, transform: 'none' })
          ),
        ]),
      ]),
    ]),
  ]),
  slideIn: trigger('slideIn', [
    state('hidden', style({})),
    state(
      'showing',
      style({
        opacity: 1,
        transform: 'none',
        'pointer-events': 'unset',
      })
    ),
    transition('hidden <=> showing', animate('400ms ease-in-out')),
  ]),
};

const firstTime = 450;

export const HeroDesignAnimations = {
  fadeInUp: trigger('fadeInUp', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(60px)' }),
      animate(
        '600ms cubic-bezier(0.35, 0, 0.25, 1)',
        style({ opacity: 1, transform: 'none' })
      ),
    ]),
  ]),
  l1lr: trigger('l1lr', [
    state(
      'initial',
      style({
        transform: 'scaleX(0)',
      })
    ),
    state(
      'final',
      style({
        transform: 'scaleX(100%)',
      })
    ),
    transition('void => initial', []),
    transition('initial => final', [animate(firstTime + 'ms ease-in')]),
  ]),
  l1ud: trigger('l1ud', [
    state(
      'initial',
      style({
        transform: 'scaleY(0)',
      })
    ),
    state(
      'final',
      style({
        transform: 'scaleY(100%)',
      })
    ),
    transition('void => initial', []),
    transition('initial => final', [animate(firstTime + 'ms ease-in')]),
  ]),
  l2lr: trigger('l2lr', [
    state(
      'initial',
      style({
        transform: 'scaleX(0)',
      })
    ),
    state(
      'final',
      style({
        transform: 'scaleX(100%)',
      })
    ),
    transition('void => initial', []),
    transition('initial => final', [
      animate(firstTime + 'ms ' + firstTime + 'ms'),
    ]),
  ]),
  l2ud: trigger('l2ud', [
    state(
      'initial',
      style({
        transform: 'scaleY(0)',
      })
    ),
    state(
      'final',
      style({
        transform: 'scaleY(100%)',
      })
    ),
    transition('void => initial', []),
    transition('initial => final', [
      animate(firstTime + 'ms ' + firstTime + 'ms'),
    ]),
  ]),
  s2lr: trigger('s2lr', [
    state(
      'initial',
      style({
        transform: 'scaleX(0)',
      })
    ),
    state(
      'final',
      style({
        transform: 'scaleX(100%)',
      })
    ),
    transition('void => initial', []),
    transition('initial => final', [
      animate(firstTime + 'ms ' + firstTime + 'ms ease-out'),
    ]),
  ]),
  s2ud: trigger('s2ud', [
    state(
      'initial',
      style({
        transform: 'scaleY(0)',
      })
    ),
    state(
      'final',
      style({
        transform: 'scaleY(100%)',
      })
    ),
    transition('void => initial', []),
    transition('initial => final', [
      animate(firstTime + 'ms ' + firstTime + 'ms ease-out'),
    ]),
  ]),
  l3lr: trigger('l3lr', [
    state(
      'initial',
      style({
        transform: 'scaleX(0)',
      })
    ),
    state(
      'final',
      style({
        transform: 'scaleX(100%)',
      })
    ),
    transition('void => initial', []),
    transition('initial => final', [
      animate(firstTime + 'ms ' + firstTime * 2 + 'ms ease-out'),
    ]),
  ]),
  l3ud: trigger('l3ud', [
    state(
      'initial',
      style({
        transform: 'scaleY(0)',
      })
    ),
    state(
      'final',
      style({
        transform: 'scaleY(100%)',
      })
    ),
    transition('void => initial', []),
    transition('initial => final', [
      animate(firstTime + 'ms ' + firstTime * 2 + 'ms ease-out'),
    ]),
  ]),
};
