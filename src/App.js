import Header from "./components/Header";
//import PostContent from "./components/PostContent";
import Box from "./components/Box";
import PostImage from "./components/PostImage";
import PostsList from "./components/PostsList";
import "./App.css"


function App() {
  
  return (
    
      <div className="container">

        <div className="row ">
          <div className="col mb-2 ">
         <Header
         title="Labas, aš mokausi"
         content="Man labai patinka ReactJS:)"
         img="summer.jpg"
         />
         
         </div>
         </div>

         <div className="row">
          <div className="col">
          <PostImage
          img="pyragas.jpg"/>
         </div>
         </div>

         <div className="row">
          <div className="col">
          <PostsList/>
         </div>
         </div>
        
         <div className="row text-center mb-3">
          <div className="col">
          <Box/>
         </div>
      </div>
 
    </div>
  );
}

export default App;

