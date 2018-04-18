import {trigger, animate, style, group, query, transition} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
	// this will skip on load
	transition(':enter, initial => *', []),

	transition('home => examples', [
		group([
			query(':enter, :leave', style({ position: 'fixed', width: '100%' })
			, { optional: true }),
			query(':enter', [
				style({ transform: 'translateX(100%)' }),
				animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
			], { optional: true }),
			query(':leave', [
				style({ transform: 'translateX(0%)' }),
				animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
			], { optional: true }),
		])
	]),

	transition('examples => home', [
		query(':enter, :leave', style({ position: 'fixed', width: '100%' })
		, { optional: true }),
		group([
			query(':enter', [
				style({ transform: 'translateX(-100%)' }),
				animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
			], { optional: true }),
			query(':leave', [
				style({ transform: 'translateX(0%)' }),
				animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
			], { optional: true }),
		])
	]),

	transition('* => home', [
		query(':enter, :leave', style({ position: 'fixed', width: '100%' })
		, { optional: true }),
		group([
			query(':enter', [
				style({ transform: 'translateX(-100%)' }),
				animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
			], { optional: true }),
			query(':leave', [
				style({ transform: 'translateX(0%)' }),
				animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
			], { optional: true }),
		])
	]),

	transition('* => examples', [
		query(':enter, :leave', style({ position: 'fixed', width: '100%' })
		, { optional: true }),
		group([
			query(':enter', [
				style({ transform: 'translateX(-100%)' }),
				animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
			], { optional: true }),
			query(':leave', [
				style({ transform: 'translateX(0%)' }),
				animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
			], { optional: true }),
		])
	]),

	transition('* <=> *', [
		query(':enter, :leave', style({ position: 'fixed', width: '100%' })
		, { optional: true }),
		group([
			query(':enter', [
				style({ transform: 'translateX(100%)' }),
				animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
			], { optional: true }),
			query(':leave', [
				style({ transform: 'translateX(0%)' }),
				animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
			], { optional: true }),
		])
	]),
]);
