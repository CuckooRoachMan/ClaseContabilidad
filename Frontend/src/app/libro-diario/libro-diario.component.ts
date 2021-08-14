import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libro-diario',
  templateUrl: './libro-diario.component.html',
  styleUrls: ['./libro-diario.component.css']
})
export class LibroDiarioComponent implements OnInit {

  nuevaLinea={
    numero:0,
    cuenta: '',
    subcuenta: '',
    debe:0,
    haber:0
  };

  nuevoPda={
    fecha_creacion: null,
    numeroPda: 0,
    nombreRegistro:'',
    listaLineas:[] as any,
    totalDebe: 0,
    totalHaber: 0
  };
  listaPda=[] as any;

  listaTablasT=[      //Variable no en uso, para nested loops
    {cuenta:"Bancos",
    deberes: [] as any,
    haberes: [] as any
    }
  ]
  registrosT=[] as any;
  tablasT=[] as any;

  hasManyEntries=false;  //variable de control si hay entradas en haber y en una sola linea
  pdaNoCuadra=false;    //variable de control si el debe y haber del pda no cuedra
  faltanCamposPda=false;

  //nuevoPda.listaLineas= [] as  any;

  cuentas=[
    'Bancos',
    'Caja Chica',
    'Caja General',
    'Cuentas por Cobrar',
    'Funcionarios y empleados',
    'Anticipo a empleados',
    'Desudores Varios',
    'Rentas por cobrar',
    'Documentos por cobrar',
    'Inventario',
    'Documentos por cobrar',
    'Impuestos Pagados por Anticipado',
    'Publicidad pagada por anticipado',
    'Alquileres pagados por anticipados',
    'Seguros Pagados por Anticipados',
    'Materiales de aseo',
    'Papeleria y utiles',
    'Terrenos',
    'Edificios',
    'Mobilaria y equipos',
    'Equipo de transporte',
    'Maquinaria y Equipo',
    'Equipo de Computo',
    'proveedores',
    'Acreedores Varios',
    'Intereses por Pagar',
    'Impuestos por pagar',
    'Rentas cobradas por anticipado',
    'Documentos por Pagar',
    'Anticipo a Clientes',
    'Comisiones por pagar',
    'Sueldos Y salarios por pagar',
    'Prestamos Bancarios',
    'Hipotecas por Pagar',
    'Beneficios a Empleados',
    'Capital Social',
    'Reserva Legal',
    'ventas',
    'Otros Ingresos',
    'Devoluciones sobre ventas',
    'Descuentos y rebajas sobre ventas',
    'Compras',
    'Gastos sobre compras',
    'Devoluciones sobre Compras',
    'Descuentos y rebajas sobre compras',
    'Gastos de administracion',
    'Gastos de Ventas',
    'Gastos Financieros',
    'Otros Gastos'
  ];


  constructor() { }

  ngOnInit(): void {
  }

  agregarLinea(){

    if ((this.nuevaLinea.debe+this.nuevaLinea.haber==this.nuevaLinea.debe)||(this.nuevaLinea.debe+this.nuevaLinea.haber==this.nuevaLinea.haber) ){     //si se cumple que suma mas que una de los valores, significa que no es igual y no pasa
      this.hasManyEntries=false;
      this.nuevoPda.listaLineas.push(this.nuevaLinea);
      this.nuevoPda.totalDebe=this.nuevoPda.totalDebe+this.nuevaLinea.debe;
      this.nuevoPda.totalHaber=this.nuevoPda.totalHaber+this.nuevaLinea.haber;
      this.nuevaLinea={
        numero:0,
        cuenta: '',
        subcuenta: '',
        debe:0,
        haber:0,
      };
    }
    else {
      this.hasManyEntries=true;
      this.nuevaLinea.debe=0;
      this.nuevaLinea.haber=0;
      console.log("Too many entries");
      console.log(this.nuevaLinea)
    }

    //console.log(this.nuevoPda)
  }
  agregarPda(){
    if ((this.nuevoPda.nombreRegistro=='')||(this.nuevoPda.fecha_creacion==null)||(this.nuevoPda.totalDebe==0)||(this.nuevoPda.totalHaber==0)){
      this.faltanCamposPda=true;
      console.log("Faltan Campos");
    }
    else if(this.nuevoPda.totalDebe==this.nuevoPda.totalHaber){
      this.faltanCamposPda=false;
      this.pdaNoCuadra=false;
      this.listaPda.push(this.nuevoPda)

      this.nuevoPda.listaLineas.forEach((element:any) => {
          this.registrosT.push({
            cuenta: element.cuenta,
            debe: element.debe,
            haber: element.haber
          });

          if (!(this.tablasT.includes(element.cuenta))){
            this.tablasT.push(element.cuenta);
          }

      });



      console.log("Lista de Pdas")
      console.log(this.listaPda);
      console.log("registrosT")
      console.log(this.registrosT);
      console.log("TablasT")
      console.log(this.tablasT);
    }
    else{
      this.pdaNoCuadra=true;
      console.log("No cuadra")
    }
    //this.crearTablasT();
  }

  crearTablasT(){
    this.listaTablasT.forEach(tabla =>
      this.listaPda.forEach( (pda:any) =>
      {
        pda.listaLineas.forEach((line:any) => {

          console.log("tabla.cuenta");
          console.log(tabla.cuenta);
          console.log(line.cuenta);
          if(tabla.cuenta==line.cuenta){
            tabla.deberes.push(line.debe);
            tabla.haberes.push(line.haber);

          }
          else {
            this.listaTablasT.push({
              cuenta: line.cuenta,
              deberes: [line.debe] as any,
              haberes: [line.haber] as any
              });

          };

        });

      }
    )
  );
  console.log("Tablas T");
  console.log(this.listaTablasT);

}


}
