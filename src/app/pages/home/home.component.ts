import { Component } from '@angular/core';
import { BannerComponent } from '../../shares/ui/banner/banner.component';
import { ChatWithUsComponent } from '../../shares/ui/chat-with-us/chat-with-us.component';
import { Block1Component } from './block-1/block-1.component';
import { Block2Component } from './block-2/block-2.component';
import { Block3Component } from './block-3/block-3.component';
import { Block4Component } from './block-4/block-4.component';
import { Block5Component } from './block-5/block-5.component';
import { Block6Component } from './block-6/block-6.component';

@Component({
  selector: 'app-home',
  imports: [
    BannerComponent,
    ChatWithUsComponent,
    Block1Component,
    Block2Component,
    Block3Component,
    Block4Component,
    Block5Component,
    Block6Component,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
