import { useEffect, useState } from "react"
import {get,update} from './BooksAPI'
import {Bosition} from './Bosition'

export const Select = ({bosition,id,setupdate})=>{
    const [value,setvalue] = useState("")
        useEffect( () => {
            if (value !== "") {
             get(id).then( (data) => {
                
                     update(data, value).then(() => { setupdate(true) })
            })
        }
        }, [value])
    return (<>
                    <select name="select" defaultValue={bosition} onChange={(e)=>{setvalue(e.target.value)}} >
                    <option value={bosition} disabled >
                    {bosition}
                    </option>
                    <Bosition bosition={bosition}/>
                    </select>
    </>)
}
