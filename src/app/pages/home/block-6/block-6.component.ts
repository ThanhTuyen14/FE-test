import { Component } from '@angular/core';

interface MomentCard {
  image: string;
  title: string;
  user: string;
}

@Component({
  selector: 'app-block-6',
  imports: [],
  templateUrl: './block-6.component.html',
  styleUrl: './block-6.component.scss',
})
export class Block6Component {
  mainMoment = {
    image: 'assets/images/fruit-platter.webp',
    title: 'La famille',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    user: 'Nguyen Trong Nhân',
    date: '24 Sep 2024',
  };

  momentCards: MomentCard[] = [
    {
      image: '/assets/images/avocado.png',
      title: 'Avocado',
      user: 'Anthony Durand',
    },
    {
      image: '/assets/images/cherry.png',
      title: 'Cherries',
      user: 'Anthony Durand',
    },
    {
      image: '/assets/images/orange.png',
      title: 'Orange',
      user: 'Anthony Durand',
    },
    {
      image: '/assets/images/tangerine.png',
      title: 'Tangerine',
      user: 'Anthony Durand',
    },
  ];
}
