import {useContext} from 'react'

import {ThemeUpdateContext} from '../context/ThemeContext';

const useThemeUpdate = ()=>{
    return useContext(ThemeUpdateContext)
}

export default useThemeUpdate