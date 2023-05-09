import { FaMoon, FaSun } from 'react-icons/fa';
import { useState } from "react";

const ToggleButton = () => {
    const [darkMode, setDarkMode] = useState(false)
    function toggle() {
        if (localStorage.theme === 'dark' || !('theme' in localStorage)) {
            document.documentElement.classList.add('dark')
            localStorage.theme = 'light'
            setDarkMode(false)
          } else {
            document.documentElement.classList.remove('dark')
            localStorage.theme = 'dark'
            setDarkMode(true)
          }
    }
    return (
        <div className='fixed bottom-4 right-4 z-[99] flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800'>
          <div onClick={toggle}>
          {darkMode ? (
            <FaSun
              className='h-6 w-6 text-yellow-500'
              aria-hidden='true'
              focusable='false'
            />
          ) : (
            <FaMoon
              className='h-6 w-6 text-gray-800 dark:text-gray-200'
              aria-hidden='true'
              focusable='false'
            />
          )}
          </div>
        </div>
      );
}

export default ToggleButton