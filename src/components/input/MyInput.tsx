import React from "react";
import Input from ".";
import { AlertCircle } from "../icon/icon";

const MyInput: React.FC = () => {

    const arrText: any[] = [
        {
          placeholder: 'Input Placeholder',
          helperText: 'Input helper text',
          prefix: 'Rp.',
          suffix: <AlertCircle></AlertCircle>,
          type: 'active',
          label: 'Input label'
        },
        {
          placeholder: 'Input Placeholder',
          helperText: 'Input helper text',     
          suffix: '%',
          type: 'error',
          label: 'Input label',
          icon: <AlertCircle></AlertCircle>
        },
        {
          placeholder: 'Input Placeholder',
          helperText: 'Input helper text',
          prefix: '@',
          type: 'disabled',
          label: 'Input label'
        }
      ]

      return(
        <div>
        {arrText.map(texts => <Input key={texts.type} label={texts.label} helperText={texts.helperText} prefix={texts.prefix} suffix={texts.suffix} icon={texts.icon} type={texts.type}>{texts.placeholder}</Input>)}
        </div>
      )
}

export default MyInput;