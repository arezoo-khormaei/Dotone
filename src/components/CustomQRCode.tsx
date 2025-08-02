// import { QRCodeSVG } from "qrcode.react";

// const CornerBorderQR = ({
//   value = "",
//   size = 50,
//   cornerSize = 10,
//   cornerColor = "#000",
//   bgColor = "#fff",
//   qrColor = "#000",
// }) => {
//   const cornerStyle = {
//     position: "absolute",
//     width: cornerSize,
//     height: cornerSize,
//     backgroundColor: cornerColor,
//   };

//   return (
//     <div
//       style={{
//         position: "relative",
//         width: size,
//         height: size,
//         backgroundColor: bgColor,
//         padding: cornerSize / 2,
//         boxSizing: "border-box",
//       }}
//     >
//       {/* Top-left corner */}
//       <div
//         style={{
//           ...cornerStyle,
//           top: 0,
//           left: 0,
//           borderBottomRightRadius: cornerSize / 4,
//         }}
//       />

//       {/* Top-right corner */}
//       <div
//         style={{
//           ...cornerStyle,
//           top: 0,
//           right: 0,
//           borderBottomLeftRadius: cornerSize / 4,
//         }}
//       />

//       {/* Bottom-left corner */}
//       <div
//         style={{
//           ...cornerStyle,
//           bottom: 0,
//           left: 0,
//           borderTopRightRadius: cornerSize / 4,
//         }}
//       />

//       {/* Bottom-right corner */}
//       <div
//         style={{
//           ...cornerStyle,
//           bottom: 0,
//           right: 0,
//           borderTopLeftRadius: cornerSize / 4,
//         }}
//       />

//       <QRCodeSVG
//         value={value}
//         size={size - cornerSize}
//         level="H"
//         renderAs="svg"
//         fgColor={qrColor}
//         bgColor={bgColor}
//         style={{
//           width: "100%",
//           height: "100%",
//         }}
//       />
//     </div>
//   );
// };

// export default CornerBorderQR;
