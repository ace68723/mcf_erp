import { TransactionComponent } from './transaction/transaction.component';
import { SettlementComponent } from './settlements/settlements.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScriptLoaderService } from './../js/script-loader.service';
import { AppService } from './app.service';
import { FooterComponent } from './footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ROUTES } from './app.routes';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.componnet';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    SettlementComponent,
    LoginComponent,
    DashboardComponent,
    TransactionComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [AuthGuard, AppService, ScriptLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
