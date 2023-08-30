import { useState } from 'react';

// Write your Color component here
const Color = ({color, setSelectedColor, selectedColor}) => {
  return (
  <div className={color}
        onClick={()=> setSelectedColor(color)}></div>
  )
}

// if {setSelectedColor} === {color} ? selectedBorder : {color}


const App = () => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color={selectedColor === 'red' ? 'selected red' : 'red'}
                setSelectedColor={setSelectedColor}/>
        <Color color={selectedColor === 'violet' ? 'selected violet' : 'violet'}
                setSelectedColor={setSelectedColor}/>
        <Color color={selectedColor === 'blue' ? 'selected blue' : 'blue'}
                setSelectedColor={setSelectedColor}/>
      </div>
    </div>
  );
};

export default App;

