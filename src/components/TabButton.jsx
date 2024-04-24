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
export default function TabButton({children, isSelected, ...props}) {
    console.log('TABBUTTON COMPONENT EXECUTING');
    return (
      <li>
        {/* the value of any event prop is a function */}
        <button className={isSelected ? 'active' : undefined} {...props}>{children}</button>
      </li>
    );
}