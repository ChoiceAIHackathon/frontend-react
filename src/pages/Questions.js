// import React, { useState } from "react";
// import {
//   Container,
//   Grid,
//   Typography,
//   Card,
//   CardContent,
//   Box,
//   Slider,
//   TextField,
// } from "@mui/material";

// const SliderPage = () => {
//   const [sliderPosition, setSliderPosition] = useState(2); // Initial position set to the middle
//   const [leftInputValue, setLeftInputValue] = useState("");
//   const [rightInputValue, setRightInputValue] = useState("");

//   const handleSliderChange = (event, newValue) => {
//     setSliderPosition(newValue);
//   };

//   const handleLeftInputChange = (event) => {
//     setLeftInputValue(event.target.value);
//   };

//   const handleRightInputChange = (event) => {
//     setRightInputValue(event.target.value);
//   };

//   const leftBoxStyle = {
//     border:
//       sliderPosition === 1
//         ? "2px solid green"
//         : sliderPosition === 3
//         ? "2px solid red"
//         : "2px solid gray",
//     padding: "20px",
//   };

//   const rightBoxStyle = {
//     border:
//       sliderPosition === 3
//         ? "2px solid green"
//         : sliderPosition === 1
//         ? "2px solid red"
//         : "2px solid gray",
//     padding: "20px",
//   };

//   return (
//     <Container maxWidth="md" style={{ marginTop: "50px" }}>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <Card variant="outlined">
//             <CardContent>
//               <Typography variant="h5" gutterBottom>
//                 What's your preference?
//               </Typography>
//               <Grid container spacing={2}>
//                 <Grid item xs={12}>
//                   <Slider
//                     value={sliderPosition}
//                     onChange={handleSliderChange}
//                     aria-labelledby="continuous-slider"
//                     min={1}
//                     max={3}
//                     step={1}
//                     style={{ marginTop: "20px" }}
//                   />
//                 </Grid>

//                 <Grid item xs={6}>
//                   <Typography variant="h6" align="center">
//                     Left Box
//                   </Typography>
//                   <Box sx={leftBoxStyle}>{/* Content for Left Box */}</Box>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Typography variant="h6" align="center">
//                     Right Box
//                   </Typography>
//                   <Box sx={rightBoxStyle}>{/* Content for Right Box */}</Box>
//                 </Grid>
//               </Grid>
//               {sliderPosition === 1 && (
//                 <Grid item xs={12}>
//                   <TextField
//                     label="Left Box Input"
//                     variant="outlined"
//                     fullWidth
//                     value={leftInputValue}
//                     onChange={handleLeftInputChange}
//                     style={{ marginTop: "10px" }}
//                   />
//                 </Grid>
//               )}
//               {sliderPosition === 3 && (
//                 <Grid item xs={12}>
//                   <TextField
//                     label="Right Box Input"
//                     variant="outlined"
//                     fullWidth
//                     value={rightInputValue}
//                     onChange={handleRightInputChange}
//                     style={{ marginTop: "10px" }}
//                   />
//                 </Grid>
//               )}
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// function Questions() {
//   return <SliderPage />;
// }

// export default Questions;
// import { useState } from "react";
// import {
//   Container,
//   Grid,
//   Typography,
//   Card,
//   CardContent,
//   Button,
//   Box,
//   TextField,
// } from "@mui/material";

// const SliderPage = () => {
//   const [leftButtonActive, setLeftButtonActive] = useState(false);
//   const [rightButtonActive, setRightButtonActive] = useState(false);
//   const [leftBoxUrl, setLeftBoxUrl] = useState(
//     "https://via.placeholder.com/150"
//   );
//   const [rightBoxUrl, setRightBoxUrl] = useState(
//     "https://via.placeholder.com/150"
//   );
//   const [leftInputVisible, setLeftInputVisible] = useState(false);
//   const [rightInputVisible, setRightInputVisible] = useState(false);
//   const [leftInputValue, setLeftInputValue] = useState("");
//   const [rightInputValue, setRightInputValue] = useState("");

//   const handleLeftBoxClick = () => {
//     setLeftButtonActive(true);
//     setRightButtonActive(false);
//     setLeftInputVisible(true);
//     setRightInputVisible(false);
//     setLeftBoxUrl("https://via.placeholder.com/150");
//   };

//   const handleRightBoxClick = () => {
//     setRightButtonActive(true);
//     setLeftButtonActive(false);
//     setRightInputVisible(true);
//     setLeftInputVisible(false);
//     setRightBoxUrl("https://via.placeholder.com/150");
//   };

//   return (
//     <Container maxWidth="md" style={{ marginTop: "50px" }}>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <Card variant="outlined">
//             <CardContent>
//               <Typography variant="h5" gutterBottom>
//                 What's your preference?
//               </Typography>
//               <Grid container spacing={2}>
//                 <Grid item xs={6}>
//                   <Box
//                     component="img"
//                     src={leftBoxUrl}
//                     alt="Left Box"
//                     onClick={handleLeftBoxClick}
//                     style={{ width: "100%", cursor: "pointer" }}
//                   />
//                   {leftInputVisible && (
//                     <TextField
//                       label="Left Box Input"
//                       variant="outlined"
//                       fullWidth
//                       value={leftInputValue}
//                       onChange={(e) => setLeftInputValue(e.target.value)}
//                       style={{ marginTop: "10px" }}
//                     />
//                   )}
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Box
//                     component="img"
//                     src={rightBoxUrl}
//                     alt="Right Box"
//                     onClick={handleRightBoxClick}
//                     style={{ width: "100%", cursor: "pointer" }}
//                   />
//                   {rightInputVisible && (
//                     <TextField
//                       label="Right Box Input"
//                       variant="outlined"
//                       fullWidth
//                       value={rightInputValue}
//                       onChange={(e) => setRightInputValue(e.target.value)}
//                       style={{ marginTop: "10px" }}
//                     />
//                   )}
//                 </Grid>
//               </Grid>
//               <Grid container spacing={2} justifyContent="center">
//                 <Grid item xs={6}>
//                   <Button
//                     variant="contained"
//                     fullWidth
//                     style={{
//                       backgroundColor: leftButtonActive ? "#1976d2" : "#e0e0e0",
//                       color: leftButtonActive ? "#fff" : "rgba(0, 0, 0, 0.87)",
//                       "&:hover": {
//                         backgroundColor: leftButtonActive
//                           ? "#1565c0"
//                           : "#bdbdbd",
//                       },
//                     }}
//                     onClick={() => setLeftButtonActive(!leftButtonActive)}
//                   >
//                     Left Button
//                   </Button>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Button
//                     variant="contained"
//                     fullWidth
//                     style={{
//                       backgroundColor: rightButtonActive
//                         ? "#1976d2"
//                         : "#e0e0e0",
//                       color: rightButtonActive ? "#fff" : "rgba(0, 0, 0, 0.87)",
//                       "&:hover": {
//                         backgroundColor: rightButtonActive
//                           ? "#1565c0"
//                           : "#bdbdbd",
//                       },
//                     }}
//                     onClick={() => setRightButtonActive(!rightButtonActive)}
//                   >
//                     Right Button
//                   </Button>
//                 </Grid>
//               </Grid>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// function Questions() {
//   return <SliderPage />;
// }

// export default Questions;
// import { useState } from "react";
// import {
//   Container,
//   Grid,
//   Typography,
//   Card,
//   CardContent,
//   Button,
//   Box,
//   TextField,
// } from "@mui/material";

// const SliderPage = () => {
//   const [leftButtonActive, setLeftButtonActive] = useState(false);
//   const [rightButtonActive, setRightButtonActive] = useState(false);
//   const [leftBoxUrl, setLeftBoxUrl] = useState(
//     "https://via.placeholder.com/150"
//   );
//   const [rightBoxUrl, setRightBoxUrl] = useState(
//     "https://via.placeholder.com/150"
//   );
//   const [leftInputVisible, setLeftInputVisible] = useState(false);
//   const [rightInputVisible, setRightInputVisible] = useState(false);
//   const [leftInputValue, setLeftInputValue] = useState("");
//   const [rightInputValue, setRightInputValue] = useState("");

