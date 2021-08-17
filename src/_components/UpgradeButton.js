export const UpgradeButton = (props)=>{
    return(
        <button style={{
            backgroundColor:"green",
            color:"white",
            border:"none",
            padding:"8px",
            borderRadius:"5px",
            float:"right"
        }}>{props.text}</button>
    )
}