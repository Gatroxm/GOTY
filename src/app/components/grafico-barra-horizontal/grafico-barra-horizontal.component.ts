import { Component, OnDestroy, OnInit } from '@angular/core';
@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnInit, OnDestroy {

  resultados: any[] = [
    {
      name: 'Juego 1',
      value: 20
    },
    {
      name: 'Juego 2',
      value: 23
    },
    {
      name: 'Juego 3',
      value: 50
    },
    {
      name: 'Juego 4',
      value: 30
    }
  ];
  multi: any[];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = 'nightLights';

  intervalo;
  constructor() {
    const newResults = [...this.resultados];
    this.intervalo = setInterval( () => {
      for( let i in newResults) {
        newResults[i].value = Math.round( Math.random() * 500);
      }
      this.resultados = [...newResults];
    }, 1500);
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }
}
