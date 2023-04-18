import {useRef} from 'react';

import SomComponent from "./SomeComponent"

const HookUseImperativeHandle = () => {
    const componentRef = useRef();


  return (
    <div>
      <h2>useImperativeHandle</h2>
      <SomComponent ref={componentRef} />
      <button onClick={() => componentRef.current.validate()}>Validate</button>
      <hr />
    </div>
  )
}

export default HookUseImperativeHandle