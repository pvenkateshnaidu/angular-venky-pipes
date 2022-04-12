import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FlyingHeroesPipe } from './pure.pipe';
import { FieldPipe3 } from './field.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, FlyingHeroesPipe, FieldPipe3],
  bootstrap: [AppComponent],
})
export class AppModule {}
