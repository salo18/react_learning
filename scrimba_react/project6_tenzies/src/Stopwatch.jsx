// https://w3collective.com/react-stopwatch/
import {useEffect} from 'react'

export default function Stopwatch(props) {
  useEffect(() => {
    let interval;
    if (props.running) {
      interval = setInterval(() => {
        props.setTime(prevTime => prevTime + 10);
      }, 10);
    } else if (!props.running) {-
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [props.running]);

  return (
    <div className='stopwatch'>
      <div className='numbers'>
        {/* <p className='timer'>
        Timer -- {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:{("0" + Math.floor((time / 1000) % 60)).slice(-2)}
        </p> */}
        <span>{("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}</span>
      </div>
    </div>
  );
}