//   const handleLeftBoxClick = () => {
//     setLeftInputVisible(true);
//     setRightInputVisible(false);
//     setLeftBoxUrl("https://via.placeholder.com/150");
//   };

//   const handleRightBoxClick = () => {
//     setRightInputVisible(true);
//     setLeftInputVisible(false);
//     setRightBoxUrl("https://via.placeholder.com/150");
//   };

//   const handleLeftButtonClick = () => {
//     setLeftButtonActive(!leftButtonActive);
//     setRightButtonActive(false);
//   };

//   const handleRightButtonClick = () => {
//     setRightButtonActive(!rightButtonActive);
//     setLeftButtonActive(false);
//   };

//   return (
//     <Container maxWidth="md" style={{ marginTop: "50px" }}>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <Card variant="outlined">
//             <CardContent>
//               <Typography variant="h5" gutterBottom>
//                 What's your preference?
//               </Typography>
//               <Grid container spacing={2} justifyContent="center">
//                 <Grid item xs={6}>
//                   <Button
//                     variant="contained"
//                     fullWidth
//                     style={{
//                       backgroundColor: leftButtonActive ? "#1976d2" : "#e0e0e0",
//                       color: leftButtonActive ? "#fff" : "rgba(0, 0, 0, 0.87)",
//                       "&:hover": {
//                         backgroundColor: leftButtonActive
//                           ? "#1565c0"
//                           : "#bdbdbd",
//                       },
//                     }}
//                     onClick={handleLeftButtonClick}
//                   >
//                     Left Button
//                   </Button>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Button
//                     variant="contained"
//                     fullWidth
//                     style={{
//                       backgroundColor: rightButtonActive
//                         ? "#1976d2"
//                         : "#e0e0e0",
//                       color: rightButtonActive ? "#fff" : "rgba(0, 0, 0, 0.87)",
//                       "&:hover": {
//                         backgroundColor: rightButtonActive
//                           ? "#1565c0"
//                           : "#bdbdbd",
//                       },
//                     }}
//                     onClick={handleRightButtonClick}
//                   >
//                     Right Button
//                   </Button>
//                 </Grid>
//               </Grid>
//               <Grid container spacing={2}>
//                 <Grid item xs={6}>
//                   <Box
//                     component="img"
//                     src={leftBoxUrl}
//                     alt="Left Box"
//                     onClick={handleLeftBoxClick}
//                     style={{ width: "100%", cursor: "pointer" }}
//                   />
//                   {leftInputVisible && (
//                     <TextField
//                       label="Left Box Input"
//                       variant="outlined"
//                       fullWidth
//                       value={leftInputValue}
//                       onChange={(e) => setLeftInputValue(e.target.value)}
//                       style={{ marginTop: "10px" }}
//                     />
//                   )}
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Box
//                     component="img"
//                     src={rightBoxUrl}
//                     alt="Right Box"
//                     onClick={handleRightBoxClick}
//                     style={{ width: "100%", cursor: "pointer" }}
//                   />
//                   {rightInputVisible && (
//                     <TextField
//                       label="Right Box Input"
//                       variant="outlined"
//                       fullWidth
//                       value={rightInputValue}
//                       onChange={(e) => setRightInputValue(e.target.value)}
//                       style={{ marginTop: "10px" }}
//                     />
//                   )}
//                 </Grid>
//               </Grid>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// function Questions() {
//   return <SliderPage />;
// }

// export default Questions;
// import { useState, useReducer } from "react";
// import {
//   Container,
//   Grid,
//   Typography,
//   Card,
//   CardContent,
//   Button,
//   Box,
//   TextField,
// } from "@mui/material";

// // Define action types
// const ActionTypes = {
//   SET_LEFT_BUTTON_ACTIVE: "SET_LEFT_BUTTON_ACTIVE",
//   SET_RIGHT_BUTTON_ACTIVE: "SET_RIGHT_BUTTON_ACTIVE",
//   SET_LEFT_INPUT_VISIBLE: "SET_LEFT_INPUT_VISIBLE",
//   SET_RIGHT_INPUT_VISIBLE: "SET_RIGHT_INPUT_VISIBLE",
//   SET_LEFT_INPUT_VALUE: "SET_LEFT_INPUT_VALUE",
//   SET_RIGHT_INPUT_VALUE: "SET_RIGHT_INPUT_VALUE",
// };

// // Define reducer function
// const reducer = (state, action) => {
//   switch (action.type) {
//     case ActionTypes.SET_LEFT_BUTTON_ACTIVE:
//       return {
//         ...state,
//         leftButtonActive: action.payload,
//         rightButtonActive: !action.payload,
//         leftInputVisible: false,
//         rightInputVisible: false,
//         leftInputValue: "",
//         rightInputValue: "",
//       };
//     case ActionTypes.SET_RIGHT_BUTTON_ACTIVE:
//       return {
//         ...state,
//         rightButtonActive: action.payload,
//         leftButtonActive: !action.payload,
//         leftInputVisible: false,
//         rightInputVisible: false,
//         leftInputValue: "",
//         rightInputValue: "",
//       };
//     case ActionTypes.SET_LEFT_INPUT_VISIBLE:
//       return {
//         ...state,
//         leftInputVisible: action.payload,
//         rightInputVisible: !action.payload,
//       };
//     case ActionTypes.SET_RIGHT_INPUT_VISIBLE:
//       return {
//         ...state,
//         rightInputVisible: action.payload,
//         leftInputVisible: !action.payload,
//       };
//     case ActionTypes.SET_LEFT_INPUT_VALUE:
//       return { ...state, leftInputValue: action.payload };
//     case ActionTypes.SET_RIGHT_INPUT_VALUE:
//       return { ...state, rightInputValue: action.payload };
//     default:
//       return state;
//   }
// };

// const SliderPage = () => {
//   // Initial state
//   const initialState = {
//     leftButtonActive: false,
//     rightButtonActive: false,
//     leftInputVisible: false,
//     rightInputVisible: false,
//     leftInputValue: "",
//     rightInputValue: "",
//   };

