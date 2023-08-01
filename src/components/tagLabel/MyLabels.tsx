import TagLabel from ".";
import { AlertCircle, Check, ComponentArrows } from "../icon/icon";


export default function MyLabels(){
    const arrLabels: any[] = [
        {
            type: 'primary',
            size: 'lg',
            text: 'Tag Label',
            disabled: false,
            canClose: true,
            logo:<ComponentArrows />
        },
        {
            type: 'info',
            size: 'md',
            text: 'Tag Label',
            disabled: false,
            canClose: true,
            logo: <AlertCircle />
        },
        {
            type: 'error',
            size: 'sm',
            text: 'Tag Label',
            disabled: false,
            logo: <Check />
        },
        {
            type: 'warning',
            size: 'md',
            text: 'Tag Label',
            disabled: false,
            canClose: true,
        },
        {
            type: 'default',
            size: 'md',
            text: 'Tag Label',
            disabled: false,
            canClose: true,
        },
      ]
    
    
    return(
        <>
        <div className="grid grid-cols-5 grid-rows-1 gap-2">
            {
                arrLabels.map(labs => <TagLabel key={labs.text} logo={labs.logo} canClose={labs.canClose} type={labs.type} size={labs.size} disabled={labs.disabled}>{labs.text} </TagLabel>)
            }
           
           
        </div>
    
        </>
    )
}