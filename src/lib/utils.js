import {clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'

// class name function
export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
};