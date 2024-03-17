import { AriaAttributes, ButtonHTMLAttributes, DetailedHTMLProps } from "react"

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, AriaAttributes {}

export default function Button(props: ButtonProps) {

    const {children, ...rest} = props

    return <button
        className="rounded-lg bg-slate-900 hover:bg-slate-600 flex items-center justify-center box-content"
        {...rest}
    >
        {children}
        
    </button>
}