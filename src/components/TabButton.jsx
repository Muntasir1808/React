// export default function TabButton(props) {
//     return (
//       <li>
//         <button>{props.children}</button>
//       </li>
//     );
// }
//We can also use object destructuring here
// export default function TabButton({label}) {
//     return (
//       <li>
//         <button>{label}</button>
//       </li>
//     );
// }
export default function TabButton({children}) {
    return (
      <li>
        <button>{children}</button>
      </li>
    );
}