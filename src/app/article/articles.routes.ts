import {Routes} from '@angular/router'
import { ArticleDetailComponent } from './article-detail/article-detail.component'
import { ArticleListComponent } from './article-list/article-list.component'


export const ARTICLES_ROUTES: Routes = [
     {path: '', component: ArticleDetailComponent},
     {path: 'slug', component: ArticleListComponent},
]