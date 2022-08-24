
import './App.css';
import BubbleSort from './components/BubbleSort'


const Sort = (state, x, y) => {
  
  if(y < state.length){

    if(state[x].number > state[y].number){
              
      // If the condition is true then swap them
      var temp = state[x]
      state[x] = state[y]
      state[y] = temp
    
    }
    state[x].active = false;
    return state;
  }
}


// function reducer(state, action) {
//   switch (action.type) {
//     case "first":
//       state[0].active = true;
//       state[1].active = true;
//       state = Sort(state, 0, 1);
//       return state;
//     case "sec":

//         return state;
//     default:
//       throw new Error();
//   }
// }

// function playReducer(state, action) {
//   switch (action.type) {
//     case "start":
//       state = true;
//       return state;
//     case "stop":
//         state = false;
//         return state;
//     default:
//       throw new Error();
//   }
// }


function App() {

  // const [play, playdispatch] = useReducer(playReducer, false);
  // const [count, setCount] = useState(0);
  // const [state, setState] = useState({array: [
  //   {id: 0, number: 20, active: false}, 
  //   {id: 1, number: 10, active: false}, 
  //   {id: 2, number: 5, active: false}],
  //   swaps: 0, comparisons: 0, i: 2, j: 0, done: false, timer: null}
     
  // );
  
  
  //[10, 20, 5, 50, 30, 0]

 
  
  // const SetActive = (x, y) => {
  //   const newNumbers = [...state];
  //   newNumbers[x].active = true;
  //   newNumbers[y].active = true;
  //   //setState(newNumbers)
  // }

  // const setStop = () => {
  //   playdispatch({type: "stop"})
  // }
  
  // useEffect(() => {
  //   //Sort(count, count +1);
  //   // const repeat = setInterval(() => {
  //   //   if(count < state.length){
  //   //     setCount((count) => count + 1);
  //   //     NextSection();
  //   //   }else{
  //   //     console.log("stopp", count)
  //   //     clearInterval(repeat);
  //   //   }
  //   // }, 1000);
  //   if(play){
  //     for(var i = 0; i < state.length; i++) {
  //         if(i == 0){
  //           console.log('is zero')
  //           dispatch({type: "first"})
  //           dispatch({type: "sort"})
  //         }else{
  //           console.log('is greater')
  //           // setTimeout(() => {
  //           //   Sort(i, i+1);
  //           // }, 500 * (i * i));
  //         }
  //     }
  //     setStop();
  //   }


  //   //return () => clearInterval(repeat)
  // }, [play, state]);




  // On Start
  

  return (
    <div className="App">
      <header className="App-header">
       <BubbleSort array={[20, 10, 5, 2]} />
      </header>
    </div>
  );
}

export default App;
