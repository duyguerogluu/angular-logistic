import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EmptyPagesComponent } from './empty-pages/empty-pages.component';
import { FaqsComponent } from './faqs/faqs.component';
import { GalleryComponent } from './gallery/gallery.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { MailComposeComponent } from './mail-compose/mail-compose.component';
import { MailInboxComponent } from './mail-inbox/mail-inbox.component';
import { PricingTablesComponent } from './pricing-tables/pricing-tables.component';
import { ProfileComponent } from './profile/profile.component';
import { ServicesComponent } from './services/services.component';
import { TermsComponent } from './terms/terms.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'about-company',
        component: AboutCompanyComponent
      },
      
      {
        path: 'edit-profile',
        component: EditProfileComponent
      },
      {
        path: 'empty-page',
        component: EmptyPagesComponent
      },
      {
        path: 'faqs',
        component: FaqsComponent
      },
      {
        path: 'gallery',
        component: GalleryComponent
      },
      {
        path: 'invoice',
        component: InvoiceComponent
      },
      {
        path: 'mail-compose',
        component: MailComposeComponent
      },
      {
        path: 'mail-inbox',
        component: MailInboxComponent
      },
      {
        path: 'pricing-tables',
        component: PricingTablesComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'services',
        component: ServicesComponent
      },
      {
        path: 'terms',
        component: TermsComponent
      },

    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }