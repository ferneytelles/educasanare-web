import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent implements OnInit {

  trainings = [
    {
      img: 'assets/images/training1.png',
      title: 'capacitación',
      text: 'Capacitación a padres de familia en el uso y aprovechamiento del sistema para el seguimiento del proceso enseñanza aprendizaje.',
      scope: '1000 padres',
      hours: 2
    },
    {
      img: 'assets/images/training2.png',
      title: 'capacitación',
      text: 'Capacitación a estudiantes en el uso y aprovechamiento del sistema de evaluación de competencias pre pruebas saber 3, 5, 9 y 11.',
      scope: '3000 estudiantes',
      hours: 2
    },
    {
      img: 'assets/images/training3.png',
      title: 'asesoría institucional',
      text: 'Asesoría y acompañamiento para el diagnóstico y reformulación del PEI y articulación a al malla currricular de metodologías STEM+A y medicación TIC, para dies (10) I.E.O.',
      scope: '10 instituciones educativas asesoradas y acompañadas con el PEI reformulado.',
      hours: 0
    },
    {
      img: 'assets/images/training4.png',
      title: 'asesoría institucional',
      text: 'Asesoría y acompañamiento a docentes de las 10 sedes educativas focalizadas para el diseño y construcción instruccional d recursos, tematicas...',
      scope: 'Lecciones de 150 áreas del núcleo común, tres por área co-creadascon docentes de la I.E.O y montadas en el LMS.',
      hours: 0
    }
  ];

  seminars = [
    {
      img: 'assets/images/seminar1.png',
      title: 'seminario-taller',
      text: 'Generación de habilidades en co-creación de contenidos digitales y la gestión de entornos virtualizados de aprendizaje.',
      scope: '150 docentes',
      hours: 20
    },
    {
      img: 'assets/images/seminar2.png',
      title: 'seminario-taller',
      text: 'Apropiación de herramienta virtual para la gestión, elaboración y análisis de simulacros Pruebas Saber 3, 5, 9 y 11.',
      scope: '150 docentes',
      hours: 20
    },
    {
      img: 'assets/images/seminar3.png',
      title: 'seminario-taller',
      text: ' Adopción teórico-práctica y metodológica de los laboratorios STEM.',
      scope: '150 docentes',
      hours: 20
    },
    {
      img: 'assets/images/seminar4.png',
      title: 'seminario-taller',
      text: 'Creación y producción audio visual 4.0 y transmedial para la generación de habilidades Naranja como: conservación de patrimonio inmaterial, cultura llanera y emprendimiento cultural.',
      scope: '20 docentes',
      hours: 30
    },
    {
      img: 'assets/images/seminar5.png',
      title: 'seminario-taller',
      text: 'Creación y producción audio visual 4.0 y transmedial para la generación de habilidades Naranja como: conservación de patrimonio inmaterial, cultura llanera y emprendimiento cultural.',
      scope: '150 estudiantes',
      hours: 30
    }
  ];

  slideConfig = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: false,
    // autoplay: true,
    // autoplaySpeed: 5000,
    // pauseOnHover: true,
    arrows: true
  };

  constructor() { }

  ngOnInit(): void {
  }

}
