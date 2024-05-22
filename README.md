# Aplicación del clima:  React + TypeScript + Vite 

# Documentación de la Aplicación del Clima

### Descripción de la Aplicación:

La aplicación consta de una sola pantalla. En esta pantalla, hay un componente creado con React Hook Form que se encarga de establecer las variables del store creado con Zustand para permitir la comunicación con las APIs de terceros. Para mantener la persistencia de las variables se utiliza el middleware
provisto por Zustand "Persist" que usa por defecto el localStore nativo de los navegadores.

Esta misma cuenta con un diseño adaptado tanto para teléfonos móviles como para computadoras de escritorio.

## Instalación
Por favor, sigue estos pasos para instalar y ejecutar la aplicación.

<details>
  <summary>Usando npm</summary>

  1. Clona el repositorio:
     ```bash
     git clone https://github.com/usuario/repo.git
     ```

  2. Navega al directorio del proyecto:
     ```bash
     cd repo
     ```

  3. Instala las dependencias utilizando npm:
     ```bash
     npm install
     ```

</details>

<details>
  <summary>Usando yarn</summary>

  1. Clona el repositorio:
     ```bash
     git clone https://github.com/usuario/repo.git
     ```

  2. Navega al directorio del proyecto:
     ```bash
     cd repo
     ```

  3. Instala las dependencias utilizando yarn:
     ```bash
     yarn install
     ```

</details>


## Uso
Para usar la aplicación, ejecuta el siguiente comando:

```bash
npm run dev

```bash
 yarn dev

## Funcionalidades
- **Selección de ciudad**: El usuario puede seleccionar una ciudad a través de un formulario.
- **Clima del día**: La aplicación muestra el clima del día para la ciudad seleccionada.


### Dependencias:

La aplicación cuenta con librerías como: 

- Tailwind
- Zustand
- Vitest
- TypeScript
- React hook form

