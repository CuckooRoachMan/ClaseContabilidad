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
    haber:0,
  };

  nuevoPda={
    fecha_creacion: null,
    numeroPda: 0,
    nombreRegistro:'',
    listaLineas:[] as any,
    totalDebe: 0,
    totalHaber: 0
  };

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
  ]

  constructor() { }

  ngOnInit(): void {
  }

  agregarLinea(){

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
    console.log(this.nuevoPda)
  }


}
