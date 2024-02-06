import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MailInboxComponent } from './mail-inbox/mail-inbox.component';
import { MailComposeComponent } from './mail-compose/mail-compose.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { ServicesComponent } from './services/services.component';
import { FaqsComponent } from './faqs/faqs.component';
import { TermsComponent } from './terms/terms.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PricingTablesComponent } from './pricing-tables/pricing-tables.component';
import { EmptyPagesComponent } from './empty-pages/empty-pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryModule, ModalGalleryService } from '@ks89/angular-modal-gallery';  
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogModule } from './blog/blog.module';
import { FileManagerModule } from './file-manager/file-manager.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import 'hammerjs';
import 'mousetrap';


@NgModule({
  declarations: [
    ProfileComponent,
    EditProfileComponent,
    MailInboxComponent,
    MailComposeComponent,
    GalleryComponent,
    AboutCompanyComponent,
    ServicesComponent,
    FaqsComponent,
    TermsComponent,
    InvoiceComponent,
    PricingTablesComponent,
    EmptyPagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgbModule,
    GalleryModule,          //Pages in altındaki Dosyaları
    NgSelectModule,
    SharedModule,
    BlogModule,
    FileManagerModule,
    ECommerceModule
  ],
  providers:[
    ModalGalleryService
  ]
})
export class PagesModule { }
