// export const CardWrapper = ({ innerComponent }) => {
//     return (
//         <div style={{ border: '2px solid black' }}>
//             {innerComponent}
//         </div>
//     )
// }

export const CardWrapper = ({ children }) => {
    return (
        <div style={{border:"2px solid black"}}>
            {children}
        </div>
    )
}