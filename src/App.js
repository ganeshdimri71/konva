import React, { useState } from 'react';
import { Stage, Layer, Text, Rect, Group, Circle, Line } from "react-konva";
import { useSelector } from 'react-redux';

function App () {
  const [ circleArray, setCircleArray ] = useState( [] )
  const handleStageClick = ( e ) => {
    let { x, y } = e.target.getStage().getPointerPosition();
    setCircleArray( [ ...circleArray, [ x, y ] ] )
    console.log( 'circleArray', circleArray )
    console.log( x, y )
  }
  return (
    <>
      <Stage width={ window.innerWidth }
        height={ window.innerHeight }
        style={ { backgroundColor: '#e3e1e1' } }
        onClick={ handleStageClick }
      >
        <Layer>
          <Group
            draggable
          >
            <Rect
              fill={ 'yellow' }
              x={ 500 }
              y={ 500 }
              width={ 300 }
              height={ 300 }
              shadowBlur={ 10 }
            />
            { circleArray.map( ( item, index ) => (
              <Circle
                key={ index }
                x={ item[ 0 ] }
                y={ item[ 1 ] }
                fill={ "red" }
                radius={ 20 }
              />
            ) ) }

          </Group>
        </Layer>
      </Stage>
    </>

  )

}


export default ( App );

