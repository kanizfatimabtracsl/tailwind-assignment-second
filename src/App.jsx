import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";

function App() {
  return (
    <>
      {/* <div id="app">
        <Sidebar />
        <div className="wrapper">
          <Header />

          <div className="page-content">
            <main>main</main>
          </div>
          <footer className="footer">footer</footer>
        </div>
      </div> */}

      <div className="flex h-screen w-full">
      <div className="flex-[1] bg-[#f5f5f5] p-4">
        <Sidebar />
      </div>
      <div className="flex-[5]">

        
      </div>
      </div>
    </>
  );
}

export default App;
