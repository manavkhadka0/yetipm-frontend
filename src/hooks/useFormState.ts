import { useState } from "react"
import type { ApplicationFormData } from "@/@types/apply"

export function useFormState(initialState: ApplicationFormData) {
    const [state, setState] = useState<ApplicationFormData>(initialState)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setState((prevState: ApplicationFormData) => ({
            ...prevState,
            [name]: value,
        }))
    }

    return [state, handleChange, setState] as const
}
