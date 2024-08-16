// Code Keypad Component Here

const Keypad= ()=>{
    const handlechange=()=>{
     console.log('Entering password...')
    }
    return (
        <div>
            <input
            type="password"
            onChange={handlechange}
            />
        </div>
    )
}

export default Keypad;