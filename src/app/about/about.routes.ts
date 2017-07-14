import { AboutComponent } from './about.component';

 export const AboutRoutes = [
	{
		path: '',
		component: AboutComponent,
		children: [
			// { path: '', redirectTo: 'post', pathMatch: 'full' },
			// { path: 'post', loadChildren: '../post/post.module#PostModule' }
		]
	}
];