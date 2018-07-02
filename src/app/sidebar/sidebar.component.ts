import { Component, Input, OnChanges } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private cs:CommonService){}

  sidebarItems = [
    {link:'/',label:'dashboard',icon:'dashboard'},
    {label:'components',icon:'apps',subItem:[
      {link:'/components/buttons',label:'buttons',icon:'b'},
      {link:'/components/grids',label:'grid System',icon:'gs'},
      {link:'/components/panels',label:'panels',icon:'p'},
      {link:'/components/alerts',label:'alerts',icon:'a'},
      {link:'/components/notifications',label:'notifications',icon:'n'},
      {link:'/components/icons',label:'icons',icon:'i'},
      {link:'/components/typography',label:'typography',icon:'t'},
    ]},
    {label:'forms',icon:'ballot', subItem:[
      {link:'/forms/elements',label:'Form Elemets',icon:'fe'},
      {link:'/forms/validations',label:'Form Validation',icon:'fv'},
      {link:'/forms/examples',label:'Form Examples',icon:'se'}
    ]},
    {label:'pages',icon:'pages',subItem:[
      {link:'/pages/notfound',label:'Not Found',icon:'nf'},
      {link:'/pages/auth',label:'Auth',icon:'A'}
    ]}, 
    {link:'/tables', label:'tables',icon:'grid_on'}, 
    {link:'/charts', label:'charts',icon:'show_chart'}, 
    {link:'/maps', label:'maps',icon:'place'}, 
    {link:'/editors', label:'editors',icon:'edit'}, 
    {link:'/calendar', label:'calendar',icon:'date_range'} 
  ];

}