//   // Use reducer hook
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const handleLeftBoxClick = () => {
//     dispatch({ type: ActionTypes.SET_LEFT_INPUT_VISIBLE, payload: true });
//     dispatch({ type: ActionTypes.SET_RIGHT_INPUT_VISIBLE, payload: false });
//   };

//   const handleRightBoxClick = () => {
//     dispatch({ type: ActionTypes.SET_RIGHT_INPUT_VISIBLE, payload: true });
//     dispatch({ type: ActionTypes.SET_LEFT_INPUT_VISIBLE, payload: false });
//   };

//   const handleLeftButtonClick = () => {
//     dispatch({ type: ActionTypes.SET_LEFT_BUTTON_ACTIVE, payload: true });
//   };

//   const handleRightButtonClick = () => {
//     dispatch({ type: ActionTypes.SET_RIGHT_BUTTON_ACTIVE, payload: true });
//   };

//   const handleLeftInputChange = (event) => {
//     dispatch({
//       type: ActionTypes.SET_LEFT_INPUT_VALUE,
//       payload: event.target.value,
//     });
//   };

//   const handleRightInputChange = (event) => {
//     dispatch({
//       type: ActionTypes.SET_RIGHT_INPUT_VALUE,
//       payload: event.target.value,
//     });
//   };

//   return (
//     <Container maxWidth="md" style={{ marginTop: "50px" }}>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <Card variant="outlined">
//             <CardContent>
//               <Typography variant="h5" gutterBottom>
//                 What's your preference?
//               </Typography>
//               <Grid container spacing={2} justifyContent="center">
//                 <Grid item xs={6}>
//                   <Button
//                     variant="contained"
//                     fullWidth
//                     style={{
//                       backgroundColor: state.leftButtonActive
//                         ? "#1976d2"
//                         : "#e0e0e0",
//                       color: state.leftButtonActive
//                         ? "#fff"
//                         : "rgba(0, 0, 0, 0.87)",
//                       "&:hover": {
//                         backgroundColor: state.leftButtonActive
//                           ? "#1565c0"
//                           : "#bdbdbd",
//                       },
//                     }}
//                     onClick={handleLeftButtonClick}
//                   >
//                     Left Button
//                   </Button>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Button
//                     variant="contained"
//                     fullWidth
//                     style={{
//                       backgroundColor: state.rightButtonActive
//                         ? "#1976d2"
//                         : "#e0e0e0",
//                       color: state.rightButtonActive
//                         ? "#fff"
//                         : "rgba(0, 0, 0, 0.87)",
//                       "&:hover": {
//                         backgroundColor: state.rightButtonActive
//                           ? "#1565c0"
//                           : "#bdbdbd",
//                       },
//                     }}
//                     onClick={handleRightButtonClick}
//                   >
//                     Right Button
//                   </Button>
//                 </Grid>
//               </Grid>
//               <Grid container spacing={2}>
//                 <Grid item xs={6}>
//                   <Box
//                     component="img"
//                     src="https://via.placeholder.com/150"
//                     alt="Left Box"
//                     onClick={handleLeftBoxClick}
//                     style={{
//                       width: "100%",
//                       cursor: "pointer",
//                       border:
//                         state.leftInputVisible && state.leftButtonActive
//                           ? "2px solid green"
//                           : state.leftInputVisible && !state.leftButtonActive
//                           ? "2px solid red"
//                           : "none",
//                     }}
//                   />
//                   {state.leftInputVisible && (
//                     <TextField
//                       label="Left Box Input"
//                       variant="outlined"
//                       fullWidth
//                       value={state.leftInputValue}
//                       onChange={handleLeftInputChange}
//                       style={{
//                         marginTop: "10px",
//                         backgroundColor: state.leftButtonActive ? "green" : "",
//                       }}
//                     />
//                   )}
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Box
//                     component="img"
//                     src="https://via.placeholder.com/150"
//                     alt="Right Box"
//                     onClick={handleRightBoxClick}
//                     style={{
//                       width: "100%",
//                       cursor: "pointer",
//                       border:
//                         state.rightInputVisible && state.rightButtonActive
//                           ? "2px solid green"
//                           : state.rightInputVisible && !state.rightButtonActive
//                           ? "2px solid red"
//                           : "none",
//                     }}
//                   />
//                   {state.rightInputVisible && (
//                     <TextField
//                       label="Right Box Input"
//                       variant="outlined"
//                       fullWidth
//                       value={state.rightInputValue}
//                       onChange={handleRightInputChange}
//                       style={{
//                         marginTop: "10px",
//                         backgroundColor: state.rightButtonActive ? "green" : "",
//                       }}
//                     />
//                   )}
//                 </Grid>
//               </Grid>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// function Questions() {
//   return <SliderPage />;
// }

// export default Questions;

// import { useState, useReducer } from "react";
// import {
//   Container,
//   Grid,
//   Typography,
//   Card,
//   CardContent,
//   Button,
//   Box,
//   TextField,
// } from "@mui/material";

// // Define action types
// const ActionTypes = {
//   SET_LEFT_BUTTON_ACTIVE: "SET_LEFT_BUTTON_ACTIVE",
//   SET_RIGHT_BUTTON_ACTIVE: "SET_RIGHT_BUTTON_ACTIVE",
//   SET_LEFT_INPUT_VISIBLE: "SET_LEFT_INPUT_VISIBLE",
//   SET_RIGHT_INPUT_VISIBLE: "SET_RIGHT_INPUT_VISIBLE",
//   SET_LEFT_INPUT_VALUE: "SET_LEFT_INPUT_VALUE",
//   SET_RIGHT_INPUT_VALUE: "SET_RIGHT_INPUT_VALUE",
//   SET_LEFT_INPUT_LABEL: "SET_LEFT_INPUT_LABEL",
//   SET_RIGHT_INPUT_LABEL: "SET_RIGHT_INPUT_LABEL",
// };

// // Define reducer function
// const reducer = (state, action) => {
//   switch (action.type) {
//     case ActionTypes.SET_LEFT_BUTTON_ACTIVE:
//       return {
//         ...state,
//         leftButtonActive: action.payload,
//         rightButtonActive: !action.payload,
//         leftInputVisible: false,
//         rightInputVisible: false,
//         leftInputValue: "",
//         rightInputValue: "",
//         leftInputLabel: action.payload ? "Pros" : "Cons",
//       };
//     case ActionTypes.SET_RIGHT_BUTTON_ACTIVE:
//       return {
//         ...state,
//         rightButtonActive: action.payload,
//         leftButtonActive: !action.payload,
//         leftInputVisible: false,
//         rightInputVisible: false,
//         leftInputValue: "",
//         rightInputValue: "",
//         rightInputLabel: action.payload ? "Pros" : "Cons",
//       };
//     case ActionTypes.SET_LEFT_INPUT_VISIBLE:
//       return {
//         ...state,
//         leftInputVisible: action.payload,
//         rightInputVisible: !action.payload,
//       };
//     case ActionTypes.SET_RIGHT_INPUT_VISIBLE:
//       return {
//         ...state,
//         rightInputVisible: action.payload,
//         leftInputVisible: !action.payload,
//       };
//     case ActionTypes.SET_LEFT_INPUT_VALUE:
//       return { ...state, leftInputValue: action.payload };
//     case ActionTypes.SET_RIGHT_INPUT_VALUE:
//       return { ...state, rightInputValue: action.payload };
//     case ActionTypes.SET_LEFT_INPUT_LABEL:
//       return { ...state, leftInputLabel: action.payload };
//     case ActionTypes.SET_RIGHT_INPUT_LABEL:
//       return { ...state, rightInputLabel: action.payload };
//     default:
//       return state;
//   }
// };

// const SliderPage = () => {
//   // Initial state
//   const initialState = {
//     leftButtonActive: false,
//     rightButtonActive: false,
//     leftInputVisible: false,
//     rightInputVisible: false,
//     leftInputValue: "",
//     rightInputValue: "",
//     leftInputLabel: "Pros",
//     rightInputLabel: "Pros",
//   };

//   // Use reducer hook
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const handleLeftBoxClick = () => {
//     dispatch({ type: ActionTypes.SET_LEFT_INPUT_VISIBLE, payload: true });
//     dispatch({ type: ActionTypes.SET_RIGHT_INPUT_VISIBLE, payload: false });
//     dispatch({
//       type: ActionTypes.SET_LEFT_INPUT_LABEL,
//       payload: state.leftButtonActive ? "Pros" : "Cons",
//     });
//   };

//   const handleRightBoxClick = () => {
//     dispatch({ type: ActionTypes.SET_RIGHT_INPUT_VISIBLE, payload: true });
//     dispatch({ type: ActionTypes.SET_LEFT_INPUT_VISIBLE, payload: false });
//     dispatch({
//       type: ActionTypes.SET_RIGHT_INPUT_LABEL,
//       payload: state.rightButtonActive ? "Pros" : "Cons",
//     });
//   };

//   const handleLeftButtonClick = () => {
//     dispatch({ type: ActionTypes.SET_LEFT_BUTTON_ACTIVE, payload: true });
//   };

//   const handleRightButtonClick = () => {
//     dispatch({ type: ActionTypes.SET_RIGHT_BUTTON_ACTIVE, payload: true });
//   };

//   const handleLeftInputChange = (event) => {
//     dispatch({
//       type: ActionTypes.SET_LEFT_INPUT_VALUE,
//       payload: event.target.value,
//     });
//   };

//   const handleRightInputChange = (event) => {
//     dispatch({
//       type: ActionTypes.SET_RIGHT_INPUT_VALUE,
//       payload: event.target.value,
//     });
//   };

//   return (
//     <Container maxWidth="md" style={{ marginTop: "50px" }}>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <Card variant="outlined">
//             <CardContent>
//               <Typography variant="h5" gutterBottom>
//                 What's your preference?
//               </Typography>
//               <Grid container spacing={2}>
//                 <Grid item xs={6}>
//                   <Box
//                     component="img"
//                     src="https://via.placeholder.com/150"
//                     alt="Left Box"
//                     onClick={handleLeftBoxClick}
//                     style={{
//                       width: "100%",
//                       cursor: "pointer",
//                       border:
//                         state.leftInputVisible && state.leftButtonActive
//                           ? "2px solid green"
//                           : state.leftInputVisible && !state.leftButtonActive
//                           ? "2px solid red"
//                           : "none",
//                     }}
//                   />
//                   {state.leftInputVisible && (
//                     <TextField
//                       label={state.leftInputLabel}
//                       variant="outlined"
//                       fullWidth
//                       value={state.leftInputValue}
//                       onChange={handleLeftInputChange}
//                       style={{
//                         marginTop: "10px",
//                         backgroundColor: state.leftButtonActive ? "green" : "",
//                       }}
//                     />
//                   )}
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Box
//                     component="img"
//                     src="https://via.placeholder.com/150"
//                     alt="Right Box"
//                     onClick={handleRightBoxClick}
//                     style={{
//                       width: "100%",
//                       cursor: "pointer",
//                       border:
//                         state.rightInputVisible && state.rightButtonActive
//                           ? "2px solid green"
//                           : state.rightInputVisible && !state.rightButtonActive
//                           ? "2px solid red"
//                           : "none",
//                     }}
//                   />
//                   {state.rightInputVisible && (
//                     <TextField
//                       label={state.rightInputLabel}
//                       variant="outlined"
//                       fullWidth
//                       value={state.rightInputValue}
//                       onChange={handleRightInputChange}
//                       style={{
//                         marginTop: "10px",
//                         backgroundColor: state.rightButtonActive ? "green" : "",
//                       }}
//                     />
//                   )}
//                 </Grid>
//               </Grid>
//               <Grid container spacing={2} justifyContent="center">
//                 <Grid item xs={6}>
//                   <Button
//                     variant="contained"
//                     fullWidth
//                     style={{
//                       backgroundColor: state.leftButtonActive
//                         ? "#1976d2"
//                         : "#e0e0e0",
//                       color: state.leftButtonActive
//                         ? "#fff"
//                         : "rgba(0, 0, 0, 0.87)",
//                       "&:hover": {
//                         backgroundColor: state.leftButtonActive
//                           ? "#1565c0"
//                           : "#bdbdbd",
//                       },
//                     }}
//                     onClick={handleLeftButtonClick}
//                   >
//                     Left Button
//                   </Button>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Button
//                     variant="contained"
//                     fullWidth
//                     style={{
//                       backgroundColor: state.rightButtonActive
//                         ? "#1976d2"
//                         : "#e0e0e0",
//                       color: state.rightButtonActive
//                         ? "#fff"
//                         : "rgba(0, 0, 0, 0.87)",
//                       "&:hover": {
//                         backgroundColor: state.rightButtonActive
//                           ? "#1565c0"
//                           : "#bdbdbd",
//                       },
//                     }}
//                     onClick={handleRightButtonClick}
//                   >
//                     Right Button
//                   </Button>
//                 </Grid>
//               </Grid>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// function Questions() {
//   return <SliderPage />;
// }

// export default Questions;
// gooooooood
// import { useState } from "react";
// import {
//   Container,
//   Grid,
//   Typography,
//   Card,
//   CardContent,
//   Button,
//   Box,
//   TextField,
// } from "@mui/material";

// const SliderPage = () => {
//   const [leftButtonActive, setLeftButtonActive] = useState(false);
//   const [rightButtonActive, setRightButtonActive] = useState(false);
//   const [leftInputVisible, setLeftInputVisible] = useState(false);
//   const [rightInputVisible, setRightInputVisible] = useState(false);
//   const [leftInputValue, setLeftInputValue] = useState("");
//   const [rightInputValue, setRightInputValue] = useState("");
//   const [leftInputLabel, setLeftInputLabel] = useState("Pros");
//   const [rightInputLabel, setRightInputLabel] = useState("Pros");

//   const handleLeftBoxClick = () => {
//     if (leftButtonActive) {
//       setLeftInputVisible(true);
//       setRightInputVisible(false);
//       setLeftInputLabel(leftButtonActive ? "Pros" : "Cons");
//     }
//   };

//   const handleRightBoxClick = () => {
//     if (rightButtonActive) {
//       setRightInputVisible(true);
//       setLeftInputVisible(false);
//       setRightInputLabel(rightButtonActive ? "Pros" : "Cons");
//     }
//   };

//   const handleLeftButtonClick = () => {
//     setLeftButtonActive(true);
//     setRightButtonActive(false);
//     setLeftInputVisible(false);
//     setRightInputVisible(false);
//     setLeftInputLabel("Pros");
//   };

//   const handleRightButtonClick = () => {
//     setRightButtonActive(true);
//     setLeftButtonActive(false);
//     setLeftInputVisible(false);
//     setRightInputVisible(false);
//     setRightInputLabel("Pros");
//   };

//   const handleLeftInputChange = (event) => {
//     setLeftInputValue(event.target.value);
//   };

//   const handleRightInputChange = (event) => {
//     setRightInputValue(event.target.value);
//   };

//   return (
//     <Container maxWidth="md" style={{ marginTop: "50px" }}>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <Card variant="outlined">
//             <CardContent>
//               <Typography variant="h5" gutterBottom>
//                 What's your preference?
//               </Typography>
//               <Grid container spacing={2}>
//                 <Grid item xs={6}>
//                   <Box
//                     component="img"
//                     src="https://via.placeholder.com/150"
//                     alt="Left Box"
//                     onClick={handleLeftBoxClick}
//                     style={{
//                       width: "100%",
//                       cursor: leftButtonActive ? "pointer" : "default",
//                       border:
//                         leftInputVisible && leftButtonActive
//                           ? "2px solid green"
//                           : leftInputVisible && !leftButtonActive
//                           ? "2px solid red"
//                           : "none",
//                     }}
//                   />
//                   {leftInputVisible && (
//                     <TextField
//                       label={leftInputLabel}
//                       variant="outlined"
//                       fullWidth
//                       value={leftInputValue}
//                       onChange={handleLeftInputChange}
//                       style={{
//                         marginTop: "10px",
//                         backgroundColor: leftButtonActive ? "green" : "",
//                       }}
//                     />
//                   )}
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Box
//                     component="img"
//                     src="https://via.placeholder.com/150"
//                     alt="Right Box"
//                     onClick={handleRightBoxClick}
//                     style={{
//                       width: "100%",
//                       cursor: rightButtonActive ? "pointer" : "default",
//                       border:
//                         rightInputVisible && rightButtonActive
//                           ? "2px solid green"
//                           : rightInputVisible && !rightButtonActive
//                           ? "2px solid red"
//                           : "none",
//                     }}
//                   />
//                   {rightInputVisible && (
//                     <TextField
//                       label={rightInputLabel}
//                       variant="outlined"
//                       fullWidth
//                       value={rightInputValue}
//                       onChange={handleRightInputChange}
//                       style={{
//                         marginTop: "10px",
//                         backgroundColor: rightButtonActive ? "green" : "",
//                       }}
//                     />
//                   )}
//                 </Grid>
//               </Grid>
//               <Grid container spacing={2} justifyContent="center">
//                 <Grid item xs={6}>
//                   <Button
//                     variant="contained"
//                     fullWidth
//                     style={{
//                       backgroundColor: leftButtonActive ? "#1976d2" : "#e0e0e0",
//                       color: leftButtonActive ? "#fff" : "rgba(0, 0, 0, 0.87)",
//                       "&:hover": {
//                         backgroundColor: leftButtonActive
//                           ? "#1565c0"
//                           : "#bdbdbd",
//                       },
//                     }}
//                     onClick={handleLeftButtonClick}
//                   >
//                     Left Button
//                   </Button>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Button
//                     variant="contained"
//                     fullWidth
//                     style={{
//                       backgroundColor: rightButtonActive
//                         ? "#1976d2"
//                         : "#e0e0e0",
//                       color: rightButtonActive ? "#fff" : "rgba(0, 0, 0, 0.87)",
//                       "&:hover": {
//                         backgroundColor: rightButtonActive
//                           ? "#1565c0"
//                           : "#bdbdbd",
//                       },
//                     }}
//                     onClick={handleRightButtonClick}
//                   >
//                     Right Button
//                   </Button>
//                 </Grid>
//               </Grid>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// function Questions() {
//   return <SliderPage />;
// }

// export default Questions;

// import { useState } from "react";
// import {
//   Container,
//   Grid,
//   Typography,
//   Card,
//   CardContent,
//   Button,
//   Box,
//   Link,
//   TextField,
// } from "@mui/material";

// const SliderPage = () => {
//   const [leftButtonActive, setLeftButtonActive] = useState(false);
//   const [rightButtonActive, setRightButtonActive] = useState(false);
//   const [leftInputVisible, setLeftInputVisible] = useState(false);
//   const [rightInputVisible, setRightInputVisible] = useState(false);
//   const [leftInputValue, setLeftInputValue] = useState("");
//   const [rightInputValue, setRightInputValue] = useState("");
//   const [leftInputLabel, setLeftInputLabel] = useState("Pros");
//   const [rightInputLabel, setRightInputLabel] = useState("Pros");

//   const handleLeftBoxClick = () => {
//     if (leftButtonActive || rightButtonActive) {
//       setLeftInputVisible(true);
//       setRightInputVisible(false);
//       setLeftInputLabel(
//         leftButtonActive
//           ? "Write some Pros about 1st option"
//           : "Write some Cons about 1st option"
//       );
//     }
//   };

//   const handleRightBoxClick = () => {
//     if (leftButtonActive || rightButtonActive) {
//       setRightInputVisible(true);
//       setLeftInputVisible(false);
//       setRightInputLabel(
//         rightButtonActive
//           ? "Write some Pros about 2nd option"
//           : "Write some Cons about 2nd option"
//       );
//     }
//   };

//   const handleLeftButtonClick = () => {
//     setLeftButtonActive(true);
//     setRightButtonActive(false);
//     setLeftInputVisible(false);
//     setRightInputVisible(false);
//     setLeftInputLabel("Pros");
//   };

//   const handleRightButtonClick = () => {
//     setRightButtonActive(true);
//     setLeftButtonActive(false);
//     setLeftInputVisible(false);
//     setRightInputVisible(false);
//     setRightInputLabel("Pros");
//   };

//   const handleLeftInputChange = (event) => {
//     setLeftInputValue(event.target.value);
//   };

//   const handleRightInputChange = (event) => {
//     setRightInputValue(event.target.value);
//   };

//   return (
//     <Container maxWidth="md" style={{ marginTop: "50px" }}>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <Card>
//             <Typography variant="body1" textAlign="center" gutterBottom>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam?
//             </Typography>

//             {/* <CardContent> */}
//             {/* <Typography variant="body1" textAlign="center" gutterBottom>
//               What's your preference?
//             </Typography> */}

//             {/* <Grid container spacing={2} justifyContent="center">

//             </Grid> */}

//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <Box
//                   component="img"
//                   src="https://images.unsplash.com/photo-1567793750860-cda8b71100fc?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                   alt="Left Box"
//                   onClick={handleLeftBoxClick}
//                   style={{
//                     width: "100%",
//                     cursor:
//                       leftButtonActive || rightButtonActive
//                         ? "pointer"
//                         : "default",
//                     border:
//                       leftInputVisible && leftButtonActive
//                         ? "3px solid green"
//                         : leftInputVisible && !leftButtonActive
//                         ? "3px solid red"
//                         : "none",
//                   }}
//                 />
//                 <Button
//                   variant="contained"
//                   fullWidth
//                   style={{
//                     backgroundColor: leftButtonActive ? "#1976d2" : "#e0e0e0",
//                     color: leftButtonActive ? "#fff" : "rgba(0, 0, 0, 0.87)",
//                     "&:hover": {
//                       backgroundColor: leftButtonActive ? "#1565c0" : "#bdbdbd",
//                     },
//                   }}
//                   onClick={handleLeftButtonClick}
//                 >
//                   Left Button
//                 </Button>
//               </Grid>
//               {/* <Grid item xs={12}>

//               </Grid> */}
//               <Grid item xs={12}>
//                 <Box
//                   component="img"
//                   src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                   alt="Right Box"
//                   onClick={handleRightBoxClick}
//                   style={{
//                     width: "100%",
//                     cursor:
//                       leftButtonActive || rightButtonActive
//                         ? "pointer"
//                         : "default",
//                     border:
//                       rightInputVisible && rightButtonActive
//                         ? "3px solid green"
//                         : rightInputVisible && !rightButtonActive
//                         ? "3px solid red"
//                         : "none",
//                   }}
//                 />
//                 <Grid item xs={12}>
//                   <Button
//                     variant="contained"
//                     fullWidth
//                     style={{
//                       backgroundColor: rightButtonActive
//                         ? "#1976d2"
//                         : "#e0e0e0",
//                       color: rightButtonActive ? "#fff" : "rgba(0, 0, 0, 0.87)",
//                       "&:hover": {
//                         backgroundColor: rightButtonActive
//                           ? "#1565c0"
//                           : "#bdbdbd",
//                       },
//                     }}
//                     onClick={handleRightButtonClick}
//                   >
//                     Right Button
//                   </Button>
//                 </Grid>
//               </Grid>

//               <Grid item xs={12}>
//                 {rightInputVisible && (
//                   <TextField
//                     label={rightInputLabel}
//                     variant="outlined"
//                     fullWidth
//                     value={rightInputValue}
//                     onChange={handleRightInputChange}
//                     style={{
//                       marginTop: "10px",
//                       border: rightButtonActive
//                         ? "2px solid green"
//                         : "2px solid red",
//                     }}
//                   />
//                 )}
//                 {leftInputVisible && (
//                   <TextField
//                     label={leftInputLabel}
//                     variant="outlined"
//                     fullWidth
//                     value={leftInputValue}
//                     onChange={handleLeftInputChange}
//                     style={{
//                       marginTop: "10px",
//                       border: leftButtonActive
//                         ? "2px solid green"
//                         : "2px solid red",
//                     }}
//                   />
//                 )}
//               </Grid>
//               <Grid item xs={12}>
//                 <Grid
//                   container
//                   justifyContent="center"
//                   style={{ marginTop: "20px" }}
//                 >
//                   <Button
//                     component={Link}
//                     to="/questions"
//                     variant="contained"
//                     color="primary"
//                     style={{ marginRight: "10px" }}
//                   >
//                     Done
//                   </Button>
//                   <Button
//                     component={Link}
//                     to="/profile/new-question"
//                     variant="contained"
//                     color="secondary"
//                   >
//                     AI Summary
//                   </Button>
//                 </Grid>
//               </Grid>
//             </Grid>
//             {/* </CardContent> */}
//           </Card>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// function Questions() {
//   return <SliderPage />;
// }

// export default Questions;
// import { useState } from "react";
// import {
//   Container,
//   Grid,
//   Typography,
//   Card,
//   Box,
//   TextField,
// } from "@mui/material";

// const SliderPage = () => {
//   const [leftButtonActive, setLeftButtonActive] = useState(false);
//   const [rightButtonActive, setRightButtonActive] = useState(false);
//   const [leftInputValue, setLeftInputValue] = useState("");
//   const [rightInputValue, setRightInputValue] = useState("");

//   const handleLeftBoxClick = () => {
//     setLeftButtonActive(true);
//     setRightButtonActive(false);
//   };

//   const handleRightBoxClick = () => {
//     setRightButtonActive(true);
//     setLeftButtonActive(false);
//   };

//   const handleLeftInputChange = (event) => {
//     setLeftInputValue(event.target.value);
//   };

//   const handleRightInputChange = (event) => {
//     setRightInputValue(event.target.value);
//   };

//   return (
//     <Container maxWidth="md" style={{ marginTop: "50px" }}>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <Card>
//             <Typography variant="body1" textAlign="center" gutterBottom>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam?
//             </Typography>

//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <Box
//                   component="img"
//                   src="https://images.unsplash.com/photo-1567793750860-cda8b71100fc?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                   alt="Left Box"
//                   onClick={handleLeftBoxClick}
//                   style={{
//                     width: "100%",
//                     cursor: "pointer",
//                     border: leftButtonActive ? "3px solid green" : "none",
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   label="Pros"
//                   variant="outlined"
//                   fullWidth
//                   value={leftInputValue}
//                   onChange={handleLeftInputChange}
//                   style={{
//                     marginTop: "10px",
//                     border: leftButtonActive
//                       ? "2px solid green"
//                       : "2px solid red",
//                   }}
//                 />
//                 {/* <TextField
//                   label="Pros"
//                   variant="outlined"
//                   fullWidth
//                   value={rightInputValue}
//                   onChange={handleRightInputChange}
//                   style={{
//                     marginTop: "10px",
//                     border: rightButtonActive
//                       ? "2px solid green"
//                       : "2px solid red",
//                   }}
//                 /> */}
//               </Grid>
//               <Grid item xs={12}>
//                 <Box
//                   component="img"
//                   src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                   alt="Right Box"
//                   onClick={handleRightBoxClick}
//                   style={{
//                     width: "100%",
//                     cursor: "pointer",
//                     border: rightButtonActive ? "3px solid green" : "none",
//                   }}
//                 />
//               </Grid>
//             </Grid>

//             <Grid item xs={12}>
//               {/* <TextField
//                 label="Pros"
//                 variant="outlined"
//                 fullWidth
//                 value={leftInputValue}
//                 onChange={handleLeftInputChange}
//                 style={{
//                   marginTop: "10px",
//                   border: leftButtonActive
//                     ? "2px solid green"
//                     : "2px solid red",
//                 }}
//               /> */}
//               <TextField
//                 label="Pros"
//                 variant="outlined"
//                 fullWidth
//                 value={rightInputValue}
//                 onChange={handleRightInputChange}
//                 style={{
//                   marginTop: "10px",
//                   border: rightButtonActive
//                     ? "2px solid green"
//                     : "2px solid red",
//                 }}
//               />
//             </Grid>
//           </Card>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// function Questions() {
//   return <SliderPage />;
// }

// export default Questions;

// import { useState } from "react";
// import {
//   Container,
//   Grid,
//   Typography,
//   Card,
//   Box,
//   TextField,
// } from "@mui/material";

// const SliderPage = () => {
//   const [leftButtonActive, setLeftButtonActive] = useState(false);
//   const [rightButtonActive, setRightButtonActive] = useState(false);
//   const [leftInputValue, setLeftInputValue] = useState("");
//   const [rightInputValue, setRightInputValue] = useState("");

//   const handleLeftBoxClick = () => {
//     setLeftButtonActive(true);
//     setRightButtonActive(false);
//   };

//   const handleRightBoxClick = () => {
//     setRightButtonActive(true);
//     setLeftButtonActive(false);
//   };

//   const handleLeftInputChange = (event) => {
//     setLeftInputValue(event.target.value);
//   };

//   const handleRightInputChange = (event) => {
//     setRightInputValue(event.target.value);
//   };

//   return (
//     <Container maxWidth="md" style={{ marginTop: "50px" }}>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <Card>
//             <Typography variant="body1" textAlign="center" gutterBottom>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam?
//             </Typography>

//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <Box
//                   component="img"
//                   src="https://images.unsplash.com/photo-1567793750860-cda8b71100fc?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                   alt="Left Box"
//                   onClick={handleLeftBoxClick}
//                   style={{
//                     width: "100%",
//                     cursor: "pointer",
//                     border: leftButtonActive
//                       ? "3px solid green"
//                       : "3px solid #ccc",
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   label="Pros"
//                   variant="outlined"
//                   fullWidth
//                   value={leftInputValue}
//                   onChange={handleLeftInputChange}
//                   style={{
//                     marginTop: "10px",
//                     border: leftButtonActive
//                       ? "2px solid green"
//                       : "2px solid #ccc",
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <Box
//                   component="img"
//                   src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                   alt="Right Box"
//                   onClick={handleRightBoxClick}
//                   style={{
//                     width: "100%",
//                     cursor: "pointer",
//                     border: rightButtonActive
//                       ? "3px solid green"
//                       : "3px solid #ccc",
//                   }}
//                 />
//               </Grid>
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 label="Pros"
//                 variant="outlined"
//                 fullWidth
//                 value={rightInputValue}
//                 onChange={handleRightInputChange}
//                 style={{
//                   marginTop: "10px",
//                   border: rightButtonActive
//                     ? "2px solid green"
//                     : "2px solid #ccc",
//                 }}
//               />
//             </Grid>
//           </Card>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// function Questions() {
//   return <SliderPage />;
// }

// export default Questions;
// import { useState } from "react";
// import {
//   Container,
//   Grid,
//   Typography,
//   Card,
//   Box,
//   TextField,
// } from "@mui/material";

// const SliderPage = () => {
//   const [leftButtonActive, setLeftButtonActive] = useState(false);
//   const [rightButtonActive, setRightButtonActive] = useState(false);
//   const [leftInputValue, setLeftInputValue] = useState("");
//   const [rightInputValue, setRightInputValue] = useState("");

//   const handleLeftBoxClick = () => {
//     setLeftButtonActive(true);
//     setRightButtonActive(false);
//   };

//   const handleRightBoxClick = () => {
//     setRightButtonActive(true);
//     setLeftButtonActive(false);
//   };

//   const handleLeftInputChange = (event) => {
//     setLeftInputValue(event.target.value);
//   };

//   const handleRightInputChange = (event) => {
//     setRightInputValue(event.target.value);
//   };

//   return (
//     <Container maxWidth="md" style={{ marginTop: "50px" }}>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <Card>
//             <Typography variant="body1" textAlign="center" gutterBottom>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam?
//             </Typography>

//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <Box
//                   component="img"
//                   src="https://images.unsplash.com/photo-1567793750860-cda8b71100fc?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                   alt="Left Box"
//                   onClick={handleLeftBoxClick}
//                   style={{
//                     width: "100%",
//                     cursor: "pointer",
//                     border: leftButtonActive
//                       ? "3px solid green"
//                       : "3px solid #ccc",
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   label="Pros"
//                   variant="outlined"
//                   fullWidth
//                   value={leftInputValue}
//                   onChange={handleLeftInputChange}
//                   style={{
//                     marginTop: "10px",
//                     border: leftButtonActive
//                       ? "2px solid green"
//                       : "2px solid red",
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <Box
//                   component="img"
//                   src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                   alt="Right Box"
//                   onClick={handleRightBoxClick}
//                   style={{
//                     width: "100%",
//                     cursor: "pointer",
//                     border: rightButtonActive
//                       ? "3px solid green"
//                       : "3px solid #ccc",
//                   }}
//                 />
//               </Grid>
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 label="Pros"
//                 variant="outlined"
//                 fullWidth
//                 value={rightInputValue}
//                 onChange={handleRightInputChange}
//                 style={{
//                   marginTop: "10px",
//                   border: rightButtonActive
//                     ? "2px solid green"
//                     : "2px solid red",
//                 }}
//               />
//             </Grid>
//           </Card>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// function Questions() {
//   return <SliderPage />;
// }

// export default Questions;
// import { useReducer } from "react";
// import {
//   Container,
//   Grid,
//   Typography,
//   Card,
//   Box,
//   TextField,
// } from "@mui/material";

// const initialState = {
//   leftButtonActive: false,
//   rightButtonActive: false,
//   leftInputValue: "",
//   rightInputValue: "",
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "SELECT_LEFT":
//       return { ...state, leftButtonActive: true, rightButtonActive: false };
//     case "SELECT_RIGHT":
//       return { ...state, rightButtonActive: true, leftButtonActive: false };
//     case "INPUT_CHANGE":
//       return { ...state, [action.field]: action.value };
//     default:
//       return state;
//   }
// }

// const SliderPage = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const handleLeftBoxClick = () => {
//     dispatch({ type: "SELECT_LEFT" });
//   };

//   const handleRightBoxClick = () => {
//     dispatch({ type: "SELECT_RIGHT" });
//   };

//   const handleInputChange = (event) => {
//     dispatch({
//       type: "INPUT_CHANGE",
//       field: event.target.name,
//       value: event.target.value,
//     });
//   };

//   return (
//     <Container maxWidth="md" style={{ marginTop: "50px" }}>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <Card>
//             <Typography variant="body1" textAlign="center" gutterBottom>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam?
//             </Typography>

//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <Box
//                   component="img"
//                   src="https://images.unsplash.com/photo-1567793750860-cda8b71100fc?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                   alt="Left Box"
//                   onClick={handleLeftBoxClick}
//                   style={{
//                     width: "100%",
//                     cursor: "pointer",
//                     border: state.leftButtonActive
//                       ? "3px solid green"
//                       : "3px solid #ccc",
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   label="Pros"
//                   variant="outlined"
//                   fullWidth
//                   name="leftInputValue"
//                   value={state.leftInputValue}
//                   onChange={handleInputChange}
//                   style={{
//                     marginTop: "10px",
//                     border: state.leftButtonActive
//                       ? "2px solid green"
//                       : "2px solid gray",
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <Box
//                   component="img"
//                   src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                   alt="Right Box"
//                   onClick={handleRightBoxClick}
//                   style={{
//                     width: "100%",
//                     cursor: "pointer",
//                     border: state.rightButtonActive
//                       ? "3px solid green"
//                       : "3px solid #ccc",
//                   }}
//                 />
//               </Grid>
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 label="Pros"
//                 variant="outlined"
//                 fullWidth
//                 name="rightInputValue"
//                 value={state.rightInputValue}
//                 onChange={handleInputChange}
//                 style={{
//                   marginTop: "10px",
//                   border: state.rightButtonActive
//                     ? "2px solid green"
//                     : "2px solid gray",
//                 }}
//               />
//             </Grid>
//           </Card>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// function Questions() {
//   return <SliderPage />;
// }

// export default Questions;

// import { useReducer } from "react";
// import {
//   Container,
//   Grid,
//   Typography,
//   Card,
//   Box,
//   TextField,
// } from "@mui/material";

// const initialState = {
//   leftButtonActive: false,
//   rightButtonActive: false,
//   leftInputBorderColor: "gray",
//   rightInputBorderColor: "gray",
//   leftInputValue: "",
//   rightInputValue: "",
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "SELECT_LEFT":
//       return {
//         ...state,
//         leftButtonActive: true,
//         rightButtonActive: false,
//         leftInputBorderColor: "green",
//         rightInputBorderColor: "red",
//       };
//     case "SELECT_RIGHT":
//       return {
//         ...state,
//         rightButtonActive: true,
//         leftButtonActive: false,
//         rightInputBorderColor: "green",
//         leftInputBorderColor: "red",
//       };
//     case "INPUT_CHANGE":
//       return { ...state, [action.field]: action.value };
//     default:
//       return state;
//   }
// }

// const SliderPage = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const handleLeftBoxClick = () => {
//     dispatch({ type: "SELECT_LEFT" });
//   };

//   const handleRightBoxClick = () => {
//     dispatch({ type: "SELECT_RIGHT" });
//   };

//   const handleInputChange = (event) => {
//     dispatch({
//       type: "INPUT_CHANGE",
//       field: event.target.name,
//       value: event.target.value,
//     });
//   };

//   return (
//     <Container maxWidth="md" style={{ marginTop: "50px" }}>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <Card>
//             <Typography variant="body1" textAlign="center" gutterBottom>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam?
//             </Typography>

//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <Box
//                   component="img"
//                   src="https://images.unsplash.com/photo-1567793750860-cda8b71100fc?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                   alt="Left Box"
//                   onClick={handleLeftBoxClick}
//                   style={{
//                     width: "100%",
//                     cursor: "pointer",
//                     border: state.leftButtonActive
//                       ? "3px solid green"
//                       : "3px solid #ccc",
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   label="Pros"
//                   variant="outlined"
//                   fullWidth
//                   name="leftInputValue"
//                   value={state.leftInputValue}
//                   onChange={handleInputChange}
//                   style={{
//                     marginTop: "10px",
//                     border: `2px solid ${state.leftInputBorderColor}`,
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <Box
//                   component="img"
//                   src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                   alt="Right Box"
//                   onClick={handleRightBoxClick}
//                   style={{
//                     width: "100%",
//                     cursor: "pointer",
//                     border: state.rightButtonActive
//                       ? "3px solid green"
//                       : "3px solid #ccc",
//                   }}
//                 />
//               </Grid>
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 label="Pros"
//                 variant="outlined"
//                 fullWidth
//                 name="rightInputValue"
//                 value={state.rightInputValue}
//                 onChange={handleInputChange}
//                 style={{
//                   marginTop: "10px",
//                   border: `2px solid ${state.rightInputBorderColor}`,
//                 }}
//               />
//             </Grid>
//           </Card>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// function Questions() {
//   return <SliderPage />;
// }

// export default Questions;

// import { useState, useReducer } from "react";
// import {
//   Container,
//   Grid,
//   Typography,
//   Card,
//   Box,
//   TextField,
// } from "@mui/material";

// const initialState = {
//   leftButtonActive: false,
//   rightButtonActive: false,
//   leftInputBorderColor: "gray",
//   rightInputBorderColor: "gray",
//   leftInputValue: "",
//   rightInputValue: "",
//   leftImageColor: "grayscale(100%)",
//   rightImageColor: "grayscale(100%)",
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "SELECT_LEFT":
//       return {
//         ...state,
//         leftButtonActive: true,
//         rightButtonActive: false,
//         leftInputBorderColor: "green",
//         rightInputBorderColor: "red",
//         leftImageColor: "initial",
//         rightImageColor: "grayscale(100%)",
//       };
//     case "SELECT_RIGHT":
//       return {
//         ...state,
//         rightButtonActive: true,
//         leftButtonActive: false,
//         rightInputBorderColor: "green",
//         leftInputBorderColor: "red",
//         rightImageColor: "initial",
//         leftImageColor: "grayscale(100%)",
//       };
//     case "INPUT_CHANGE":
//       return { ...state, [action.field]: action.value };
//     default:
//       return state;
//   }
// }

// const SliderPage = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const handleLeftBoxClick = () => {
//     dispatch({ type: "SELECT_LEFT" });
//   };

//   const handleRightBoxClick = () => {
//     dispatch({ type: "SELECT_RIGHT" });
//   };

//   const handleInputChange = (event) => {
//     dispatch({
//       type: "INPUT_CHANGE",
//       field: event.target.name,
//       value: event.target.value,
//     });
//   };

//   return (
//     <Container maxWidth="md" style={{ marginTop: "50px" }}>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <Card>
//             <Typography variant="body1" textAlign="center" gutterBottom>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam?
//             </Typography>

//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <Box
//                   component="img"
//                   src="https://images.unsplash.com/photo-1567793750860-cda8b71100fc?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                   alt="Left Box"
//                   onClick={handleLeftBoxClick}
//                   style={{
//                     width: "100%",
//                     cursor: "pointer",
//                     border: state.leftButtonActive
//                       ? "3px solid green"
//                       : "3px solid #ccc",
//                     filter: state.leftImageColor,
//                   }}
//                 />
//                 <Typography variant="body1" textAlign="center">
//                   Option1
//                 </Typography>
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   label="Pros"
//                   variant="outlined"
//                   fullWidth
//                   name="leftInputValue"
//                   value={state.leftInputValue}
//                   onChange={handleInputChange}
//                   style={{
//                     border: `2px solid ${state.leftInputBorderColor}`,
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <Box
//                   component="img"
//                   src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                   alt="Right Box"
//                   onClick={handleRightBoxClick}
//                   style={{
//                     width: "100%",
//                     cursor: "pointer",
//                     border: state.rightButtonActive
//                       ? "3px solid green"
//                       : "3px solid #ccc",
//                     filter: state.rightImageColor,
//                   }}
//                 />
//                 <Typography variant="body1" textAlign="center">
//                   Option2
//                 </Typography>
//               </Grid>
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 label="Pros"
//                 variant="outlined"
//                 fullWidth
//                 name="rightInputValue"
//                 value={state.rightInputValue}
//                 onChange={handleInputChange}
//                 style={{
//                   border: `2px solid ${state.rightInputBorderColor}`,
//                 }}
//               />
//             </Grid>
//           </Card>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// function Questions() {
//   return <SliderPage />;
// }

// export default Questions;
// import { useState, useReducer } from "react";
// import {
//   Container,
//   Grid,
//   Typography,
//   Card,
//   Box,
//   TextField,
// } from "@mui/material";

// const initialState = {
//   leftButtonActive: false,
//   rightButtonActive: false,
//   leftInputBorderColor: "gray",
//   rightInputBorderColor: "gray",
//   leftInputValue: "",
//   rightInputValue: "",
//   leftImageColor: "grayscale(100%)",
//   rightImageColor: "grayscale(100%)",
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "SELECT_LEFT":
//       return {
//         ...state,
//         leftButtonActive: true,
//         rightButtonActive: false,
//         leftInputBorderColor: "green",
//         rightInputBorderColor: "red",
//         leftImageColor: "initial",
//         rightImageColor: "grayscale(100%)",
//       };
//     case "SELECT_RIGHT":
//       return {
//         ...state,
//         rightButtonActive: true,
//         leftButtonActive: false,
//         rightInputBorderColor: "green",
//         leftInputBorderColor: "red",
//         rightImageColor: "initial",
//         leftImageColor: "grayscale(100%)",
//       };
//     case "INPUT_CHANGE":
//       return { ...state, [action.field]: action.value };
//     default:
//       return state;
//   }
// }

// const SliderPage = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const handleLeftBoxClick = () => {
//     dispatch({ type: "SELECT_LEFT" });
//   };

//   const handleRightBoxClick = () => {
//     dispatch({ type: "SELECT_RIGHT" });
//   };

//   const handleInputChange = (event) => {
//     dispatch({
//       type: "INPUT_CHANGE",
//       field: event.target.name,
//       value: event.target.value,
//     });
//   };

//   return (
//     <Container maxWidth="md" style={{ marginTop: "50px" }}>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <Card>
//             <Typography variant="body1" textAlign="center" gutterBottom>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam?
//             </Typography>

//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <Box
//                   component="img"
//                   src="https://images.unsplash.com/photo-1567793750860-cda8b71100fc?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                   alt="Left Box"
//                   onClick={handleLeftBoxClick}
//                   style={{
//                     width: "100%",
//                     cursor: "pointer",
//                     border: state.leftButtonActive
//                       ? "3px solid green"
//                       : "3px solid #ccc",
//                     filter: state.leftImageColor,
//                   }}
//                 />
//                 <Typography
//                   variant="body1"
//                   textAlign="center"
//                   style={{
//                     backgroundColor: "black",
//                     color: "white",
//                     padding: "8px 0",
//                   }}
//                 >
//                   Option1
//                 </Typography>
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   label="Pros"
//                   variant="outlined"
//                   fullWidth
//                   name="leftInputValue"
//                   value={state.leftInputValue}
//                   onChange={handleInputChange}
//                   style={{
//                     border: `2px solid ${state.leftInputBorderColor}`,
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <Box
//                   component="img"
//                   src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                   alt="Right Box"
//                   onClick={handleRightBoxClick}
//                   style={{
//                     width: "100%",
//                     cursor: "pointer",
//                     border: state.rightButtonActive
//                       ? "3px solid green"
//                       : "3px solid #ccc",
//                     filter: state.rightImageColor,
//                   }}
//                 />
//                 <Typography
//                   variant="body1"
//                   textAlign="center"
//                   style={{
//                     backgroundColor: "black",
//                     color: "white",
//                     padding: "8px 0",
//                   }}
//                 >
//                   Option2
//                 </Typography>
//               </Grid>
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 label="Pros"
//                 variant="outlined"
//                 fullWidth
//                 name="rightInputValue"
//                 value={state.rightInputValue}
//                 onChange={handleInputChange}
//                 style={{
//                   border: `2px solid ${state.rightInputBorderColor}`,
//                 }}
//               />
//             </Grid>
//           </Card>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// function Questions() {
//   return <SliderPage />;
// }

// export default Questions;
import { useState, useReducer } from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  Box,
  TextField,
} from "@mui/material";

const initialState = {
  leftButtonActive: false,
  rightButtonActive: false,
  leftInputBorderColor: "gray",
  rightInputBorderColor: "gray",
  leftInputValue: "",
  rightInputValue: "",
  leftInputLabel: "",
  rightInputLabel: "",
  leftImageColor: "grayscale(100%)",
  rightImageColor: "grayscale(100%)",
};

function reducer(state, action) {
  switch (action.type) {
    case "SELECT_LEFT":
      return {
        ...state,
        leftButtonActive: true,
        rightButtonActive: false,
        leftInputBorderColor: "green",
        rightInputBorderColor: "red",
        leftImageColor: "initial",
        rightImageColor: "grayscale(100%)",
        leftInputLabel: "Add pros for box one",
        rightInputLabel: "Add cons for box two",
      };
    case "SELECT_RIGHT":
      return {
        ...state,
        rightButtonActive: true,
        leftButtonActive: false,
        rightInputBorderColor: "green",
        leftInputBorderColor: "red",
        rightImageColor: "initial",
        leftImageColor: "grayscale(100%)",
        leftInputLabel: "Add cons for box one",
        rightInputLabel: "Add pros for box two",
      };
    case "INPUT_CHANGE":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
}

const SliderPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleLeftBoxClick = () => {
    dispatch({ type: "SELECT_LEFT" });
  };

  const handleRightBoxClick = () => {
    dispatch({ type: "SELECT_RIGHT" });
  };

  const handleInputChange = (event) => {
    dispatch({
      type: "INPUT_CHANGE",
      field: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "50px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <Typography variant="body1" textAlign="center" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam?
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1567793750860-cda8b71100fc?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Left Box"
                  onClick={handleLeftBoxClick}
                  style={{
                    width: "100%",
                    cursor: "pointer",
                    border: state.leftButtonActive
                      ? "3px solid green"
                      : "3px solid #ccc",
                    filter: state.leftImageColor,
                  }}
                />
                <Typography variant="body1" textAlign="center">
                  Option1
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label={state.leftInputLabel}
                  variant="outlined"
                  fullWidth
                  name="leftInputValue"
                  value={state.leftInputValue}
                  onChange={handleInputChange}
                  style={{
                    border: `2px solid ${state.leftInputBorderColor}`,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Right Box"
                  onClick={handleRightBoxClick}
                  style={{
                    width: "100%",
                    cursor: "pointer",
                    border: state.rightButtonActive
                      ? "3px solid green"
                      : "3px solid #ccc",
                    filter: state.rightImageColor,
                  }}
                />
                <Typography variant="body1" textAlign="center">
                  Option2
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <TextField
                label={state.rightInputLabel}
                variant="outlined"
                fullWidth
                name="rightInputValue"
                value={state.rightInputValue}
                onChange={handleInputChange}
                style={{
                  border: `2px solid ${state.rightInputBorderColor}`,
                }}
              />
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

function Questions() {
  return <SliderPage />;
}

export default Questions;
