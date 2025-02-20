# Frontend Restaurante Gustov

<p align="center">
  <a href="https://angular.io/" target="blank"><img src="https://angular.io/assets/images/logos/angular/angular.svg" width="120" alt="Angular Logo" /></a>
</p>

## Descripción

Frontend para el sistema de gestión del Restaurante Gustov, desarrollado con Angular y utilizando la plantilla Sakai de PrimeNG para la interfaz de usuario.

## Requisitos Previos

- Node.js versión 18.18.0
- Angular CLI versión 16.2.16
- Backend del Restaurante Gustov en ejecución

## Tecnologías Utilizadas

- Angular 16.2.16 como framework frontend
- [Sakai](https://sakai.primeng.org/) como plantilla UI
- PrimeNG para componentes de interfaz
- TypeScript

## Configuración e Instalación

1. Clonar el repositorio
2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor de desarrollo:
```bash
ng serve
```

4. Navegar a `http://localhost:4200/`

**Nota**: El proyecto está configurado para conectarse automáticamente con el backend. No es necesario realizar configuraciones adicionales.

## Funcionalidades Principales

### 1. Gestión de Platos
- Listado de platos disponibles
- Creación y edición de platos
- Gestión de imágenes de platos
- Actualización de disponibilidad

### 2. Sistema de Ventas
- Registro de nuevas ventas
- Visualización de historial de ventas
- Detalles de ventas por cliente
- Reportes diarios de ventas

### 3. Gestión de Usuarios
- Panel de administración de usuarios
- Control de roles y permisos
- Administración de perfiles
- Estado de usuarios activos/inactivos

### 4. Características Adicionales
- Interfaz responsive
- Tema personalizable
- Dashboard con estadísticas
- Gestión de imágenes con vista previa

## Estructura del Proyecto

El proyecto sigue la estructura estándar de Angular y está organizado en los siguientes módulos principales:
- Platos (Dishes)
- Ventas (Sales)
- Usuarios (Users)
- Componentes compartidos
- Servicios de integración

## Plantilla Sakai

Este proyecto utiliza la plantilla administrativa Sakai de PrimeNG, que incluye:
- Diseño moderno y profesional
- Componentes PrimeNG preconfigurados
- Menú lateral personalizable
- Temas y estilos predefinidos
- Layouts responsivos

## Integración con Backend

El frontend se conecta automáticamente con el backend en:
- Gestión de platos y menús
- Procesamiento de ventas
- Administración de usuarios
- Carga y gestión de imágenes

## Desarrollo

Para generar nuevos componentes:
```bash
ng generate component nombre-componente
```

Para otros elementos:
```bash
ng generate [directive|pipe|service|class|guard|interface|enum|module]
```

## Notas Adicionales

- La aplicación se recargará automáticamente cuando se realicen cambios
- Asegúrese de tener el backend en ejecución antes de iniciar el frontend
- La documentación de Sakai está disponible en su [sitio oficial](https://sakai.primeng.org/)

## Soporte

Para reportar problemas o sugerir mejoras, por favor crear un issue en el repositorio del proyecto.