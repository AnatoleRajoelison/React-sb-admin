
import './App.css';
import NavbarBrand from './component/NavbarBrand';
import SidebarToggle from './component/SidebarToggle';
import NavbarSearch from './component/NavbarSearch';
import Navbar1 from './component/Navbar1';
import SidenavCore from './component/SidenavCore';
import SidenavFooter from './component/SidenavFooter';
import Tables from './component/Tables';
import DataTables from './component/DataTables';
import DatatablesExamples from './component/DatatablesExamples';
import Footer from './component/Footer';
import TryListItem from './component/TryListItem';
function App() {
  return (
    <body class="sb-nav-fixed">
        <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
          <NavbarBrand/>
          <SidebarToggle/>
          <NavbarSearch/>
          <Navbar1/>
        </nav>
        <div id="layoutSidenav">
             <div id="layoutSidenav_nav">
                 <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                     <div class="sb-sidenav-menu">
                     <SidenavCore/>
                     </div>
                     <SidenavFooter/>
                 </nav>
             </div>
        </div>
        <div class="Container">
        <div id="layoutSidenav_content ">
           <main>
           <div class="container-fluid px-4 ">
             <Tables/>
             </div>
             <div class="datatables card mb-4">
               <DataTables/>
             </div>
             <div class=" datatables card mb-4">
               <DatatablesExamples/>
                 <div class="card-body">
                    <div class="TableauStyle">
                        <TryListItem/>
                    </div>
                 </div>
             </div>
           </main>
           <footer class="py-4 bg-light mt-auto">
               <div class="container-fluid px-4">
                  <Footer/>
               </div>
           </footer>
         </div>
         </div>
        
    </body>
  );
}

export default App;
