import React,{useState} from "react";
export function Textarea(props)
{

    const handleOnChange = (event) =>
    {
        setText(event.target.value);
    }

    const [text,setText]=useState('');


    return(
        
        <div>
            
            <div className="box" class="px-5 d-flex align-items-center justify-content-center">
                    <textarea className="text-area" value={text}  onChange={handleOnChange} placeholder='enter text here' id="textarea" rows={10} class="p-2 w-75 border-2 border-primary rounded"></textarea>

            </div>
            <div className="para" class="p-5 d-flex align-items-center justify-content-center">
                  <p class="fs-2"> Words :  {text.split(" ").length-1}</p>

            </div>
    </div>
        
    )
}