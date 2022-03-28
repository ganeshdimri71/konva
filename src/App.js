import React, { useState } from 'react';
import { Stage, Layer, Text, Rect, Group, Circle, Line } from "react-konva";
import { useSelector } from 'react-redux';

function App () {
  const [ circleArray, setCircleArray ] = useState( [] )
  const stageRef = React.useRef();
  const layerRef = React.useRef();
  const groupRef = React.useRef();
  const rectRef = React.useRef();
  const circleRef = React.useRef();
  const handleStageClick = ( e ) => {
    let mousePos = e.target.getStage().getPointerPosition();
    const a = groupRef.current.getAbsoluteTransform().copy()
    a.invert();
    let { x, y } = a.point( mousePos )
    setCircleArray( [ ...circleArray, [ x, y ] ] )
  }


  return (
    <>
      <Stage width={ window.innerWidth }
        height={ window.innerHeight }
        style={ { backgroundColor: '#e3e1e1' } }
        onClick={ handleStageClick }
        ref={ stageRef }
      >
        <Layer
          ref={ layerRef }
        >
          <Group
            draggable
            ref={ groupRef }
            x={ 0 }
            y={ 0 }
          >
            <Rect
              fill={ 'yellow' }
              x={ 500 }
              y={ 500 }
              width={ 300 }
              height={ 300 }
              shadowBlur={ 10 }
              ref={ rectRef }
            />
            { circleArray.map( ( item, index ) => (
              <Circle
                key={ index }
                x={ item[ 0 ]

                }
                y={ item[ 1 ]

                }
                fill={ "red" }
                radius={ 20 }
                ref={ circleRef }
                onClick={ ( e ) => {
                  e.cancelBubble = true;
                } }
              />
            ) ) }

          </Group>
        </Layer>
      </Stage>
      <button
        // onClick={ () => getTransform() }
        style={ { position: "absolute", top: "0", left: '50%' } }
      >Transform</button>
    </>
  )
}
export default ( App );

