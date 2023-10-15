# Google Maps Clone (Gatere Maps)
![GitHub deployments](https://img.shields.io/github/deployments/gateremark/google_maps_clone/production?style=flat&logo=vercel&logoColor=white&label=vercel)

This project is a clone of Google Maps, the popular web mapping service that offers satellite imagery, street maps, 360° panoramic views of streets, real-time traffic conditions, and route planning.

<div align="center">
<a href="https://g-maps-clone.vercel.app/">
   
![GatereMapsMenu](https://firebasestorage.googleapis.com/v0/b/hometopia-d224f.appspot.com/o/gmaps2.png?alt=media&token=40257b68-0d4e-41a6-a047-db9de8548ec0)

</a>
</div>

---

<div align="center">
<a href="https://g-maps-clone.vercel.app/">
   
![GatereMaps](https://firebasestorage.googleapis.com/v0/b/hometopia-d224f.appspot.com/o/gmaps.png?alt=media&token=4c44a95d-4944-4f0c-a8f5-f9be2b522864)

</a>
</div>

## Technologies Used

- [ReactJS](https://react.dev/) : A JavaScript library for building user interfaces.
- [Tailwind CSS](https://tailwindcss.com/) : A utility-first CSS framework for rapidly designing responsive web pages.
- [Maps API](https://developers.google.com/maps/documentation/javascript): Used for rendering the interactive maps.
- [GeoCoding API](https://developers.google.com/maps/documentation/geocoding): Integrated for location search functionality.
- [Vite](https://vitejs.dev/) : A fast and efficient build tool for modern web development.
- [Vercel](https://vercel.com/) : A cloud platform for static site deployment.

## Features

- Interactive map interface similar to Google Maps.
- Search for locations using the integrated GeoCoding API.
- Search for a location using coordinates.
- Street view: You can explore the streets of any location in the world.
- Utilizes React Icons for consistent and attractive UI elements.

## Getting Started

To get started with Gatere Maps locally, follow these steps:

1. Clone the repository:
   ```bash
   https://github.com/gateremark/g_maps_clone.git
   ```
2. Install the dependencies:
   ```bash
   cd g_maps_clone
   ```
   ```bash
   pnpm install
   ```
3. Register for a Maps API via Google Cloud

   - Create a `.env.local` / `.env` file in the root directory of the project.
   - Register for a Maps JavaScript API key via the Google Cloud platform and enable the GeoCoding API. You can follow the official documentation to obtain the API key.
   - Open the `.env.local` file and add the following line:

     ```env
     VITE_REACT_APP_API_KEY=YOUR_API_KEY
     ```

     Replace `YOUR_API_KEY` with the actual API key you obtained from Google Cloud. By setting up the .env.local file with the appropriate API key, the application will be able to access the geocoding API and provide accurate property locations.

4. Start the development server:

   ```javascript
   pnpm run dev
   ```

5. Open your browser and visit specified local host port to view the app eg. `http://localhost:5173`

## Deployment

Gatere Maps is deployed using Vercel. Any changes pushed to the main branch will trigger an automatic deployment.
You can visit the live version of HomeTopia at https://g-maps-clone.vercel.app/.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvement, please open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push to the branch.
5. Submit a pull request.
