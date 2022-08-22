import './Square.css';
import Arrow from './Arrow';

function Square(props) {
  return (
    <div className="Square">
        {props.active &&
        
            <Arrow />
        }
        {props.number}
    </div>
  );
}

export default Square;
