import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactContainerComponent } from './contact-container/contact-container.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IconComponent } from './header/icon/icon.component';
import { SearchComponent } from './header/search/search.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactContainerComponent,
    SidebarComponent,
    IconComponent,
    SearchComponent,
    ContactCardComponent,
    SidebarItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
