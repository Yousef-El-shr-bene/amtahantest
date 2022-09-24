export const Bosition = ({bosition})=>{
    if (bosition === "currentlyReading") {
        return(<>    
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
        </>)
    }else if(bosition === "wantToRead"){
        return(<>    
                    <option value="currentlyReading">
                    Currently Reading 
                    </option>        
                    <option value="read">Read</option>
                    <option value="none">None</option>
</>)        
    }else if(bosition === "read"){
        return(<>    
                    <option value="currentlyReading">
                    Currently Reading 
                    </option>        
                    <option value="wantToRead">Want to Read</option>
                    <option value="none">None</option>
</>)        
    }else{
        return(<>    
                    <option value="currentlyReading">
                    Currently Reading 
                    </option>        
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
</>)        
    }
}