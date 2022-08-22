
import Play from './Play';
import Square from './Square';

import { useState  } from "react"

function BubbleSort(props) {

  const [state, setState] = useState({array: [],
   swaps: 0, comparisons: 0, i: 2, j: 0, done: false, timer: null}
     
  );


  function bubbleSortStep(state) {
    console.log("bubbleSortStep", state)
    let { array, swaps, comparisons, i, j, done, timer } = state;
    console.log(i);
    if (i <= 0) {
      array.forEach(element => {
        element.active = false;
      });
      console.log(array)
        return {
            array,
            swaps,
            i,
            j,
            done: true,
            timer
        };
    }


    if (array[j].number > array[j + 1].number) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swaps++;
    }

    array[j].active = false;

   
    if (++j >= i) {
        i--;
        j = 0;            
    }
    
    return {
        array,
        swaps,
        comparisons,
        i,
        j,
        done,
        timer
    };
}


const handleTimer = () => {
  console.log("i ran timer")
  setState(oldState => {
      // Perform one iteration of the sort and stop the
      // timer if we finished the algorithm.
      const newState = bubbleSortStep(oldState);
      console.log(newState)
      if (newState.done) {
          clearInterval(oldState.timer);
      }
      return newState;
  });
}

  const bubbleSortInit = (data) => {
    let array = [];
    for(var i = 0; i < data.length; i++) {
      array.push({ id: i, number: data[i], active: (i == 0 || i == 1) ? true: false})
    }

    return {
      array,
      swaps: 0,
      comparisons: 0,
      i: array.length - 1, 
      j: 0,
      done: false,
     
    }
  }

  

  const onStart = () => {
    //playdispatch({type: "start"})
    setState({
      ...bubbleSortInit(props.array),
      timer: setInterval(() => handleTimer(), 250)
   }) 
   
   
    // setState({
    //   ...bubbleSortInit(props.array),
    //   timer: setInterval(() => handleTimer(), 250)
    // })
  }

  return (
    <div >
       <Play onPlay={onStart} />
        <h2>Bubble Sort</h2>
        <select>
          <option>Bubble Sort</option>
        </select>
        <div className="ListContainer">
          {state.array.map((data) => <Square key={data.id} active={data.active} number={data.number} />)} 
        </div>
    </div>
  );
}

export default BubbleSort;
