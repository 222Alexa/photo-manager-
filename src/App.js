import "./App.css";
import "./main.css";
import "./components/Molecules/form/form.css";

import Gallery from "./components/Gallery";

const dataForm = {
  type: "photo-manager",
  text: "Click to select",
}


function App() {
  return (
    <div className="App">
      <header className="header">
        <h2 className="header-title">Менеджер фотографий</h2>
      </header>
      <main>
        <Gallery  {...dataForm}></Gallery>
      </main>
    </div>
  );
}

export default App;
/*фон - https://on-desktop.com/wps/Creative_Wallpaper_Lots_of_small_drops_016869_.jpg*/