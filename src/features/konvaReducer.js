import { createSlice } from '@reduxjs/toolkit'

const KonvaData = createSlice( {
    name: 'konvaInfo',
    initialState: {
        circleX: 200,
        circleY: 100,
        circleRadius: 10,
        circleFill: "black",
        points: {
            x1: 500,
            y1: 500,
            x2: 1200,
            y2: 500
        },
        movableNodesPoints: {
            x: 700,
            y: 500
        },
        lineStroke: "black",
        xRatio: .5,
        movableNodesPositionX: 0,
        heeee: 0
        // movableNodesPositionY: 0,
    },
    reducers: {
        setIncreasingNodeOneXYPosition: ( state, action ) => {
            state.points.x1 = state.points.x1 + action.payload
            state.points.y1 = state.points.y1 + action.payload
        },
        setIncreasingNodeTwoXYPosition: ( state, action ) => {
            console.log( 'action.payload', action.payload )
            state.points.x2 = state.points.x2 + action.payload
            state.points.y2 = state.points.y2 + action.payload

        },
        setDecreasingNodeOneXYPosition: ( state, action ) => {
            state.points.x1 = state.points.x1 - action.payload
            state.points.y1 = state.points.y1 - action.payload
        },
        setDecreasingNodeTwoXYPosition: ( state, action ) => {
            state.points.x2 = state.points.x2 - action.payload
            state.points.y2 = state.points.y2 - action.payload
        },
        setMovableNodesX: ( state, action ) => {
            state.xRatio = Math.abs(
                ( ( state.movableNodesPoints.x + action.payload ) - state.points.x1 )
                /
                ( state.points.x2 - ( state.movableNodesPoints.x + action.payload ) )
            )
        },
    },
} );



export const { setIncreasingNodeOneXYPosition, setIncreasingNodeTwoXYPosition, setDecreasingNodeOneXYPosition, setDecreasingNodeTwoXYPosition, setMovableNodesX, setMovableNodesY } = KonvaData.actions;
export const getCircleX = ( state ) => state.konvaInfo.circleX;
export const getCircleY = ( state ) => state.konvaInfo.circleY;
export const getCircleRadius = ( state ) => state.konvaInfo.circleRadius;
export const getCircleFill = ( state ) => state.konvaInfo.circleFill;
export const getLineStroke = ( state ) => state.konvaInfo.lineStroke;
export const getLinePoints = ( state ) => state.konvaInfo.points;
export const getMovableNodesPoints = ( state ) => state.konvaInfo.movableNodesPoints
export const getMovableNodesPointsX = ( state ) => state.konvaInfo.movableNodesPositionX
export const getMovableNodesPointsY = ( state ) => state.konvaInfo.movableNodesPositionY

export default KonvaData.reducer
