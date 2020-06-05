import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VIKINGS BARBER SHOP';
}
 /*let indice: number = 0;
      carousel();

      function carousel() {
        let i: number;
       let x: any = document.getElementsByClassName("miSlide");
        for (i = 0; i < x.length; i++) {
          x[i].display = "none";
        }
        indice++;
        if (indice > x.length) {indice = 1}
        x[indice-1].style.display = "block";
        setTimeout(carousel, 3000); //Cambia cada 3 segundos
      }

      var indices = 0;
      carousell();

      function carousell() {
        var j;
        var y = document.getElementsByClassName("miSlider_p");
        for (j = 0; j < y.length; j++) {
          y[j].style.display = "none";
        }
        indices++;
        if (indices > y.length) {indices = 1}
        y[indices-1].style.display = "block";
        setTimeout(carousell, 3000); //Cambia cada 3 segundos
      }

      var indicesp = 0;
        carousellp();

        function carousellp() {
          var k;
          var z = document.getElementsByClassName("miSlider_p2");
          for (k = 0; k < z.length; k++) {
            z[k].style.display = "none";
          }
          indicesp++;
          if (indicesp > z.length) {indicesp = 1}
          z[indicesp-1].style.display = "block";
          setTimeout(carousellp, 3000); //Cambia cada 3 segundos
        }

        var indices_p = 0;
          carousell_p();

          function carousell_p() {
            var l;
            var w = document.getElementsByClassName("miSlider_p3");
            for (l = 0; l < w.length; l++) {
              w[l].style.display = "none";
            }
            indices_p++;
            if (indices_p> w.length) {indices_p = 1}
            w[indices_p-1].style.display = "block";
            setTimeout(carousell_p, 3000); //Cambia cada 3 segundos
          }*/
