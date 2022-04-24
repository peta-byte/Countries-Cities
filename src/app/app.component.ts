import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Countries & Cities';
  data: any[];

  info = [
    {
      id: "0",
      name: "Kenya",
      children: [
        {
          id: "7",
          name: "Kisumu"
        }
      ]
    },
    {
      id: "1",
      name: "Uganda",
      children: [
        {
          id: "8",
          name: "Kampala"
        }
      ]
    },
    {
      id: "2",
      name: "Tanzania",
      children: [
        {
          id: "5",
          name: "Dodoma",
          children: [
            {
              id: "9",
              name: "University of Dodoma"
            },
            {
              id: "10",
              name: "Gaddafi Mosque"
            },
            {
              id: "11",
              name: "Nyerere Square"
            }
          ]
        },
        {
          id: "6",
          name: "Dar es Salaam",
          children: [
            {
              id: "12",
              name: "Village Museum"
            }
          ]
        }
      ]
    },
    {
      id: "3",
      name: "Sudan"
    },
    {
      id: "4",
      name: "Somalia"
    }
  ];

  ngOnInit(): void {
      this.fetchData().then((data: any[]) => {
        this.data = data;
      });
  }
  
  fetchData() {
    return new Promise(resolve => {
      setTimeout(resolve, 100, this.info);
    });
  }
}
