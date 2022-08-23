import './Square.css';
import Arrow from './Arrow';

function Square(props) {
  return (
    <div className="Square">
        {props.active &&
        
            <Arrow color={props.color} />
        }
        {props.number}
    </div>
  );
}

export default Square;
