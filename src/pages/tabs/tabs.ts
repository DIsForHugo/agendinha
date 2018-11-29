import { Component } from '@angular/core';

import { SonoPage } from '../sono/sono';
import { ListinhaPage } from '../listinha/listinha';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ListinhaPage;
  tab2Root = HomePage;
  tab3Root = SonoPage;

  constructor() {

  }
}
