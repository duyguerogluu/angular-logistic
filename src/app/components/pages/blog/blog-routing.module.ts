import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  {
    path: 'blog',
    children: [
      {
        path: 'blog',
        component: BlogComponent,
      },
      {
        path: 'blog-details',
        component: BlogDetailsComponent,
      },
      {
        path: 'blog-post',
        component: BlogPostComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
